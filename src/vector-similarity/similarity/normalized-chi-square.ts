
import { pearsonChiSquareDistance, neymanChiSquareDistance, additiveSymmetricChiSquareDistance, squaredChiSquareDistance } from './chi-square';

/**
 * Calculates the normalized Pearson Chi-Square similarity between two vectors.
 * The result is mapped to the [0, 1] range.
 * @param P - The first vector.
 * @param Q - The second vector.
 * @returns The normalized Pearson Chi-Square similarity.
 */
export function normalizedPearsonChiSquareSimilarity(P: number[], Q: number[]): number {
    const distance = pearsonChiSquareDistance(P, Q);
    return 1 / (1 + distance);
}

/**
 * Calculates the normalized Neyman Chi-Square similarity between two vectors.
 * The result is mapped to the [0, 1] range.
 * @param P - The first vector.
 * @param Q - The second vector.
 * @returns The normalized Neyman Chi-Square similarity.
 */
export function normalizedNeymanChiSquareSimilarity(P: number[], Q: number[]): number {
    const distance = neymanChiSquareDistance(P, Q);
    return 1 / (1 + distance);
}

/**
 * Calculates the normalized Additive Symmetric Chi-Square similarity between two vectors.
 * The result is mapped to the [0, 1] range.
 * @param P - The first vector.
 * @param Q - The second vector.
 * @returns The normalized Additive Symmetric Chi-Square similarity.
 */
export function normalizedAdditiveSymmetricChiSquareSimilarity(P: number[], Q: number[]): number {
    const distance = additiveSymmetricChiSquareDistance(P, Q);
    return 1 / (1 + distance);
}

/**
 * Calculates the normalized Squared Chi-Square similarity between two vectors.
 * The result is mapped to the [0, 1] range.
 * @param P - The first vector.
 * @param Q - The second vector.
 * @returns The normalized Squared Chi-Square similarity.
 */
export function normalizedSquaredChiSquareSimilarity(P: number[], Q: number[]): number {
    const distance = squaredChiSquareDistance(P, Q);
    return 1 / (1 + distance);
}
