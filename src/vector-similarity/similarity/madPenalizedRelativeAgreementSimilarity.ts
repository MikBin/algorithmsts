/**
 * Compute a MAD-penalized robust similarity score between two numeric vectors A and B.
 *
 * Builds per-coordinate agreement (half-max denominator, clamped to [0, 1]):
 * ```
 * C[i] = 1 − |Aᵢ − Bᵢ| / (2 · max(|Aᵢ|, |Bᵢ|))   (1 when both are 0)
 * sim  = median(C) · (1 − α · MAD(C)^madPower)
 * ```
 * where `MAD(C) = median(|C[i] − median(C)|)`.
 *
 * Defaults: `alpha = 0.75`, `madPower = 1`. Result clamped to [0, 1].
 *
 * Robust analogue of {@link computeVectorSimilarityMeanStdPenalized} using median/MAD
 * instead of mean/std for aggregation.
 *
 * @param A - First numeric vector.
 * @param B - Second numeric vector.
 * @param options - Optional configuration (`alpha`, `madPower`).
 * @returns Similarity score between 0 and 1.
 * @throws {TypeError} If `A` or `B` is not an array, or contains a non-finite element.
 * @throws {RangeError} If `A` and `B` differ in length or are empty, or `options` are invalid.
 *
 * Time complexity: O(n) average. Space complexity: O(n) (auxiliary C vector).
 */

import { validateVectors } from './internal/validateVectors';
import { median, medianAbsoluteDeviation } from './internal/quickselect';

export interface MadPenalizedRelativeAgreementOptions {
  alpha?: number;
  madPower?: number;
}

function madPenalizedRelativeAgreementSimilarity(
  A: number[],
  B: number[],
  options: MadPenalizedRelativeAgreementOptions = {}
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

  const med = median(C);
  const mad = medianAbsoluteDeviation(C, med);

  const { alpha = 0.75, madPower = 1 } = options;

  if (!Number.isFinite(alpha) || alpha < 0) {
    throw new Error(
      `Invalid option alpha: expected a non-negative finite number, received ${String(
        alpha
      )}.`
    );
  }

  if (!Number.isFinite(madPower) || madPower < 0) {
    throw new Error(
      `Invalid option madPower: expected a non-negative finite number, received ${String(
        madPower
      )}.`
    );
  }

  const penalty = 1 - alpha * Math.pow(mad, madPower);
  const raw = med * penalty;

  return Math.max(0, Math.min(1, raw));
}

export { madPenalizedRelativeAgreementSimilarity };
