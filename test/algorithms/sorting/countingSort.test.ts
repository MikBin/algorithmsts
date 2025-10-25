import { CountingSort } from '../../../src/algorithms/sorting';
import { describe, it, expect } from 'vitest';

describe('CountingSort', () => {
  const countingSort = new CountingSort();

  it('should sort an array of positive integers', () => {
    const result = countingSort.execute({ array: [5, 2, 8, 1, 9, 4] });
    expect(result.sortedArray).toEqual([1, 2, 4, 5, 8, 9]);
  });

  it('should sort an array with negative integers', () => {
    const result = countingSort.execute({ array: [-5, 2, -8, 1, 9, -4] });
    expect(result.sortedArray).toEqual([-8, -5, -4, 1, 2, 9]);
  });

  it('should handle an array with all same elements', () => {
    const result = countingSort.execute({ array: [5, 5, 5, 5, 5] });
    expect(result.sortedArray).toEqual([5, 5, 5, 5, 5]);
  });

  it('should handle an already sorted array', () => {
    const result = countingSort.execute({ array: [1, 2, 3, 4, 5] });
    expect(result.sortedArray).toEqual([1, 2, 3, 4, 5]);
  });

  it('should handle a reverse sorted array', () => {
    const result = countingSort.execute({ array: [5, 4, 3, 2, 1] });
    expect(result.sortedArray).toEqual([1, 2, 3, 4, 5]);
  });

  it('should handle an empty array', () => {
    const result = countingSort.execute({ array: [] });
    expect(result.sortedArray).toEqual([]);
  });

  it('should handle an array with one element', () => {
    const result = countingSort.execute({ array: [5] });
    expect(result.sortedArray).toEqual([5]);
  });

  it('should handle an array with zero', () => {
    const result = countingSort.execute({ array: [5, 0, -2, 3, -1] });
    expect(result.sortedArray).toEqual([-2, -1, 0, 3, 5]);
  });
});
