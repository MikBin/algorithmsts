import { describe, it, expect } from 'vitest';
import { SubsetSum } from '../../../src/algorithms/dynamic-programming/subsetSum';

describe('SubsetSum', () => {
  const ss = new SubsetSum();

  it('finds existing subset sum', () => {
    const res = ss.execute({ array: [3, 34, 4, 12, 5, 2], targetSum: 9 });
    expect(res.hasSubset).toBe(true);
    expect(res.subset).toEqual([4, 5]);
  });

  it('returns false for non-existing sum', () => {
    const res = ss.execute({ array: [3, 34, 4, 12, 5, 2], targetSum: 30 });
    expect(res.hasSubset).toBe(false);
    expect(res.subset).toEqual([]);
  });

  it('handles 0 target sum', () => {
    const res = ss.execute({ array: [3, 34], targetSum: 0 });
    expect(res.hasSubset).toBe(true);
    expect(res.subset).toEqual([]);
  });

  it('handles empty array with positive sum', () => {
    const res = ss.execute({ array: [], targetSum: 10 });
    expect(res.hasSubset).toBe(false);
  });
});
