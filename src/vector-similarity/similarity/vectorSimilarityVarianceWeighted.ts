/**
 * Compute a variance-weighted similarity score between two numeric vectors A and B.
 *
 * Builds per-coordinate agreement C (half-max denominator), then penalizes by normalized std:
 * ```
 * sNorm = std(C) / √(n / (4(n − 1)))
 * sim   = mean(C) · (1 − β · sNorm^γ)
 * ```
 * Defaults: `beta = 0.85`, `gamma = 2`. Result clamped to [0, 1].
 *
 * @param A - First numeric vector.
 * @param B - Second numeric vector.
 * @param options - Optional configuration (`beta` in [0,1], `gamma` ≥ 1).
 * @returns Similarity score in [0, 1].
 * @throws {TypeError} If `A` or `B` is not an array or contains a non-finite element.
 * @throws {RangeError} If `A` and `B` differ in length or are empty.
 *
 * Time complexity: O(n). Space complexity: O(n) (auxiliary C vector).
 */

import { validateVectors } from './internal/validateVectors';

export interface VectorSimilarityVarianceWeightedOptions {
  beta?: number;
  gamma?: number;
}

function computeVectorSimilarityVarianceWeighted(
  A: number[],
  B: number[],
  options: VectorSimilarityVarianceWeightedOptions = {}
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

  let std = 0;
  if (n > 1) {
    let varSum = 0;
    for (let i = 0; i < n; i++) {
      const d = C[i] - mean;
      varSum += d * d;
    }
    std = Math.sqrt(varSum / (n - 1));
  }

  let sMax = 0;
  if (n > 1) {
    sMax = Math.sqrt(n / (4 * (n - 1)));
  }

  const sNorm = sMax > 0 ? std / sMax : 0;

  const { beta = 0.85, gamma = 2 } = options;
  const betaClamped = beta < 0 ? 0 : beta > 1 ? 1 : beta;
  const gammaSafe = gamma < 1 ? 1 : gamma;

  const penalty = 1 - betaClamped * Math.pow(sNorm, gammaSafe);
  const raw = mean * penalty;

  return Math.max(0, Math.min(1, raw));
}

export { computeVectorSimilarityVarianceWeighted };
