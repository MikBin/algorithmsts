/**
 * Compute a robust similarity score between two numeric vectors A and B.
 */

interface VectorSimilarityRobustOptions {
  clipMax?: number;
  k?: number;
}

function computeVectorSimilarityRobust(
  A: number[],
  B: number[],
  options: VectorSimilarityRobustOptions = {}
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

  const ratio = dMax > 0 ? D / dMax : 0;
  let similarity = 1 - ratio;

  if (similarity < 0) similarity = 0;
  else if (similarity > 1) similarity = 1;

  return similarity;
}

export { computeVectorSimilarityRobust };
