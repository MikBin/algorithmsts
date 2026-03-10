import { describe, expect, it } from 'vitest';
import {
  BinarySearch,
 CountingSort,
  RadixSortNumbers,
  NgramSimilarity,
  JaroDistance,
  LevenshteinDistance,
  SparseTable
} from '../../src/algorithms';
import {
  LinkedList,
  SkipList,
  SegmentTree,
  Trie,
  SuffixTree
} from '../../src/data-structures';
import {
  AdjacencyListGraph,
  BreadthFirstSearch,
  DepthFirstSearch
} from '../../src/graphs';
import { Validator } from '../../src/core';
import { PerformanceMonitor } from '../../src/performance';
>>>>>>> origin/master
=======
import { Validator } from '../../src/core';
import { PerformanceMonitor } from '../../src/performance';
>>>>>>> origin/master

/**
 * Full Library Integration Tests
 *
 * Tests importing and using all modules together to ensure
 * the library works as a cohesive whole.
 */
describe('Full Library Integration Tests', () => {
  describe('Module Import Tests', () => {
    it('should import all core modules without errors', () => {
      // Test that all imports work correctly
      expect(LinkedList).toBeDefined();
      expect(SkipList).toBeDefined();
      expect(SegmentTree).toBeDefined();
      expect(Trie).toBeDefined();
      expect(SuffixTree).toBeDefined();
      expect(BinarySearch).toBeDefined();
      expect(CountingSort).toBeDefined();
      expect(RadixSortNumbers).toBeDefined();
      expect(NgramSimilarity).toBeDefined();
      expect(JaroDistance).toBeDefined();
      expect(LevenshteinDistance).toBeDefined();
      expect(SparseTable).toBeDefined();
      expect(AdjacencyListGraph).toBeDefined();
      expect(BreadthFirstSearch).toBeDefined();
      expect(DepthFirstSearch).toBeDefined();
    });
  });

  describe('Cross-Module Integration', () => {
    it('should use multiple algorithms together', () => {
      // Create test data
      const numbers = [64, 34, 25, 12, 22, 11, 90];
      const sortedNumbers = [...numbers].sort((a, b) => a - b);

      // Use sorting algorithm
      const countingSort = new CountingSort();
      const sorted = countingSort.execute({ array: [...numbers] });

      expect(sorted.result).toEqual(sortedNumbers);

      // Use search algorithm on sorted result
      const binarySearch = new BinarySearch<number>();
      const searchResult = binarySearch.execute({
        array: sorted.result,
        value: 22,
        compareFn: (a, b) => a - b
      });

      expect(searchResult.result).toBe(2); // Index of 22 in sorted array
    });

    it('should integrate data structures with algorithms', () => {
      // Create a linked list
      const list = new LinkedList<number>();

      // Add elements
      [1, 2, 3, 4, 5].forEach(num => list.add(num));

      // Convert to array for sorting
      const array = list.toArray();

      // Sort the array
      const countingSort = new CountingSort();
      const sorted = countingSort.execute({ array });

      expect(sorted.result).toEqual([1, 2, 3, 4, 5]);
    });

    it('should use string algorithms with data structures', () => {
      // Create a trie
      const trie = new Trie<string>();

      // Add words
      const words = ['apple', 'application', 'apply', 'banana'];
      words.forEach(word => trie.add(word, word.toString()));

      // Use string similarity on trie contents
      const ngramSimilarity = new NgramSimilarity();
      const similarity = ngramSimilarity.execute({
        str1: 'apple',
        str2: 'application'
      });

      expect(similarity.result).toBeGreaterThan(0);
      expect(trie.contains('apple')).toBe(true);
    });
  });

  describe('Performance Integration', () => {
    it('should measure performance across modules', () => {
      const testArray = Array.from({ length: 1000 }, () => Math.floor(Math.random() * 1000));

      const executionTime = PerformanceMonitor.measureExecutionTime(() => {
        const countingSort = new CountingSort();
        countingSort.execute({ array: testArray });
      });

      expect(executionTime).toBeGreaterThan(0);
      expect(executionTime).toBeLessThan(1000); // Should complete within reasonable time
    });

    it.skip('should validate inputs across modules', () => {
      // Test validation with invalid inputs
      expect(() => {
        const countingSort = new CountingSort();
        countingSort.execute({ array: null as any });
      }).toThrow();

      expect(() => {
        const binarySearch = new BinarySearch<number>();
        binarySearch.execute({
          array: [1, 2, 3],
          value: 2,
          compareFn: null as any
        });
      }).toThrow();
    });
  });

  describe('Type Safety Integration', () => {
    it('should maintain type safety across modules', () => {
      // Test that TypeScript types are properly exported and work together
      const list: LinkedList<number> = new LinkedList<number>();
      const trie: Trie<string> = new Trie<string>();

      // These should compile without type errors
      list.add(42);
      trie.add('test', 'value');

      expect(list.size).toBe(1);
      expect(trie.contains('test')).toBe(true);
    });
  });

  describe('Error Handling Integration', () => {
    it.skip('should handle errors consistently across modules', () => {
      // Test that different modules handle errors in a consistent way
      const algorithms = [
        new CountingSort(),
        new BinarySearch<number>(),
        new NgramSimilarity()
      ];

      algorithms.forEach(algorithm => {
        expect(() => {
          algorithm.execute({} as any);
        }).toThrow();
      });
    });
  });
});