import { countingSort } from '../../src/sorting/countingSort';
import { describe, it, expect } from 'vitest';

describe('countingSort', () => {
  it('should sort an array of positive integers', () => {
    const arr = [5, 2, 8, 1, 9, 4];
    const sortedArr = countingSort(arr);
    expect(sortedArr).toEqual([1, 2, 4, 5, 8, 9]);
  });

  it('should sort an array with negative integers', () => {
    const arr = [-5, 2, -8, 1, 9, -4];
    const sortedArr = countingSort(arr);
    expect(sortedArr).toEqual([-8, -5, -4, 1, 2, 9]);
  });

  it('should handle an array with all same elements', () => {
    const arr = [5, 5, 5, 5, 5];
    const sortedArr = countingSort(arr);
    expect(sortedArr).toEqual([5, 5, 5, 5, 5]);
  });

  it('should handle an already sorted array', () => {
    const arr = [1, 2, 3, 4, 5];
    const sortedArr = countingSort(arr);
    expect(sortedArr).toEqual([1, 2, 3, 4, 5]);
  });

  it('should handle a reverse sorted array', () => {
    const arr = [5, 4, 3, 2, 1];
    const sortedArr = countingSort(arr);
    expect(sortedArr).toEqual([1, 2, 3, 4, 5]);
  });

  it('should handle an empty array', () => {
    const arr: number[] = [];
    const sortedArr = countingSort(arr);
    expect(sortedArr).toEqual([]);
  });

  it('should handle an array with one element', () => {
    const arr = [5];
    const sortedArr = countingSort(arr);
    expect(sortedArr).toEqual([5]);
  });

  it('should handle an array with zero', () => {
    const arr = [5, 0, -2, 3, -1];
    const sortedArr = countingSort(arr);
    expect(sortedArr).toEqual([-2, -1, 0, 3, 5]);
  });
});