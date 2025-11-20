/**
 * Computes the dot product of two vectors.
 * @param a - The first vector.
 * @param b - The second vector.
 * @returns The dot product.
 */
function dotProduct(a: number[], b: number[]): number {
  let sum = 0;
  for (let i = 0; i < a.length; i++) {
    sum += a[i] * b[i];
  }
  return sum;
}

/**
 * Computes the squared Euclidean distance between two vectors.
 * @param a - The first vector.
 * @param b - The second vector.
 * @returns The squared Euclidean distance.
 */
function squaredEuclideanDistance(a: number[], b: number[]): number {
  let sum = 0;
  for (let i = 0; i < a.length; i++) {
    const diff = a[i] - b[i];
    sum += diff * diff;
  }
  return sum;
}

/**
 * Normalized Polynomial Kernel Similarity.
 * K(x, y) = (x . y + c)^d
 * Similarity = K(x, y) / sqrt(K(x, x) * K(y, y))
 *
 * @param a - The first vector.
 * @param b - The second vector.
 * @param degree - The degree of the polynomial (default: 2 for quadratic).
 * @param constant - The constant term c (default: 1).
 * @returns The normalized similarity score [-1, 1].
 */
export function polynomialKernelSimilarity(
  a: number[],
  b: number[],
  degree: number = 2,
  constant: number = 1
): number {
  if (a.length !== b.length) {
    throw new Error("Vectors must have the same length");
  }

  const kernel = (v1: number[], v2: number[]) => {
    return Math.pow(dotProduct(v1, v2) + constant, degree);
  };

  const k_ab = kernel(a, b);
  const k_aa = kernel(a, a);
  const k_bb = kernel(b, b);

  if (k_aa === 0 || k_bb === 0) return 0;

  return k_ab / Math.sqrt(k_aa * k_bb);
}

/**
 * Normalized Radial Basis Function (RBF) Kernel Similarity.
 * K(x, y) = exp(-gamma * ||x - y||^2)
 * Since K(x, x) = 1 for RBF, the normalized version is just K(x, y).
 *
 * @param a - The first vector.
 * @param b - The second vector.
 * @param gamma - The gamma parameter (default: 0.1).
 * @returns The similarity score [0, 1].
 */
export function rbfKernelSimilarity(
  a: number[],
  b: number[],
  gamma: number = 0.01 // Adjusted default for unnormalized vectors often > 1
): number {
  if (a.length !== b.length) {
    throw new Error("Vectors must have the same length");
  }

  const distSq = squaredEuclideanDistance(a, b);
  return Math.exp(-gamma * distSq);
}
