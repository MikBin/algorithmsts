/**
 * Calculates the Itakura-Saito distance between two vectors.
 * Robust to negative inputs (uses absolute values).
 * Returns Infinity if P[i] or Q[i] is 0 (unless both are 0).
 *
 * Formula: sum( P[i]/Q[i] - ln(P[i]/Q[i]) - 1 )
 *
 * @param P - The first vector (observed/original).
 * @param Q - The second vector (approximation/reconstructed).
 * @returns The Itakura-Saito distance.
 */
export function itakuraSaitoDistance(P: number[], Q: number[]): number {
  if (P.length !== Q.length) {
    throw new Error('Vectors must have the same length.');
  }

  let sum = 0;
  for (let i = 0; i < P.length; i++) {
    const p = Math.abs(P[i]);
    const q = Math.abs(Q[i]);

    if (p === 0 && q === 0) {
      continue;
    }

    if (p === 0 || q === 0) {
      return Infinity;
    }

    const ratio = p / q;
    sum += ratio - Math.log(ratio) - 1;
  }
  return sum;
}

/**
 * Calculates the normalized Itakura-Saito similarity between two vectors.
 * The result is mapped to the [0, 1] range using 1 / (1 + distance).
 *
 * @param P - The first vector.
 * @param Q - The second vector.
 * @returns The normalized Itakura-Saito similarity.
 */
export function vectorSimilarityItakuraSaito(P: number[], Q: number[]): number {
  const distance = itakuraSaitoDistance(P, Q);
  return 1 / (1 + distance);
}
