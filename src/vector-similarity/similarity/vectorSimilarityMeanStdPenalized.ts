/**
 * Compute a variance-penalized similarity score between two numeric vectors A and B
 * using the same C[i] definition as the base similarity.
 */

interface VectorSimilarityPenalizedOptions {
  alpha?: number;
  stdPower?: number;
}

/**
 * @param {number[]} A - First numeric vector.
 * @param {number[]} B - Second numeric vector.
 * @param {VectorSimilarityPenalizedOptions} [options] - Optional configuration.
 * @returns {number} similarity score between 0 and 1.
 * @throws {TypeError} If A or B is not an array.
 * @throws {Error} If lengths mismatch, are zero, contain non-finite numbers, or invalid options.
 */
function computeVectorSimilarityMeanStdPenalized(
  A: number[],
  B: number[],
  options: VectorSimilarityPenalizedOptions = {}
): number {
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

  let similarity: number;
  if (raw < 0) similarity = 0;
  else if (raw > 1) similarity = 1;
  else similarity = raw;

  return similarity;
}

export { computeVectorSimilarityMeanStdPenalized };
