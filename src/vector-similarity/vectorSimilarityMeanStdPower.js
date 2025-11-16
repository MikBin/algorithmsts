/**
 * Compute a custom similarity score between two numeric vectors A and B
 * using the original mean/std-based exponent formulation.
 *
 * Shared core:
 *  1. Input validation:
 *     - A and B must be arrays.
 *     - Same non-zero length.
 *     - All elements must be finite numbers.
 *
 *  2. Per-index component similarity C[i]:
 *       If A[i] === 0 and B[i] === 0:
 *         C[i] = 1
 *       Else:
 *         C[i] = 1 - (|A[i] - B[i]| / (2 * max(|A[i]|, |B[i]|)))
 *       C[i] is clamped to [0, 1] for numerical stability.
 *
 *  3. Aggregate statistics:
 *       mean(C) = (1/N) * Σ C[i]
 *       std(C)  = sample standard deviation of C:
 *                 sqrt( Σ (C[i] - mean(C))^2 / (N - 1) ) for N > 1
 *                 std(C) = 0 when N === 1.
 *
 *  4. Final similarity score (Variant 1 - original):
 *       similarity = mean(C) ** (1 + std(C))
 *
 * Properties:
 *   - Pure and side-effect free.
 *   - Returns a number in [0, 1] for valid inputs (within numerical tolerance).
 *   - Sensitive to both average similarity and its dispersion.
 *
 * Edge cases:
 *   - N = 1: std(C) = 0 by definition, similarity = C[0].
 *   - All-zero vectors: all C[i] = 1 → similarity = 1.
 *   - Large values: handled via normalized Ci; only relative differences matter.
 *   - Negative values allowed; max(|A[i]|, |B[i]|) is used and
 *     |A[i] - B[i]| is used.
 *
 * @param {number[]} A - First numeric vector.
 * @param {number[]} B - Second numeric vector.
 * @returns {number} similarity score between 0 and 1.
 * @throws {TypeError} If A or B is not an array.
 * @throws {Error} If lengths mismatch, are zero, or contain non-finite numbers.
 */
function computeVectorSimilarityMeanStdPower(A, B) {
    if (!Array.isArray(A)) {
        throw new TypeError("Invalid input: A must be an array.");
    }
    if (!Array.isArray(B)) {
        throw new TypeError("Invalid input: B must be an array.");
    }

    const lengthA = A.length;
    const lengthB = B.length;

    if (lengthA === 0 || lengthB === 0) {
        throw new Error("Invalid input: A and B must be non-empty arrays.");
    }

    if (lengthA !== lengthB) {
        throw new Error(
            "Invalid input: A and B must be arrays of the same length."
        );
    }

    const n = lengthA;

    for (let i = 0; i < n; i++) {
        const a = A[i];
        const b = B[i];

        if (!Number.isFinite(a)) {
            throw new Error(
                `Invalid element in A at index ${i}: expected a finite number, received ${String(
                    a
                )}.`
            );
        }

        if (!Number.isFinite(b)) {
            throw new Error(
                `Invalid element in B at index ${i}: expected a finite number, received ${String(
                    b
                )}.`
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
            const denominator = 2 * maxVal;
            const ratio = denominator !== 0 ? diff / denominator : 0;
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

    let std;
    if (n === 1) {
        std = 0;
    } else {
        let varianceSum = 0;
        for (let i = 0; i < n; i++) {
            const diff = C[i] - mean;
            varianceSum += diff * diff;
        }
        const variance = varianceSum / (n - 1);
        std = Math.sqrt(variance);
    }

    const exponent = 1 + std;
    let similarity = Math.pow(mean, exponent);

    return similarity;
}

// CommonJS (Node.js)
if (typeof module !== "undefined" && module.exports) {
    module.exports = {computeVectorSimilarityMeanStdPower};
}

// ES Module / modern bundlers
export {computeVectorSimilarityMeanStdPower};