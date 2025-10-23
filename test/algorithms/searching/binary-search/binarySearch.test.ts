import { describe, expect, it } from 'vitest';
import { BinarySearch, BinaryClosestSearch } from '../../../../src/algorithms/searching/binary-search';
import { series as financialSeries } from './fixtures/financial-series';

const compareNumbers = (a: number, b: number) => a - b;

interface TimeSeriesObject {
  time: number;
  value: number;
}

const compareTimeSeries = (a: TimeSeriesObject, b: TimeSeriesObject) => a.time - b.time;

describe('BinarySearch', () => {
  const sortedArray = [1, 3, 4, 6, 7, 12, 23, 33, 34, 35, 36, 55, 56, 66, 67, 78, 88, 123, 222, 234];
  const binarySearch = new BinarySearch<number>();

  it('should return -1 for an empty array', () => {
    const result = binarySearch.execute({ array: [], value: 1, compareFn: compareNumbers });
    expect(result.index).toEqual(-1);
  });

  it('should return -1 when the element is not found', () => {
    expect(binarySearch.execute({ array: sortedArray, value: 5, compareFn: compareNumbers }).index).toEqual(-1);
    expect(binarySearch.execute({ array: sortedArray, value: 0, compareFn: compareNumbers }).index).toEqual(-1);
    expect(binarySearch.execute({ array: sortedArray, value: 300, compareFn: compareNumbers }).index).toEqual(-1);
  });

  it('should return the correct index when the element is found', () => {
    expect(binarySearch.execute({ array: sortedArray, value: 4, compareFn: compareNumbers }).index).toEqual(2);
    expect(binarySearch.execute({ array: sortedArray, value: 35, compareFn: compareNumbers }).index).toEqual(9);
    expect(binarySearch.execute({ array: sortedArray, value: 234, compareFn: compareNumbers }).index).toEqual(19);
  });

  it('should handle a single-element array', () => {
    expect(binarySearch.execute({ array: [5], value: 5, compareFn: compareNumbers }).index).toEqual(0);
    expect(binarySearch.execute({ array: [5], value: 4, compareFn: compareNumbers }).index).toEqual(-1);
  });

  it('should find the first and last elements', () => {
    expect(binarySearch.execute({ array: sortedArray, value: 1, compareFn: compareNumbers }).index).toEqual(0);
    expect(binarySearch.execute({ array: sortedArray, value: 234, compareFn: compareNumbers }).index).toEqual(19);
  });
});

describe('BinaryClosestSearch', () => {
  const sortedArray = [10, 20, 30, 40, 50];
  const binaryClosestSearch = new BinaryClosestSearch<number>();

  it('should return -1 for an empty array', () => {
    const result = binaryClosestSearch.execute({ array: [], value: 15, compareFn: compareNumbers });
    expect(result.index).toEqual(-1);
  });

  it('should handle a single-element array', () => {
    const result = binaryClosestSearch.execute({ array: [30], value: 25, compareFn: compareNumbers });
    expect(result.index).toEqual(0);
  });

  it('should find the closest element when the value is in the array', () => {
    const result = binaryClosestSearch.execute({ array: sortedArray, value: 30, compareFn: compareNumbers });
    expect(result.index).toEqual(2);
  });

  it('should find the closest element when the value is not in the array', () => {
    expect(binaryClosestSearch.execute({ array: sortedArray, value: 28, compareFn: compareNumbers }).index).toEqual(2); // Closest to 30
    expect(binaryClosestSearch.execute({ array: sortedArray, value: 32, compareFn: compareNumbers }).index).toEqual(2); // Closest to 30
  });

  it('should return the higher index in case of a tie', () => {
    // When the distances are equal, the original implementation prefers the higher index.
    expect(binaryClosestSearch.execute({ array: sortedArray, value: 25, compareFn: compareNumbers }).index).toEqual(2); // 30 is as close as 20
    expect(binaryClosestSearch.execute({ array: sortedArray, value: 35, compareFn: compareNumbers }).index).toEqual(3); // 40 is as close as 30
  });

  it('should handle values outside the array bounds', () => {
    expect(binaryClosestSearch.execute({ array: sortedArray, value: 5, compareFn: compareNumbers }).index).toEqual(0);  // Closest to 10
    expect(binaryClosestSearch.execute({ array: sortedArray, value: 55, compareFn: compareNumbers }).index).toEqual(4); // Closest to 50
  });
});

describe('BinaryClosestSearch with financial time series', () => {
  const binaryClosestSearch = new BinaryClosestSearch<TimeSeriesObject>();

  it('should return the first element when the value is out of bounds (less)', () => {
    const searchTime = { time: 1548670090468 - 10, value: 0 };
    const result = binaryClosestSearch.execute({ array: financialSeries, value: searchTime, compareFn: compareTimeSeries });
    expect(result.index).toEqual(0);
  });

  it('should return the last element when the value is out of bounds (greater)', () => {
    const searchTime = { time: 1548670143168 + 10, value: 0 };
    const result = binaryClosestSearch.execute({ array: financialSeries, value: searchTime, compareFn: compareTimeSeries });
    expect(result.index).toEqual(financialSeries.length - 1);
  });

  it('should return the closest index in time', () => {
    const searchTime = { time: 1548670091596, value: 0 };
    const result = binaryClosestSearch.execute({ array: financialSeries, value: searchTime, compareFn: compareTimeSeries });
    expect(result.index).toEqual(2);
  });
});
