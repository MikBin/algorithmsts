/**
 * Intersection similarity measures module
 * Provides implementations for intersection-based similarity and distance metrics.
 * All functions take two vectors (arrays) and return a similarity or distance score.
 */

import { distanceToSimilarity } from './classic.ts';

/**
 * Intersection Similarity
 * Measures the sum of the element-wise minimums of absolute values of two vectors.
 * Returns a normalized similarity score in [0, 1] by dividing by the average magnitude sum (Sørensen-Dice normalization).
 * Range: [0, 1]
 */
export const intersectionSimilarity = (a: number[], b: number[]): number => {
  if (a.length !== b.length) {
    throw new Error('Vectors must have the same length');
  }
  let sumMin = 0;
  let sumA = 0;
  let sumB = 0;

  for (let i = 0; i < a.length; i++) {
      const absA = Math.abs(a[i]);
      const absB = Math.abs(b[i]);
      sumMin += Math.min(absA, absB);
      sumA += absA;
      sumB += absB;
  }

  const denominator = sumA + sumB;
  if (denominator === 0) return 1;

  // Normalize using Sørensen-Dice coefficient approach: 2 * intersection / (sumA + sumB)
  return (2 * sumMin) / denominator;
};

/**
 * Wave Hedges Distance
 * A distance measure based on the element-wise absolute difference divided by the maximum.
 * Range: [0, ∞)
 */
export const waveHedgesDistance = (a: number[], b: number[]): number => {
  if (a.length !== b.length) {
    throw new Error('Vectors must have the same length');
  }
  return a.reduce((acc, val, i) => {
    // Use absolute values for max to handle negative inputs
    const max = Math.max(Math.abs(val), Math.abs(b[i]));
    if (max === 0) {
      return acc;
    }
    return acc + (Math.abs(val - b[i]) / max);
  }, 0);
};

/**
 * Sørensen-Dice Distance
 * A distance measure that is sensitive to differences in the magnitudes of the vectors.
 * Range: [0, 1]
 */
export const sorensenDistance = (a: number[], b: number[]): number => {
  if (a.length !== b.length) {
    throw new Error('Vectors must have the same length');
  }
  // Use absolute values for sums
  const sumA = a.reduce((acc, val) => acc + Math.abs(val), 0);
  const sumB = b.reduce((acc, val) => acc + Math.abs(val), 0);
  const numerator = a.reduce((acc, val, i) => acc + Math.abs(val - b[i]), 0);
  const denominator = sumA + sumB;
  if (denominator === 0) {
    return 0; // Both vectors are zero vectors, distance is 0.
  }
  return numerator / denominator;
};

/**
 * Motyka Similarity
 * A similarity measure based on the sum of minimums divided by the sum of maximums.
 * Range: [0, 1]
 */
export const motykaSimilarity = (a: number[], b: number[]): number => {
  if (a.length !== b.length) {
    throw new Error('Vectors must have the same length');
  }
  // Use absolute values
  const sumMin = a.reduce((acc, val, i) => acc + Math.min(Math.abs(val), Math.abs(b[i])), 0);
  const sumMax = a.reduce((acc, val, i) => acc + Math.max(Math.abs(val), Math.abs(b[i])), 0);
  if (sumMax === 0) {
    return 1; // Both vectors are zero vectors, similarity is 1.
  }
  return sumMin / sumMax;
};

/**
 * Wave Hedges Similarity
 * Converts Wave Hedges distance to a similarity score.
 * Range: [0, 1]
 */
export const waveHedgesSimilarity = (a: number[], b: number[]): number => {
  return distanceToSimilarity(waveHedgesDistance(a, b));
};

/**
 * Sørensen-Dice Similarity
 * Converts Sørensen-Dice distance to a similarity score.
 * Range: [0, 1]
 */
export const sorensenSimilarity = (a: number[], b: number[]): number => {
  return 1 - sorensenDistance(a, b);
};

/**
 * Motyka Distance
 * Converts Motyka similarity to a distance score.
 * Range: [0, 1]
 */
export const motykaDistance = (a: number[], b: number[]): number => {
  return 1 - motykaSimilarity(a, b);
};

/**
 * Intersection Similarity (Normalized)
 * A normalized version of intersection similarity (alias for intersectionSimilarity).
 * Range: [0, 1]
 */
export const intersectionSimilarityNormalized = intersectionSimilarity;

/**
 * Intersection Distance
 * Converts Intersection similarity to a distance score.
 * Range: [0, 1]
 */
export const intersectionDistance = (a: number[], b: number[]): number => {
    return 1 - intersectionSimilarityNormalized(a, b);
}
