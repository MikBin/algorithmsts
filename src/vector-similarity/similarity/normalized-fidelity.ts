
import { matusitaDistance, squaredChordDistance } from './fidelity.ts';

/**
 * Calculates the normalized Matusita similarity between two vectors.
 * The result is mapped to the [0, 1] range using linear scaling.
 * Note: Inputs are normalized to probability distributions internally by the underlying functions.
 * @param P - The first vector.
 * @param Q - The second vector.
 * @returns The normalized Matusita similarity.
 */
export function normalizedMatusitaSimilarity(P: number[], Q: number[]): number {
    // matusitaDistance now handles normalization internally
    const distance = matusitaDistance(P, Q);
    // Max distance for Matusita (on normalized distributions) is sqrt(2)
    const similarity = 1 - distance / Math.sqrt(2);
    return Math.max(0, Math.min(1, similarity));
}

/**
 * Calculates the normalized Squared-Chord similarity between two vectors.
 * The result is mapped to the [0, 1] range using linear scaling.
 * Note: Inputs are normalized to probability distributions internally by the underlying functions.
 * @param P - The first vector.
 * @param Q - The second vector.
 * @returns The normalized Squared-Chord similarity.
 */
export function normalizedSquaredChordSimilarity(P: number[], Q: number[]): number {
    // squaredChordDistance now handles normalization internally
    const distance = squaredChordDistance(P, Q);
    // Max distance for Squared Chord (on normalized distributions) is 2
    const similarity = 1 - distance / 2;
    return Math.max(0, Math.min(1, similarity));
}
