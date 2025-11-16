/**
 * Compute a variance-weighted similarity score between two numeric vectors A and B.
 */

interface VectorSimilarityVarianceWeightedOptions {
  beta?: number;
  gamma?: number;
}

function computeVectorSimilarityVarianceWeighted(
  A: number[],
  B: number[],
  options: VectorSimilarityVarianceWeightedOptions = {}
): number {
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
      const denom = 2 * maxVal;
      const ratio = denom !== 0 ? diff / denom : 0;
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
  const similarity =
    raw < 0 ? 0 :
      raw > 1 ? 1 :
        raw;

  return similarity;
}

export { computeVectorSimilarityVarianceWeighted };
