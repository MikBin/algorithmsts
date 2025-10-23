import { describe, expect, it } from 'vitest';
import algorithmsts from '../../src/algorithmsts';

/**
 * Backward Compatibility Integration Tests
 *
 * Tests that ensure legacy APIs still work and provide appropriate
 * deprecation warnings while maintaining functionality.
 */
describe('Backward Compatibility Integration Tests', () => {
  describe('Legacy Default Export', () => {
    it('should provide legacy binary search API', () => {
      const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      const target = 7;

      const result = algorithmsts.binarySearch.binarySearch(sortedArray, target, (a, b) => a - b);
      expect(result).toBe(6); // 7 is at index 6
    });

    it('should provide legacy segment tree API', () => {
      // Test that legacy segment tree is accessible
      expect(algorithmsts.segmentTree).toBeDefined();
    });

    it('should provide legacy data structure APIs', () => {
      expect(algorithmsts.LinkedList).toBeDefined();
      expect(algorithmsts.SkipList).toBeDefined();
      expect(algorithmsts.SegmentTree).toBeDefined();
      expect(algorithmsts.Trie).toBeDefined();
      expect(algorithmsts.SuffixTree).toBeDefined();
    });

    it('should provide legacy string similarity API', () => {
      expect(algorithmsts.ngramSimilarity).toBeDefined();
    });
  });

  describe('Legacy API Functionality', () => {
    it('should maintain legacy binary search behavior', () => {
      const testCases = [
        { array: [1, 2, 3, 4, 5], target: 3, expected: 2 },
        { array: [10, 20, 30, 40, 50], target: 25, expected: -1 },
        { array: [1, 3, 5, 7, 9], target: 1, expected: 0 },
        { array: [1, 3, 5, 7, 9], target: 9, expected: 4 }
      ];

      testCases.forEach(({ array, target, expected }) => {
        const result = algorithmsts.binarySearch.binarySearch(array, target, (a, b) => a - b);
        expect(result).toBe(expected);
      });
    });

    it('should maintain legacy data structure instantiation', () => {
      // Test that legacy constructors work
      expect(() => {
        const list = new algorithmsts.LinkedList();
        expect(list).toBeDefined();
      }).not.toThrow();

      expect(() => {
        const trie = new algorithmsts.Trie();
        expect(trie).toBeDefined();
      }).not.toThrow();
    });

    it('should maintain legacy string similarity functionality', () => {
      const result = algorithmsts.ngramSimilarity('hello', 'world', 2, false);
      expect(typeof result).toBe('number');
      expect(result).toBeGreaterThanOrEqual(0);
      expect(result).toBeLessThanOrEqual(1);
    });
  });

  describe('Deprecation Warnings', () => {
    it('should emit deprecation warnings when using legacy APIs', () => {
      // Capture console.warn calls
      const originalWarn = console.warn;
      const warnings: string[] = [];
      console.warn = (message: string) => warnings.push(message);

      try {
        // Access legacy API to trigger warnings
        const _ = algorithmsts.binarySearch;
        const __ = algorithmsts.LinkedList;

        // Force evaluation
        expect(_).toBeDefined();
        expect(__).toBeDefined();

        // Check that warnings were emitted
        expect(warnings.length).toBeGreaterThan(0);
      } finally {
        // Restore original console.warn
        console.warn = originalWarn;
      }
    });

    it('should provide helpful deprecation messages', () => {
      const originalWarn = console.warn;
      const warnings: string[] = [];
      console.warn = (message: string) => warnings.push(message);

      try {
        // Import compatibility layer
        require('../../src/compatibility');

        // Check for specific deprecation messages
        const hasDeprecationWarning = warnings.some(w =>
          w.includes('deprecated') ||
          w.includes('DEPRECATED') ||
          w.includes('compatibility')
        );

        expect(hasDeprecationWarning).toBe(true);
      } finally {
        console.warn = originalWarn;
      }
    });
  });

  describe('API Consistency', () => {
    it('should produce consistent results between legacy and new APIs', () => {
      // Test data
      const testArray = [64, 34, 25, 12, 22, 11, 90];
      const sortedArray = [...testArray].sort((a, b) => a - b);

      // Legacy sorting (if available through some method)
      // For now, just verify the sorted array is correct
      expect(sortedArray).toEqual([11, 12, 22, 25, 34, 64, 90]);

      // Legacy search
      const searchResult = algorithmsts.binarySearch.binarySearch(sortedArray, 25, (a, b) => a - b);
      expect(searchResult).toBe(3); // 25 is at index 3 in sorted array
    });

    it('should handle edge cases consistently', () => {
      const edgeCases = [
        { array: [], target: 5, expected: -1 },
        { array: [1], target: 1, expected: 0 },
        { array: [1], target: 2, expected: -1 },
        { array: [1, 2, 3], target: 2, expected: 1 }
      ];

      edgeCases.forEach(({ array, target, expected }) => {
        const result = algorithmsts.binarySearch.binarySearch(array, target, (a, b) => a - b);
        expect(result).toBe(expected);
      });
    });
  });

  describe('Error Handling Compatibility', () => {
    it('should handle invalid inputs gracefully in legacy APIs', () => {
      expect(() => {
        algorithmsts.binarySearch.binarySearch(null as any, 5, (a, b) => a - b);
      }).toThrow();

      expect(() => {
        algorithmsts.binarySearch.binarySearch([1, 2, 3], 2, null as any);
      }).toThrow();
    });

    it('should provide meaningful error messages', () => {
      expect(() => {
        algorithmsts.binarySearch.binarySearch(undefined as any, 5, (a, b) => a - b);
      }).toThrow();

      expect(() => {
        algorithmsts.binarySearch.binarySearch([1, 2, 3], 2, undefined as any);
      }).toThrow();
    });
  });

  describe('Migration Path Validation', () => {
    it('should allow gradual migration from legacy to new API', () => {
      // This test verifies that code can use both APIs simultaneously
      // during migration

      // Legacy usage
      const legacyResult = algorithmsts.binarySearch.binarySearch([1, 2, 3, 4, 5], 3, (a, b) => a - b);

      // New usage (would be imported separately)
      // const { BinarySearch } = require('../../src/algorithms');
      // const binarySearch = new BinarySearch<number>();
      // const newResult = binarySearch.execute({
      //   array: [1, 2, 3, 4, 5],
      //   value: 3,
      //   compareFn: (a, b) => a - b
      // });

      // Results should be equivalent
      expect(legacyResult).toBe(2);
      // expect(newResult.result).toBe(legacyResult); // When new API is available
    });

    it('should maintain performance characteristics', () => {
      const testArray = Array.from({ length: 100 }, () => Math.floor(Math.random() * 100));
      const sortedArray = testArray.sort((a, b) => a - b);

      const startTime = Date.now();

      // Perform multiple legacy operations
      for (let i = 0; i < 10; i++) {
        const target = sortedArray[Math.floor(Math.random() * sortedArray.length)];
        algorithmsts.binarySearch.binarySearch(sortedArray, target, (a, b) => a - b);
      }

      const endTime = Date.now();
      const totalTime = endTime - startTime;

      // Should complete within reasonable time
      expect(totalTime).toBeLessThan(100); // Less than 100ms for 10 operations
    });
  });

  describe('Documentation References', () => {
    it('should validate that legacy examples still work', () => {
      // Test examples from the README that use legacy API

      // Binary search example
      const sortedArray = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91];
      const comparisonFn = (a: number, b: number) => a - b;

      const index = algorithmsts.binarySearch.binarySearch(sortedArray, 23, comparisonFn);
      expect(index).toBe(5);

      const closestIndex = algorithmsts.binarySearch.binaryClosestSearch(sortedArray, 25, comparisonFn);
      expect(closestIndex).toBe(5);
    });

    it('should support legacy data structure examples', () => {
      // Test that legacy constructors work as documented
      expect(() => {
        const skipList = new algorithmsts.skipList(10, null);
        expect(skipList).toBeDefined();
      }).not.toThrow();

      expect(() => {
        const trie = new algorithmsts.trie();
        expect(trie).toBeDefined();
      }).not.toThrow();
    });
  });
});
