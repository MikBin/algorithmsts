/**
 * Compute the Normalized Dimension-Relative Manhattan Distance similarity score between two numeric vectors L and T.
 *
 * Formula:
 * ```
 * S = max(0, 1 - (1 / |D|) * sum_{d in D} (|L_d - T_d| / max(|T_d|, eps_d)))
 * ```
 *
 * Defaults:
 * If `epsilon` option is omitted, `eps_d` defaults to Option B: `max(1e-9, 1e-5 * max_i |T_i|)`.
 * If `epsilon` option is a scalar, `eps_d` uses that scalar across all dimensions.
 * If `epsilon` option is an array, `eps_d` uses `epsilon[d]` for dimension `d`.
 *
 * Score S is strictly clamped to [0.0, 1.0].
 *
 * @param L - First numeric vector.
 * @param T - Target / reference numeric vector.
 * @param options - Optional configuration (`epsilon`).
 * @returns Similarity score between 0 and 1.
 * @throws {TypeError} If `L` or `T` is not an array, or contains non-finite elements.
 * @throws {RangeError} If `L` and `T` differ in length or are empty, or if `epsilon` options are invalid.
 *
 * Time complexity: O(n). Space complexity: O(1).
 */

import { validateVectors } from './internal/validateVectors';

export interface NormalizedDimensionRelativeManhattanOptions {
  epsilon?: number | number[];
}

function normalizedDimensionRelativeManhattanSimilarity(
  L: number[],
  T: number[],
  options: NormalizedDimensionRelativeManhattanOptions = {}
): number {
  const n = validateVectors(L, T);

  const { epsilon } = options;

  let getEps: (d: number) => number;

  if (epsilon !== undefined) {
    if (typeof epsilon === 'number') {
      if (!Number.isFinite(epsilon) || epsilon <= 0) {
        throw new RangeError(
          `Invalid option epsilon: expected a positive finite number or array of positive finite numbers, received ${String(
            epsilon
          )}.`
        );
      }
      getEps = () => epsilon;
    } else if (Array.isArray(epsilon)) {
      if (epsilon.length !== n) {
        throw new RangeError(
          `Invalid option epsilon array length: expected ${n}, received ${epsilon.length}.`
        );
      }
      for (let i = 0; i < n; i++) {
        const val = epsilon[i];
        if (typeof val !== 'number' || !Number.isFinite(val) || val <= 0) {
          throw new RangeError(
            `Invalid option epsilon element at index ${i}: expected a positive finite number, received ${String(
              val
            )}.`
          );
        }
      }
      getEps = (d: number) => epsilon[d];
    } else {
      throw new TypeError(
        `Invalid option epsilon: expected a number or number array, received ${typeof epsilon}.`
      );
    }
  } else {
    // Default Option B: relative epsilon based on max magnitude of T
    let maxAbsT = 0;
    for (let i = 0; i < n; i++) {
      const absTi = Math.abs(T[i]);
      if (absTi > maxAbsT) {
        maxAbsT = absTi;
      }
    }
    const defaultEps = Math.max(1e-9, 1e-5 * maxAbsT);
    getEps = () => defaultEps;
  }

  let totalRelativeDiff = 0;

  for (let d = 0; d < n; d++) {
    const lVal = L[d];
    const tVal = T[d];
    const absTVal = Math.abs(tVal);
    const epsD = getEps(d);

    const denom = Math.max(absTVal, epsD);
    const diff = Math.abs(lVal - tVal);

    totalRelativeDiff += diff / denom;
  }

  const meanRelativeDiff = totalRelativeDiff / n;
  const rawScore = 1 - meanRelativeDiff;

  return Math.max(0, Math.min(1, rawScore));
}

export { normalizedDimensionRelativeManhattanSimilarity };
