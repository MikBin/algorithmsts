import { describe, expect, it } from "vitest";
import {
  BinarySearch,
  CountingSort,
  RadixSortNumbers,
  NgramSimilarity,
  JaroDistance,
  LevenshteinDistance,
  SparseTable,
} from "../../src/algorithms";
import { LinkedList, SkipList, SegmentTree, Trie, SuffixTree } from "../../src/data-structures";
import { AdjacencyListGraph, BreadthFirstSearch, DepthFirstSearch } from "../../src/graphs";
import { PerformanceMonitor } from "../../src/performance";

/**
 * Full Library Integration Tests
 *
 * Tests importing and using all modules together to ensure
 * the library works as a cohesive whole.
 */
describe("Full Library Integration Tests", () => {
  describe("Module Import Tests", () => {
    it("should resolve data structure imports correctly", () => {
      expect(LinkedList).toBeDefined();
      expect(SkipList).toBeDefined();
      expect(SegmentTree).toBeDefined();
      expect(Trie).toBeDefined();
      expect(SuffixTree).toBeDefined();
    });

    it("should resolve algorithm imports correctly", () => {
      expect(BinarySearch).toBeDefined();
      expect(CountingSort).toBeDefined();
      expect(RadixSortNumbers).toBeDefined();
      expect(NgramSimilarity).toBeDefined();
      expect(JaroDistance).toBeDefined();
      expect(LevenshteinDistance).toBeDefined();
      expect(SparseTable).toBeDefined();
    });

    it("should resolve graph imports correctly", () => {
      expect(AdjacencyListGraph).toBeDefined();
      expect(BreadthFirstSearch).toBeDefined();
      expect(DepthFirstSearch).toBeDefined();
    });
  });

  describe("Cross-Module Integration", () => {
    it("should chain counting sort into binary search successfully", () => {
      const numbers = [64, 34, 25, 12, 22, 11, 90];
      const sortedNumbers = [...numbers].sort((a, b) => a - b);

      const countingSort = new CountingSort();
      const sorted = countingSort.execute({ array: [...numbers] });
      expect(sorted.result).toEqual(sortedNumbers);

      const binarySearch = new BinarySearch<number>();
      const searchResult = binarySearch.execute({
        array: sorted.result,
        value: 22,
        compareFn: (a, b) => a - b,
      });

      expect(searchResult.result).toBe(2);
    });

    it("should process a linked list to an array and sort it", () => {
      const list = new LinkedList<number>();
      [1, 2, 3, 4, 5].forEach((num) => list.add(num));

      const array = list.toArray();

      const countingSort = new CountingSort();
      const sorted = countingSort.execute({ array });

      expect(sorted.result).toEqual([1, 2, 3, 4, 5]);
    });

    it("should utilize string similarity algorithms on entries from a trie", () => {
      const trie = new Trie<string>();
      const words = ["apple", "application", "apply", "banana"];
      words.forEach((word) => trie.add(word, word.toString()));
      expect(trie.contains("apple")).toBe(true);

      const ngramSimilarity = new NgramSimilarity();
      const similarity = ngramSimilarity.execute({
        str1: "apple",
        str2: "application",
      });

      expect(similarity.result).toBeGreaterThan(0);
    });
  });

  describe("Performance Integration", () => {
    it("should successfully log execution time via PerformanceMonitor", () => {
      const testArray = Array.from({ length: 1000 }, () => Math.floor(Math.random() * 1000));

      const executionTime = PerformanceMonitor.measureExecutionTime(() => {
        const countingSort = new CountingSort();
        countingSort.execute({ array: testArray });
      });

      expect(executionTime).toBeGreaterThanOrEqual(0);
    });
  });

  describe("Input Validation", () => {
    it("should enforce validation for null arrays in CountingSort", () => {
      expect(() => {
        const countingSort = new CountingSort();
        countingSort.execute({ array: null as unknown as number[] });
      }).toThrow();
    });

    it("should enforce validation for null comparison functions in BinarySearch", () => {
      expect(() => {
        const binarySearch = new BinarySearch<number>();
        binarySearch.execute({
          array: [1, 2, 3],
          value: 2,
          compareFn: null as unknown as (a: number, b: number) => number,
        });
      }).toThrow();
    });
  });

  describe("Type Safety Integration", () => {
    it("should accept generic types correctly for LinkedList", () => {
      const list: LinkedList<number> = new LinkedList<number>();
      list.add(42);
      expect(list.size).toBe(1);
    });

    it("should accept generic types correctly for Trie", () => {
      const trie: Trie<string> = new Trie<string>();
      trie.add("test", "value");
      expect(trie.contains("test")).toBe(true);
    });
  });

  describe("Error Handling Integration", () => {
    it("should handle empty parameter objects cleanly in CountingSort", () => {
        const countingSort = new CountingSort();
        expect(() => {
          countingSort.execute({} as unknown as Parameters<typeof countingSort.execute>[0]);
        }).toThrow();
    });

    it("should handle empty parameter objects cleanly in BinarySearch", () => {
        const binarySearch = new BinarySearch<number>();
        expect(() => {
          binarySearch.execute({} as unknown as Parameters<typeof binarySearch.execute>[0]);
        }).toThrow();
    });

    it("should handle empty parameter objects cleanly in NgramSimilarity", () => {
        const ngramSimilarity = new NgramSimilarity();
        expect(() => {
          ngramSimilarity.execute({} as unknown as Parameters<typeof ngramSimilarity.execute>[0]);
        }).toThrow();
    });
  });
});
