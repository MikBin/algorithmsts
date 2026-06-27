
import { validateVectors } from './internal/validateVectors';

/**
 * Fidelity / Hellinger / Matusita / Squared-Chord family module.
 *
 * Shared contract for every function in this module:
 * - Time complexity: O(n). Space complexity: O(1).
 * - Inputs are internally normalized to probability distributions.
 * - @throws {TypeError} if either argument is not an array or contains a non-finite element.
 * - @throws {RangeError} if the vectors differ in length or are empty.
 */

/**
 * Calculates the Fidelity similarity (Bhattacharyya coefficient) between two vectors.
 * The vectors are internally normalized to probability distributions to ensure robustness.
 * @param P - The first vector.
 * @param Q - The second vector.
 * @returns The Fidelity similarity in [0, 1].
 */
export function fidelitySimilarity(P: number[], Q: number[]): number {
  validateVectors(P, Q);

  // Robust normalization helper
  const normalize = (v: number[]) => {
      let sum = 0;
      for(const x of v) sum += Math.abs(x);
      if (sum === 0) return v.map(() => 1 / v.length);
      return v.map(x => Math.abs(x) / sum);
  };

  const pNorm = normalize(P);
  const qNorm = normalize(Q);

  return pNorm.reduce((sum, p, i) => sum + Math.sqrt(p * qNorm[i]), 0);
}

/**
 * Calculates the Hellinger distance between two vectors.
 * @param P - The first vector.
 * @param Q - The second vector.
 * @returns The Hellinger distance.
 */
export function hellingerDistance(P: number[], Q: number[]): number {
  const fidelity = fidelitySimilarity(P, Q);
  // fidelity is in [0, 1], so 1 - fidelity is in [0, 1]
  return Math.sqrt(Math.max(0, 1 - fidelity));
}

/**
 * Calculates the Matusita distance between two vectors.
 * Matusita distance = sqrt(sum((sqrt(p) - sqrt(q))^2))
 * @param P - The first vector.
 * @param Q - The second vector.
 * @returns The Matusita distance.
 */
export function matusitaDistance(P: number[], Q: number[]): number {
  validateVectors(P, Q);

  const normalize = (v: number[]) => {
      let sum = 0;
      for(const x of v) sum += Math.abs(x);
      if (sum === 0) return v.map(() => 1 / v.length);
      return v.map(x => Math.abs(x) / sum);
  };

  const pNorm = normalize(P);
  const qNorm = normalize(Q);

  const squaredChord = pNorm.reduce((sum, p, i) => sum + Math.pow(Math.sqrt(p) - Math.sqrt(qNorm[i]), 2), 0);
  return Math.sqrt(squaredChord);
}

/**
 * Calculates the Squared-Chord distance between two vectors.
 * @param P - The first vector.
 * @param Q - The second vector.
 * @returns The Squared-Chord distance.
 */
export function squaredChordDistance(P: number[], Q: number[]): number {
  validateVectors(P, Q);

  const normalize = (v: number[]) => {
      let sum = 0;
      for(const x of v) sum += Math.abs(x);
      if (sum === 0) return v.map(() => 1 / v.length);
      return v.map(x => Math.abs(x) / sum);
  };

  const pNorm = normalize(P);
  const qNorm = normalize(Q);

  return pNorm.reduce((sum, p, i) => sum + Math.pow(Math.sqrt(p) - Math.sqrt(qNorm[i]), 2), 0);
}

/**
 * Calculates the Hellinger similarity between two vectors.
 * Derived from Hellinger distance: 1 - HellingerDistance.
 * Range: [0, 1]
 * @param P - The first vector.
 * @param Q - The second vector.
 * @returns The Hellinger similarity.
 */
export function hellingerSimilarity(P: number[], Q: number[]): number {
  return 1 - hellingerDistance(P, Q);
}
