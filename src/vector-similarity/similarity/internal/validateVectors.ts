/**
 * Shared input validation utilities for vector similarity/distance functions.
 *
 * These helpers centralize the repeated guard logic (array-ness, length,
 * emptiness, element finiteness) that previously was duplicated and
 * inconsistent across the similarity modules.
 *
 * Error-type convention:
 * - `TypeError`  -> argument is not an array, or an element is not a finite number.
 * - `RangeError` -> arrays are empty (when not allowed) or of mismatched length.
 *
 * @internal This module is not part of the public package surface.
 */

export interface ValidateVectorsOptions {
  /**
   * When true, two empty arrays are considered valid (length 0) and the
   * caller is responsible for any empty-specific behavior. Default: false.
   */
  allowEmpty?: boolean;
}

/**
 * Validates two numeric vectors for use in similarity/distance computations.
 *
 * @param a - First numeric vector.
 * @param b - Second numeric vector.
 * @param options - Optional validation options.
 * @returns The common length of the two vectors.
 * @throws {TypeError} If `a` or `b` is not an array, or contains a non-finite element.
 * @throws {RangeError} If the arrays are empty (unless `allowEmpty`) or differ in length.
 *
 * Time complexity: O(n). Space complexity: O(1).
 */
export function validateVectors(
  a: number[],
  b: number[],
  options: ValidateVectorsOptions = {}
): number {
  if (!Array.isArray(a)) {
    throw new TypeError("Invalid input: A must be an array.");
  }
  if (!Array.isArray(b)) {
    throw new TypeError("Invalid input: B must be an array.");
  }

  const { allowEmpty = false } = options;

  if (a.length !== b.length) {
    throw new RangeError(
      "Invalid input: A and B must be arrays of the same length."
    );
  }

  if (!allowEmpty && a.length === 0) {
    throw new RangeError("Invalid input: A and B must be non-empty arrays.");
  }

  const n = a.length;
  for (let i = 0; i < n; i++) {
    if (!Number.isFinite(a[i])) {
      throw new TypeError(
        `Invalid element in A at index ${i}: expected a finite number, received ${String(
          a[i]
        )}.`
      );
    }
    if (!Number.isFinite(b[i])) {
      throw new TypeError(
        `Invalid element in B at index ${i}: expected a finite number, received ${String(
          b[i]
        )}.`
      );
    }
  }

  return n;
}

/**
 * Validates a third auxiliary numeric array (e.g. weights, ranges) that must
 * accompany a pair of vectors.
 *
 * @param c - The auxiliary numeric array.
 * @param name - Human-readable name of the array, used in error messages.
 * @param expectedLength - The length the array must match.
 * @throws {TypeError} If `c` is not an array or contains a non-finite element.
 * @throws {RangeError} If `c.length` differs from `expectedLength`.
 *
 * Time complexity: O(expectedLength). Space complexity: O(1).
 */
export function validateThirdArray(
  c: number[],
  name: string,
  expectedLength: number
): void {
  if (!Array.isArray(c)) {
    throw new TypeError(`Invalid input: ${name} must be an array.`);
  }
  if (c.length !== expectedLength) {
    throw new RangeError(
      `Invalid input: ${name} must have the same length as the input vectors.`
    );
  }
  for (let i = 0; i < expectedLength; i++) {
    if (!Number.isFinite(c[i])) {
      throw new TypeError(
        `Invalid element in ${name} at index ${i}: expected a finite number, received ${String(
          c[i]
        )}.`
      );
    }
  }
}
