import { describe, it, expect } from 'vitest';
import { QuickSort } from '../../../src/algorithms/sorting/quickSort';

describe('QuickSort', () => {
  const sorter = new QuickSort<number>();
  const stringSorter = new QuickSort<string>();

  it('sorts normal number arrays', () => {
    const res = sorter.execute({ array: [5, 2, 8, 1, 9, 4] });
    expect(res.sortedArray).toEqual([1, 2, 4, 5, 8, 9]);
  });

  it('sorts empty array', () => {
    const res = sorter.execute({ array: [] });
    expect(res.sortedArray).toEqual([]);
  });

  it('sorts single element array', () => {
    const res = sorter.execute({ array: [5] });
    expect(res.sortedArray).toEqual([5]);
  });

  it('sorts sorted array', () => {
    const res = sorter.execute({ array: [1, 2, 3, 4] });
    expect(res.sortedArray).toEqual([1, 2, 3, 4]);
  });

  it('sorts reverse sorted array', () => {
    const res = sorter.execute({ array: [4, 3, 2, 1] });
    expect(res.sortedArray).toEqual([1, 2, 3, 4]);
  });

  it('sorts array with duplicates', () => {
    const res = sorter.execute({ array: [3, 1, 2, 3, 1] });
    expect(res.sortedArray).toEqual([1, 1, 2, 3, 3]);
  });

  it('sorts strings', () => {
    const res = stringSorter.execute({ array: ['banana', 'apple', 'cherry'] });
    expect(res.sortedArray).toEqual(['apple', 'banana', 'cherry']);
  });
  it('handles very large sorted arrays without stack overflow', () => {
    const arr = Array.from({ length: 10000 }, (_, i) => i);
    const res = sorter.execute({ array: arr });
    expect(res.sortedArray.length).toBe(10000);
    expect(res.sortedArray[0]).toBe(0);
    expect(res.sortedArray[9999]).toBe(9999);
  });

  it('leaves input array unchanged', () => {
    const input = [5, 3, 1, 4, 2];
    const original = [...input];
    sorter.execute({ array: input });
    expect(input).toEqual(original);
  });
});
