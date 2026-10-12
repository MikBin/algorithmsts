import { ArgumentError } from '../core/validation/ArgumentError';

/**
 * Gets the nth digit of a number, starting from the right (0-indexed).
 *
 * **Time Complexity:** O(1)
 * **Space Complexity:** O(1)
 *
 * @param n - The number to extract the digit from. Fractional parts are truncated.
 * @param digit - The 0-based index of the digit to extract from the right.
 * @returns The nth digit of the number.
 * @throws {ArgumentError} If n or digit are not finite numbers.
 */
export const getNthDigit = (n: number, digit: number): number => {
  if (!Number.isFinite(n) || !Number.isFinite(digit)) {
    throw new ArgumentError('Inputs must be finite numbers');
  }
  return Math.floor(Math.abs(Math.trunc(n)) / 10 ** Math.trunc(digit)) % 10
}

/**
 * Counts the number of digits in a given number.
 *
 * **Time Complexity:** O(d) where d is the number of digits.
 * **Space Complexity:** O(d) for string allocation.
 *
 * @param num - The number to count digits for. Fractional parts are truncated.
 * @returns The number of digits in the integer part of the number.
 * @throws {ArgumentError} If num is not a finite number.
 */
export const digitCount = (num: number): number => {
  if (!Number.isFinite(num)) {
    throw new ArgumentError('Input must be a finite number', 'num');
  }
  if (num === 0) {
    return 1
  }
  return Math.abs(Math.trunc(num)).toString().length
}