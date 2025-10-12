import { binaryComparisonRoutine } from "./interfaces"

/**
 * Performs a binary search on a sorted array to find the index of a specified value.
 * @template T The type of elements in the array.
 * @param {Array<T>} sourceArray The sorted array to search.
 * @param {T} value The value to search for.
 * @param {binaryComparisonRoutine<T>} comparisonFn A function that compares the search value with an array element.
 *   It should return:
 *   - A negative number if the search value is less than the array element.
 *   - Zero if the search value is equal to the array element.
 *   - A positive number if the search value is greater than the array element.
 * @returns {number} The index of the value in the array, or -1 if the value is not found.
 */
export const binarySearch = <T>(
  sourceArray: Array<T>,
  value: T,
  comparisonFn: binaryComparisonRoutine<T>
): number => {
  let left = 0;
  let right = sourceArray.length - 1;

  while (left <= right) {
    // Prevent overflow
    const mid = left + ((right - left) >> 1);
    const comparison = comparisonFn(value, sourceArray[mid]);

    if (comparison === 0) {
      // Found the exact value
      return mid;
    } else if (comparison < 0) {
      // Value is in the left half
      right = mid - 1;
    } else {
      // Value is in the right half
      left = mid + 1;
    }
  }

  // Value not found
  return -1;
};

/**
 * Performs a binary search on a sorted array to find the index of the element closest to a specified value.
 * @template T The type of elements in the array.
 * @param {Array<T>} sourceArray The sorted array to search.
 * @param {T} value The value to search for.
 * @param {binaryComparisonRoutine<T>} comparisonFn A function that compares the search value with an array element.
 *   The magnitude of the result can be used to encode distance, allowing for custom tie-breaking.
 *   It should return:
 *   - A negative number if the search value is less than the array element.
 *   - Zero if the search value is equal to the array element.
 *   - A positive number if the search value is greater than the array element.
 * @returns {number} The index of the closest element in the array. Returns -1 if the array is empty.
 */
export const binaryClosestSearch = <T>(
  sourceArray: Array<T>,
  value: T,
  comparisonFn: binaryComparisonRoutine<T>
): number => {
  const l: number = sourceArray.length;
  if (l === 0) {
    return -1;
  }

  let left = 0;
  let right = l - 1;

  // The loop narrows the search space to two adjacent elements.
  while (right - left > 1) {
    const mid = left + ((right - left) >> 1);
    const midCompareRes = comparisonFn(value, sourceArray[mid]);

    if (midCompareRes > 0) {
      left = mid;
    } else if (midCompareRes < 0) {
      right = mid;
    } else {
      // Found an exact match
      return mid;
    }
  }

  // After the loop, the closest element is either at `left` or `right`.
  // We compare the distances to find the winner.
  const leftValueComparison = comparisonFn(value, sourceArray[left]);
  const rightValueComparison = comparisonFn(value, sourceArray[right]);

  const absLeftValueComparison = Math.abs(leftValueComparison);
  const absRightValueComparison = Math.abs(rightValueComparison);

  if (absLeftValueComparison === absRightValueComparison) {
    // In case of a tie in distance, the comparison function's sign can decide.
    // For example, if we prefer the lower index on a tie, the comparison function for `value` vs `sourceArray[left]` should have a smaller magnitude.
    // The original logic here seems to prefer the element that is greater than or equal to the value in a tie.
    return leftValueComparison < 0 ? left : right;
  } else {
    // Return the index of the element with the smaller distance.
    return absLeftValueComparison < absRightValueComparison ? left : right;
  }
};
