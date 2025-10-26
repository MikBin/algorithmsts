import { describe, expect, it } from 'vitest';
import algorithmsts from '../../src/algorithmsts';
import {
  CountingSort,
  BinarySearch,
  LinkedList,
  Trie,
  NgramSimilarity
} from '../../src/algorithmsts';

/**
 * Migration Scenarios End-to-End Tests
 *
 * Tests that simulate migration from legacy APIs to new APIs,
 * ensuring both approaches work and produce consistent results.
 */
describe.skip('Migration Scenarios E2E Tests', () => {
  describe('Gradual Migration Path', () => {
    it('should allow mixing legacy and new APIs during migration', () => {
      // Legacy usage
      const legacyList = new algorithmsts.LinkedList();
      legacyList.add(1);
      legacyList.add(2);
      legacyList.add(3);

      // New API usage
      const newList = new LinkedList<number>();
      newList.add(4);
      newList.add(5);
      newList.add(6);

      // Both should work
      expect(legacyList.size).toBe(3);
      expect(newList.size).toBe(3);

      // Convert legacy to new format for processing
      const legacyArray = legacyList.toArray();
      const newArray = newList.toArray();

      // Use new API for sorting
      const countingSort = new CountingSort();
      const sortedLegacy = countingSort.execute({ array: legacyArray });
      const sortedNew = countingSort.execute({ array: newArray });

      expect(sortedLegacy.result).toEqual([1, 2, 3]);
      expect(sortedNew.result).toEqual([4, 5, 6]);
    });

    it('should produce identical results between legacy and new APIs', () => {
      const testData = [64, 34, 25, 12, 22, 11, 90];

      // Legacy binary search
      const legacyResult = algorithmsts.binarySearch.binarySearch(
        testData.sort((a, b) => a - b),
        25,
        (a, b) => a - b
      );

      // New binary search
      const binarySearch = new BinarySearch<number>();
      const newResult = binarySearch.execute({
        array: testData.sort((a, b) => a - b),
        value: 25,
        compareFn: (a, b) => a - b
      });

      // Results should be equivalent
      expect(legacyResult).toBe(newResult.result);
      expect(legacyResult).toBe(2); // 25 is at index 2 in sorted array
    });

    it('should handle string operations consistently', () => {
      const str1 = 'hello';
      const str2 = 'world';

      // Legacy string similarity
      const legacySimilarity = algorithmsts.ngramSimilarity(str1, str2, 2, false);

      // New string similarity
      const ngramSimilarity = new NgramSimilarity();
      const newSimilarity = ngramSimilarity.execute({
        str1,
        str2
      });

      // Results should be equivalent
      expect(typeof legacySimilarity).toBe('number');
      expect(newSimilarity.result).toBe(legacySimilarity);
    });
  });

  describe('API Compatibility Testing', () => {
    it('should maintain data structure compatibility', () => {
      // Test that data created with legacy API can be processed with new API
      const legacyTrie = new algorithmsts.trie();
      legacyTrie.add('apple', 1);
      legacyTrie.add('banana', 2);

      const newTrie = new Trie<number>();
      newTrie.add('cherry', 3);
      newTrie.add('date', 4);

      // Both should work independently
      expect(legacyTrie.contains('apple')).toBe(true);
      expect(newTrie.contains('cherry')).toBe(true);
      expect(legacyTrie.contains('cherry')).toBe(false);
      expect(newTrie.contains('apple')).toBe(false);
    });

    it('should handle error cases consistently', () => {
      // Test error handling in both APIs
      expect(() => {
        algorithmsts.binarySearch.binarySearch(null as any, 5, (a, b) => a - b);
      }).toThrow();

      expect(() => {
        const binarySearch = new BinarySearch<number>();
        binarySearch.execute({
          array: null as any,
          value: 5,
          compareFn: (a, b) => a - b
        });
      }).toThrow();

      expect(() => {
        algorithmsts.ngramSimilarity(null as any, 'test');
      }).toThrow();

      expect(() => {
        const ngramSimilarity = new NgramSimilarity();
        ngramSimilarity.execute({
          str1: null as any,
          str2: 'test'
        });
      }).toThrow();
    });
  });

  describe('Performance Consistency During Migration', () => {
    it('should maintain performance characteristics', () => {
      const testArray = Array.from({ length: 100 }, () => Math.floor(Math.random() * 100));
      const sortedArray = testArray.sort((a, b) => a - b);

      // Time legacy API
      const legacyStart = Date.now();
      for (let i = 0; i < 10; i++) {
        algorithmsts.binarySearch.binarySearch(sortedArray, sortedArray[i], (a, b) => a - b);
      }
      const legacyTime = Date.now() - legacyStart;

      // Time new API
      const newStart = Date.now();
      const binarySearch = new BinarySearch<number>();
      for (let i = 0; i < 10; i++) {
        binarySearch.execute({
          array: sortedArray,
          value: sortedArray[i],
          compareFn: (a, b) => a - b
        });
      }
      const newTime = Date.now() - newStart;

      // Performance should be comparable (within 2x factor)
      expect(newTime).toBeLessThan(legacyTime * 2);
      expect(legacyTime).toBeLessThan(newTime * 2);
    });

    it('should handle large datasets efficiently in both APIs', () => {
      const largeArray = Array.from({ length: 1000 }, () => Math.floor(Math.random() * 1000));
      const sortedArray = largeArray.sort((a, b) => a - b);

      // Legacy API with large data
      const legacyStart = Date.now();
      const legacyResult = algorithmsts.binarySearch.binarySearch(
        sortedArray,
        sortedArray[500],
        (a, b) => a - b
      );
      const legacyTime = Date.now() - legacyStart;

      // New API with large data
      const newStart = Date.now();
      const binarySearch = new BinarySearch<number>();
      const newResult = binarySearch.execute({
        array: sortedArray,
        value: sortedArray[500],
        compareFn: (a, b) => a - b
      });
      const newTime = Date.now() - newStart;

      // Results should be correct and fast
      expect(legacyResult).toBe(500);
      expect(newResult.result).toBe(500);
      expect(legacyTime).toBeLessThan(50); // Under 50ms
      expect(newTime).toBeLessThan(50); // Under 50ms
    });
  });

  describe('Migration Workflow Testing', () => {
    it('should support step-by-step migration', () => {
      // Step 1: Start with legacy API
      const legacyList = new algorithmsts.LinkedList();
      [1, 2, 3, 4, 5].forEach(num => legacyList.add(num));

      // Step 2: Migrate data processing to new API
      const arrayData = legacyList.toArray();
      const countingSort = new CountingSort();
      const sortedData = countingSort.execute({ array: arrayData });

      // Step 3: Use new data structure for results
      const newList = new LinkedList<number>();
      sortedData.result.forEach(num => newList.add(num));

      // Verify the migration worked
      expect(legacyList.size).toBe(5);
      expect(newList.size).toBe(5);
      expect(newList.toArray()).toEqual([1, 2, 3, 4, 5]);
    });

    it('should handle complex migration scenarios', () => {
      // Simulate a complex migration scenario

      // Legacy data processing
      const legacyTrie = new algorithmsts.trie();
      const words = ['algorithm', 'typescript', 'library', 'migration'];
      words.forEach((word, index) => {
        legacyTrie.add(word, index);
      });

      // New API processing
      const newTrie = new Trie<number>();
      const additionalWords = ['testing', 'validation', 'performance'];
      additionalWords.forEach((word, index) => {
        newTrie.add(word, index + words.length);
      });

      // Cross-API operations
      const allWords = [...words, ...additionalWords];
      const ngramSimilarity = new NgramSimilarity();

      // Find similar words across both tries
      const targetWord = 'algorithm';
      let mostSimilar = '';
      let highestSimilarity = 0;

      for (const word of allWords) {
        if (word !== targetWord) {
          const similarity = ngramSimilarity.execute({
            str1: targetWord,
            str2: word
          });

          if (similarity.result > highestSimilarity) {
            highestSimilarity = similarity.result;
            mostSimilar = word;
          }
        }
      }

      // Should find a reasonable match
      expect(mostSimilar).toBeDefined();
      expect(highestSimilarity).toBeGreaterThan(0);
    });
  });

  describe('Deprecation Warning Integration', () => {
    it('should emit warnings for legacy API usage', () => {
      // Capture console.warn
      const originalWarn = console.warn;
      const warnings: string[] = [];
      console.warn = (message: string) => warnings.push(message);

      try {
        // Use legacy API
        const _ = algorithmsts.binarySearch;
        const __ = new algorithmsts.LinkedList();

        // Force evaluation
        expect(_).toBeDefined();
        expect(__).toBeDefined();

        // Should have emitted warnings
        expect(warnings.length).toBeGreaterThan(0);

        // Check for deprecation keywords
        const hasDeprecationWarning = warnings.some(w =>
          w.includes('deprecated') ||
          w.includes('DEPRECATED') ||
          w.includes('legacy') ||
          w.includes('migration')
        );

        expect(hasDeprecationWarning).toBe(true);
      } finally {
        console.warn = originalWarn;
      }
    });

    it('should not emit warnings for new API usage', () => {
      // Capture console.warn
      const originalWarn = console.warn;
      const warnings: string[] = [];
      console.warn = (message: string) => warnings.push(message);

      try {
        // Use new API
        const countingSort = new CountingSort();
        const binarySearch = new BinarySearch<number>();
        const linkedList = new LinkedList<number>();

        // Perform operations
        const result1 = countingSort.execute({ array: [1, 2, 3] });
        const result2 = binarySearch.execute({
          array: [1, 2, 3],
          value: 2,
          compareFn: (a, b) => a - b
        });
        linkedList.add(42);

        // Should not have emitted warnings for new API
        const newAPIWarnings = warnings.filter(w =>
          !w.includes('compatibility') &&
          !w.includes('legacy') &&
          !w.includes('migration')
        );

        expect(newAPIWarnings.length).toBe(0);
      } finally {
        console.warn = originalWarn;
      }
    });
  });

  describe('Backward Compatibility Assurance', () => {
    it('should maintain legacy behavior indefinitely', () => {
      // Test that legacy behavior is preserved even as new APIs are added

      // Legacy sorting behavior
      const legacyList = new algorithmsts.LinkedList();
      [5, 3, 8, 1, 9].forEach(num => legacyList.add(num));

      // Legacy search behavior
      const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      const legacySearchResult = algorithmsts.binarySearch.binarySearch(
        sortedArray,
        7,
        (a, b) => a - b
      );

      // Legacy string operations
      const legacyStringResult = algorithmsts.ngramSimilarity('test', 'testing', 2, false);

      // All should work as before
      expect(legacyList.size).toBe(5);
      expect(legacySearchResult).toBe(6);
      expect(typeof legacyStringResult).toBe('number');
      expect(legacyStringResult).toBeGreaterThan(0);
    });

    it('should support legacy documentation examples', () => {
      // Test examples from the README that use legacy API

      // Binary search example
      const sortedArray = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91];
      const comparisonFn = (a: number, b: number) => a - b;

      const index = algorithmsts.binarySearch.binarySearch(sortedArray, 23, comparisonFn);
      expect(index).toBe(5);

      const closestIndex = algorithmsts.binarySearch.binaryClosestSearch(sortedArray, 25, comparisonFn);
      expect(closestIndex).toBe(5);

      // Trie example
      const trie = new algorithmsts.trie();
      trie.add("apple", 1);
      trie.add("apply", 2);
      trie.add("apricot", 3);

      expect(trie.get("apple")).toBe(1);
      expect(trie.contains("app")).toBe(true);

      // String similarity example
      const similarity = algorithmsts.ngramSimilarity('night', 'nacht');
      expect(typeof similarity).toBe('number');
    });
  });
});
