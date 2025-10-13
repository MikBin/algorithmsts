import { describe, expect, it } from 'vitest';
import { binarySearch, binaryClosestSearch } from "../../src/binarySearch/binarySearch";
import { binaryComparisonRoutine } from "../../src/binarySearch/interfaces";
import { series as financialSeries } from './fixtures/financial-series';

const compareNumbers: binaryComparisonRoutine<number> = (a: number, b: number) => a - b;

interface TimeSeriesObject {
  time: number;
  value: number;
}

const compareTimeSeries: binaryComparisonRoutine<TimeSeriesObject> = (a: TimeSeriesObject, b: TimeSeriesObject) => a.time - b.time;

describe('binarySearch', () => {
  const sortedArray = [1, 3, 4, 6, 7, 12, 23, 33, 34, 35, 36, 55, 56, 66, 67, 78, 88, 123, 222, 234];

  it('should return -1 for an empty array', () => {
    expect(binarySearch([], 1, compareNumbers)).toEqual(-1);
  });

  it('should return -1 when the element is not found', () => {
    expect(binarySearch(sortedArray, 5, compareNumbers)).toEqual(-1);
    expect(binarySearch(sortedArray, 0, compareNumbers)).toEqual(-1);
    expect(binarySearch(sortedArray, 300, compareNumbers)).toEqual(-1);
  });

  it('should return the correct index when the element is found', () => {
    expect(binarySearch(sortedArray, 4, compareNumbers)).toEqual(2);
    expect(binarySearch(sortedArray, 35, compareNumbers)).toEqual(9);
    expect(binarySearch(sortedArray, 234, compareNumbers)).toEqual(19);
  });

  it('should handle a single-element array', () => {
    expect(binarySearch([5], 5, compareNumbers)).toEqual(0);
    expect(binarySearch([5], 4, compareNumbers)).toEqual(-1);
  });

  it('should find the first and last elements', () => {
    expect(binarySearch(sortedArray, 1, compareNumbers)).toEqual(0);
    expect(binarySearch(sortedArray, 234, compareNumbers)).toEqual(19);
  });
});

describe('binaryClosestSearch', () => {
  const sortedArray = [10, 20, 30, 40, 50];

  it('should return -1 for an empty array', () => {
    expect(binaryClosestSearch([], 15, compareNumbers)).toEqual(-1);
  });

  it('should handle a single-element array', () => {
    expect(binaryClosestSearch([30], 25, compareNumbers)).toEqual(0);
  });

  it('should find the closest element when the value is in the array', () => {
    expect(binaryClosestSearch(sortedArray, 30, compareNumbers)).toEqual(2);
  });

  it('should find the closest element when the value is not in the array', () => {
    expect(binaryClosestSearch(sortedArray, 28, compareNumbers)).toEqual(2); // Closest to 30
    expect(binaryClosestSearch(sortedArray, 32, compareNumbers)).toEqual(2); // Closest to 30
  });

  it('should return the higher index in case of a tie', () => {
    // When the distances are equal, the original implementation prefers the higher index.
    expect(binaryClosestSearch(sortedArray, 25, compareNumbers)).toEqual(2); // 30 is as close as 20
    expect(binaryClosestSearch(sortedArray, 35, compareNumbers)).toEqual(3); // 40 is as close as 30
  });

  it('should handle values outside the array bounds', () => {
    expect(binaryClosestSearch(sortedArray, 5, compareNumbers)).toEqual(0);  // Closest to 10
    expect(binaryClosestSearch(sortedArray, 55, compareNumbers)).toEqual(4); // Closest to 50
  });
});

describe('binaryClosestSearch with financial time series', () => {
  it('should return the first element when the value is out of bounds (less)', () => {
    const searchTime = { time: 1548670090468 - 10, value: 0 };
    expect(binaryClosestSearch(financialSeries, searchTime, compareTimeSeries)).toEqual(0);
  });

  it('should return the last element when the value is out of bounds (greater)', () => {
    const searchTime = { time: 1548670143168 + 10, value: 0 };
    expect(binaryClosestSearch(financialSeries, searchTime, compareTimeSeries)).toEqual(financialSeries.length - 1);
  });

  it('should return the closest index in time', () => {
    const searchTime = { time: 1548670091596, value: 0 };
    expect(binaryClosestSearch(financialSeries, searchTime, compareTimeSeries)).toEqual(2);
  });
});
