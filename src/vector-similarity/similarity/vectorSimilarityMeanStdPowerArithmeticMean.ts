/**
 * Compute a custom similarity score between two numeric vectors A and B
 * using the mean/std-based exponent formulation with an Arithmetic Mean denominator.
 *
 * Denominator = 0.5 * (|a| + |b|)
 */
function computeVectorSimilarityMeanStdPowerArithmeticMean(A: number[], B: number[]): number {
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
      const diff = Math.abs(a - b);
      const denominator = 0.5 * (absA + absB);
      const ratio = denominator === 0 ? 0 : diff / denominator;
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

  const exponent = 1 + std;
  const similarity = Math.pow(mean, exponent);

  return similarity;
}

export { computeVectorSimilarityMeanStdPowerArithmeticMean };
