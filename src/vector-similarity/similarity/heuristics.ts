/**
 * Advanced Vector Similarity Heuristics Module
 *
 * This module provides a collection of additional vector similarity heuristics,
 * each accepting two input vectors and returning a similarity score in [0, 1].
 *
 * Key features:
 * - Comprehensive input validation
 * - Consistent error handling
 * - Support for weighted metrics
 * - Numerically stable implementations
 */

interface MinkowskiOptions {
  p?: number;
  weights?: number[] | null;
}

/**
 * Weighted Minkowski Distance converted to Similarity
 *
 * The weighted Minkowski distance is defined as:
 * d(A,B) = (Σ(wi * |Ai - Bi|^p))^(1/p)
 *
 * Where:
 * - p is the order (p=1 for Manhattan, p=2 for Euclidean, etc.)
 * - wi are the weights for each dimension
 * - Results are converted to similarity: similarity = 1 / (1 + normalized_distance)
 *
 * @param {number[]} A - First numeric vector
 * @param {number[]} B - Second numeric vector
 * @param {MinkowskiOptions} [options] - Configuration options
 * @returns {number} Similarity score in [0, 1]
 * @throws {TypeError} If inputs are invalid
 */
export function weightedMinkowskiSimilarity(
  A: number[],
  B: number[],
  options: MinkowskiOptions = {}
): number {
  if (!Array.isArray(A)) {
    throw new TypeError('Invalid input: A must be an array.');
  }
  if (!Array.isArray(B)) {
    throw new TypeError('Invalid input: B must be an array.');
  }

  const n = A.length;
  if (n === 0 || B.length === 0) {
    throw new Error('Invalid input: Vectors must be non-empty arrays.');
  }
  if (n !== B.length) {
    throw new Error('Invalid input: Vectors must have the same length.');
  }

  // Validate elements
  for (let i = 0; i < n; i++) {
    if (!Number.isFinite(A[i])) {
      throw new Error(
        `Invalid element in A at index ${i}: must be finite number`
      );
    }
    if (!Number.isFinite(B[i])) {
      throw new Error(
        `Invalid element in B at index ${i}: must be finite number`
      );
    }
  }

  const { p = 2, weights = null } = options;
  if (!Number.isFinite(p) || p <= 0) {
    throw new Error('Invalid option p: must be a positive finite number');
  }
  if (weights !== null) {
    if (!Array.isArray(weights) || weights.length !== n) {
      throw new Error(
        'Invalid option weights: must be array of same length as input vectors'
      );
    }
    for (let i = 0; i < n; i++) {
      if (!Number.isFinite(weights[i]) || weights[i] < 0) {
        throw new Error(
          `Invalid weight at index ${i}: must be non-negative finite number`
        );
      }
    }
  }

  // Compute weighted Minkowski distance
  let sum = 0;
  for (let i = 0; i < n; i++) {
    const diff = Math.abs(A[i] - B[i]);
    const weight = weights ? weights[i] : 1;
    sum += weight * Math.pow(diff, p);
  }

  const distance = Math.pow(sum, 1 / p);

  // Convert to similarity using exponential decay for numerical stability
  const similarity = 1 / (1 + distance);

  return Math.max(0, Math.min(1, similarity));
}

/**
 * Canberra Similarity
 *
 * The Canberra distance is:
 * d(A,B) = Σ(|Ai - Bi| / (|Ai| + |Bi|))
 *
 * Handles the special case where both Ai and Bi are zero (adds 0 to distance).
 * Returns similarity = 1 / (1 + normalized_distance)
 *
 * @param {number[]} A - First numeric vector
 * @param {number[]} B - Second numeric vector
 * @returns {number} Similarity score in [0, 1]
 */
export function canberraSimilarity(A: number[], B: number[]): number {
  if (!Array.isArray(A) || !Array.isArray(B)) {
    throw new TypeError('Inputs must be arrays.');
  }
  if (A.length !== B.length || A.length === 0) {
    throw new Error('Vectors must be non-empty and of same length.');
  }

  let distance = 0;
  let validTerms = 0;

  for (let i = 0; i < A.length; i++) {
    if (!Number.isFinite(A[i]) || !Number.isFinite(B[i])) {
      throw new Error(
        `Invalid elements at index ${i}: must be finite numbers`
      );
    }

    const numerator = Math.abs(A[i] - B[i]);
    const denominator = Math.abs(A[i]) + Math.abs(B[i]);

    // Skip term if both values are zero (0/0 case)
    if (denominator > 0) {
      distance += numerator / denominator;
      validTerms++;
    }
  }

  if (validTerms === 0) {
    return 1; // All zero vectors
  }

  // Normalize by number of valid terms and convert to similarity
  const normalizedDistance = distance / validTerms;
  const similarity = 1 / (1 + normalizedDistance);

  return Math.max(0, Math.min(1, similarity));
}

/**
 * Chebyshev Similarity (L-infinity distance)
 *
 * Chebyshev distance is the maximum absolute difference:
 * d(A,B) = max(|Ai - Bi|)
 *
 * @param {number[]} A - First numeric vector
 * @param {number[]} B - Second numeric vector
 * @returns {number} Similarity score in [0, 1]
 */
export function chebyshevSimilarity(A: number[], B: number[]): number {
  if (!Array.isArray(A) || !Array.isArray(B)) {
    throw new TypeError('Inputs must be arrays.');
  }
  if (A.length !== B.length || A.length === 0) {
    throw new Error('Vectors must be non-empty and of same length.');
  }

  let maxDiff = 0;

  for (let i = 0; i < A.length; i++) {
    if (!Number.isFinite(A[i]) || !Number.isFinite(B[i])) {
      throw new Error(
        `Invalid elements at index ${i}: must be finite numbers`
      );
    }

    const diff = Math.abs(A[i] - B[i]);
    if (diff > maxDiff) {
      maxDiff = diff;
    }
  }

  // Convert to similarity using exponential decay
  const similarity = 1 / (1 + maxDiff);

  return Math.max(0, Math.min(1, similarity));
}

/**
 * Bray-Curtis Similarity
 *
 * Bray-Curtis distance is commonly used in ecology:
 * d(A,B) = Σ|Ai - Bi| / Σ(Ai + Bi)
 *
 * Returns the Bray-Curtis similarity directly (1 - distance).
 *
 * @param {number[]} A - First numeric vector (should be non-negative)
 * @param {number[]} B - Second numeric vector (should be non-negative)
 * @returns {number} Similarity score in [0, 1]
 */
export function brayCurtisSimilarity(A: number[], B: number[]): number {
  if (!Array.isArray(A) || !Array.isArray(B)) {
    throw new TypeError('Inputs must be arrays.');
  }
  if (A.length !== B.length || A.length === 0) {
    throw new Error('Vectors must be non-empty and of same length.');
  }

  let sumDiff = 0;
  let sumTotal = 0;

  for (let i = 0; i < A.length; i++) {
    if (!Number.isFinite(A[i]) || !Number.isFinite(B[i])) {
      throw new Error(
        `Invalid elements at index ${i}: must be finite numbers`
      );
    }
    if (A[i] < 0 || B[i] < 0) {
      throw new Error(
        `Negative values not allowed at index ${i}: Bray-Curtis requires non-negative inputs`
      );
    }

    sumDiff += Math.abs(A[i] - B[i]);
    sumTotal += A[i] + B[i];
  }

  if (sumTotal === 0) {
    return 1; // Both vectors are all zeros
  }

  // Bray-Curtis similarity = 1 - distance
  const similarity = 1 - sumDiff / sumTotal;

  return Math.max(0, Math.min(1, similarity));
}

interface MeanSimilarityOptions {
  epsilon?: number;
}

/**
 * Harmonic Mean Similarity
 *
 * Uses the harmonic mean of individual coordinate similarities.
 * For each coordinate i:
 *   similarity_i = 1 - (|Ai - Bi| / (|Ai| + |Bi| + epsilon))
 *
 * @param {number[]} A - First numeric vector
 * @param {number[]} B - Second numeric vector
 * @param {MeanSimilarityOptions} [options] - Configuration options
 * @returns {number} Similarity score in [0, 1]
 */
export function harmonicMeanSimilarity(
  A: number[],
  B: number[],
  options: MeanSimilarityOptions = {}
): number {
  if (!Array.isArray(A) || !Array.isArray(B)) {
    throw new TypeError('Inputs must be arrays.');
  }
  if (A.length !== B.length || A.length === 0) {
    throw new Error('Vectors must be non-empty and of same length.');
  }

  const { epsilon = 1e-10 } = options;

  let sumReciprocal = 0;
  let validCount = 0;

  for (let i = 0; i < A.length; i++) {
    if (!Number.isFinite(A[i]) || !Number.isFinite(B[i])) {
      throw new Error(
        `Invalid elements at index ${i}: must be finite numbers`
      );
    }

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

  // Harmonic mean: n / Σ(1/xi)
  const similarity = validCount / sumReciprocal;

  return Math.max(0, Math.min(1, similarity));
}

/**
 * Wave-Hedges Similarity
 *
 * A robust similarity metric that is resistant to outliers. It calculates the
 * similarity for each dimension as the ratio of the absolute difference to the
 * maximum absolute value of the pair, then averages these ratios.
 *
 * similarity = (1/n) * Σ(1 - (|Ai - Bi| / max(|Ai|, |Bi|)))
 *
 * @param {number[]} A - First numeric vector
 * @param {number[]} B - Second numeric vector
 * @returns {number} Similarity score in [0, 1]
 */
export function waveHedgesSimilarity(A: number[], B: number[]): number {
  if (!Array.isArray(A) || !Array.isArray(B)) {
    throw new TypeError('Inputs must be arrays.');
  }
  if (A.length !== B.length || A.length === 0) {
    throw new Error('Vectors must be non-empty and of the same length.');
  }

  let sum = 0;
  for (let i = 0; i < A.length; i++) {
    if (!Number.isFinite(A[i]) || !Number.isFinite(B[i])) {
      throw new Error(
        `Invalid elements at index ${i}: must be finite numbers`
      );
    }
    const a = A[i];
    const b = B[i];

    if (a === b) {
      sum += 1;
      continue;
    }

    const maxVal = Math.max(Math.abs(a), Math.abs(b));
    if (maxVal === 0) {
      sum += 1; // Both are 0, so they are perfectly similar
    } else {
      const diff = Math.abs(a - b);
      sum += 1 - diff / maxVal;
    }
  }

  const similarity = sum / A.length;
  return Math.max(0, Math.min(1, similarity));
}

/**
 * Kendall Rank Correlation Coefficient (Tau-a)
 *
 * Measures the ordinal association between two vectors. It is non-parametric
 * and does not assume linearity. The coefficient is calculated as:
 * Tau = (C - D) / (C + D), where C is concordant pairs, D is discordant.
 * The result is in [-1, 1].
 *
 * @param {number[]} A - First numeric vector
 * @param {number[]} B - Second numeric vector
 * @returns {number} Kendall's Tau coefficient in [-1, 1]
 */
function kendallCorrelation(A: number[], B: number[]): number {
  if (!Array.isArray(A) || !Array.isArray(B)) {
    throw new TypeError('Inputs must be arrays.');
  }
  if (A.length !== B.length) {
    throw new Error('Vectors must be of the same length.');
  }

  const n = A.length;
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
      // If product is 0, the pair is tied. We ignore ties for Tau-a.
    }
  }

  const totalPairs = (n * (n - 1)) / 2;
  if (totalPairs === 0 || concordant + discordant === 0) {
    return 1.0; // If all pairs are tied, consider it perfect correlation
  }

  return (concordant - discordant) / (concordant + discordant);
}

/**
 * Kendall Rank Correlation Similarity
 *
 * Converts the Kendall's Tau coefficient from [-1, 1] to a similarity
 * score in [0, 1] using the formula: (1 + Tau) / 2.
 *
 * @param {number[]} A - First numeric vector
 * @param {number[]} B - Second numeric vector
 * @returns {number} Similarity score in [0, 1]
 */
export function kendallCorrelationSimilarity(A: number[], B: number[]): number {
  const correlation = kendallCorrelation(A, B);
  return (1 + correlation) / 2;
}
