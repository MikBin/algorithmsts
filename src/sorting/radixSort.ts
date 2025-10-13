import { digitCount, getNthDigit } from '../utils/number'

/**
 * Sorts an array of numbers using Radix Sort.
 * This implementation handles both positive and negative integers.
 *
 * @param {number[]} arr The array of numbers to sort.
 * @returns {number[]} The sorted array.
 */
export const radixSortNumbers = (arr: number[]): number[] => {
  const negatives = arr.filter(n => n < 0);
  const positives = arr.filter(n => n >= 0);

  const sort = (array: number[]): number[] => {
    if (array.length === 0) {
      return [];
    }

    let maxDigits = 0;
    for (const num of array) {
      maxDigits = Math.max(maxDigits, digitCount(num));
    }

    let arrayToSort = [...array];

    for (let i = 0; i < maxDigits; i++) {
      const buckets: number[][] = Array.from({ length: 10 }, () => []);
      for (const num of arrayToSort) {
        const digit = getNthDigit(num, i);
        buckets[digit].push(num);
      }
      arrayToSort = buckets.flat();
    }
    return arrayToSort;
  };

  const sortedNegatives = sort(negatives.map(n => Math.abs(n)))
    .map(n => -n)
    .reverse();

  const sortedPositives = sort(positives);

  return [...sortedNegatives, ...sortedPositives];
};

/**
 * Sorts an array of strings lexicographically using LSD (Least Significant Digit) Radix Sort.
 *
 * @param {string[]} arr The array of strings to sort.
 * @returns {string[]} The sorted array.
 */
export const radixSortStrings = (arr: string[]): string[] => {
  if (arr.length <= 1) {
    return arr;
  }

  let maxLength = 0;
  for (const str of arr) {
    maxLength = Math.max(maxLength, str.length);
  }

  let arrayToSort = [...arr];

  // Iterate from the least significant digit (last character) to the most significant (first character).
  for (let i = maxLength - 1; i >= 0; i--) {
    // Using 257 buckets: 1 for strings shorter than the current digit, and 256 for ASCII characters.
    const buckets: string[][] = Array.from({ length: 257 }, () => []);

    for (const str of arrayToSort) {
      if (i >= str.length) {
        // Strings shorter than the current position are placed in the first bucket.
        // They are considered smaller than any string with a character at this position.
        buckets[0].push(str);
      } else {
        // Place strings in buckets based on their character code at the current position.
        // Add 1 to the charCode to avoid conflict with the bucket for shorter strings.
        const charCode = str.charCodeAt(i);
        buckets[charCode + 1].push(str);
      }
    }
    // Reconstruct the array from the buckets.
    arrayToSort = buckets.flat();
  }

  return arrayToSort;
};
