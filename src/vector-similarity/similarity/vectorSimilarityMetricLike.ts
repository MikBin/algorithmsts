/**
 * Compute a metric-like similarity score between two numeric vectors A and B.
 *
 * ```
 * dᵢ = min(|Aᵢ − Bᵢ| / max(|Aᵢ|, |Bᵢ|), 1)   (0 when both coordinates are 0)
 * D  = (1/n) Σ dᵢ
 * sim = (exp(−λD) − exp(−λ)) / (1 − exp(−λ))
 * ```
 * Default: `lambda = 3` (values ≤ 0 fall back to 3). Result clamped to [0, 1].
 *
 * @param A - First numeric vector.
 * @param B - Second numeric vector.
 * @param options - Optional configuration (`lambda` steepness).
 * @returns Similarity score in [0, 1].
 * @throws {TypeError} If `A` or `B` is not an array or contains a non-finite element.
 * @throws {RangeError} If `A` and `B` differ in length or are empty.
 *
 * Time complexity: O(n). Space complexity: O(1).
 */

import { validateVectors } from './internal/validateVectors';

export interface VectorSimilarityMetricLikeOptions {
  lambda?: number;
}

function computeVectorSimilarityMetricLike(
  A: number[],
  B: number[],
  options: VectorSimilarityMetricLikeOptions = {}
): number {
  const n = validateVectors(A, B);

  let sumD = 0;
  for (let i = 0; i < n; i++) {
    const a = A[i];
    const b = B[i];

    const base = Math.max(Math.abs(a), Math.abs(b));

    let di: number;
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

  const raw = Math.exp(-lambdaSafe * D);

  const minRaw = Math.exp(-lambdaSafe);
  const maxRaw = 1;
  const similarity = (raw - minRaw) / (maxRaw - minRaw);

  return Math.max(0, Math.min(1, similarity));
}

export { computeVectorSimilarityMetricLike };
