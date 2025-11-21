/**
 * Entropy-based similarity and divergence measures module.
 * These functions treat vectors as probability distributions.
 * Note: For these measures to be mathematically sound, the vectors should be normalized
 * to sum to 1. The functions perform internal normalization of input vectors
 * (using absolute values) to ensure robustness and non-negative results.
 */

import { distanceToSimilarity } from './classic';

/**
 * Helper to normalize vectors to probability distributions (sum = 1)
 */
function toProbabilityDistribution(v: number[]): number[] {
  const sum = v.reduce((acc, val) => acc + Math.abs(val), 0);
  if (sum === 0) {
    // If zero vector, return uniform distribution to avoid division by zero
    return v.map(() => 1 / v.length);
  }
  return v.map(val => Math.abs(val) / sum);
}

/**
 * Kullback-Leibler Divergence (KL Divergence)
 * Measures how one probability distribution P diverges from a second, expected probability distribution Q.
 * D_KL(P || Q) = Σ P(i) * log(P(i) / Q(i))
 * It is asymmetric. Result is in nats (uses natural logarithm).
 * Range: [0, ∞)
 * @param p The "true" distribution.
 * @param q The "approximating" distribution.
 * @returns {number} The KL divergence. Returns Infinity if q[i] is 0 for some i where p[i] is not 0.
 */
export const kullbackLeiblerDivergence = (p: number[], q: number[]): number => {
  if (p.length !== q.length) {
    throw new Error('Vectors must have the same length');
  }

  // Normalize inputs
  const P = toProbabilityDistribution(p);
  const Q = toProbabilityDistribution(q);

  let divergence = 0;
  for (let i = 0; i < P.length; i++) {
    const pi = P[i];
    const qi = Q[i];

    if (pi === 0) {
      continue; // 0 * log(0/qi) is 0
    }
    if (qi === 0) {
      return Infinity; // log(pi/0) is Infinity
    }
    divergence += pi * Math.log(pi / qi);
  }
  return Math.max(0, divergence); // Ensure non-negative due to float precision
};

/**
 * Cross Entropy
 * H(P, Q) = - Σ P(i) * log(Q(i))
 * Related to KL Divergence: H(P, Q) = H(P) + D_KL(P || Q)
 * Range: [0, ∞)
 * @param p The "true" distribution.
 * @param q The "approximating" distribution.
 * @returns {number} The cross-entropy.
 */
export const crossEntropy = (p: number[], q: number[]): number => {
  if (p.length !== q.length) {
    throw new Error('Vectors must have the same length');
  }

  const P = toProbabilityDistribution(p);
  const Q = toProbabilityDistribution(q);

  let entropy = 0;
  for (let i = 0; i < P.length; i++) {
    const pi = P[i];
    const qi = Q[i];

    if (pi === 0) {
      continue;
    }
    if (qi === 0) {
      return Infinity;
    }
    entropy -= pi * Math.log(qi);
  }
  return Math.max(0, entropy);
};


/**
 * Jeffreys Divergence (J-Divergence)
 * A symmetric version of KL Divergence.
 * D_J(P, Q) = D_KL(P || Q) + D_KL(Q || P)
 * Range: [0, ∞)
 */
export const jeffreysDivergence = (p: number[], q: number[]): number => {
  return kullbackLeiblerDivergence(p, q) + kullbackLeiblerDivergence(q, p);
};


/**
 * K-Divergence
 * An asymmetric divergence measure.
 * D_K(P, Q) = D_KL(P || (P+Q)/2)
 * Range: [0, ∞)
 */
export const kDivergence = (p: number[], q: number[]): number => {
  if (p.length !== q.length) {
    throw new Error('Vectors must have the same length');
  }
  // Normalize internally by calling kullbackLeiblerDivergence, but we need the mean of distributions
  const P = toProbabilityDistribution(p);
  const Q = toProbabilityDistribution(q);
  const m = P.map((val, i) => (val + Q[i]) / 2);

  // P and m are already distributions
  // To reuse the internal logic without re-normalizing, we can just implement the loop or trust KL to re-normalize (it's idempotent if sum=1)
  return kullbackLeiblerDivergence(P, m);
};


/**
 * Topsøe Divergence
 * A symmetric divergence measure.
 * D_T(P, Q) = D_KL(P || (P+Q)/2) + D_KL(Q || (P+Q)/2)
 * Range: [0, ∞)
 */
export const topsoeDivergence = (p: number[], q: number[]): number => {
  if (p.length !== q.length) {
    throw new Error('Vectors must have the same length');
  }
  const P = toProbabilityDistribution(p);
  const Q = toProbabilityDistribution(q);
  const m = P.map((val, i) => (val + Q[i]) / 2);

  return kullbackLeiblerDivergence(P, m) + kullbackLeiblerDivergence(Q, m);
};

/**
 * Kullback-Leibler Similarity
 * Converts KL divergence to a similarity score.
 * Range: [0, 1]
 */
export const kullbackLeiblerSimilarity = (p: number[], q: number[]): number => {
  return distanceToSimilarity(kullbackLeiblerDivergence(p, q));
}

/**
 * Jeffreys Similarity
 * Converts Jeffreys divergence to a similarity score.
 * Range: [0, 1]
 */
export const jeffreysSimilarity = (p: number[], q: number[]): number => {
  return distanceToSimilarity(jeffreysDivergence(p, q));
}

/**
 * K-Divergence Similarity
 * Converts K-Divergence to a similarity score.
 * Range: [0, 1]
 */
export const kSimilarity = (p: number[], q: number[]): number => {
  return distanceToSimilarity(kDivergence(p, q));
}

/**
 * Topsøe Similarity
 * Converts Topsøe divergence to a similarity score.
 * Range: [0, 1]
 */
export const topsoeSimilarity = (p: number[], q: number[]): number => {
  return distanceToSimilarity(topsoeDivergence(p, q));
}

/**
 * Cross Entropy Similarity
 * Converts cross entropy to a similarity score.
 * Range: [0, 1]
 */
export const crossEntropySimilarity = (p: number[], q: number[]): number => {
    return distanceToSimilarity(crossEntropy(p, q));
}
