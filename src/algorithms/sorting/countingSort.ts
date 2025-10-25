import { BaseAlgorithm } from '../../core/abstracts/BaseAlgorithm';
import { IAlgorithm } from '../../core/interfaces/IAlgorithm';
import { PerformanceMonitor } from '../../core/utils/PerformanceMonitor';

/**
 * Input interface for CountingSort algorithm
 */
export interface CountingSortInput {
  /** The array of numbers to sort */
  array: number[];
}

/**
 * Output interface for CountingSort algorithm
 */
export interface CountingSortOutput {
  /** The sorted array */
  sortedArray: number[];
}

/**
 * Counting Sort Algorithm Implementation
 *
 * Sorts an array of numbers using the counting sort algorithm.
 * This implementation handles both positive and negative integers.
 *
 * **Time Complexity:** O(n + k) where n is the number of elements and k is the range of input
 * **Space Complexity:** O(n + k) - additional space for count array and output array
 *
 * Counting sort is efficient when the range of input values (k) is not significantly
 * larger than the number of elements (n).
 */
export class CountingSort extends BaseAlgorithm<CountingSortInput, CountingSortOutput> implements IAlgorithm<CountingSortInput, CountingSortOutput> {
  /**
   * Creates a new CountingSort instance
   */
  constructor() {
    super('CountingSort', 'O(n + k)', 'O(n + k)');
  }

  /**
   * Executes the counting sort algorithm
   * @param input The input containing the array to sort
   * @returns The sorted array
   */
  public execute(input: CountingSortInput): CountingSortOutput {
    let result: CountingSortOutput;

    const executionTime = PerformanceMonitor.measureExecutionTime(() => {
      const { array } = input;

      if (!array || array.length <= 1) {
        result = { sortedArray: array ? [...array] : [] };
        return;
      }

      // Find min and max values to handle negative numbers
      let min = array[0];
      let max = array[0];

      for (let i = 1; i < array.length; i++) {
        if (array[i] < min) {
          min = array[i];
        } else if (array[i] > max) {
          max = array[i];
        }
      }

      const range = max - min + 1;
      const count = new Array(range).fill(0);
      const output = new Array(array.length);

      // Count occurrences of each element
      for (let i = 0; i < array.length; i++) {
        count[array[i] - min]++;
      }

      // Modify count array to store cumulative counts
      for (let i = 1; i < range; i++) {
        count[i] += count[i - 1];
      }

      // Build the output array
      for (let i = array.length - 1; i >= 0; i--) {
        output[count[array[i] - min] - 1] = array[i];
        count[array[i] - min]--;
      }

      result = { sortedArray: output };
    });

    // Log performance warning for large arrays (O(n+k) should be fast, but warn if slow)
    if (executionTime > 100) { // Arbitrary threshold for counting sort
      console.warn(`CountingSort performance warning: ${executionTime}ms for array of length ${input.array?.length || 0}`);
    }

    return result!;
  }
}
