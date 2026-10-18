import { describe, it, expect } from 'vitest';
import { MergeSort } from '../../../src/algorithms/sorting/mergeSort';

describe('MergeSort', () => {
  const sorter = new MergeSort<number>();
  const stringSorter = new MergeSort<string>();

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

  it('leaves input array unchanged', () => {
    const input = [5, 3, 1, 4, 2];
    const original = [...input];
    sorter.execute({ array: input });
    expect(input).toEqual(original);
  });

  it('is stable for duplicate elements', () => {
    const a1 = new String('a'); (a1 as any).id = 1;
    const b1 = new String('b'); (b1 as any).id = 2;
    const a2 = new String('a'); (a2 as any).id = 3;

    const input = [b1, a1, a2] as string[];
    const res = stringSorter.execute({ array: input });

    expect(res.sortedArray[0].toString()).toBe('a');
    expect((res.sortedArray[0] as any).id).toBe(1);
    expect(res.sortedArray[1].toString()).toBe('a');
    expect((res.sortedArray[1] as any).id).toBe(3);
    expect(res.sortedArray[2].toString()).toBe('b');
    expect((res.sortedArray[2] as any).id).toBe(2);
  });
});
