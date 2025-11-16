/**
 * Compute a metric-like similarity score between two numeric vectors A and B.
 */

interface VectorSimilarityMetricLikeOptions {
  lambda?: number;
}

function computeVectorSimilarityMetricLike(
  A: number[],
  B: number[],
  options: VectorSimilarityMetricLikeOptions = {}
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

  const similarity =
    maxRaw === minRaw
      ? 1
      : (raw - minRaw) / (maxRaw - minRaw);

  if (similarity < 0) return 0;
  if (similarity > 1) return 1;

  return similarity;
}

export { computeVectorSimilarityMetricLike };
