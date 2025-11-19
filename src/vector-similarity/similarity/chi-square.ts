
/**
 * Calculates the Pearson Chi-Square distance between two vectors.
 * @param P - The first vector.
 * @param Q - The second vector.
 * @returns The Pearson Chi-Square distance.
 */
export function pearsonChiSquareDistance(P: number[], Q: number[]): number {
  if (P.length !== Q.length) {
    throw new Error("Vectors must have the same length.");
  }
  return P.reduce((sum, p, i) => {
    const q = Q[i];
    if (q === 0) {
      // Or handle as per specific requirements, e.g., throw error or add a small epsilon
      return sum;
    }
    return sum + Math.pow(p - q, 2) / q;
  }, 0);
}

/**
 * Calculates the Neyman Chi-Square distance between two vectors.
 * @param P - The first vector.
 * @param Q - The second vector.
 * @returns The Neyman Chi-Square distance.
 */
export function neymanChiSquareDistance(P: number[], Q: number[]): number {
  if (P.length !== Q.length) {
    throw new Error("Vectors must have the same length.");
  }
  return P.reduce((sum, p, i) => {
    const q = Q[i];
    if (p === 0) {
      // Or handle as per specific requirements
      return sum;
    }
    return sum + Math.pow(p - q, 2) / p;
  }, 0);
}

/**
 * Calculates the Additive Symmetric Chi-Square distance between two vectors.
 * @param P - The first vector.
 * @param Q - The second vector.
 * @returns The Additive Symmetric Chi-Square distance.
 */
export function additiveSymmetricChiSquareDistance(P: number[], Q: number[]): number {
  if (P.length !== Q.length) {
    throw new Error("Vectors must have the same length.");
  }
  return P.reduce((sum, p, i) => {
    const q = Q[i];
    if (p === 0 || q === 0) {
      // Or handle as per specific requirements
      return sum;
    }
    return sum + (Math.pow(p - q, 2) * (p + q)) / (p * q);
  }, 0);
}


/**
 * Calculates the Squared Chi-Square distance between two vectors.
 * @param P The first vector.
 * @param Q The second vector.
 * @returns The Squared Chi-Square distance.
 */
export function squaredChiSquareDistance(P: number[], Q: number[]): number {
  if (P.length !== Q.length) {
    throw new Error('Vectors must have the same length.');
  }

  return P.reduce((sum, p, i) => {
    const q = Q[i];
    const sumPQ = p + q;
    if (sumPQ === 0) {
      return sum;
    }
    return sum + Math.pow(p - q, 2) / sumPQ;
  }, 0);
}
