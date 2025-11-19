
import { matusitaDistance, squaredChordDistance } from './fidelity.ts';

/**
 * Calculates the normalized Matusita similarity between two vectors.
 * The result is mapped to the [0, 1] range.
 * @param P - The first vector.
 * @param Q - The second vector.
 * @returns The normalized Matusita similarity.
 */
export function normalizedMatusitaSimilarity(P: number[], Q: number[]): number {
    const distance = matusitaDistance(P, Q);
    return 1 / (1 + distance);
}

/**
 * Calculates the normalized Squared-Chord similarity between two vectors.
 * The result is mapped to the [0, 1] range.
 * @param P - The first vector.
 * @param Q - The second vector.
 * @returns The normalized Squared-Chord similarity.
 */
export function normalizedSquaredChordSimilarity(P: number[], Q: number[]): number {
    const distance = squaredChordDistance(P, Q);
    return 1 / (1 + distance);
}
