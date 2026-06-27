/**
 * Compute a variance-penalized similarity score between two numeric vectors A and B.
 *
 * Builds per-coordinate agreement (half-max denominator, clamped to [0, 1]):
 * ```
 * C[i] = 1 − |Aᵢ − Bᵢ| / (2 · max(|Aᵢ|, |Bᵢ|))   (1 when both are 0)
 * sim  = mean(C) · (1 − α · std(C)^stdPower)
 * ```
 * Defaults: `alpha = 0.75`, `stdPower = 1`. Result clamped to [0, 1].
 *
 * @param A - First numeric vector.
 * @param B - Second numeric vector.
 * @param options - Optional configuration (`alpha`, `stdPower`).
 * @returns Similarity score between 0 and 1.
 * @throws {TypeError} If `A` or `B` is not an array, or contains a non-finite element.
 * @throws {RangeError} If `A` and `B` differ in length or are empty, or `options` are invalid.
 *
 * Time complexity: O(n). Space complexity: O(n) (auxiliary C vector).
 */

import { validateVectors } from './internal/validateVectors';

export interface VectorSimilarityPenalizedOptions {
  alpha?: number;
  stdPower?: number;
}

function computeVectorSimilarityMeanStdPenalized(
  A: number[],
  B: number[],
  options: VectorSimilarityPenalizedOptions = {}
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
      const denominator = 2 * maxVal;
      const ratio = diff / denominator;
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

  let std: number;
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

  return Math.max(0, Math.min(1, raw));
}

export { computeVectorSimilarityMeanStdPenalized };
