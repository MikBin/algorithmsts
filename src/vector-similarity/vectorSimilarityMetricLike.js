/**
 * Compute a metric-like similarity score between two numeric vectors A and B.
 *
 * This variant is designed so that 1 - similarity corresponds to a well-structured,
 * norm-based distance, which behaves much closer to a true metric than the
 * original heuristic exponent-based formulation.
 *
 * It uses the same spirit of per-coordinate similarity but derives it from a
 * clipped relative L1 difference and then normalizes via an exponential kernel.
 *
 * Definitions:
 *
 *   Inputs:
 *     - A, B ∈ R^N, N > 0
 *     - All entries finite.
 *
 *   Per-coordinate relative discrepancy d_i:
 *
 *     For each index i:
 *       Let base_i = max(|A[i]|, |B[i]|)
 *
 *       If base_i === 0:
 *         // Both are exactly zero → no discrepancy
 *         d_i = 0
 *       Else:
 *         // Relative absolute difference, clipped at 1 for robustness
 *         d_i = min(1, |A[i] - B[i]| / base_i)
 *
 *   Aggregate distance D:
 *
 *     D = (1 / N) * Σ d_i
 *
 *   Similarity:
 *
 *     similarity = exp(-lambda * D)
 *
 * where:
 *   - lambda > 0 is a scale parameter controlling how quickly similarity decays
 *     as the average relative discrepancy increases.
 *
 * Range and behavior:
 *   - Each d_i ∈ [0,1] by construction.
 *   - Therefore D ∈ [0,1].
 *   - With lambda > 0:
 *       similarity = exp(-lambda * D) ∈ [exp(-lambda), 1]
 *     To ensure full [0,1], we rescale:
 *
 *       similarity_rescaled = (exp(-lambda * D) - exp(-lambda)) / (1 - exp(-lambda))
 *
 *     This yields:
 *       - If D = 0   (A and B identical, including all-zero): similarity_rescaled = 1
 *       - If D = 1   (maximal relative discrepancy on all coords): similarity_rescaled = 0
 *
 * Metric-like property:
 *   - The underlying distance D is an average of clipped relative L1 distances.
 *   - 1 - similarity_rescaled is a smooth, monotone transform of D.
 *   - While the clipping and exponential rescaling prevent it from being a strict norm,
 *     D is well-behaved and much closer to metric behavior (triangle inequality friendly)
 *     than the original exponent-on-mean heuristic.
 *
 * Edge cases:
 *   - All zeros: all base_i = 0 → all d_i = 0 → D = 0 → similarity = 1.
 *   - Large magnitudes: use relative difference, so scale-invariant and numerically stable.
 *   - Negative values allowed: discrepancies use absolute values and max(|A[i]|,|B[i]|).
 *
 * @param {number[]} A - First numeric vector.
 * @param {number[]} B - Second numeric vector.
 * @param {Object} [options] - Optional configuration.
 * @param {number} [options.lambda=3] - Positive decay factor controlling sensitivity.
 * @returns {number} similarity score in [0,1].
 * @throws {TypeError} If A or B is not an array.
 * @throws {Error} If lengths mismatch, are zero, or contain non-finite numbers.
 */
function computeVectorSimilarityMetricLike(A, B, options = {}) {
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

  // --- Compute per-coordinate relative discrepancies d_i in [0,1] ---

  let sumD = 0;
  for (let i = 0; i < n; i++) {
    const a = A[i];
    const b = B[i];

    const base = Math.max(Math.abs(a), Math.abs(b));

    let di;
    if (base === 0) {
      di = 0;
    } else {
      const rel = Math.abs(a - b) / base;
      di = rel > 1 ? 1 : rel;
    }

    sumD += di;
  }

  const D = sumD / n;

  const { lambda = 3 } = options;
  const lambdaSafe = lambda <= 0 ? 3 : lambda;

  // Base exponential similarity in (exp(-lambda), 1]
  const raw = Math.exp(-lambdaSafe * D);

  // Rescale to [0,1] using the known bounds of raw when D ∈ [0,1]
  const minRaw = Math.exp(-lambdaSafe); // when D = 1
  const maxRaw = 1;                     // when D = 0

  const similarity =
    maxRaw === minRaw
      ? 1
      : (raw - minRaw) / (maxRaw - minRaw);

  // Numerical safety clamp
  if (similarity < 0) return 0;
  if (similarity > 1) return 1;

  return similarity;
}

// CommonJS (Node.js)
if (typeof module !== "undefined" && module.exports) {
  module.exports = { computeVectorSimilarityMetricLike };
}

// ES Module / modern bundlers
export { computeVectorSimilarityMetricLike };