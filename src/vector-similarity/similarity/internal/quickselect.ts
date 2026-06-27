/**
 * Order-statistic helpers for robust aggregation (median, MAD).
 *
 * @internal This module is not part of the public package surface.
 */

/**
 * Returns the k-th smallest element (0-based) of a **copy** of `values`.
 * Uses quickselect with median-of-three pivoting.
 *
 * @param values - Input array (not mutated).
 * @param k - Zero-based rank to select (0 ≤ k < values.length).
 * @returns The k-th smallest value.
 *
 * Time complexity: O(n) average, O(n²) worst case. Space complexity: O(n) (copy).
 */
export function quickselectNth(values: readonly number[], k: number): number {
  if (values.length === 0) {
    throw new RangeError('quickselectNth requires a non-empty array.');
  }
  if (k < 0 || k >= values.length) {
    throw new RangeError(
      `quickselectNth: k must be in [0, ${values.length - 1}], received ${k}.`
    );
  }

  const arr = values.slice();

  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const pivotIndex = partition(arr, left, right);
    if (pivotIndex === k) {
      return arr[k];
    }
    if (pivotIndex < k) {
      left = pivotIndex + 1;
    } else {
      right = pivotIndex - 1;
    }
  }

  return arr[k];
}

/**
 * Computes the median of a non-empty numeric array.
 * For even length, returns the average of the two middle order statistics.
 *
 * @param values - Non-empty input array.
 * @returns The median value.
 *
 * Time complexity: O(n) average. Space complexity: O(n) (copy for selection).
 */
export function median(values: readonly number[]): number {
  if (values.length === 0) {
    throw new RangeError('median requires a non-empty array.');
  }

  const n = values.length;
  const mid = Math.floor(n / 2);

  if (n % 2 === 1) {
    return quickselectNth(values, mid);
  }

  const lower = quickselectNth(values, mid - 1);
  const upper = quickselectNth(values, mid);
  return (lower + upper) / 2;
}

/**
 * Computes the median absolute deviation about the median (MAD).
 *
 * ```
 * MAD = median(|values[i] − center|)
 * ```
 *
 * When `center` is omitted, uses `median(values)`.
 * For n = 1, returns 0.
 *
 * @param values - Non-empty input array.
 * @param center - Optional precomputed center (typically median(values)).
 * @returns The MAD value.
 *
 * Time complexity: O(n) average. Space complexity: O(n).
 */
export function medianAbsoluteDeviation(
  values: readonly number[],
  center?: number
): number {
  if (values.length === 0) {
    throw new RangeError('medianAbsoluteDeviation requires a non-empty array.');
  }

  if (values.length === 1) {
    return 0;
  }

  const med = center ?? median(values);
  const deviations = values.map((v) => Math.abs(v - med));
  return median(deviations);
}

function partition(arr: number[], left: number, right: number): number {
  const pivotIndex = medianOfThreeIndex(arr, left, right);
  swap(arr, pivotIndex, right);

  const pivotValue = arr[right];
  let storeIndex = left;

  for (let i = left; i < right; i++) {
    if (arr[i] < pivotValue) {
      swap(arr, storeIndex, i);
      storeIndex++;
    }
  }

  swap(arr, storeIndex, right);
  return storeIndex;
}

function medianOfThreeIndex(arr: number[], left: number, right: number): number {
  const mid = left + Math.floor((right - left) / 2);
  const a = arr[left];
  const b = arr[mid];
  const c = arr[right];

  if (a < b) {
    if (b < c) return mid;
    return a < c ? right : left;
  }
  if (a < c) return left;
  return b < c ? right : mid;
}

function swap(arr: number[], i: number, j: number): void {
  const tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}
