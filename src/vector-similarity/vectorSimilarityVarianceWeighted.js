/**
 * Compute a variance-weighted similarity score between two numeric vectors A and B.
 *
 * This variant starts from the same per-coordinate similarity components C[i] as
 * in the base vector similarity:
 *
 *   For each i:
 *     If A[i] === 0 and B[i] === 0:
 *       C[i] = 1
 *     Else:
 *       C[i] = 1 - (|A[i] - B[i]| / (2 * max(A[i], B[i])))
 *
 * with C[i] clamped into [0, 1] for numerical stability.
 *
 * Then define:
 *   N        = length of A = length of B (N > 0)
 *   μ        = mean(C) = (1/N) * Σ C[i]
 *   s        = sample standard deviation of C:
 *                s = 0                        if N = 1
 *                s = sqrt( Σ (C[i] - μ)^2 / (N - 1) )  otherwise
 *   s_norm   = s / s_max, where s_max is the maximum possible std for C in [0,1]:
 *                s_max = 0                   if N <= 1
 *                s_max = sqrt(N / (4 * (N - 1))) otherwise
 *
 * The variance-weighted similarity is:
 *
 *   similarity = μ * (1 - beta * s_norm^gamma)
 *
 * with:
 *   - beta in [0,1]: how strongly to penalize heterogeneity.
 *   - gamma >= 1: controls how sharply high variance is punished.
 *
 * Finally, similarity is clamped into [0,1].
 *
 * Properties:
 *   - Range: similarity ∈ [0,1].
 *   - 1 means all coordinates maximally similar (C[i] = 1, s = 0).
 *   - Penalizes heterogeneous coordinates more strongly than a simple mean,
 *     especially when gamma > 1 and beta is large.
 *   - Pure, deterministic, no side effects.
 *
 * Edge cases:
 *   - If N = 1, then s_norm = 0, so similarity = μ.
 *   - All-zero vectors give C[i] = 1 for all i → similarity = 1.
 *   - Handles large magnitudes safely via normalized definition of C[i].
 *   - Negative values are allowed; max(A[i], B[i]) uses usual numeric max.
 *
 * @param {number[]} A - First numeric vector.
 * @param {number[]} B - Second numeric vector.
 * @param {Object} [options] - Optional configuration.
 * @param {number} [options.beta=0.85] - Penalty strength for normalized variance (0 to 1).
 * @param {number} [options.gamma=2] - Exponent for variance penalty (>= 1 recommended).
 * @returns {number} similarity score in [0,1].
 * @throws {TypeError} If A or B is not an array.
 * @throws {Error} If lengths mismatch, are zero, or contain non-finite numbers.
 */
function computeVectorSimilarityVarianceWeighted(A, B, options = {}) {
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

    let std = 0;
    if (n > 1) {
        let varSum = 0;
        for (let i = 0; i < n; i++) {
            const d = C[i] - mean;
            varSum += d * d;
        }
        std = Math.sqrt(varSum / (n - 1));
    }

    // Maximum possible std for values in [0,1], for given n.
    let sMax = 0;
    if (n > 1) {
        sMax = Math.sqrt(n / (4 * (n - 1)));
    }

    const sNorm = sMax > 0 ? std / sMax : 0;

    const {beta = 0.85, gamma = 2} = options;
    const betaClamped = beta < 0 ? 0 : beta > 1 ? 1 : beta;
    const gammaSafe = gamma < 1 ? 1 : gamma;

    const penalty = 1 - betaClamped * Math.pow(sNorm, gammaSafe);
    const raw = mean * penalty;
    const similarity =
        raw < 0 ? 0 :
            raw > 1 ? 1 :
                raw;

    return similarity;
}

// CommonJS (Node.js)
if (typeof module !== "undefined" && module.exports) {
    module.exports = {computeVectorSimilarityVarianceWeighted};
}

// ES Module / modern bundlers
export {computeVectorSimilarityVarianceWeighted};