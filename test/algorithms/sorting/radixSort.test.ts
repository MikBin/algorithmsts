import { describe, expect, it } from 'vitest';
import { RadixSortNumbers, RadixSortStrings } from '../../../src/algorithms/sorting';

describe('RadixSortNumbers', () => {
  const radixSortNumbers = new RadixSortNumbers();

  it('should sort an array of positive numbers', () => {
    const arr = [170, 45, 75, 90, 802, 24, 2, 66];
    const sorted = [...arr].sort((a, b) => a - b);
    const result = radixSortNumbers.execute({ array: arr });
    expect(result.sortedArray).toEqual(sorted);
  });

  it('should handle an empty array', () => {
    const result = radixSortNumbers.execute({ array: [] });
    expect(result.sortedArray).toEqual([]);
  });

  it('should handle an array with a single element', () => {
    const result = radixSortNumbers.execute({ array: [5] });
    expect(result.sortedArray).toEqual([5]);
  });

  it('should handle an array with all identical elements', () => {
    const result = radixSortNumbers.execute({ array: [5, 5, 5, 5] });
    expect(result.sortedArray).toEqual([5, 5, 5, 5]);
  });

  it('should handle an array with negative numbers', () => {
    const arr = [-10, -5, -1, -20];
    const sorted = [...arr].sort((a, b) => a - b);
    const result = radixSortNumbers.execute({ array: arr });
    expect(result.sortedArray).toEqual(sorted);
  });

  it('should handle a mixed array of positive and negative numbers, and zero', () => {
    const arr = [10, -5, 0, 100, -20, 30];
    const sorted = [...arr].sort((a, b) => a - b);
    const result = radixSortNumbers.execute({ array: arr });
    expect(result.sortedArray).toEqual(sorted);
  });

  it('should handle an array with zeros', () => {
    const arr = [0, 0, 0];
    const sorted = [...arr].sort((a, b) => a - b);
    const result = radixSortNumbers.execute({ array: arr });
    expect(result.sortedArray).toEqual(sorted);
  });

  it('should sort a large array of random numbers', () => {
    const arr = Array.from({ length: 1000 }, () => Math.floor(Math.random() * 2000) - 1000);
    const sorted = [...arr].sort((a, b) => a - b);
    const result = radixSortNumbers.execute({ array: arr });
    expect(result.sortedArray).toEqual(sorted);
  });
});

describe('RadixSortStrings', () => {
  const radixSortStrings = new RadixSortStrings();

  it('should sort an array of strings lexicographically', () => {
    const arr = ["apple", "banana", "cherry", "date", "apricot"];
    const sorted = [...arr].sort();
    const result = radixSortStrings.execute({ array: arr });
    expect(result.sortedArray).toEqual(sorted);
  });

  it('should handle an empty array', () => {
    const result = radixSortStrings.execute({ array: [] });
    expect(result.sortedArray).toEqual([]);
  });

  it('should handle an array with a single element', () => {
    const result = radixSortStrings.execute({ array: ["hello"] });
    expect(result.sortedArray).toEqual(["hello"]);
  });

  it('should handle an array with all identical strings', () => {
    const result = radixSortStrings.execute({ array: ["test", "test", "test"] });
    expect(result.sortedArray).toEqual(["test", "test", "test"]);
  });

  it('should handle strings of varying lengths', () => {
    const arr = ["a", "abc", "ab"];
    const sorted = [...arr].sort();
    const result = radixSortStrings.execute({ array: arr });
    expect(result.sortedArray).toEqual(sorted);
  });

  it('should handle an array containing empty strings', () => {
    const arr = ["", "z", "a", ""];
    const sorted = [...arr].sort();
    const result = radixSortStrings.execute({ array: arr });
    expect(result.sortedArray).toEqual(sorted);
  });

  it('should handle strings with special characters', () => {
    const arr = ["!@#", "$%^", "abc", "123"];
    const sorted = [...arr].sort();
    const result = radixSortStrings.execute({ array: arr });
    expect(result.sortedArray).toEqual(sorted);
  });

  it('should sort a large array of random strings', () => {
    const arr = Array.from({ length: 500 }, () => Math.random().toString(36).substring(2, 15));
    const sorted = [...arr].sort();
    const result = radixSortStrings.execute({ array: arr });
    expect(result.sortedArray).toEqual(sorted);
  });
});
