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

  if (normA === 0 || normB === 0) {
    return 0; // Handle zero vectors
  }

  return dotProduct / (normA * normB);
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
    return 0; // Handle constant vectors
  }

  return numerator / Math.sqrt(denomA * denomB);
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
