import { describe, it, expect } from 'vitest';
import {
  quickselectNth,
  median,
  medianAbsoluteDeviation,
} from '../../../src/vector-similarity/similarity/internal/quickselect';

describe('quickselectNth', () => {
  it('returns the k-th smallest element', () => {
    expect(quickselectNth([3, 1, 4, 1, 5, 9, 2, 6], 0)).toBe(1);
    expect(quickselectNth([3, 1, 4, 1, 5, 9, 2, 6], 3)).toBe(3);
    expect(quickselectNth([3, 1, 4, 1, 5, 9, 2, 6], 7)).toBe(9);
  });

  it('does not mutate the input array', () => {
    const input = [3, 1, 4];
    const copy = [...input];
    quickselectNth(input, 1);
    expect(input).toEqual(copy);
  });

  it('throws for empty array', () => {
    expect(() => quickselectNth([], 0)).toThrow(RangeError);
  });

  it('throws for out-of-range k', () => {
    expect(() => quickselectNth([1, 2, 3], -1)).toThrow(RangeError);
    expect(() => quickselectNth([1, 2, 3], 3)).toThrow(RangeError);
  });

  it('handles duplicates', () => {
    expect(quickselectNth([5, 5, 5, 5], 2)).toBe(5);
  });

  it('handles already sorted', () => {
    expect(quickselectNth([1, 2, 3, 4, 5], 2)).toBe(3);
  });

  it('handles reverse sorted', () => {
    expect(quickselectNth([5, 4, 3, 2, 1], 2)).toBe(3);
  });

  it('handles custom cases to cover branches in medianOfThreeIndex', () => {
    // We want to trigger `if (a < c) return left;`
    // This happens when a >= b AND a < c
    // E.g., [left=10, mid=5, right=20] -> a=10, b=5, c=20
    // 10 >= 5 (True: a < b is false).
    // 10 < 20 (True). Returns left.
    expect(quickselectNth([10, 5, 20], 1)).toBe(10);

    // We also want to trigger `a < b` and `a < c ? right : left` where a is not < c (so it returns left)
    // a < b, a >= c. E.g. [left=10, mid=20, right=5]
    // a=10, b=20, c=5.
    // 10 < 20 (True)
    // b < c (20 < 5: False)
    // a < c (10 < 5: False) -> returns left
    expect(quickselectNth([10, 20, 5], 1)).toBe(10);
  });
});

describe('median', () => {
  it('returns middle value for odd length', () => {
    expect(median([3, 1, 2])).toBe(2);
    expect(median([1])).toBe(1);
  });

  it('returns average of two middles for even length', () => {
    expect(median([1, 2, 3, 4])).toBe(2.5);
    expect(median([1, 3])).toBe(2);
  });

  it('throws for empty array', () => {
    expect(() => median([])).toThrow(RangeError);
  });
});

describe('medianAbsoluteDeviation', () => {
  it('returns 0 for single element', () => {
    expect(medianAbsoluteDeviation([42])).toBe(0);
  });

  it('computes MAD about the median', () => {
    // values: [1, 2, 3, 100] -> median = 2.5, deviations = [1.5, 0.5, 0.5, 97.5] -> MAD = 1
    expect(medianAbsoluteDeviation([1, 2, 3, 100])).toBe(1);
  });

  it('accepts a precomputed center', () => {
    expect(medianAbsoluteDeviation([1, 2, 3, 100], 2.5)).toBe(1);
  });

  it('throws for empty array', () => {
    expect(() => medianAbsoluteDeviation([])).toThrow(RangeError);
  });
});
