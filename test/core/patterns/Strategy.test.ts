import { describe, it, expect } from 'vitest';
import { StrategyContext, BubbleSortStrategy, QuickSortStrategy, LinearSearchStrategy, BinarySearchStrategy } from '../../../src/core/patterns/Strategy';
import { ArgumentError } from '../../../src/core/validation/ArgumentError';

describe('Strategy', () => {
  describe('StrategyContext', () => {
    it('throws ArgumentError on executeStrategy if no strategy is set', () => {
      const context = new StrategyContext<number[], number[]>();
      expect(() => context.executeStrategy([1, 2, 3])).toThrow(ArgumentError);
    });

    it('works with BubbleSortStrategy on numbers', () => {
      const context = new StrategyContext<number[], number[]>();
      context.setStrategy(new BubbleSortStrategy<number>());
      expect(context.executeStrategy([3, 1, 2])).toEqual([1, 2, 3]);
    });

    it('works with BubbleSortStrategy on strings', () => {
      const context = new StrategyContext<string[], string[]>();
      context.setStrategy(new BubbleSortStrategy<string>());
      expect(context.executeStrategy(['c', 'a', 'b'])).toEqual(['a', 'b', 'c']);
    });

    it('works with QuickSortStrategy on numbers', () => {
      const context = new StrategyContext<number[], number[]>();
      context.setStrategy(new QuickSortStrategy<number>());
      expect(context.executeStrategy([3, 1, 2])).toEqual([1, 2, 3]);
    });

    it('works with QuickSortStrategy on strings', () => {
      const context = new StrategyContext<string[], string[]>();
      context.setStrategy(new QuickSortStrategy<string>());
      expect(context.executeStrategy(['c', 'a', 'b'])).toEqual(['a', 'b', 'c']);
    });
  });

  describe('LinearSearchStrategy', () => {
    it('returns index of target', () => {
      const searcher = new LinearSearchStrategy<number>();
      expect(searcher.execute({ array: [1, 2, 3], target: 2 })).toBe(1);
    });

    it('returns -1 if target not found', () => {
      const searcher = new LinearSearchStrategy<number>();
      expect(searcher.execute({ array: [1, 2, 3], target: 4 })).toBe(-1);
    });
  });

  describe('BinarySearchStrategy', () => {
    it('returns index of target', () => {
      const searcher = new BinarySearchStrategy<number>();
      expect(searcher.execute({ array: [1, 2, 3], target: 2 })).toBe(1);
    });

    it('returns -1 if target not found', () => {
      const searcher = new BinarySearchStrategy<number>();
      expect(searcher.execute({ array: [1, 2, 3], target: 4 })).toBe(-1);
    });
  });
});
