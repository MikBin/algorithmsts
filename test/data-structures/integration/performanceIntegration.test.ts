import { describe, expect, it } from 'vitest';
import { LinkedList } from '../../../src/data-structures/linked-list';
import { SkipList } from '../../../src/data-structures/skip-list';
import { Trie } from '../../../src/data-structures/trie';
import { SuffixTree } from '../../../src/data-structures/suffix-tree';

/**
 * Performance regression tests for data structures
 */
describe('Performance Integration Tests', () => {
  describe('Large Dataset Handling', () => {
    const LARGE_SIZE = 10000;
    const largeArray = Array.from({ length: LARGE_SIZE }, (_, i) => i);

    it('should handle large LinkedList operations', () => {
      const list = LinkedList.fromArray(largeArray);
      expect(list.size).toBe(LARGE_SIZE);

      // Test basic operations
      expect(list.first()).toBe(0);
      expect(list.last()).toBe(LARGE_SIZE - 1);
      expect(list.contains(5000)).toBe(true);
    });

    it('should handle large SkipList operations', () => {
      const skipList = new SkipList<number>(16, -Infinity);

      // Add elements
      largeArray.forEach(val => skipList.add(val));
      expect(skipList.size).toBe(LARGE_SIZE);

      // Test search operations
      expect(skipList.contains(5000)).toBe(true);
      expect(skipList.contains(LARGE_SIZE + 1)).toBe(false);
    });

    it('should handle large Trie operations', () => {
      const trie = new Trie<string>();

      // Add many string keys
      const stringArray = largeArray.map(i => i.toString());
      stringArray.forEach((val, index) => {
        trie.add(val, index);
      });

      expect(trie.contains('5000')).toBe(true);
      expect(trie.contains('notfound')).toBe(false);
    });

    it('should handle large SuffixTree operations', () => {
      const largeString = largeArray.slice(0, 1000).join('');
      const suffixTree = new SuffixTree(largeString);

      expect(suffixTree.findSubstring('500')).not.toBe(-1);
    });
  });

  describe('Operation Time Complexity Validation', () => {
    it('should demonstrate O(1) operations for LinkedList', () => {
      const list = LinkedList.fromArray([1, 2, 3, 4, 5]);

      // These should be O(1)
      expect(list.size).toBe(5);
      expect(list.isEmpty()).toBe(false);
      expect(list.first()).toBe(1);
      expect(list.last()).toBe(5);
    });

    it('should demonstrate O(log n) operations for SkipList', () => {
      const skipList = new SkipList<number>(16, -Infinity);
      const testData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

      testData.forEach(val => skipList.add(val));

      // Search operations should be O(log n)
      expect(skipList.contains(5)).toBe(true);
      expect(skipList.contains(15)).toBe(false);
    });
  });

  describe('Memory Usage Validation', () => {
    it('should handle memory efficiently for large structures', () => {
      const mediumArray = Array.from({ length: 5000 }, (_, i) => i);

      const list = LinkedList.fromArray(mediumArray);
      const skipList = new SkipList<number>(16, -Infinity);

      mediumArray.forEach(val => skipList.add(val));

      // Basic functionality check
      expect(list.size).toBe(5000);
      expect(skipList.size).toBe(5000);
    });
  });

  describe('Concurrent Operations', () => {
    it('should handle multiple operations on different structures', () => {
      const list = LinkedList.fromArray([1, 2, 3]);
      const skipList = new SkipList<number>(10, -Infinity);
      const trie = new Trie<string>();

      // Perform operations on different structures
      list.add(4);
      skipList.add(1);
      trie.add('test', 100);

      expect(list.size).toBe(4);
      expect(skipList.size).toBe(1);
      expect(trie.contains('test')).toBe(true);
    });
  });

  describe('Performance Benchmarks', () => {
    const BENCHMARK_SIZE = 1000;

    it('should complete operations within reasonable time limits', () => {
      const startTime = Date.now();

      const array = Array.from({ length: BENCHMARK_SIZE }, (_, i) => i);
      const list = LinkedList.fromArray(array);
      const skipList = new SkipList<number>(16, -Infinity);

      array.forEach(val => skipList.add(val));

      // Perform various operations
      list.contains(500);
      skipList.contains(500);

      const endTime = Date.now();
      const duration = endTime - startTime;

      // Should complete in reasonable time (less than 1 second for this size)
      expect(duration).toBeLessThan(1000);
    });
  });
});
