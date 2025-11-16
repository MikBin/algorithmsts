/**
 * Compute a robust similarity score between two numeric vectors A and B.
 *
 * This variant is designed to be robust to outliers and extreme values while
 * remaining intuitive and bounded in [0,1]. It:
 *
 *   - Uses the same conceptual per-coordinate similarity idea.
 *   - Applies clipping and a smooth transformation to reduce the influence
 *     of very large discrepancies on a few coordinates.
 *
 * Definitions:
 *
 *   Inputs:
 *     - A, B ∈ R^N, N > 0
 *     - All entries finite.
 *
 *   Step 1: Robust per-coordinate base discrepancy r_i
 *
 *     For each index i:
 *       Let scale_i = max(|A[i]|, |B[i]|)
 *
 *       If scale_i === 0:
 *         // Both are zero → no discrepancy
 *         r_i = 0
 *       Else:
 *         // Raw relative difference
 *         t_i = |A[i] - B[i]| / scale_i
 *
 *         // Robust clipping:
 *         // We cap at clipMax to prevent extreme ratios dominating.
 *         r_i = min(t_i, clipMax)
 *
 *   Step 2: Smooth bounded discrepancy d_i in [0,1]
 *
 *     To compress the effect of remaining large r_i smoothly, define:
 *
 *       d_i = r_i / (r_i + k)
 *
 *     where:
 *       - k > 0 is a robustness parameter.
 *       - As r_i → 0, d_i ≈ r_i / k (small, sensitive to small differences).
 *       - As r_i → ∞, d_i → 1 (but smoothly).
 *       - Because r_i ≤ clipMax, we have:
 *            d_i ≤ clipMax / (clipMax + k) < 1
 *         and we can choose clipMax and k so that typical large deviations
 *         map close to 1 without overflowing.
 *
 *   Step 3: Aggregate robust discrepancy D_robust
 *
 *       D_robust = (1 / N) * Σ d_i
 *
 *     This is an outlier-resistant average of smoothed, bounded discrepancies.
 *
 *   Step 4: Robust similarity in [0,1]
 *
 *     We map D_robust ∈ [0, d_max] to [0,1] via a linear transform, where:
 *
 *       d_max = clipMax / (clipMax + k)
 *
 *     and define:
 *
 *       similarity = 1 - (D_robust / d_max)
 *
 *     and clamp to [0,1].
 *
 *     Hence:
 *       - If A and B are identical:
 *           all r_i = 0 → all d_i = 0 → D_robust = 0 → similarity = 1.
 *       - If A and B differ maximally under this model at every coordinate:
 *           all r_i = clipMax → all d_i = d_max → D_robust = d_max → similarity = 0.
 *
 * Robustness and intuition:
 *   - Uses relative differences so it is scale-aware.
 *   - Clips extreme relative differences at clipMax.
 *   - Uses a smooth saturation d_i = r_i / (r_i + k), so outliers have bounded impact.
 *   - Linear normalization to [0,1] keeps interpretation simple.
 *
 * Edge cases:
 *   - N = 1:
 *       D_robust = d_1, similarity behaves as defined, still in [0,1].
 *   - All-zero vectors:
 *       scale_i = 0 for all i → r_i = 0 → similarity = 1.
 *   - Large magnitudes:
 *       handled via relative difference and clipping.
 *   - Negative values:
 *       allowed; scale_i uses absolute values, and |A[i] - B[i]| is used.
 *
 * Default parameters:
 *   - clipMax = 4
 *       Relative differences above 4x are treated as equally "very different".
 *   - k = 1
 *       Balances sensitivity for small vs larger differences.
 *
 * @param {number[]} A - First numeric vector.
 * @param {number[]} B - Second numeric vector.
 * @param {Object} [options] - Optional configuration.
 * @param {number} [options.clipMax=4] - Maximum relative ratio before clipping (must be > 0).
 * @param {number} [options.k=1] - Smooth saturation parameter (must be > 0).
 * @returns {number} similarity score in [0,1].
 * @throws {TypeError} If A or B is not an array.
 * @throws {Error} If lengths mismatch, are zero, contain non-finite numbers, or invalid options.
 */
function computeVectorSimilarityRobust(A, B, options = {}) {
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

  const { clipMax = 4, k = 1 } = options;

  if (!Number.isFinite(clipMax) || clipMax <= 0) {
    throw new Error(
      `Invalid option clipMax: expected a positive finite number, received ${String(clipMax)}.`
    );
  }
  if (!Number.isFinite(k) || k <= 0) {
    throw new Error(
      `Invalid option k: expected a positive finite number, received ${String(k)}.`
    );
  }

  let sumD = 0;

  for (let i = 0; i < n; i++) {
    const a = A[i];
    const b = B[i];

    const scale = Math.max(Math.abs(a), Math.abs(b));

    let ri;
    if (scale === 0) {
      ri = 0;
    } else {
      const t = Math.abs(a - b) / scale;
      ri = t > clipMax ? clipMax : t;
    }

    // Smooth bounded discrepancy d_i in [0, 1)
    const di = ri / (ri + k);

    sumD += di;
  }

  const D = sumD / n;

  // Maximum possible d_i given clipping
  const dMax = clipMax / (clipMax + k);

  // Map D ∈ [0, dMax] linearly to similarity ∈ [1, 0]
  const ratio = dMax > 0 ? D / dMax : 0;
  let similarity = 1 - ratio;

  if (similarity < 0) similarity = 0;
  else if (similarity > 1) similarity = 1;

  return similarity;
}

// CommonJS (Node.js)
if (typeof module !== "undefined" && module.exports) {
  module.exports = { computeVectorSimilarityRobust };
}

// ES Module / modern bundlers
export { computeVectorSimilarityRobust };