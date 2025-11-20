
import { matusitaDistance, squaredChordDistance } from './fidelity.ts';

/**
 * Calculates the normalized Matusita similarity between two vectors.
 * The result is mapped to the [0, 1] range using linear scaling.
 * Note: Inputs are normalized to probability distributions internally to ensure the distance is bounded by sqrt(2).
 * @param P - The first vector.
 * @param Q - The second vector.
 * @returns The normalized Matusita similarity.
 */
export function normalizedMatusitaSimilarity(P: number[], Q: number[]): number {
    // Normalize inputs to ensure bounded distance [0, sqrt(2)]
    const pSum = P.reduce((sum, val) => sum + val, 0);
    const qSum = Q.reduce((sum, val) => sum + val, 0);

    if (pSum === 0 || qSum === 0) return 0; // Or 1 if both are 0, but assuming non-empty/non-zero for distribution
    if (pSum === 0 && qSum === 0) return 1;

    const pNorm = P.map(v => v / pSum);
    const qNorm = Q.map(v => v / qSum);

    const distance = matusitaDistance(pNorm, qNorm);
    // Max distance for Matusita is sqrt(2)
    const similarity = 1 - distance / Math.sqrt(2);
    return Math.max(0, Math.min(1, similarity));
}

/**
 * Calculates the normalized Squared-Chord similarity between two vectors.
 * The result is mapped to the [0, 1] range using linear scaling.
 * Note: Inputs are normalized to probability distributions internally to ensure the distance is bounded by 2.
 * @param P - The first vector.
 * @param Q - The second vector.
 * @returns The normalized Squared-Chord similarity.
 */
export function normalizedSquaredChordSimilarity(P: number[], Q: number[]): number {
    // Normalize inputs to ensure bounded distance [0, 2]
    const pSum = P.reduce((sum, val) => sum + val, 0);
    const qSum = Q.reduce((sum, val) => sum + val, 0);

    if (pSum === 0 || qSum === 0) return 0;
    if (pSum === 0 && qSum === 0) return 1;

    const pNorm = P.map(v => v / pSum);
    const qNorm = Q.map(v => v / qSum);

    const distance = squaredChordDistance(pNorm, qNorm);
    // Max distance for Squared Chord is 2
    const similarity = 1 - distance / 2;
    return Math.max(0, Math.min(1, similarity));
}
