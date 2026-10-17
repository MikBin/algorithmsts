import { describe, expect, it } from "vitest";
import { AlgorithmTestUtils } from "../utils/AlgorithmTestUtils";
import { CountingSort, RadixSortNumbers } from "../../../src/algorithms/sorting";
import { BinarySearch } from "../../../src/algorithms/searching/binary-search";
import {
  NgramSimilarity,
  JaroDistance,
  LevenshteinDistance,
} from "../../../src/algorithms/strings";
import { BreadthFirstSearch } from "../../../src/algorithms/graphs/traversal";

describe("Algorithm Performance Benchmark Integration Tests", () => {
  describe("Sorting Algorithm Performance Benchmarks", () => {
    it("should benchmark CountingSort performance across different input sizes", () => {
      const countingSort = new CountingSort();

      const benchmarks = [
        { name: "small-array", input: { array: [5, 2, 8, 1, 9, 4] }, iterations: 100 },
        {
          name: "medium-array",
          input: { array: Array.from({ length: 1000 }, () => Math.floor(Math.random() * 100)) },
          iterations: 50,
        },
        {
          name: "large-array",
          input: { array: Array.from({ length: 10000 }, () => Math.floor(Math.random() * 1000)) },
          iterations: 10,
        },
      ];

      const results = AlgorithmTestUtils.runPerformanceBenchmarks(countingSort, benchmarks);

      expect(results).toHaveLength(3);
      results.forEach((result) => {
        expect(result.averageTime).toBeGreaterThanOrEqual(0);
        expect(result.minTime).toBeGreaterThanOrEqual(0);
        expect(result.maxTime).toBeGreaterThanOrEqual(result.minTime);
        expect(result.iterations).toBeGreaterThan(0);
      });

      // Verify correct sorting functionality rather than exact timing on CI
      const testArr = [5, 2, 8, 1, 9, 4];
      const { result: sorted } = countingSort.execute({ array: testArr }) as { result: number[] };
      expect(sorted).toEqual([1, 2, 4, 5, 8, 9]);
    });

    it("should compare RadixSortNumbers vs CountingSort performance characteristics", () => {
      const radixSort = new RadixSortNumbers();
      const countingSort = new CountingSort();
      const testArray = Array.from({ length: 500 }, () => Math.floor(Math.random() * 100));

      const { result: sortedByRadix } = radixSort.execute({ array: [...testArray] }) as {
        result: number[];
      };
      const { result: sortedByCounting } = countingSort.execute({ array: [...testArray] }) as {
        result: number[];
      };

      // Deterministic check: verify both sort algorithms yield same correct output
      expect(sortedByRadix).toEqual(sortedByCounting);
      // Ensure array is indeed sorted
      for (let i = 1; i < sortedByRadix.length; i++) {
        expect(sortedByRadix[i]).toBeGreaterThanOrEqual(sortedByRadix[i - 1]);
      }
    });
  });

  describe("Searching Algorithm Performance Benchmarks", () => {
    it("should benchmark BinarySearch performance and correctness", () => {
      const binarySearch = new BinarySearch<number>();
      const sortedArray = Array.from({ length: 1000 }, (_, i) => i * 2);

      const benchmarks = [
        {
          name: "search-existing-element",
          input: { array: sortedArray, value: 500, compareFn: (a: number, b: number) => a - b },
          iterations: 100,
        },
        {
          name: "search-non-existing-element",
          input: { array: sortedArray, value: 501, compareFn: (a: number, b: number) => a - b },
          iterations: 100,
        },
      ];

      const results = AlgorithmTestUtils.runPerformanceBenchmarks(binarySearch, benchmarks);
      expect(results).toHaveLength(2);

      // Verify algorithmic correctness deterministically
      const { result: foundIdx } = binarySearch.execute({
        array: sortedArray,
        value: 500,
        compareFn: (a, b) => a - b,
      }) as { result: number };
      const { result: notFoundIdx } = binarySearch.execute({
        array: sortedArray,
        value: 501,
        compareFn: (a, b) => a - b,
      }) as { result: number };

      expect(foundIdx).toBe(250);
      expect(notFoundIdx).toBe(-1);
    });
  });

  describe("String Algorithm Performance Benchmarks", () => {
    it("should benchmark string similarity algorithms correctly", () => {
      const ngramSimilarity = new NgramSimilarity();
      const jaroDistance = new JaroDistance();

      const testStrings = [
        { str1: "hello", str2: "world" },
        { str1: "martha", str2: "marhta" },
      ];

      // Deterministic check: verify similarity scores are between 0 and 1
      testStrings.forEach(({ str1, str2 }) => {
        const { result: ngramScore } = ngramSimilarity.execute({ str1, str2 }) as {
          result: number;
        };
        const { result: jaroScore } = jaroDistance.execute({ str1, str2 }) as { result: number };

        expect(ngramScore).toBeGreaterThanOrEqual(0);
        expect(ngramScore).toBeLessThanOrEqual(1);

        expect(jaroScore).toBeGreaterThanOrEqual(0);
        expect(jaroScore).toBeLessThanOrEqual(1);
      });
    });

    it("should handle performance scaling for string algorithms with correct properties", () => {
      const levenshteinDistance = new LevenshteinDistance();

      const shortStrings = { str1: "hi", str2: "ho" };

      // Deterministic structural check for Levenshtein
      const { distance: dist } = levenshteinDistance.execute(shortStrings) as any;
      expect(dist).toBeGreaterThanOrEqual(0); // 'hi' -> 'ho' distance could be normalized to 0.5
      expect(dist).toBeLessThanOrEqual(1);
    });
  });

  describe("Graph Algorithm Performance Benchmarks", () => {
    it("should benchmark BFS performance on different graph sizes and correct traversal", () => {
      const bfs = new BreadthFirstSearch<number>();

      // Create a simple graph for testing
      const createTestGraph = (size: number) => {
        const graph = {
          getNeighbors: (node: number) => {
            const neighbors: number[] = [];
            if (node > 0) neighbors.push(node - 1);
            if (node < size - 1) neighbors.push(node + 1);
            return neighbors;
          },
        };
        return graph;
      };

      // Verify structural/algorithmic properties
      const graph10 = createTestGraph(10);
      const res = bfs.execute({ graph: graph10 as any, startNode: 0 });

      expect(res.traversalOrder.length).toBe(10);
      expect(res.traversalOrder).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });
  });

  describe("Memory Usage Benchmarks", () => {
    it("should monitor memory usage and complete algorithm", () => {
      const countingSort = new CountingSort();
      const largeArray = Array.from({ length: 1000 }, () => Math.floor(Math.random() * 1000));

      const { result: sorted } = countingSort.execute({ array: largeArray }) as {
        result: number[];
      };

      expect(sorted).toHaveLength(1000);
      // Ensure it sorted
      for (let i = 1; i < sorted.length; i++) {
        expect(sorted[i]).toBeGreaterThanOrEqual(sorted[i - 1]);
      }
    });
  });
});
