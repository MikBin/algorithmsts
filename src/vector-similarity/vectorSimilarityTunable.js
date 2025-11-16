/**
 * Compute a tunable similarity score between two numeric vectors A and B.
 *
 * This variant keeps the same per-coordinate similarity structure as the base:
 *
 *   For each i:
 *     If A[i] === 0 and B[i] === 0:
 *       C[i] = 1
 *     Else:
 *       C[i] = 1 - (|A[i] - B[i]| / (2 * max(A[i], B[i])))
 *
 * with C[i] clamped into [0,1] for numerical stability.
 *
 * We then compute:
 *   N      = length of A = length of B (N > 0)
 *   μ      = mean(C) = (1/N) * Σ C[i]
 *
 * And define a flexible, tunable similarity:
 *
 *   similarity = μ^alpha
 *
 * with:
 *   - alpha > 0 as a user-controlled exponent.
 *
 * Range and behavior:
 *   - Since μ ∈ [0,1], μ^alpha ∈ [0,1] for alpha > 0.
 *   - If alpha = 1:
 *       similarity = μ (simple average similarity).
 *   - If alpha > 1:
 *       Penalizes differences more strongly:
 *         - high μ still close to 1,
 *         - moderate μ shrinks (e.g., 0.8^2 = 0.64).
 *   - If 0 < alpha < 1:
 *       Less aggressive penalization (concave):
 *         - moderate μ are boosted (e.g., 0.5^0.5 ≈ 0.707).
 *
 * This function:
 *   - Allows precise control over how aggressively differences are penalized.
 *   - Stays in [0,1].
 *   - Is simple, monotone, and numerically stable.
 *   - Uses the same intuitive Ci as the original similarity.
 *
 * Edge cases:
 *   - N = 1: μ = C[0], similarity = μ^alpha in [0,1].
 *   - All-zero vectors: all C[i] = 1 → μ = 1 → similarity = 1 regardless of alpha.
 *   - Large values: handled via normalized Ci; only relative differences matter.
 *   - Negative values allowed; max(A[i],B[i]) uses standard numeric max, and
 *     differences are taken in absolute value.
 *
 * @param {number[]} A - First numeric vector.
 * @param {number[]} B - Second numeric vector.
 * @param {Object} [options] - Optional configuration.
 * @param {number} [options.alpha=1.5] - Exponent controlling penalty strength (> 0).
 * @returns {number} similarity score in [0,1].
 * @throws {TypeError} If A or B is not an array.
 * @throws {Error} If lengths mismatch, are zero, contain non-finite numbers, or alpha ≤ 0.
 */
function computeVectorSimilarityTunable(A, B, options = {}) {
    if (!Array.isArray(A)) {
        throw new TypeError("Invalid input: A must be an array.");
    }
    if (!Array.isArray(B)) {
        throw new TypeError("Invalid input: B must be an array.");
    }

    const n = A.length;
    if (n === 0 || B.length === 0) {
        throw new Error("Invalid input: A and B must be non-empty arrays.");
    }
    if (n !== B.length) {
        throw new Error("Invalid input: A and B must be arrays of the same length.");
    }

    for (let i = 0; i < n; i++) {
        const a = A[i];
        const b = B[i];
        if (!Number.isFinite(a)) {
            throw new Error(
                `Invalid element in A at index ${i}: expected a finite number, received ${String(a)}.`
            );
        }
        if (!Number.isFinite(b)) {
            throw new Error(
                `Invalid element in B at index ${i}: expected a finite number, received ${String(b)}.`
            );
        }
    }

    const C = new Array(n);
    for (let i = 0; i < n; i++) {
        const a = A[i];
        const b = B[i];

        let ci;
        if (a === 0 && b === 0) {
            ci = 1;
        } else {
            const absA = Math.abs(a);
            const absB = Math.abs(b);
            const maxVal = absA > absB ? absA : absB;
            const diff = Math.abs(a - b);
            const denom = 2 * maxVal;
            const ratio = denom !== 0 ? diff / denom : 0;
            ci = 1 - ratio;
        }

        if (ci < 0) ci = 0;
        else if (ci > 1) ci = 1;

        C[i] = ci;
    }

    let sum = 0;
    for (let i = 0; i < n; i++) {
        sum += C[i];
    }
    const mean = sum / n;

    const {alpha = 1.5} = options;
    if (!Number.isFinite(alpha) || alpha <= 0) {
        throw new Error(
            `Invalid option alpha: expected a positive finite number, received ${String(alpha)}.`
        );
    }

    const similarityRaw = Math.pow(mean, alpha);

    const similarity =
        similarityRaw < 0 ? 0 :
            similarityRaw > 1 ? 1 :
                similarityRaw;

    return similarity;
}

// CommonJS (Node.js)
if (typeof module !== "undefined" && module.exports) {
    module.exports = {computeVectorSimilarityTunable};
}

// ES Module / modern bundlers
export {computeVectorSimilarityTunable};