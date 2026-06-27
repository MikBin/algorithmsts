/**
 * Compute a robust similarity score between two numeric vectors A and B.
 *
 * @param A - First numeric vector.
 * @param B - Second numeric vector.
 * @param options - Optional configuration (`clipMax` per-coordinate clamp, `k` softness).
 * @returns Similarity score in [0, 1].
 * @throws {TypeError} If `A` or `B` is not an array or contains a non-finite element.
 * @throws {RangeError} If `A` and `B` differ in length or are empty, or `clipMax`/`k` are invalid.
 *
 * Time complexity: O(n). Space complexity: O(1).
 */

import { validateVectors } from './internal/validateVectors';

export interface VectorSimilarityRobustOptions {
  clipMax?: number;
  k?: number;
}

function computeVectorSimilarityRobust(
  A: number[],
  B: number[],
  options: VectorSimilarityRobustOptions = {}
): number {
  const n = validateVectors(A, B);

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

    let ri: number;
    if (scale === 0) {
      ri = 0;
    } else {
      const t = Math.abs(a - b) / scale;
      ri = t > clipMax ? clipMax : t;
    }

    const di = ri / (ri + k);

    sumD += di;
  }

  const D = sumD / n;

  const dMax = clipMax / (clipMax + k);

  const ratio = D / dMax;
  const similarity = 1 - ratio;

  return Math.max(0, Math.min(1, similarity));
}

export { computeVectorSimilarityRobust };
