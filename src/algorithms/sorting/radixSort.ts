import { BaseAlgorithm } from '../../core/abstracts/BaseAlgorithm';
import { IAlgorithm } from '../../core/interfaces/IAlgorithm';
import { PerformanceMonitor } from '../../core/utils/PerformanceMonitor';
import { digitCount, getNthDigit } from '../../utils/number';

/**
 * Input interface for RadixSortNumbers algorithm
 */
export interface RadixSortNumbersInput {
  /** The array of numbers to sort */
  array: number[];
}

/**
 * Output interface for RadixSortNumbers algorithm
 */
export interface RadixSortNumbersOutput {
  /** The sorted array */
  sortedArray: number[];
}

/**
 * Radix Sort for Numbers Algorithm Implementation
 *
 * Sorts an array of numbers using LSD (Least Significant Digit) Radix Sort.
 * This implementation handles both positive and negative integers.
 *
 * **Time Complexity:** O(n * d) where n is the number of elements and d is the number of digits
 * **Space Complexity:** O(n + k) where k is the radix (10 for decimal numbers)
 *
 * Radix sort is efficient for sorting numbers with a fixed number of digits or
 * when the range of values is known.
 */
export class RadixSortNumbers extends BaseAlgorithm<RadixSortNumbersInput, RadixSortNumbersOutput> implements IAlgorithm<RadixSortNumbersInput, RadixSortNumbersOutput> {
  /**
   * Creates a new RadixSortNumbers instance
   */
  constructor() {
    super('RadixSortNumbers', 'O(n * d)', 'O(n + k)');
  }

  /**
   * Executes the radix sort algorithm for numbers
   * @param input The input containing the array to sort
   * @returns The sorted array
   */
  public execute(input: RadixSortNumbersInput): RadixSortNumbersOutput {
    let result: RadixSortNumbersOutput;

    const executionTime = PerformanceMonitor.measureExecutionTime(() => {
      const { array } = input;

      if (!array || array.length <= 1) {
        result = { sortedArray: array ? [...array] : [] };
        return;
      }

      // Separate positive and negative numbers
      const negatives = array.filter(n => n < 0);
      const positives = array.filter(n => n >= 0);

      const sort = (arrayToSort: number[]): number[] => {
        if (arrayToSort.length === 0) {
          return [];
        }

        // Find the maximum number of digits
        let maxDigits = 0;
        for (const num of arrayToSort) {
          maxDigits = Math.max(maxDigits, digitCount(num));
        }

        let result = [...arrayToSort];

        // Sort by each digit from least significant to most significant
        for (let digitIndex = 0; digitIndex < maxDigits; digitIndex++) {
          const buckets: number[][] = Array.from({ length: 10 }, () => []);

          for (const num of result) {
            const digit = getNthDigit(num, digitIndex);
            buckets[digit].push(num);
          }

          result = buckets.flat();
        }

        return result;
      };

      // Sort negatives (convert to positive, sort, then convert back and reverse)
      const sortedNegatives = sort(negatives.map(n => Math.abs(n)))
        .map(n => -n)
        .reverse();

      // Sort positives
      const sortedPositives = sort(positives);

      result = { sortedArray: [...sortedNegatives, ...sortedPositives] };
    });

    // Log performance warning for large arrays
    if (executionTime > 100) { // Arbitrary threshold for radix sort
      console.warn(`RadixSortNumbers performance warning: ${executionTime}ms for array of length ${input.array?.length || 0}`);
    }

    return result!;
  }
}

/**
 * Input interface for RadixSortStrings algorithm
 */
export interface RadixSortStringsInput {
  /** The array of strings to sort */
  array: string[];
}

/**
 * Output interface for RadixSortStrings algorithm
 */
export interface RadixSortStringsOutput {
  /** The sorted array */
  sortedArray: string[];
}

/**
 * Radix Sort for Strings Algorithm Implementation
 *
 * Sorts an array of strings lexicographically using LSD (Least Significant Digit) Radix Sort.
 *
 * **Time Complexity:** O(n * m) where n is the number of strings and m is the maximum string length
 * **Space Complexity:** O(n + k) where k is the character set size (257 buckets used)
 *
 * This implementation uses 257 buckets: 1 for strings shorter than the current position,
 * and 256 for ASCII characters.
 */
export class RadixSortStrings extends BaseAlgorithm<RadixSortStringsInput, RadixSortStringsOutput> implements IAlgorithm<RadixSortStringsInput, RadixSortStringsOutput> {
  /**
   * Creates a new RadixSortStrings instance
   */
  constructor() {
    super('RadixSortStrings', 'O(n * m)', 'O(n + k)');
  }

  /**
   * Executes the radix sort algorithm for strings
   * @param input The input containing the array to sort
   * @returns The sorted array
   */
  public execute(input: RadixSortStringsInput): RadixSortStringsOutput {
    let result: RadixSortStringsOutput;

    const executionTime = PerformanceMonitor.measureExecutionTime(() => {
      const { array } = input;

      if (!array || array.length <= 1) {
        result = { sortedArray: array ? [...array] : [] };
        return;
      }

      // Find the maximum string length
      let maxLength = 0;
      for (const str of array) {
        maxLength = Math.max(maxLength, str.length);
      }

      let resultArray = [...array];

      // Iterate from the least significant digit (last character) to the most significant (first character)
      for (let position = maxLength - 1; position >= 0; position--) {
        // Using 257 buckets: 1 for strings shorter than the current position, and 256 for ASCII characters
        const buckets: string[][] = Array.from({ length: 257 }, () => []);

        for (const str of resultArray) {
          if (position >= str.length) {
            // Strings shorter than the current position are placed in the first bucket.
            // They are considered smaller than any string with a character at this position.
            buckets[0].push(str);
          } else {
            // Place strings in buckets based on their character code at the current position.
            // Add 1 to the charCode to avoid conflict with the bucket for shorter strings.
            const charCode = str.charCodeAt(position);
            buckets[charCode + 1].push(str);
          }
        }

        // Reconstruct the array from the buckets
        resultArray = buckets.flat();
      }

      result = { sortedArray: resultArray };
    });

    // Log performance warning for large arrays
    if (executionTime > 100) { // Arbitrary threshold for radix sort
      console.warn(`RadixSortStrings performance warning: ${executionTime}ms for array of length ${input.array?.length || 0}`);
    }

    return result!;
  }
}
