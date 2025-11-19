
/**
 * Calculates the Fidelity similarity (Bhattacharyya coefficient) between two vectors.
 * @param P - The first vector.
 * @param Q - The second vector.
 * @returns The Fidelity similarity.
 */
export function fidelitySimilarity(P: number[], Q: number[]): number {
  if (P.length !== Q.length) {
    throw new Error("Vectors must have the same length.");
  }
  const pSum = P.reduce((sum, val) => sum + val, 0);
  const qSum = Q.reduce((sum, val) => sum + val, 0);

  if (pSum === 0 && qSum === 0) {
    return 1;
  }

  if (pSum === 0 || qSum === 0) {
    return 0;
  }

  const pNormalized = P.map(val => val / pSum);
  const qNormalized = Q.map(val => val / qSum);

  return pNormalized.reduce((sum, p, i) => sum + Math.sqrt(p * qNormalized[i]), 0);
}

/**
 * Calculates the Hellinger distance between two vectors.
 * @param P - The first vector.
 * @param Q - The second vector.
 * @returns The Hellinger distance.
 */
export function hellingerDistance(P: number[], Q: number[]): number {
  if (P.length !== Q.length) {
    throw new Error("Vectors must have the same length.");
  }
  const fidelity = fidelitySimilarity(P, Q);
  return Math.sqrt(1 - fidelity);
}

/**
 * Calculates the Matusita distance between two vectors.
 * @param P - The first vector.
 * @param Q - The second vector.
 * @returns The Matusita distance.
 */
export function matusitaDistance(P: number[], Q: number[]): number {
  if (P.length !== Q.length) {
    throw new Error("Vectors must have the same length.");
  }
  const squaredChord = P.reduce((sum, p, i) => sum + Math.pow(Math.sqrt(p) - Math.sqrt(Q[i]), 2), 0);
  return Math.sqrt(squaredChord);
}

/**
 * Calculates the Squared-Chord distance between two vectors.
 * @param P - The first vector.
 * @param Q - The second vector.
 * @returns The Squared-Chord distance.
 */
export function squaredChordDistance(P: number[], Q: number[]): number {
  if (P.length !== Q.length) {
    throw new Error("Vectors must have the same length.");
  }
  return P.reduce((sum, p, i) => sum + Math.pow(Math.sqrt(p) - Math.sqrt(Q[i]), 2), 0);
}
