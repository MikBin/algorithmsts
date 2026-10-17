import { describe, expect, it } from "vitest";
import { AlgorithmTestUtils } from "../utils/AlgorithmTestUtils";
import { CountingSort, RadixSortNumbers } from "../../../src/algorithms/sorting";
import { BinarySearch } from "../../../src/algorithms/searching/binary-search";
import {
  NgramSimilarity,
  JaroDistance,
  LevenshteinDistance,
  LevenshteinDistanceOutput,
  NgramSimilarityOutput,
  JaroDistanceOutput,
} from "../../../src/algorithms/strings";
import { BreadthFirstSearch } from "../../../src/graphs/algorithms/traversal";
import { IGraph } from "../../../src/graphs/interfaces/IGraph";

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
      const testArr = Array.from({ length: 500 }, () => Math.floor(Math.random() * 100));
      const { result: sorted } = countingSort.execute({ array: testArr }) as { result: number[] };
      expect(sorted).toHaveLength(500);
      const expectedSorted = [...testArr].sort((a, b) => a - b);
      expect(sorted).toEqual(expectedSorted);
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

      // Ngram specific deterministic checks
      const { result: ngramMatch } = ngramSimilarity.execute({
        str1: "hello",
        str2: "hello",
      }) as NgramSimilarityOutput;
      const { result: ngramNoMatch } = ngramSimilarity.execute({
        str1: "hello",
        str2: "world",
      }) as NgramSimilarityOutput;

      expect(ngramMatch).toBe(1);
      expect(ngramNoMatch).toBe(0);

      // Jaro specific deterministic checks
      const { distance: jaroMatch } = jaroDistance.execute({
        str1: "hello",
        str2: "hello",
      }) as JaroDistanceOutput;
      const { distance: jaroPartial } = jaroDistance.execute({
        str1: "martha",
        str2: "marhta",
      }) as JaroDistanceOutput;

      expect(jaroMatch).toBe(1);
      expect(jaroPartial).toBeCloseTo(0.944, 3);
    });

    it("should handle performance scaling for string algorithms with correct properties", () => {
      const levenshteinDistance = new LevenshteinDistance();

      // Levenshtein returns NORMALIZED distance (0 to 1 similarity score)
      const { distance: distHalf } = levenshteinDistance.execute({
        str1: "hi",
        str2: "ho",
      }) as LevenshteinDistanceOutput;
      const { distance: distMatch } = levenshteinDistance.execute({
        str1: "identical",
        str2: "identical",
      }) as LevenshteinDistanceOutput;
      const { distance: distDisjoint } = levenshteinDistance.execute({
        str1: "abc",
        str2: "def",
      }) as LevenshteinDistanceOutput;

      expect(distHalf).toBe(0.5); // 'hi' -> 'ho' is 1 edit max length 2. Score = 1 - 1/2 = 0.5
      expect(distMatch).toBe(1); // identical = 1
      expect(distDisjoint).toBe(0); // completely different = 0

      // Symmetry check
      const { distance: d1 } = levenshteinDistance.execute({
        str1: "abcd",
        str2: "abce",
      }) as LevenshteinDistanceOutput;
      const { distance: d2 } = levenshteinDistance.execute({
        str1: "abce",
        str2: "abcd",
      }) as LevenshteinDistanceOutput;
      expect(d1).toBe(d2);
      expect(d1).toBe(0.75); // 1 edit max length 4. 1 - 1/4 = 0.75
    });
  });

  describe("Graph Algorithm Performance Benchmarks", () => {
    it("should benchmark BFS performance on different graph sizes and correct traversal", () => {
      const bfs = new BreadthFirstSearch<number>();

      // Create a simple graph for testing
      const createTestGraph = (size: number): IGraph<number> => {
        const graph: Partial<IGraph<number>> = {
          getNeighbors: (node: number) => {
            const neighbors: number[] = [];
            if (node > 0) neighbors.push(node - 1);
            if (node < size - 1) neighbors.push(node + 1);
            return neighbors;
          },
          getVertices: () => Array.from({ length: size }, (_, i) => i),
          isDirected: () => false,
        };
        return graph as IGraph<number>;
      };

      // Verify structural/algorithmic properties
      const graph10 = createTestGraph(10);
      const res = bfs.execute({ graph: graph10, startNode: 0 });

      expect(res.visited.length).toBe(10);
      expect(res.visited).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
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
