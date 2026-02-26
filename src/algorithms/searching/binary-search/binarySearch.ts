import { BaseAlgorithm } from '../../../core/abstracts/BaseAlgorithm';
import { IAlgorithm } from '../../../core/interfaces/IAlgorithm';
import { PerformanceMonitor, ComplexityAnalyzer } from '../../../performance';

/**
 * Input interface for BinarySearch algorithm
 */
export interface BinarySearchInput<T> {
  /** The sorted array to search in */
  array: T[];
  /** The value to search for */
  value: T;
  /** Comparison function that returns negative if value < element, 0 if equal, positive if value > element */
  compareFn: (value: T, element: T) => number;
}

/**
 * Output interface for BinarySearch algorithm
 */
export interface BinarySearchOutput {
  /** The index of the found element, or -1 if not found */
  index: number;
  /** Backward-compatible result field */
  result: number;
}

/**
 * Binary Search Algorithm Implementation
 *
 * Performs binary search on a sorted array to find the index of a specified value.
 *
 * **Time Complexity:** O(log n) - logarithmic time
 * **Space Complexity:** O(1) - constant space (excluding input)
 *
 * @template T The type of elements in the array
 */
export class BinarySearch<T> extends BaseAlgorithm<BinarySearchInput<T>, BinarySearchOutput> implements IAlgorithm<BinarySearchInput<T>, BinarySearchOutput> {
  /**
   * Creates a new BinarySearch instance
   */
  constructor() {
    super('BinarySearch', 'O(log n)', 'O(1)');
  }

  /**
   * Executes the binary search algorithm
   * @param input The search input containing array, value, and comparison function
   * @returns The search result with the index of the found element or -1
   */
  public execute(input: BinarySearchInput<T>): BinarySearchOutput {
    let result: BinarySearchOutput;

    const executionTime = PerformanceMonitor.measureExecutionTime(() => {
      const { array, value, compareFn } = input;

      if (!array || array.length === 0) {
        result = { index: -1, result: -1 };
        return;
      }

      let left = 0;
      let right = array.length - 1;

      while (left <= right) {
        // Prevent overflow using bitwise shift
        const mid = left + ((right - left) >> 1);
        const comparison = compareFn(value, array[mid]);

        if (comparison === 0) {
          // Found the exact value
          result = { index: mid, result: mid };
          return;
        } else if (comparison < 0) {
          // Value is in the left half
          right = mid - 1;
        } else {
          // Value is in the right half
          left = mid + 1;
        }
      }

      // Value not found
      result = { index: -1, result: -1 };
    });

    // Log performance if it exceeds target
    if (!ComplexityAnalyzer.isWithinSearchOperationsTarget(executionTime)) {
      console.warn(`BinarySearch performance warning: ${executionTime}ms (target: ${ComplexityAnalyzer.SEARCH_OPERATIONS_TARGET}ms)`);
    }

    return result!;
  }
}

/**
 * Input interface for BinaryClosestSearch algorithm
 */
export interface BinaryClosestSearchInput<T> {
  /** The sorted array to search in */
  array: T[];
  /** The value to find the closest element to */
  value: T;
  /** Comparison function that returns negative if value < element, 0 if equal, positive if value > element */
  compareFn: (value: T, element: T) => number;
}

/**
 * Output interface for BinaryClosestSearch algorithm
 */
export interface BinaryClosestSearchOutput {
  /** The index of the closest element, or -1 if array is empty */
  index: number;
}

/**
 * Binary Closest Search Algorithm Implementation
 *
 * Performs binary search on a sorted array to find the index of the element closest to a specified value.
 *
 * **Time Complexity:** O(log n) - logarithmic time
 * **Space Complexity:** O(1) - constant space (excluding input)
 *
 * @template T The type of elements in the array
 */
export class BinaryClosestSearch<T> extends BaseAlgorithm<BinaryClosestSearchInput<T>, BinaryClosestSearchOutput> implements IAlgorithm<BinaryClosestSearchInput<T>, BinaryClosestSearchOutput> {
  /**
   * Creates a new BinaryClosestSearch instance
   */
  constructor() {
    super('BinaryClosestSearch', 'O(log n)', 'O(1)');
  }

  /**
   * Executes the binary closest search algorithm
   * @param input The search input containing array, value, and comparison function
   * @returns The search result with the index of the closest element or -1
   */
  public execute(input: BinaryClosestSearchInput<T>): BinaryClosestSearchOutput {
    let result: BinaryClosestSearchOutput;

    const executionTime = PerformanceMonitor.measureExecutionTime(() => {
      const { array, value, compareFn } = input;

      const length = array?.length ?? 0;
      if (length === 0) {
        result = { index: -1 };
        return;
      }

      let left = 0;
      let right = length - 1;

      // The loop narrows the search space to two adjacent elements
      while (right - left > 1) {
        const mid = left + ((right - left) >> 1);
        const midCompareResult = compareFn(value, array[mid]);

        if (midCompareResult > 0) {
          left = mid;
        } else if (midCompareResult < 0) {
          right = mid;
        } else {
          // Found an exact match
          result = { index: mid };
          return;
        }
      }

      // After the loop, the closest element is either at `left` or `right`.
      // We compare the distances to find the winner.
      const leftValueComparison = compareFn(value, array[left]);
      const rightValueComparison = compareFn(value, array[right]);

      const absLeftValueComparison = Math.abs(leftValueComparison);
      const absRightValueComparison = Math.abs(rightValueComparison);

      if (absLeftValueComparison === absRightValueComparison) {
        // In case of a tie in distance, the comparison function's sign can decide.
        // For example, if we prefer the lower index on a tie, the comparison function for `value` vs `array[left]` should have a smaller magnitude.
        // The original logic here seems to prefer the element that is greater than or equal to the value in a tie.
        result = { index: leftValueComparison < 0 ? left : right };
      } else {
        // Return the index of the element with the smaller distance
        result = { index: absLeftValueComparison < absRightValueComparison ? left : right };
      }
    });

    // Log performance if it exceeds target
    if (!ComplexityAnalyzer.isWithinSearchOperationsTarget(executionTime)) {
      console.warn(`BinaryClosestSearch performance warning: ${executionTime}ms (target: ${ComplexityAnalyzer.SEARCH_OPERATIONS_TARGET}ms)`);
    }

    return result!;
  }
}
