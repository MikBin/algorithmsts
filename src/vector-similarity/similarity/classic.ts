/**
 * Classic similarity/distance functions module
 * Provides standard implementations for common vector similarity metrics
 * All functions take two vectors (arrays) and return a similarity/distance score
 */

/**
 * Cosine similarity
 * Measures the cosine of the angle between two vectors
 * Range: [-1, 1] (1 means identical direction, -1 means opposite direction)
 */
export function cosineSimilarity(a: number[], b: number[]): number {
  if (a.length !== b.length) {
    throw new Error('Vectors must have the same length');
  }

  let dotProduct = 0;
  let normA = 0;
  let normB = 0;

  for (let i = 0; i < a.length; i++) {
    dotProduct += a[i] * b[i];
    normA += a[i] * a[i];
    normB += b[i] * b[i];
  }

  normA = Math.sqrt(normA);
  normB = Math.sqrt(normB);

  if (normA === 0 && normB === 0) {
    return NaN; // Both vectors are zero vectors
  }
  if (normA === 0 || normB === 0) {
    return 0; // One of the vectors is a zero vector
  }

  return dotProduct / (normA * normB);
}

/**
 * Normalized Cosine similarity
 * Converts Cosine similarity to a score in [0, 1]
 * Range: [0, 1] (1 means identical direction, 0 means opposite direction)
 */
export function normalizedCosineSimilarity(a: number[], b: number[]): number {
  return (1 + cosineSimilarity(a, b)) / 2;
}

/**
 * Euclidean distance
 * Measures the straight-line distance between two vectors
 * Range: [0, ∞) (0 means identical)
 */
export function euclideanDistance(a: number[], b: number[]): number {
  if (a.length !== b.length) {
    throw new Error('Vectors must have the same length');
  }

  let sum = 0;
  for (let i = 0; i < a.length; i++) {
    const diff = a[i] - b[i];
    sum += diff * diff;
  }

  return Math.sqrt(sum);
}

/**
 * Manhattan distance (L1 distance)
 * Measures the sum of absolute differences between vector components
 * Range: [0, ∞) (0 means identical)
 */
export function manhattanDistance(a: number[], b: number[]): number {
  if (a.length !== b.length) {
    throw new Error('Vectors must have the same length');
  }

  let sum = 0;
  for (let i = 0; i < a.length; i++) {
    sum += Math.abs(a[i] - b[i]);
  }

  return sum;
}

/**
 * Jaccard similarity for binary vectors
 * Measures the similarity between two binary sets
 * Range: [0, 1] (1 means identical)
 * Note: For non-binary vectors, treats non-zero values as 1
 */
export function jaccardSimilarity(a: number[], b: number[]): number {
  if (a.length !== b.length) {
    throw new Error('Vectors must have the same length');
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
 * Pearson correlation coefficient
 * Measures the linear correlation between two vectors
 * Range: [-1, 1] (1 means perfect positive correlation, -1 means perfect negative correlation)
 */
export function pearsonCorrelation(a: number[], b: number[]): number {
  if (a.length !== b.length) {
    throw new Error('Vectors must have the same length');
  }

  const n = a.length;
  if (n === 0) return 0;

  let sumA = 0,
    sumB = 0;
  let sumASq = 0,
    sumBSq = 0;
  let sumAB = 0;

  for (let i = 0; i < n; i++) {
    sumA += a[i];
    sumB += b[i];
    sumASq += a[i] * a[i];
    sumBSq += b[i] * b[i];
    sumAB += a[i] * b[i];
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
    // Handle constant vectors. If both are constant and identical, correlation is 1.
    if (denomA === 0 && denomB === 0) {
        if (meanA === meanB) {
            return 1;
        }
    }
    return NaN; 
  }

  return numerator / Math.sqrt(denomA * denomB);
}

export const pearsonCorrelationSimilarity = (a: number[], b: number[]): number => {
  return (1 + pearsonCorrelation(a, b)) / 2;
}
/**
 * Dot product
 * Measures both the direction and magnitude of the vectors
 * Range: (-∞, ∞)
 */
export function dotProduct(a: number[], b: number[]): number {
  if (a.length !== b.length) {
    throw new Error('Vectors must have the same length');
  }

  let sum = 0;
  for (let i = 0; i < a.length; i++) {
    sum += a[i] * b[i];
  }

  return sum;
}

/**
 * Convert distance to similarity (for functions that return distances)
 * Higher values indicate more similarity
 */
export function distanceToSimilarity(
  distance: number,
  maxDistance: number | null = null
): number {
  if (maxDistance === null) {
    // Simple inverse transformation
    return distance === 0 ? 1 : 1 / (1 + distance);
  }
  return 1 - distance / maxDistance;
}

/**
 * Euclidean similarity (converted from distance)
 * Range: [0, 1] (1 means identical)
 */
export function euclideanSimilarity(a: number[], b: number[]): number {
  const distance = euclideanDistance(a, b);
  return distanceToSimilarity(distance);
}

/**
 * Manhattan similarity (converted from distance)
 * Range: [0, 1] (1 means identical)
 */
export function manhattanSimilarity(a: number[], b: number[]): number {
  const distance = manhattanDistance(a, b);
  return distanceToSimilarity(distance);
}

/**
 * Angular distance
 * Measures the angle between two vectors, normalized to [0, 1]
 * Range: [0, 1] (0 means identical direction)
 */
export function angularDistance(a: number[], b: number[]): number {
  const sim = cosineSimilarity(a, b);
  // Clamp sim to the range [-1, 1] to avoid Math.acos domain errors
  const clampedSim = Math.max(-1, Math.min(1, sim));
  return Math.acos(clampedSim) / Math.PI;
}

/**
 * Angular similarity
 * Converts angular distance to a similarity score
 * Range: [0, 1] (1 means identical direction)
 */
export function angularSimilarity(a: number[], b: number[]): number {
  return 1 - angularDistance(a, b);
}

/**
 * Dice coefficient
 * Measures the similarity between two sets, sensitive to the magnitude of the vectors
 * Range: [0, 1] (1 means identical)
 */
export function diceCoefficient(a: number[], b: number[]): number {
  if (a.length !== b.length) {
    throw new Error('Vectors must have the same length');
  }

  const dotProd = dotProduct(a, b);
  let normASq = 0;
  let normBSq = 0;

  for (let i = 0; i < a.length; i++) {
    normASq += a[i] * a[i];
    normBSq += b[i] * b[i];
  }

  const denominator = normASq + normBSq;
  return denominator === 0 ? 1 : (2 * dotProd) / denominator;
}

/**
 * Dice distance
 * Converts Dice coefficient to a distance score
 * Range: [0, 1] (0 means identical)
 */
export function diceDistance(a: number[], b: number[]): number {
  return 1 - diceCoefficient(a, b);
}

/**
 * Chebyshev distance (L∞ distance)
 * Measures the maximum absolute difference between vector components
 * Range: [0, ∞) (0 means identical)
 */
export function chebyshevDistance(a: number[], b: number[]): number {
  if (a.length !== b.length) {
    throw new Error('Vectors must have the same length');
  }

  let maxDiff = 0;
  for (let i = 0; i < a.length; i++) {
    maxDiff = Math.max(maxDiff, Math.abs(a[i] - b[i]));
  }

  return maxDiff;
}

/**
 * Chebyshev similarity
 * Converts Chebyshev distance to a similarity score
 * Range: [0, 1] (1 means identical)
 */
export function chebyshevSimilarity(a: number[], b: number[]): number {
  const distance = chebyshevDistance(a, b);
  return distanceToSimilarity(distance);
}

/**
 * Gower distance
 * A distance measure for mixed data types, normalized by the range of each variable
 * Range: [0, 1] (0 means identical)
 */
export function gowerDistance(a: number[], b: number[], ranges: number[]): number {
  if (a.length !== b.length || a.length !== ranges.length) {
    throw new Error('Vectors and ranges must have the same length');
  }

  let sum = 0;
  for (let i = 0; i < a.length; i++) {
    if (ranges[i] > 0) {
      sum += Math.abs(a[i] - b[i]) / ranges[i];
    }
  }

  return sum / a.length;
}

/**
 * Gower similarity
 * Converts Gower distance to a similarity score
 * Range: [0, 1] (1 means identical)
 */
export function gowerSimilarity(a: number[], b: number[], ranges: number[]): number {
  return 1 - gowerDistance(a, b, ranges);
}

/**
 * Soergel distance
 * A distance measure for sets, equivalent to Jaccard distance for binary vectors
 * Range: [0, 1] (0 means identical)
 */
export function soergelDistance(a: number[], b: number[]): number {
  if (a.length !== b.length) {
    throw new Error('Vectors must have the same length');
  }

  let numerator = 0;
  let denominator = 0;

  for (let i = 0; i < a.length; i++) {
    numerator += Math.abs(a[i] - b[i]);
    denominator += Math.max(a[i], b[i]);
  }

  return denominator === 0 ? 0 : numerator / denominator;
}

/**
 * Soergel similarity
 * Converts Soergel distance to a similarity score
 * Range: [0, 1] (1 means identical)
 */
export function soergelSimilarity(a: number[], b: number[]): number {
  return 1 - soergelDistance(a, b);
}

/**
 * Kulczynski distance
 * A distance measure that is sensitive to differences in the magnitudes of the vectors
 * Range: [0, ∞) (0 means identical)
 */
export function kulczynskiDistance(a: number[], b: number[]): number {
  if (a.length !== b.length) {
    throw new Error('Vectors must have the same length');
  }

  let numerator = 0;
  let denominator = 0;

  for (let i = 0; i < a.length; i++) {
    numerator += Math.abs(a[i] - b[i]);
    denominator += Math.min(a[i], b[i]);
  }

  return denominator === 0 ? 0 : numerator / denominator;
}

/**
 * Kulczynski similarity
 * Converts Kulczynski distance to a similarity score
 * Range: [0, 1] (1 means identical)
 */
export function kulczynskiSimilarity(a: number[], b: number[]): number {
  const distance = kulczynskiDistance(a, b);
  return distanceToSimilarity(distance);
}

/**
 * Canberra distance
 * A weighted version of Manhattan distance, sensitive to small changes near zero
 * Range: [0, ∞) (0 means identical)
 */
export function canberraDistance(a: number[], b: number[]): number {
  if (a.length !== b.length) {
    throw new Error('Vectors must have the same length');
  }

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
 * Canberra similarity
 * Converts Canberra distance to a similarity score
 * Range: [0, 1] (1 means identical)
 */
export function canberraSimilarity(a: number[], b: number[]): number {
  const distance = canberraDistance(a, b);
  return distanceToSimilarity(distance);
}

/**
 * Lorentzian distance
 * A distance measure that is less sensitive to outliers than Euclidean distance
 * Range: [0, ∞) (0 means identical)
 */
export function lorentzianDistance(a: number[], b: number[]): number {
  if (a.length !== b.length) {
    throw new Error('Vectors must have the same length');
  }

  let sum = 0;
  for (let i = 0; i < a.length; i++) {
    sum += Math.log(1 + Math.abs(a[i] - b[i]));
  }

  return sum;
}

/**
 * Lorentzian similarity
 * Converts Lorentzian distance to a similarity score
 * Range: [0, 1] (1 means identical)
 */
export function lorentzianSimilarity(a: number[], b: number[]): number {
  const distance = lorentzianDistance(a, b);
  return distanceToSimilarity(distance);
}
