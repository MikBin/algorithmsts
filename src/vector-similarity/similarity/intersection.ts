/**
 * Intersection similarity measures module
 * Provides implementations for intersection-based similarity and distance metrics.
 * All functions take two vectors (arrays) and return a similarity or distance score.
 */

import { distanceToSimilarity } from './classic.ts';

/**
 * Intersection Similarity
 * Measures the sum of the element-wise minimums of two vectors.
 * Range: [0, ∞)
 */
export const intersectionSimilarity = (a: number[], b: number[]): number => {
  if (a.length !== b.length) {
    throw new Error('Vectors must have the same length');
  }
  return a.reduce((acc, val, i) => acc + Math.min(val, b[i]), 0);
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
    const max = Math.max(val, b[i]);
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
  const sumA = a.reduce((acc, val) => acc + val, 0);
  const sumB = b.reduce((acc, val) => acc + val, 0);
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
  const sumMin = a.reduce((acc, val, i) => acc + Math.min(val, b[i]), 0);
  const sumMax = a.reduce((acc, val, i) => acc + Math.max(val, b[i]), 0);
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
 * A normalized version of intersection similarity.
 * Range: [0, 1]
 */
export const intersectionSimilarityNormalized = (a: number[], b: number[]): number => {
    const sumMin = intersectionSimilarity(a, b);
    const sumA = a.reduce((acc, val) => acc + val, 0);
    const sumB = b.reduce((acc, val) => acc + val, 0);
    const denominator = Math.min(sumA, sumB);
    if (denominator === 0) {
        return 1;
    }
    return sumMin / denominator;
};

/**
 * Intersection Distance
 * Converts Intersection similarity to a distance score.
 * Range: [0, 1]
 */
export const intersectionDistance = (a: number[], b: number[]): number => {
    return 1 - intersectionSimilarityNormalized(a, b);
}
