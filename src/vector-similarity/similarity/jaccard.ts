/**
 * Jaccard Similarity Variants Module
 * Provides multiple implementations of Jaccard similarity for different data types
 * All functions take two vectors (arrays) and return a similarity score in [0, 1]
 */

import { validateVectors } from './internal/validateVectors';

/**
 * Standard Jaccard Similarity for binary/categorical data
 * Measures the similarity between two binary sets
 * Range: [0, 1] (1 means identical)
 * Treats non-zero values as presence (1), zero as absence (0)
 *
 * @param a - First binary vector
 * @param b - Second binary vector
 * @returns Jaccard similarity score in [0, 1]
 * @throws {TypeError} If `a` or `b` is not an array or contains a non-finite element.
 * @throws {RangeError} If `a` and `b` differ in length.
 *
 * Time complexity: O(n). Space complexity: O(1).
 */
export function jaccardSimilarityBinary(a: number[], b: number[]): number {
  validateVectors(a, b, { allowEmpty: true });
  if (a.length === 0) {
    return 1; // Empty sets are identical
  }

  let intersection = 0;
  let union = 0;

  for (let i = 0; i < a.length; i++) {
    const aBinary = a[i] !== 0 ? 1 : 0;
    const bBinary = b[i] !== 0 ? 1 : 0;

    intersection += Math.min(aBinary, bBinary);
    union += Math.max(aBinary, bBinary);
  }

  return union === 0 ? 1 : intersection / union;
}

/**
 * Weighted Jaccard Similarity for weighted sets
 * Measures the similarity between two weighted sets where each element has an associated weight
 * Range: [0, 1] (1 means identical)
 * Uses the actual numeric values as weights
 *
 * @param a - First weighted vector
 * @param b - Second weighted vector
 * @returns Weighted Jaccard similarity score in [0, 1]
 * @throws {TypeError} If `a` or `b` is not an array or contains a non-finite element.
 * @throws {RangeError} If `a` and `b` differ in length.
 *
 * Time complexity: O(n). Space complexity: O(1).
 */
export function jaccardSimilarityWeighted(a: number[], b: number[]): number {
  validateVectors(a, b, { allowEmpty: true });
  if (a.length === 0) {
    return 1; // Empty sets are identical
  }

  let intersection = 0;
  let union = 0;

  for (let i = 0; i < a.length; i++) {
    // Ensure non-negative weights (take absolute value)
    const weightA = Math.abs(a[i]);
    const weightB = Math.abs(b[i]);

    intersection += Math.min(weightA, weightB);
    union += Math.max(weightA, weightB);
  }

  return union === 0 ? 1 : intersection / union;
}

/**
 * Real-valued Jaccard Similarity for continuous data
 * Measures the similarity between two continuous vectors
 * Range: [0, 1] (1 means identical)
 * Uses the absolute values of the real values to handle negative inputs robustly.
 *
 * This is an alias of {@link jaccardSimilarityWeighted}; the weighted variant
 * is the mathematically equivalent form for real-valued (magnitude-based) inputs.
 *
 * @param a - First real-valued vector
 * @param b - Second real-valued vector
 * @returns Real-valued Jaccard similarity score in [0, 1]
 * @throws {TypeError} If `a` or `b` is not an array or contains a non-finite element.
 * @throws {RangeError} If `a` and `b` differ in length.
 */
export const jaccardSimilarityRealValued = jaccardSimilarityWeighted;
