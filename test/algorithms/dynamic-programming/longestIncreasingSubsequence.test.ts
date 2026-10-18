import { describe, it, expect } from 'vitest';
import { LongestIncreasingSubsequence } from '../../../src/algorithms/dynamic-programming/longestIncreasingSubsequence';

describe('LongestIncreasingSubsequence', () => {
  const lis = new LongestIncreasingSubsequence<number>();

  it('finds LIS in normal array', () => {
    const res = lis.execute({ array: [10, 22, 9, 33, 21, 50, 41, 60, 80] });
    expect(res.length).toBe(6);
    // [10, 22, 33, 41, 60, 80] is indeed a valid LIS (10->22->33->41->60->80)
    expect(res.subsequence).toEqual([10, 22, 33, 41, 60, 80]);
  });

  it('handles empty array', () => {
    const res = lis.execute({ array: [] });
    expect(res.length).toBe(0);
    expect(res.subsequence).toEqual([]);
  });

  it('handles array with one element', () => {
    const res = lis.execute({ array: [5] });
    expect(res.length).toBe(1);
    expect(res.subsequence).toEqual([5]);
  });

  it('handles already sorted array', () => {
    const res = lis.execute({ array: [1, 2, 3, 4] });
    expect(res.length).toBe(4);
    expect(res.subsequence).toEqual([1, 2, 3, 4]);
  });

  it('handles reverse sorted array', () => {
    const res = lis.execute({ array: [4, 3, 2, 1] });
    expect(res.length).toBe(1);
  });

  it('handles all identical elements', () => {
    const res = lis.execute({ array: [2, 2, 2, 2] });
    expect(res.length).toBe(1);
    expect(res.subsequence).toEqual([2]);
  });
});
