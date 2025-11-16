/**
 * Compute a variance-penalized similarity score between two numeric vectors A and B
 * using the same C[i] definition as the base similarity.
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
 *  4. Final similarity score (Variant 2 - variance-penalized mean):
 *
 *       similarity = mean(C) * (1 - alpha * std(C)^p)
 *
 *     with:
 *       - alpha >= 0 : strength of the standard deviation penalty.
 *       - p >= 0     : exponent applied to std(C), typically in [0,1] or 1.
 *       - The result is clamped to [0,1].
 *
 * Interpretation:
 *   - mean(C) captures average coordinate-wise similarity.
 *   - std(C) measures how inconsistent that similarity is across dimensions.
 *   - Higher std(C) → stronger penalty → reduced similarity.
 *   - alpha and p control how aggressively heterogeneous coordinates are punished.
 *
 * Recommended defaults:
 *   - alpha = 0.75
 *   - p     = 1
 *
 * Properties:
 *   - similarity ∈ [0,1] after clamping.
 *   - Pure and side-effect free.
 *   - More interpretable and controlled than the exponent-based variant while
 *     using the same Ci construction.
 *
 * Edge cases:
 *   - N = 1: std(C) = 0 → similarity = mean(C).
 *   - All-zero vectors: all C[i] = 1 → similarity = 1.
 *   - Large values: Ci uses relative differences; stable under scaling.
 *   - Negative values allowed; uses max(|A[i]|, |B[i]|) and absolute diff.
 *
 * @param {number[]} A - First numeric vector.
 * @param {number[]} B - Second numeric vector.
 * @param {Object} [options] - Optional configuration.
 * @param {number} [options.alpha=0.75] - Std penalty strength (>= 0).
 * @param {number} [options.stdPower=1] - Exponent p for std(C) (>= 0, usually 0..1 or 1).
 * @returns {number} similarity score between 0 and 1.
 * @throws {TypeError} If A or B is not an array.
 * @throws {Error} If lengths mismatch, are zero, contain non-finite numbers, or invalid options.
 */
function computeVectorSimilarityMeanStdPenalized(A, B, options = {}) {
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

  const { alpha = 0.75, stdPower = 1 } = options;

  if (!Number.isFinite(alpha) || alpha < 0) {
    throw new Error(
      `Invalid option alpha: expected a non-negative finite number, received ${String(
        alpha
      )}.`
    );
  }

  if (!Number.isFinite(stdPower) || stdPower < 0) {
    throw new Error(
      `Invalid option stdPower: expected a non-negative finite number, received ${String(
        stdPower
      )}.`
    );
  }

  const penalty = 1 - alpha * Math.pow(std, stdPower);
  const raw = mean * penalty;

  let similarity;
  if (raw < 0) similarity = 0;
  else if (raw > 1) similarity = 1;
  else similarity = raw;

  return similarity;
}

// CommonJS (Node.js)
if (typeof module !== "undefined" && module.exports) {
  module.exports = { computeVectorSimilarityMeanStdPenalized };
}

// ES Module / modern bundlers
export { computeVectorSimilarityMeanStdPenalized };