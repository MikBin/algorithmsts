/**
 * Advanced Vector Similarity Heuristics Module
 *
 * This module provides a collection of additional vector similarity heuristics,
 * each accepting two input vectors and returning a similarity score in [0, 1].
 */

import { validateVectors, validateThirdArray } from './internal/validateVectors';

export interface MinkowskiOptions {
  p?: number;
  weights?: number[] | null;
}

/**
 * Weighted Minkowski distance converted to similarity.
 * d(A,B) = (Σ(wi * |Ai - Bi|^p))^(1/p), similarity = 1 / (1 + distance).
 *
 * @param A - First numeric vector.
 * @param B - Second numeric vector.
 * @param options - Configuration options (`p` order, `weights`).
 * @returns Similarity score in [0, 1].
 * @throws {TypeError} If `A` or `B` (or `weights`) is not an array or contains a non-finite element.
 * @throws {RangeError} If `A` and `B` differ in length or are empty, or `p`/`weights` are invalid.
 *
 * Time complexity: O(n). Space complexity: O(1).
 */
export function weightedMinkowskiSimilarity(
  A: number[],
  B: number[],
  options: MinkowskiOptions = {}
): number {
  const n = validateVectors(A, B);

  const { p = 2, weights = null } = options;
  if (!Number.isFinite(p) || p <= 0) {
    throw new RangeError('Invalid option p: must be a positive finite number');
  }
  if (weights !== null) {
    validateThirdArray(weights, 'weights', n);
    for (let i = 0; i < n; i++) {
      if (weights[i] < 0) {
        throw new RangeError(
          `Invalid weight at index ${i}: must be non-negative finite number`
        );
      }
    }
  }

  let sum = 0;
  for (let i = 0; i < n; i++) {
    const diff = Math.abs(A[i] - B[i]);
    const weight = weights ? weights[i] : 1;
    sum += weight * Math.pow(diff, p);
  }

  const distance = Math.pow(sum, 1 / p);
  const similarity = 1 / (1 + distance);

  return Math.max(0, Math.min(1, similarity));
}

/**
 * Canberra similarity.
 * d(A,B) = Σ(|Ai - Bi| / (|Ai| + |Bi|)), similarity = 1 / (1 + normalized_distance).
 * Handles the special case where both Ai and Bi are zero (term skipped).
 *
 * @param A - First numeric vector.
 * @param B - Second numeric vector.
 * @returns Similarity score in [0, 1].
 * @throws {TypeError} If `A` or `B` is not an array or contains a non-finite element.
 * @throws {RangeError} If `A` and `B` differ in length or are empty.
 *
 * Time complexity: O(n). Space complexity: O(1).
 */
export function canberraSimilarity(A: number[], B: number[]): number {
  validateVectors(A, B);

  let distance = 0;
  let validTerms = 0;

  for (let i = 0; i < A.length; i++) {
    const numerator = Math.abs(A[i] - B[i]);
    const denominator = Math.abs(A[i]) + Math.abs(B[i]);

    if (denominator > 0) {
      distance += numerator / denominator;
      validTerms++;
    }
  }

  if (validTerms === 0) {
    return 1; // All zero vectors
  }

  const normalizedDistance = distance / validTerms;
  const similarity = 1 / (1 + normalizedDistance);

  return Math.max(0, Math.min(1, similarity));
}

/**
 * Bray-Curtis similarity.
 * d(A,B) = Σ|Ai - Bi| / Σ(|Ai| + |Bi|), similarity = 1 - distance.
 * Uses absolute values of inputs to ensure robustness for general vectors.
 *
 * @param A - First numeric vector.
 * @param B - Second numeric vector.
 * @returns Similarity score in [0, 1].
 * @throws {TypeError} If `A` or `B` is not an array or contains a non-finite element.
 * @throws {RangeError} If `A` and `B` differ in length or are empty.
 *
 * Time complexity: O(n). Space complexity: O(1).
 */
export function brayCurtisSimilarity(A: number[], B: number[]): number {
  validateVectors(A, B);

  let sumDiff = 0;
  let sumTotal = 0;

  for (let i = 0; i < A.length; i++) {
    sumDiff += Math.abs(A[i] - B[i]);
    sumTotal += Math.abs(A[i]) + Math.abs(B[i]);
  }

  if (sumTotal === 0) {
    return 1; // Both vectors are zero vectors
  }

  const similarity = 1 - sumDiff / sumTotal;

  return Math.max(0, Math.min(1, similarity));
}

export interface MeanSimilarityOptions {
  epsilon?: number;
}

/**
 * Harmonic mean similarity.
 * Uses the harmonic mean of coordinate similarities:
 *   similarity_i = 1 - (|Ai - Bi| / (|Ai| + |Bi| + epsilon)).
 *
 * @param A - First numeric vector.
 * @param B - Second numeric vector.
 * @param options - Configuration options (`epsilon`).
 * @returns Similarity score in [0, 1].
 * @throws {TypeError} If `A` or `B` is not an array or contains a non-finite element.
 * @throws {RangeError} If `A` and `B` differ in length or are empty.
 *
 * Time complexity: O(n). Space complexity: O(1).
 */
export function harmonicMeanSimilarity(
  A: number[],
  B: number[],
  options: MeanSimilarityOptions = {}
): number {
  validateVectors(A, B);

  const { epsilon = 1e-10 } = options;

  let sumReciprocal = 0;
  let validCount = 0;

  for (let i = 0; i < A.length; i++) {
    const diff = Math.abs(A[i] - B[i]);
    const denom = Math.abs(A[i]) + Math.abs(B[i]) + epsilon;
    const coordinateSim = 1 - diff / denom;

    if (coordinateSim > 0) {
      sumReciprocal += 1 / coordinateSim;
      validCount++;
    }
  }

  if (validCount === 0) {
    return 0; // All coordinates are identical and zero
  }

  const similarity = validCount / sumReciprocal;

  return Math.max(0, Math.min(1, similarity));
}

/**
 * Kendall rank correlation coefficient (Tau-a).
 * Tau = (C - D) / (C + D), where C is concordant pairs and D is discordant.
 * Result is in [-1, 1]; returns 1 for vectors of length < 2.
 *
 * @param A - First numeric vector.
 * @param B - Second numeric vector.
 * @returns Kendall's Tau coefficient in [-1, 1].
 * @throws {TypeError} If `A` or `B` is not an array or contains a non-finite element.
 * @throws {RangeError} If `A` and `B` differ in length.
 *
 * Time complexity: O(n²). Space complexity: O(1).
 */
function kendallCorrelation(A: number[], B: number[]): number {
  const n = validateVectors(A, B, { allowEmpty: true });
  if (n < 2) {
    return 1.0; // Perfect correlation for single or empty vectors
  }

  let concordant = 0;
  let discordant = 0;

  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      const a_ij = A[i] - A[j];
      const b_ij = B[i] - B[j];
      const product = a_ij * b_ij;

      if (product > 0) {
        concordant++;
      } else if (product < 0) {
        discordant++;
      }
      // If product is 0, the pair is tied. Ties are ignored for Tau-a.
    }
  }

  if (concordant + discordant === 0) {
    return 1.0; // All pairs tied -> perfect correlation
  }

  return (concordant - discordant) / (concordant + discordant);
}

/**
 * Kendall rank correlation similarity.
 * Maps Kendall's Tau from [-1, 1] to a similarity score in [0, 1] via (1 + Tau) / 2.
 *
 * @param A - First numeric vector.
 * @param B - Second numeric vector.
 * @returns Similarity score in [0, 1].
 *
 * Time complexity: O(n²). Space complexity: O(1).
 */
export function kendallCorrelationSimilarity(A: number[], B: number[]): number {
  const correlation = kendallCorrelation(A, B);
  return (1 + correlation) / 2;
}

/**
 * Geometric mean similarity.
 * similarity = (Π(min(|Ai|, |Bi|) / max(|Ai|, |Bi|)))^(1/n).
 *
 * @param A - First numeric vector.
 * @param B - Second numeric vector.
 * @returns Similarity score in [0, 1].
 * @throws {TypeError} If `A` or `B` is not an array or contains a non-finite element.
 * @throws {RangeError} If `A` and `B` differ in length or are empty.
 *
 * Time complexity: O(n). Space complexity: O(1).
 */
export function geometricMeanSimilarity(A: number[], B: number[]): number {
  const n = validateVectors(A, B);

  let productOfRatios = 1;
  for (let i = 0; i < n; i++) {
    const a = A[i];
    const b = B[i];

    if (a === b) {
      continue; // ratio is 1, so no change to product
    }

    const maxVal = Math.max(Math.abs(a), Math.abs(b));
    const minVal = Math.min(Math.abs(a), Math.abs(b));
    productOfRatios *= minVal / maxVal;
  }

  const similarity = Math.pow(productOfRatios, 1 / n);
  return Math.max(0, Math.min(1, similarity));
}

/**
 * Ratio-based similarity.
 * similarity = 1 - (Σ(|Ai - Bi| / (|Ai| + |Bi|))) / n.
 *
 * @param A - First numeric vector.
 * @param B - Second numeric vector.
 * @returns Similarity score in [0, 1].
 * @throws {TypeError} If `A` or `B` is not an array or contains a non-finite element.
 * @throws {RangeError} If `A` and `B` differ in length or are empty.
 *
 * Time complexity: O(n). Space complexity: O(1).
 */
export function ratioBasedSimilarity(A: number[], B: number[]): number {
  const n = validateVectors(A, B);

  let sumOfRatios = 0;
  for (let i = 0; i < n; i++) {
    const a = A[i];
    const b = B[i];
    const denominator = Math.abs(a) + Math.abs(b);

    if (denominator > 0) {
      sumOfRatios += Math.abs(a - b) / denominator;
    }
  }

  const similarity = 1 - sumOfRatios / n;
  return Math.max(0, Math.min(1, similarity));
}
