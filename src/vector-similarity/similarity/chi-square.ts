
/**
 * Calculates the Pearson Chi-Square distance between two vectors.
 * Robust to negative inputs (uses absolute values).
 * Returns Infinity if expected frequency (Q) is 0 and observed (P) is not.
 * @param P - The first vector.
 * @param Q - The second vector.
 * @returns The Pearson Chi-Square distance.
 */
export function pearsonChiSquareDistance(P: number[], Q: number[]): number {
  if (P.length !== Q.length) {
    throw new Error("Vectors must have the same length.");
  }

  let sum = 0;
  for (let i = 0; i < P.length; i++) {
      const p = Math.abs(P[i]);
      const q = Math.abs(Q[i]);

      if (q === 0) {
          if (p !== 0) return Infinity;
          continue; // 0/0 case, skip
      }
      sum += Math.pow(p - q, 2) / q;
  }
  return sum;
}

/**
 * Calculates the Neyman Chi-Square distance between two vectors.
 * Robust to negative inputs (uses absolute values).
 * Returns Infinity if observed frequency (P) is 0 and expected (Q) is not.
 * @param P - The first vector.
 * @param Q - The second vector.
 * @returns The Neyman Chi-Square distance.
 */
export function neymanChiSquareDistance(P: number[], Q: number[]): number {
  if (P.length !== Q.length) {
    throw new Error("Vectors must have the same length.");
  }

  let sum = 0;
  for (let i = 0; i < P.length; i++) {
      const p = Math.abs(P[i]);
      const q = Math.abs(Q[i]);

      if (p === 0) {
          if (q !== 0) return Infinity;
          continue;
      }
      sum += Math.pow(p - q, 2) / p;
  }
  return sum;
}

/**
 * Calculates the Additive Symmetric Chi-Square distance between two vectors.
 * Robust to negative inputs (uses absolute values).
 * Returns Infinity if p*q is 0 and p!=q.
 * @param P - The first vector.
 * @param Q - The second vector.
 * @returns The Additive Symmetric Chi-Square distance.
 */
export function additiveSymmetricChiSquareDistance(P: number[], Q: number[]): number {
  if (P.length !== Q.length) {
    throw new Error("Vectors must have the same length.");
  }

  let sum = 0;
  for (let i = 0; i < P.length; i++) {
      const p = Math.abs(P[i]);
      const q = Math.abs(Q[i]);
      const denominator = p * q;

      if (denominator === 0) {
          if (p !== q) return Infinity;
          continue;
      }
      sum += (Math.pow(p - q, 2) * (p + q)) / denominator;
  }
  return sum;
}


/**
 * Calculates the Squared Chi-Square distance between two vectors.
 * Robust to negative inputs (uses absolute values).
 * Skips dimensions where p+q is 0.
 * @param P The first vector.
 * @param Q The second vector.
 * @returns The Squared Chi-Square distance.
 */
export function squaredChiSquareDistance(P: number[], Q: number[]): number {
  if (P.length !== Q.length) {
    throw new Error('Vectors must have the same length.');
  }

  let sum = 0;
  for (let i = 0; i < P.length; i++) {
      const p = Math.abs(P[i]);
      const q = Math.abs(Q[i]);
      const sumPQ = p + q;

      if (sumPQ === 0) {
          continue;
      }
      sum += Math.pow(p - q, 2) / sumPQ;
  }
  return sum;
}
