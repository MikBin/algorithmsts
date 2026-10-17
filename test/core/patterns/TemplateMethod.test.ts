import { describe, it, expect } from 'vitest';
import { SortingAlgorithm, SearchAlgorithm, DataProcessingAlgorithm } from '../../../src/core/patterns/TemplateMethod';
import { ArgumentError } from '../../../src/core/validation/ArgumentError';

describe('TemplateMethod', () => {
  describe('SortingAlgorithm', () => {
    it('sorts an array correctly', () => {
      const sorter = new SortingAlgorithm('Test Sort', 'O(1)', 'O(1)');
      expect(sorter.execute([3, 1, 2])).toEqual([1, 2, 3]);
    });
  });

  describe('SearchAlgorithm', () => {
    it('throws ArgumentError if input does not contain an array property', () => {
      const searcher = new SearchAlgorithm('Test Search', 'O(1)', 'O(1)');
      // @ts-expect-error Testing invalid input throws ArgumentError
      expect(() => searcher.execute({ target: 3 })).toThrow(ArgumentError);
    });

    it('throws ArgumentError if input does not contain a numeric target property', () => {
      const searcher = new SearchAlgorithm('Test Search', 'O(1)', 'O(1)');
      // @ts-expect-error Testing invalid input throws ArgumentError
      expect(() => searcher.execute({ array: [1, 2, 3], target: '3' })).toThrow(ArgumentError);
    });

    it('returns correct index when target is found', () => {
      const searcher = new SearchAlgorithm('Test Search', 'O(1)', 'O(1)');
      expect(searcher.execute({ array: [1, 2, 3], target: 2 })).toBe(1);
    });

    it('returns -1 when target is not found', () => {
      const searcher = new SearchAlgorithm('Test Search', 'O(1)', 'O(1)');
      expect(searcher.execute({ array: [1, 2, 3], target: 4 })).toBe(-1);
    });
  });

  describe('DataProcessingAlgorithm', () => {
    it('throws ArgumentError if input is not an array', () => {
      const processor = new DataProcessingAlgorithm('Test Process', 'O(1)', 'O(1)');
      // @ts-expect-error Testing invalid input throws ArgumentError
      expect(() => processor.execute('not an array')).toThrow(ArgumentError);
    });

    it('calculates sum, average, and count correctly', () => {
      const processor = new DataProcessingAlgorithm('Test Process', 'O(1)', 'O(1)');
      expect(processor.execute([1, 2, 3, 4, 5])).toEqual({ sum: 15, average: 3, count: 5 });
    });

    it('ignores non-numeric values during processing', () => {
      const processor = new DataProcessingAlgorithm('Test Process', 'O(1)', 'O(1)');
      // @ts-expect-error Testing invalid input containing mixed types
      expect(processor.execute([1, 'a', 2, NaN, 3])).toEqual({ sum: 6, average: 2, count: 3 });
    });
  });
});
