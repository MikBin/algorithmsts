/**
 * Compute a custom similarity score between two numeric vectors A and B
 * using the mean/std-based exponent formulation with an Arithmetic Mean denominator.
 *
 * Denominator = 0.5 * (|a| + |b|)
 *
 * @throws {TypeError} If `A` or `B` is not an array or contains a non-finite element.
 * @throws {RangeError} If `A` and `B` differ in length or are empty.
 *
 * Time complexity: O(n). Space complexity: O(n) (the auxiliary C vector).
 */

import { validateVectors } from './internal/validateVectors';

function vectorSimilarityMeanStdPowerArithmeticMean(A: number[], B: number[], stdWeight: number = 1): number {
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
      const diff = Math.abs(a - b);
      const denominator = 0.5 * (absA + absB);
      const ratio = diff / denominator;
      ci = 1 - ratio; //[-1,1]
    }

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

  const exponent = (1 + std * stdWeight);

  const sign = Math.sign(mean);
  const similarity = 1 + sign * Math.pow(Math.abs(mean), exponent ** sign);

  return similarity / 2;
}

/**
 * Compute the vector similarity mean std power arithmetic mean with the standard deviation weight set to 0.
 *
 * @param A The first vector.
 * @param B The second vector.
 * @returns The similarity between the two vectors.
 */
function vectorSimilarityMeanStdPowerArithmeticMeanNoStd(A: number[], B: number[]): number {
  return vectorSimilarityMeanStdPowerArithmeticMean(A, B, 0);
}

export { vectorSimilarityMeanStdPowerArithmeticMean, vectorSimilarityMeanStdPowerArithmeticMeanNoStd };
