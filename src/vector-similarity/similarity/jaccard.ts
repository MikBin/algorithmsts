/**
 * Jaccard Similarity Variants Module
 * Provides multiple implementations of Jaccard similarity for different data types
 * All functions take two vectors (arrays) and return a similarity score in [0, 1]
 */

/**
 * Standard Jaccard Similarity for binary/categorical data
 * Measures the similarity between two binary sets
 * Range: [0, 1] (1 means identical)
 * Treats non-zero values as presence (1), zero as absence (0)
 *
 * @param {number[]} a - First binary vector
 * @param {number[]} b - Second binary vector
 * @returns {number} Jaccard similarity score
 * @throws {Error} If inputs are not arrays or have mismatched lengths
 */
export function jaccardSimilarityBinary(a: number[], b: number[]): number {
  if (!Array.isArray(a) || !Array.isArray(b)) {
    throw new Error('Inputs must be arrays');
  }
  if (a.length !== b.length) {
    throw new Error('Vectors must have the same length');
  }
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
 * @param {number[]} a - First weighted vector
 * @param {number[]} b - Second weighted vector
 * @returns {number} Weighted Jaccard similarity score
 * @throws {Error} If inputs are not arrays or have mismatched lengths
 */
export function jaccardSimilarityWeighted(a: number[], b: number[]): number {
  if (!Array.isArray(a) || !Array.isArray(b)) {
    throw new Error('Inputs must be arrays');
  }
  if (a.length !== b.length) {
    throw new Error('Vectors must have the same length');
  }
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
 * Uses the actual real values directly in the Jaccard formula
 *
 * @param {number[]} a - First real-valued vector
 * @param {number[]} b - Second real-valued vector
 * @returns {number} Real-valued Jaccard similarity score
 * @throws {Error} If inputs are not arrays or have mismatched lengths
 */
export function jaccardSimilarityRealValued(a: number[], b: number[]): number {
  if (!Array.isArray(a) || !Array.isArray(b)) {
    throw new Error('Inputs must be arrays');
  }
  if (a.length !== b.length) {
    throw new Error('Vectors must have the same length');
  }
  if (a.length === 0) {
    return 1; // Empty vectors are identical
  }

  let intersection = 0;
  let union = 0;

  for (let i = 0; i < a.length; i++) {
    const valA = a[i];
    const valB = b[i];

    intersection += Math.min(valA, valB);
    union += Math.max(valA, valB);
  }

  return union === 0 ? 1 : intersection / union;
}
