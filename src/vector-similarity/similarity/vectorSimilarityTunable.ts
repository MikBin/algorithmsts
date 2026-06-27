/**
 * Compute a tunable similarity score between two numeric vectors A and B.
 *
 * @param A - First numeric vector.
 * @param B - Second numeric vector.
 * @param options - Optional configuration (`alpha` exponent, must be positive).
 * @returns Similarity score in [0, 1].
 * @throws {TypeError} If `A` or `B` is not an array or contains a non-finite element.
 * @throws {RangeError} If `A` and `B` differ in length or are empty, or `alpha` is invalid.
 *
 * Time complexity: O(n). Space complexity: O(1).
 */

import { validateVectors } from './internal/validateVectors';

export interface VectorSimilarityTunableOptions {
  alpha?: number;
}

function computeVectorSimilarityTunable(
  A: number[],
  B: number[],
  options: VectorSimilarityTunableOptions = {}
): number {
  const n = validateVectors(A, B);

  const C: number[] = new Array(n);
  for (let i = 0; i < n; i++) {
    const a = A[i];
    const b = B[i];

    let ci: number;
    if (a === 0 && b === 0) {
      ci = 1;
    } else {
      const absA = Math.abs(a);
      const absB = Math.abs(b);
      const maxVal = Math.max(absA, absB);
      const diff = Math.abs(a - b);
      const denom = 2 * maxVal;
      const ratio = diff / denom;
      ci = 1 - ratio;
    }

    ci = Math.max(0, Math.min(1, ci));

    C[i] = ci;
  }

  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += C[i];
  }
  const mean = sum / n;

  const { alpha = 1.5 } = options;
  if (!Number.isFinite(alpha) || alpha <= 0) {
    throw new Error(
      `Invalid option alpha: expected a positive finite number, received ${String(alpha)}.`
    );
  }

  const similarityRaw = Math.pow(mean, alpha);

  return Math.max(0, Math.min(1, similarityRaw));
}

export { computeVectorSimilarityTunable };
