import { describe, it, expect } from 'vitest';
import {
  validateVectors,
  validateThirdArray,
} from '../../../src/vector-similarity/similarity/internal/validateVectors';

describe('validateVectors', () => {
  describe('valid inputs', () => {
    it('returns the common length for matching finite vectors', () => {
      expect(validateVectors([1, 2, 3], [4, 5, 6])).toBe(3);
    });

    it('accepts a single-element pair', () => {
      expect(validateVectors([1], [2])).toBe(1);
    });

    it('accepts negative and zero values (all finite)', () => {
      expect(validateVectors([-1, 0, 1.5], [0, -2, 3])).toBe(3);
    });

    it('returns 0 when allowEmpty is true for two empty arrays', () => {
      expect(validateVectors([], [], { allowEmpty: true })).toBe(0);
    });
  });

  describe('type errors', () => {
    it('throws TypeError when the first argument is not an array', () => {
      expect(() => validateVectors(null as unknown as number[], [1])).toThrow(
        TypeError
      );
      expect(() => validateVectors(null as unknown as number[], [1])).toThrow(
        'Invalid input: A must be an array.'
      );
    });

    it('throws TypeError when the second argument is not an array', () => {
      expect(() => validateVectors([1], 'x' as unknown as number[])).toThrow(
        TypeError
      );
      expect(() => validateVectors([1], 'x' as unknown as number[])).toThrow(
        'Invalid input: B must be an array.'
      );
    });

    it('throws TypeError for a non-finite element in the first vector', () => {
      expect(() => validateVectors([1, NaN], [1, 2])).toThrow(TypeError);
      expect(() => validateVectors([1, NaN], [1, 2])).toThrow(
        'Invalid element in A at index 1'
      );
    });

    it('throws TypeError for a non-finite element in the second vector', () => {
      expect(() => validateVectors([1, 2], [1, Infinity])).toThrow(TypeError);
      expect(() => validateVectors([1, 2], [1, Infinity])).toThrow(
        'Invalid element in B at index 1'
      );
    });

    it('throws TypeError for -Infinity', () => {
      expect(() => validateVectors([-Infinity], [1])).toThrow(TypeError);
    });
  });

  describe('range errors', () => {
    it('throws RangeError when lengths differ', () => {
      expect(() => validateVectors([1, 2], [1, 2, 3])).toThrow(RangeError);
      expect(() => validateVectors([1, 2], [1, 2, 3])).toThrow(
        'Invalid input: A and B must be arrays of the same length.'
      );
    });

    it('throws RangeError for empty arrays by default', () => {
      expect(() => validateVectors([], [])).toThrow(RangeError);
      expect(() => validateVectors([], [])).toThrow(
        'Invalid input: A and B must be non-empty arrays.'
      );
    });

    it('does not throw for empty arrays when allowEmpty is true', () => {
      expect(() => validateVectors([], [], { allowEmpty: true })).not.toThrow();
    });
  });
});

describe('validateThirdArray', () => {
  it('passes silently for a matching-length finite array', () => {
    expect(() => validateThirdArray([0.5, 0.5, 0.5], 'weights', 3)).not.toThrow();
  });

  it('throws TypeError when not an array', () => {
    expect(() =>
      validateThirdArray(null as unknown as number[], 'weights', 3)
    ).toThrow(TypeError);
    expect(() =>
      validateThirdArray(null as unknown as number[], 'weights', 3)
    ).toThrow('Invalid input: weights must be an array.');
  });

  it('throws RangeError when the length differs', () => {
    expect(() => validateThirdArray([1, 2], 'ranges', 3)).toThrow(RangeError);
    expect(() => validateThirdArray([1, 2], 'ranges', 3)).toThrow(
      'Invalid input: ranges must have the same length as the input vectors.'
    );
  });

  it('throws TypeError for a non-finite element', () => {
    expect(() => validateThirdArray([1, NaN], 'weights', 2)).toThrow(TypeError);
    expect(() => validateThirdArray([1, NaN], 'weights', 2)).toThrow(
      'Invalid element in weights at index 1'
    );
  });
});
