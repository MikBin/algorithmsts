import { pearsonCorrelation } from './classic';

/**
 * Correlation distance
 * Measures the dissimilarity between two vectors based on Pearson correlation
 * Range: [0, 2] (0 means perfect positive correlation, 2 means perfect negative correlation)
 * Formula: 1 - PearsonCorrelation(a, b)
 *
 * @param a - First vector
 * @param b - Second vector
 * @returns The correlation distance
 */
export function correlationDistance(a: number[], b: number[]): number {
  const pearson = pearsonCorrelation(a, b);
  return 1 - pearson;
}
