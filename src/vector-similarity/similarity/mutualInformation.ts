/**
 * Mutual Information (MI) and Normalized Mutual Information (NMI) implementations.
 * Includes three variants: Gaussian, Histogram-based, and Discrete.
 */

import { pearsonCorrelation } from './classic';

/**
 * Calculates the entropy of a probability distribution.
 * H(X) = -sum(p(x) * log(p(x)))
 * @param probs Array of probabilities (must sum to ~1)
 */
function calculateEntropy(probs: number[]): number {
  let entropy = 0;
  for (const p of probs) {
    if (p > 0) {
      entropy -= p * Math.log(p);
    }
  }
  return entropy;
}

// ==========================================
// 1. Gaussian Mutual Information
// ==========================================

/**
 * Gaussian Mutual Information.
 * Assumes vectors are samples from a bivariate Gaussian distribution.
 * I(X;Y) = -0.5 * ln(1 - rho^2)
 * @param v1 First vector
 * @param v2 Second vector
 * @returns Mutual Information in nats. Returns Infinity if correlation is 1 or -1.
 */
export function gaussianMutualInformation(v1: number[], v2: number[]): number {
  const rho = pearsonCorrelation(v1, v2);
  if (Math.abs(rho) >= 1) return Infinity;
  return -0.5 * Math.log(1 - rho * rho);
}

/**
 * Normalized Gaussian Mutual Information.
 * Uses Geometric Mean normalization: NMI = MI / sqrt(H(X) * H(Y))
 *
 * Note: Differential entropy is not scale invariant and can be negative.
 * Since MI is scale invariant (correlation doesn't change with scaling),
 * we implicitly treat the inputs as if they were standardized (variance = 1)
 * to ensure entropies are positive and comparable for normalization purposes.
 * H(N(0,1)) = 0.5 * ln(2 * pi * e) ≈ 1.4189
 *
 * @param v1 First vector
 * @param v2 Second vector
 * @returns Normalized MI score.
 */
export function normalizedGaussianMutualInformation(v1: number[], v2: number[]): number {
  const mi = gaussianMutualInformation(v1, v2);

  if (mi === Infinity) return 1;
  if (mi === 0) return 0;

  // We assume standardized variance = 1 for the normalization step to be robust against scale.
  // H(X) for var=1 is constant.
  const c = 2 * Math.PI * Math.E;
  const hStandard = 0.5 * Math.log(c * 1); // approx 1.4189

  // Since we "standardize" both X and Y, H(X) = H(Y) = hStandard.
  // NMI = MI / sqrt(hStandard * hStandard) = MI / hStandard.
  const nmi = mi / hStandard;

  // Clamp to [0, 1] as the formula approximations might slightly overshoot for continuous vars
  return Math.min(1, Math.max(0, nmi));
}

// ==========================================
// 2. Histogram-based Mutual Information
// ==========================================

interface JointDistribution {
    jointCounts: Map<string, number>;
    marginal1: number[];
    marginal2: number[];
    n: number;
}

function getHistogramJointDistribution(v1: number[], v2: number[], bins?: number): JointDistribution {
    if (v1.length !== v2.length) throw new Error('Vectors must have same length');
    const n = v1.length;

    const numBins = bins || Math.ceil(Math.sqrt(n));

    // Find ranges
    let min1 = Infinity, max1 = -Infinity;
    let min2 = Infinity, max2 = -Infinity;
    for (let i = 0; i < n; i++) {
      if (v1[i] < min1) min1 = v1[i];
      if (v1[i] > max1) max1 = v1[i];
      if (v2[i] < min2) min2 = v2[i];
      if (v2[i] > max2) max2 = v2[i];
    }

    const range1 = max1 - min1 || 1;
    const range2 = max2 - min2 || 1;

    const jointCounts = new Map<string, number>();
    const marginal1 = new Array(numBins).fill(0);
    const marginal2 = new Array(numBins).fill(0);

    for (let i = 0; i < n; i++) {
      let b1 = Math.floor(((v1[i] - min1) / range1) * numBins);
      let b2 = Math.floor(((v2[i] - min2) / range2) * numBins);
      if (b1 >= numBins) b1 = numBins - 1;
      if (b2 >= numBins) b2 = numBins - 1;

      const key = `${b1},${b2}`;
      jointCounts.set(key, (jointCounts.get(key) || 0) + 1);
      marginal1[b1]++;
      marginal2[b2]++;
    }

    return { jointCounts, marginal1, marginal2, n };
}

/**
 * Histogram-based Mutual Information.
 * Discretizes continuous values into bins to estimate probabilities.
 * @param v1 First vector
 * @param v2 Second vector
 * @param bins Number of bins (default: sqrt(n))
 */
export function histogramMutualInformation(v1: number[], v2: number[], bins?: number): number {
  if (v1.length === 0) return 0;
  const { jointCounts, marginal1, marginal2, n } = getHistogramJointDistribution(v1, v2, bins);

  let mi = 0;
  for (const [key, count] of jointCounts) {
    const [b1, b2] = key.split(',').map(Number);
    const pxy = count / n;
    const px = marginal1[b1] / n;
    const py = marginal2[b2] / n;

    if (pxy > 0) {
      mi += pxy * Math.log(pxy / (px * py));
    }
  }

  return Math.max(0, mi);
}

export function normalizedHistogramMutualInformation(v1: number[], v2: number[], bins?: number): number {
    if (v1.length === 0) return 0;
    const { jointCounts, marginal1, marginal2, n } = getHistogramJointDistribution(v1, v2, bins);

    let mi = 0;
    for (const [key, count] of jointCounts) {
      const [b1, b2] = key.split(',').map(Number);
      const pxy = count / n;
      const px = marginal1[b1] / n;
      const py = marginal2[b2] / n;
      if (pxy > 0) {
        mi += pxy * Math.log(pxy / (px * py));
      }
    }

    const probs1 = marginal1.map(c => c / n);
    const probs2 = marginal2.map(c => c / n);
    const h1 = calculateEntropy(probs1);
    const h2 = calculateEntropy(probs2);

    if (h1 === 0 || h2 === 0) return 0;

    return Math.max(0, mi) / Math.sqrt(h1 * h2);
}

// ==========================================
// 3. Discrete Mutual Information
// ==========================================

interface DiscreteJointDistribution {
    jointCounts: Map<string, number>;
    counts1: Map<number, number>;
    counts2: Map<number, number>;
    n: number;
}

function getDiscreteJointDistribution(v1: number[], v2: number[]): DiscreteJointDistribution {
    if (v1.length !== v2.length) throw new Error('Vectors must have same length');
    const n = v1.length;

    const jointCounts = new Map<string, number>();
    const counts1 = new Map<number, number>();
    const counts2 = new Map<number, number>();

    for (let i = 0; i < n; i++) {
      const val1 = v1[i];
      const val2 = v2[i];
      const key = `${val1}::${val2}`;

      jointCounts.set(key, (jointCounts.get(key) || 0) + 1);
      counts1.set(val1, (counts1.get(val1) || 0) + 1);
      counts2.set(val2, (counts2.get(val2) || 0) + 1);
    }
    return { jointCounts, counts1, counts2, n };
}

/**
 * Discrete Mutual Information.
 * Treats values as categorical labels. Maps unique values to indices.
 * @param v1 First vector
 * @param v2 Second vector
 */
export function discreteMutualInformation(v1: number[], v2: number[]): number {
  if (v1.length === 0) return 0;
  const { jointCounts, counts1, counts2, n } = getDiscreteJointDistribution(v1, v2);

  let mi = 0;
  for (const [key, count] of jointCounts) {
      const sepIndex = key.indexOf('::');
      const val1 = Number(key.substring(0, sepIndex));
      const val2 = Number(key.substring(sepIndex + 2));

      const pxy = count / n;
      const px = counts1.get(val1)! / n;
      const py = counts2.get(val2)! / n;

      if (pxy > 0) {
          mi += pxy * Math.log(pxy / (px * py));
      }
  }

  return Math.max(0, mi);
}

export function normalizedDiscreteMutualInformation(v1: number[], v2: number[]): number {
    if (v1.length === 0) return 0;
    const { jointCounts, counts1, counts2, n } = getDiscreteJointDistribution(v1, v2);

    let mi = 0;
    for (const [key, count] of jointCounts) {
        const sepIndex = key.indexOf('::');
        const val1 = Number(key.substring(0, sepIndex));
        const val2 = Number(key.substring(sepIndex + 2));

        const pxy = count / n;
        const px = counts1.get(val1)! / n;
        const py = counts2.get(val2)! / n;

        if (pxy > 0) {
            mi += pxy * Math.log(pxy / (px * py));
        }
    }

    const probs1 = Array.from(counts1.values()).map(c => c / n);
    const probs2 = Array.from(counts2.values()).map(c => c / n);
    const h1 = calculateEntropy(probs1);
    const h2 = calculateEntropy(probs2);

    if (h1 === 0 || h2 === 0) return 0;

    return Math.max(0, mi) / Math.sqrt(h1 * h2);
}
