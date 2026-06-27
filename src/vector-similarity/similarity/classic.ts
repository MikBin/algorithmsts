/**
 * Classic similarity/distance functions module.
 * Provides standard implementations for common vector similarity metrics.
 * All functions take two vectors (arrays) and return a similarity/distance score.
 */

import { validateVectors, validateThirdArray } from './internal/validateVectors';

/**
 * Cosine similarity.
 * Measures the cosine of the angle between two vectors.
 * Range: [-1, 1] (1 means identical direction, -1 means opposite direction).
 *
 * @param a - First numeric vector.
 * @param b - Second numeric vector.
 * @returns The cosine similarity in [-1, 1] (0 when either vector is zero).
 * @throws {TypeError} If `a` or `b` is not an array or contains a non-finite element.
 * @throws {RangeError} If `a` and `b` differ in length or are empty.
 *
 * Time complexity: O(n). Space complexity: O(1).
 */
export function cosineSimilarity(a: number[], b: number[]): number {
  validateVectors(a, b);

  let dot = 0;
  let normA = 0;
  let normB = 0;

  for (let i = 0; i < a.length; i++) {
    dot += a[i] * b[i];
    normA += a[i] * a[i];
    normB += b[i] * b[i];
  }

  normA = Math.sqrt(normA);
  normB = Math.sqrt(normB);

  if (normA === 0 || normB === 0) {
    return 0; // One (or both) vector is a zero vector
  }

  return dot / (normA * normB);
}

/**
 * Normalized cosine similarity.
 * Converts cosine similarity to a score in [0, 1].
 * Range: [0, 1] (1 means identical direction, 0 means opposite direction).
 *
 * @param a - First numeric vector.
 * @param b - Second numeric vector.
 * @returns The normalized cosine similarity in [0, 1].
 *
 * Time complexity: O(n). Space complexity: O(1).
 */
export function normalizedCosineSimilarity(a: number[], b: number[]): number {
  return Math.max(0, Math.min(1, (1 + cosineSimilarity(a, b)) / 2));
}

/**
 * Euclidean distance.
 * Measures the straight-line distance between two vectors.
 * Range: [0, ∞) (0 means identical).
 *
 * @param a - First numeric vector.
 * @param b - Second numeric vector.
 * @returns The Euclidean distance.
 * @throws {TypeError} If `a` or `b` is not an array or contains a non-finite element.
 * @throws {RangeError} If `a` and `b` differ in length or are empty.
 *
 * Time complexity: O(n). Space complexity: O(1).
 */
export function euclideanDistance(a: number[], b: number[]): number {
  validateVectors(a, b);

  let sum = 0;
  for (let i = 0; i < a.length; i++) {
    const diff = a[i] - b[i];
    sum += diff * diff;
  }

  return Math.sqrt(sum);
}

/**
 * Squared Euclidean distance.
 * Measures the sum of squared differences between two vectors (avoids the sqrt).
 * Range: [0, ∞) (0 means identical).
 *
 * @param a - First numeric vector.
 * @param b - Second numeric vector.
 * @returns The squared Euclidean distance.
 * @throws {TypeError} If `a` or `b` is not an array or contains a non-finite element.
 * @throws {RangeError} If `a` and `b` differ in length or are empty.
 *
 * Time complexity: O(n). Space complexity: O(1).
 */
export function squaredEuclideanDistance(a: number[], b: number[]): number {
  validateVectors(a, b);

  let sum = 0;
  for (let i = 0; i < a.length; i++) {
    const diff = a[i] - b[i];
    sum += diff * diff;
  }

  return sum;
}

/**
 * Manhattan distance (L1 distance).
 * Measures the sum of absolute differences between vector components.
 * Range: [0, ∞) (0 means identical).
 *
 * @param a - First numeric vector.
 * @param b - Second numeric vector.
 * @returns The Manhattan distance.
 * @throws {TypeError} If `a` or `b` is not an array or contains a non-finite element.
 * @throws {RangeError} If `a` and `b` differ in length or are empty.
 *
 * Time complexity: O(n). Space complexity: O(1).
 */
export function manhattanDistance(a: number[], b: number[]): number {
  validateVectors(a, b);

  let sum = 0;
  for (let i = 0; i < a.length; i++) {
    sum += Math.abs(a[i] - b[i]);
  }

  return sum;
}

/**
 * Pearson correlation coefficient.
 * Measures the linear correlation between two vectors.
 * Range: [-1, 1] (1 means perfect positive correlation, -1 means perfect negative).
 * Returns 0 for empty vectors and for zero-variance (constant) vectors.
 *
 * @param a - First numeric vector.
 * @param b - Second numeric vector.
 * @returns The Pearson correlation in [-1, 1].
 * @throws {TypeError} If `a` or `b` is not an array or contains a non-finite element.
 * @throws {RangeError} If `a` and `b` differ in length.
 *
 * Time complexity: O(n). Space complexity: O(1).
 */
export function pearsonCorrelation(a: number[], b: number[]): number {
  const n = validateVectors(a, b, { allowEmpty: true });
  if (n === 0) return 0;

  let sumA = 0,
    sumB = 0;
  for (let i = 0; i < n; i++) {
    sumA += a[i];
    sumB += b[i];
  }

  const meanA = sumA / n;
  const meanB = sumB / n;

  let numerator = 0;
  let denomA = 0;
  let denomB = 0;

  for (let i = 0; i < n; i++) {
    const diffA = a[i] - meanA;
    const diffB = b[i] - meanB;
    numerator += diffA * diffB;
    denomA += diffA * diffA;
    denomB += diffB * diffB;
  }

  if (denomA === 0 || denomB === 0) {
    return 0;
  }

  return numerator / Math.sqrt(denomA * denomB);
}

/**
 * Pearson correlation similarity.
 * Maps the Pearson correlation from [-1, 1] to a similarity score in [0, 1].
 * Range: [0, 1].
 *
 * @param a - First numeric vector.
 * @param b - Second numeric vector.
 * @returns The Pearson correlation similarity in [0, 1].
 *
 * Time complexity: O(n). Space complexity: O(1).
 */
export const pearsonCorrelationSimilarity = (a: number[], b: number[]): number => {
  return Math.max(0, Math.min(1, (1 + pearsonCorrelation(a, b)) / 2));
};

/**
 * Dot product.
 * Measures both the direction and magnitude of the vectors.
 * Range: (-∞, ∞).
 *
 * @param a - First numeric vector.
 * @param b - Second numeric vector.
 * @returns The dot product.
 * @throws {TypeError} If `a` or `b` is not an array or contains a non-finite element.
 * @throws {RangeError} If `a` and `b` differ in length or are empty.
 *
 * Time complexity: O(n). Space complexity: O(1).
 */
export function dotProduct(a: number[], b: number[]): number {
  validateVectors(a, b);

  let sum = 0;
  for (let i = 0; i < a.length; i++) {
    sum += a[i] * b[i];
  }

  return sum;
}

/**
 * Convert a distance to a similarity score (for functions that return distances).
 * Higher values indicate more similarity.
 *
 * @param distance - A non-negative distance value.
 * @param maxDistance - Optional maximum distance for linear normalization.
 * @returns A similarity score clamped to [0, 1].
 *
 * Time complexity: O(1). Space complexity: O(1).
 */
export function distanceToSimilarity(
  distance: number,
  maxDistance: number | null = null
): number {
  if (maxDistance === null) {
    const sim = distance === 0 ? 1 : 1 / (1 + distance);
    return Math.max(0, Math.min(1, sim));
  }
  return Math.max(0, Math.min(1, 1 - distance / maxDistance));
}

/**
 * Euclidean similarity (converted from distance).
 * Range: [0, 1] (1 means identical).
 *
 * @param a - First numeric vector.
 * @param b - Second numeric vector.
 * @returns The Euclidean similarity in [0, 1].
 *
 * Time complexity: O(n). Space complexity: O(1).
 */
export function euclideanSimilarity(a: number[], b: number[]): number {
  const distance = euclideanDistance(a, b);
  return distanceToSimilarity(distance);
}

/**
 * Manhattan similarity (converted from distance).
 * Range: [0, 1] (1 means identical).
 *
 * @param a - First numeric vector.
 * @param b - Second numeric vector.
 * @returns The Manhattan similarity in [0, 1].
 *
 * Time complexity: O(n). Space complexity: O(1).
 */
export function manhattanSimilarity(a: number[], b: number[]): number {
  const distance = manhattanDistance(a, b);
  return distanceToSimilarity(distance);
}

/**
 * Angular distance.
 * Measures the angle between two vectors, normalized to [0, 1].
 * Range: [0, 1] (0 means identical direction).
 *
 * @param a - First numeric vector.
 * @param b - Second numeric vector.
 * @returns The angular distance in [0, 1].
 *
 * Time complexity: O(n). Space complexity: O(1).
 */
export function angularDistance(a: number[], b: number[]): number {
  const sim = cosineSimilarity(a, b);
  const clampedSim = Math.max(-1, Math.min(1, sim));
  return Math.acos(clampedSim) / Math.PI;
}

/**
 * Angular similarity.
 * Converts angular distance to a similarity score.
 * Range: [0, 1] (1 means identical direction).
 *
 * @param a - First numeric vector.
 * @param b - Second numeric vector.
 * @returns The angular similarity in [0, 1].
 *
 * Time complexity: O(n). Space complexity: O(1).
 */
export function angularSimilarity(a: number[], b: number[]): number {
  return Math.max(0, Math.min(1, 1 - angularDistance(a, b)));
}

/**
 * Dice coefficient.
 * Measures the similarity between two sets, sensitive to vector magnitudes.
 * Range: [0, 1] (1 means identical).
 *
 * @param a - First numeric vector.
 * @param b - Second numeric vector.
 * @returns The Dice coefficient in [0, 1].
 * @throws {TypeError} If `a` or `b` is not an array or contains a non-finite element.
 * @throws {RangeError} If `a` and `b` differ in length or are empty.
 *
 * Time complexity: O(n). Space complexity: O(1).
 */
export function diceCoefficient(a: number[], b: number[]): number {
  validateVectors(a, b);

  const dot = dotProduct(a, b);
  let normASq = 0;
  let normBSq = 0;

  for (let i = 0; i < a.length; i++) {
    normASq += a[i] * a[i];
    normBSq += b[i] * b[i];
  }

  const denominator = normASq + normBSq;
  return denominator === 0 ? 1 : Math.max(0, Math.min(1, (2 * dot) / denominator));
}

/**
 * Dice distance.
 * Converts the Dice coefficient to a distance score.
 * Range: [0, 1] (0 means identical).
 *
 * @param a - First numeric vector.
 * @param b - Second numeric vector.
 * @returns The Dice distance in [0, 1].
 *
 * Time complexity: O(n). Space complexity: O(1).
 */
export function diceDistance(a: number[], b: number[]): number {
  return Math.max(0, Math.min(1, 1 - diceCoefficient(a, b)));
}

/**
 * Chebyshev distance (L∞ distance).
 * Measures the maximum absolute difference between vector components.
 * Range: [0, ∞) (0 means identical).
 *
 * @param a - First numeric vector.
 * @param b - Second numeric vector.
 * @returns The Chebyshev distance.
 * @throws {TypeError} If `a` or `b` is not an array or contains a non-finite element.
 * @throws {RangeError} If `a` and `b` differ in length or are empty.
 *
 * Time complexity: O(n). Space complexity: O(1).
 */
export function chebyshevDistance(a: number[], b: number[]): number {
  validateVectors(a, b);

  let maxDiff = 0;
  for (let i = 0; i < a.length; i++) {
    maxDiff = Math.max(maxDiff, Math.abs(a[i] - b[i]));
  }

  return maxDiff;
}

/**
 * Chebyshev similarity.
 * Converts Chebyshev distance to a similarity score.
 * Range: [0, 1] (1 means identical).
 *
 * @param a - First numeric vector.
 * @param b - Second numeric vector.
 * @returns The Chebyshev similarity in [0, 1].
 *
 * Time complexity: O(n). Space complexity: O(1).
 */
export function chebyshevSimilarity(a: number[], b: number[]): number {
  const distance = chebyshevDistance(a, b);
  return distanceToSimilarity(distance);
}

/**
 * Gower distance.
 * A distance measure for mixed data types, normalized by the per-variable range.
 * Range: [0, 1] (0 means identical).
 *
 * @param a - First numeric vector.
 * @param b - Second numeric vector.
 * @param ranges - Per-dimension ranges used for normalization.
 * @returns The Gower distance in [0, 1].
 * @throws {TypeError} If any input is not an array or contains a non-finite element.
 * @throws {RangeError} If `a`, `b` and `ranges` differ in length or are empty.
 *
 * Time complexity: O(n). Space complexity: O(1).
 */
export function gowerDistance(a: number[], b: number[], ranges: number[]): number {
  const n = validateVectors(a, b);
  validateThirdArray(ranges, 'ranges', n);

  let sum = 0;
  for (let i = 0; i < n; i++) {
    if (ranges[i] > 0) {
      const normalizedDiff = Math.abs(a[i] - b[i]) / ranges[i];
      sum += Math.min(1, normalizedDiff);
    }
  }

  return sum / n;
}

/**
 * Gower similarity.
 * Converts Gower distance to a similarity score.
 * Range: [0, 1] (1 means identical).
 *
 * @param a - First numeric vector.
 * @param b - Second numeric vector.
 * @param ranges - Per-dimension ranges used for normalization.
 * @returns The Gower similarity in [0, 1].
 *
 * Time complexity: O(n). Space complexity: O(1).
 */
export function gowerSimilarity(a: number[], b: number[], ranges: number[]): number {
  return Math.max(0, Math.min(1, 1 - gowerDistance(a, b, ranges)));
}

/**
 * Soergel distance.
 * Equivalent to the Jaccard distance for binary vectors.
 * Range: [0, 1] (0 means identical).
 *
 * @param a - First numeric vector.
 * @param b - Second numeric vector.
 * @returns The Soergel distance in [0, 1].
 * @throws {TypeError} If `a` or `b` is not an array or contains a non-finite element.
 * @throws {RangeError} If `a` and `b` differ in length or are empty.
 *
 * Time complexity: O(n). Space complexity: O(1).
 */
export function soergelDistance(a: number[], b: number[]): number {
  validateVectors(a, b);

  let numerator = 0;
  let denominator = 0;

  for (let i = 0; i < a.length; i++) {
    numerator += Math.abs(a[i] - b[i]);
    denominator += Math.max(Math.abs(a[i]), Math.abs(b[i]));
  }

  return denominator === 0 ? 0 : numerator / denominator;
}

/**
 * Soergel similarity.
 * Converts Soergel distance to a similarity score.
 * Range: [0, 1] (1 means identical).
 *
 * @param a - First numeric vector.
 * @param b - Second numeric vector.
 * @returns The Soergel similarity in [0, 1].
 *
 * Time complexity: O(n). Space complexity: O(1).
 */
export function soergelSimilarity(a: number[], b: number[]): number {
  return Math.max(0, Math.min(1, 1 - soergelDistance(a, b)));
}

/**
 * Kulczynski distance.
 * Sensitive to differences in the magnitudes of the vectors.
 * Range: [0, ∞) (0 means identical).
 *
 * @param a - First numeric vector.
 * @param b - Second numeric vector.
 * @returns The Kulczynski distance.
 * @throws {TypeError} If `a` or `b` is not an array or contains a non-finite element.
 * @throws {RangeError} If `a` and `b` differ in length or are empty.
 *
 * Time complexity: O(n). Space complexity: O(1).
 */
export function kulczynskiDistance(a: number[], b: number[]): number {
  validateVectors(a, b);

  let numerator = 0;
  let denominator = 0;

  for (let i = 0; i < a.length; i++) {
    numerator += Math.abs(a[i] - b[i]);
    denominator += Math.min(Math.abs(a[i]), Math.abs(b[i]));
  }

  return denominator === 0 ? 0 : numerator / denominator;
}

/**
 * Kulczynski similarity.
 * Converts Kulczynski distance to a similarity score.
 * Range: [0, 1] (1 means identical).
 *
 * @param a - First numeric vector.
 * @param b - Second numeric vector.
 * @returns The Kulczynski similarity in [0, 1].
 *
 * Time complexity: O(n). Space complexity: O(1).
 */
export function kulczynskiSimilarity(a: number[], b: number[]): number {
  const distance = kulczynskiDistance(a, b);
  return distanceToSimilarity(distance);
}

/**
 * Canberra distance.
 * A weighted Manhattan distance, sensitive to small changes near zero.
 * Range: [0, ∞) (0 means identical).
 *
 * @param a - First numeric vector.
 * @param b - Second numeric vector.
 * @returns The Canberra distance.
 * @throws {TypeError} If `a` or `b` is not an array or contains a non-finite element.
 * @throws {RangeError} If `a` and `b` differ in length or are empty.
 *
 * Time complexity: O(n). Space complexity: O(1).
 */
export function canberraDistance(a: number[], b: number[]): number {
  validateVectors(a, b);

  let sum = 0;
  for (let i = 0; i < a.length; i++) {
    const denominator = Math.abs(a[i]) + Math.abs(b[i]);
    if (denominator > 0) {
      sum += Math.abs(a[i] - b[i]) / denominator;
    }
  }

  return sum;
}

/**
 * Lorentzian distance.
 * Less sensitive to outliers than Euclidean distance.
 * Range: [0, ∞) (0 means identical).
 *
 * @param a - First numeric vector.
 * @param b - Second numeric vector.
 * @returns The Lorentzian distance.
 * @throws {TypeError} If `a` or `b` is not an array or contains a non-finite element.
 * @throws {RangeError} If `a` and `b` differ in length or are empty.
 *
 * Time complexity: O(n). Space complexity: O(1).
 */
export function lorentzianDistance(a: number[], b: number[]): number {
  validateVectors(a, b);

  let sum = 0;
  for (let i = 0; i < a.length; i++) {
    sum += Math.log(1 + Math.abs(a[i] - b[i]));
  }

  return sum;
}

/**
 * Lorentzian similarity.
 * Converts Lorentzian distance to a similarity score.
 * Range: [0, 1] (1 means identical).
 *
 * @param a - First numeric vector.
 * @param b - Second numeric vector.
 * @returns The Lorentzian similarity in [0, 1].
 *
 * Time complexity: O(n). Space complexity: O(1).
 */
export function lorentzianSimilarity(a: number[], b: number[]): number {
  const distance = lorentzianDistance(a, b);
  return distanceToSimilarity(distance);
}
