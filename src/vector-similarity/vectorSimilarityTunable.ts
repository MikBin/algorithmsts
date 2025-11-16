/**
 * Compute a tunable similarity score between two numeric vectors A and B.
 */

interface VectorSimilarityTunableOptions {
  alpha?: number;
}

function computeVectorSimilarityTunable(
  A: number[],
  B: number[],
  options: VectorSimilarityTunableOptions = {}
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

  const { alpha = 1.5 } = options;
  if (!Number.isFinite(alpha) || alpha <= 0) {
    throw new Error(
      `Invalid option alpha: expected a positive finite number, received ${String(alpha)}.`
    );
  }

  const similarityRaw = Math.pow(mean, alpha);

  const similarity =
    similarityRaw < 0 ? 0 :
      similarityRaw > 1 ? 1 :
        similarityRaw;

  return similarity;
}

export { computeVectorSimilarityTunable };
