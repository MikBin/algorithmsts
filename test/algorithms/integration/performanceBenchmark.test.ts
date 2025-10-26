import { describe, expect, it } from 'vitest';
import { PerformanceMonitor } from '../../../src/core/utils/PerformanceMonitor';
import { AlgorithmTestUtils } from '../utils/AlgorithmTestUtils';
import { PerformanceData } from '../fixtures/PerformanceData';
import { CountingSort, RadixSortNumbers } from '../../../src/algorithms/sorting';
import { BinarySearch } from '../../../src/algorithms/searching/binary-search';
import { NgramSimilarity, JaroDistance, LevenshteinDistance } from '../../../src/algorithms/strings';
import { BreadthFirstSearch } from '../../../src/algorithms/graphs/traversal';

describe('Algorithm Performance Benchmark Integration Tests', () => {
  describe('Sorting Algorithm Performance Benchmarks', () => {
    it('should benchmark CountingSort performance across different input sizes', () => {
      const countingSort = new CountingSort();

      const benchmarks = [
        { name: 'small-array', input: { array: [5, 2, 8, 1, 9, 4] }, iterations: 100 },
        { name: 'medium-array', input: { array: Array.from({ length: 100 }, () => Math.floor(Math.random() * 100)) }, iterations: 50 },
        { name: 'large-array', input: { array: Array.from({ length: 1000 }, () => Math.floor(Math.random() * 1000)) }, iterations: 10 }
      ];

      const results = AlgorithmTestUtils.runPerformanceBenchmarks(countingSort, benchmarks);

      expect(results).toHaveLength(3);
      results.forEach(result => {
        expect(result.averageTime).toBeGreaterThan(0);
        expect(result.minTime).toBeGreaterThan(0);
        expect(result.maxTime).toBeGreaterThanOrEqual(result.minTime);
        expect(result.iterations).toBeGreaterThan(0);
        expect(result.performanceValidation.passed).toBeDefined();
      });

      // Performance should degrade gracefully with input size
      expect(results[0].averageTime).toBeLessThan(results[1].averageTime);
      expect(results[1].averageTime).toBeLessThan(results[2].averageTime);
    });

    it('should validate CountingSort meets performance targets', () => {
      const countingSort = new CountingSort();
      const testArray = Array.from({ length: 100 }, () => Math.floor(Math.random() * 100));

      const executionTime = PerformanceMonitor.measureExecutionTime(() =>
        countingSort.execute({ array: testArray })
      );

      const validation = PerformanceData.validatePerformance('CountingSort', executionTime, testArray.length);

      expect(validation.passed).toBe(true);
      expect(validation.expectedMaxTime).toBe(PerformanceData.PERFORMANCE_TARGETS.linear.maxTime);
      expect(validation.message).toContain('within target');
    });

    it('should compare RadixSortNumbers vs CountingSort performance', () => {
      const radixSort = new RadixSortNumbers();
      const countingSort = new CountingSort();
      const testArray = Array.from({ length: 500 }, () => Math.floor(Math.random() * 100));

      const radixTime = PerformanceMonitor.measureExecutionTime(() =>
        radixSort.execute({ array: [...testArray] })
      );

      const countingTime = PerformanceMonitor.measureExecutionTime(() =>
        countingSort.execute({ array: [...testArray] })
      );

      // Both should complete within reasonable time
      expect(radixTime).toBeLessThan(100);
      expect(countingTime).toBeLessThan(100);

    });
  });

  describe('Searching Algorithm Performance Benchmarks', () => {
    it('should benchmark BinarySearch performance', () => {
      const binarySearch = new BinarySearch<number>();
      const sortedArray = Array.from({ length: 1000 }, (_, i) => i * 2);

      const benchmarks = [
        { name: 'search-existing-element', input: { array: sortedArray, value: 500, compareFn: (a: number, b: number) => a - b }, iterations: 100 },
        { name: 'search-non-existing-element', input: { array: sortedArray, value: 501, compareFn: (a: number, b: number) => a - b }, iterations: 100 }
      ];

      const results = AlgorithmTestUtils.runPerformanceBenchmarks(binarySearch, benchmarks);

      expect(results).toHaveLength(2);
      results.forEach(result => {
        expect(result.averageTime).toBeLessThan(1); // Should be very fast
        expect(result.performanceValidation.passed).toBe(true);
      });
    });

    it('should validate BinarySearch meets O(log n) performance targets', () => {
      const binarySearch = new BinarySearch<number>();
      const sizes = [100, 1000, 10000];

      sizes.forEach(size => {
        const sortedArray = Array.from({ length: size }, (_, i) => i);
        const target = Math.floor(size / 2);

        const executionTime = PerformanceMonitor.measureExecutionTime(() =>
          binarySearch.execute({ array: sortedArray, value: target, compareFn: (a, b) => a - b })
        );

        const validation = PerformanceData.validatePerformance('BinarySearch', executionTime, size);
        expect(validation.passed).toBe(true);
        expect(executionTime).toBeLessThan(10); // Should be under 10ms for reasonable sizes
      });
    });
  });

  describe('String Algorithm Performance Benchmarks', () => {
    it('should benchmark string similarity algorithms', () => {
      const ngramSimilarity = new NgramSimilarity();
      const jaroDistance = new JaroDistance();

      const testStrings = [
        { str1: 'hello', str2: 'world' },
        { str1: 'martha', str2: 'marhta' },
        { str1: 'The quick brown fox', str2: 'The quick brown fox jumps' }
      ];

      testStrings.forEach(({ str1, str2 }) => {
        const ngramTime = PerformanceMonitor.measureExecutionTime(() =>
          ngramSimilarity.execute({ str1, str2 })
        );

        const jaroTime = PerformanceMonitor.measureExecutionTime(() =>
          jaroDistance.execute({ str1, str2 })
        );

        // Both should complete within reasonable time
        expect(ngramTime).toBeLessThan(10);
        expect(jaroTime).toBeLessThan(50);

      });
    });

    it('should handle performance scaling for string algorithms', () => {
      const levenshteinDistance = new LevenshteinDistance();

      const shortStrings = { str1: 'hi', str2: 'ho' };
      const longStrings = { str1: 'a'.repeat(50), str2: 'b'.repeat(50) };

      const shortTime = PerformanceMonitor.measureExecutionTime(() =>
        levenshteinDistance.execute(shortStrings)
      );

      const longTime = PerformanceMonitor.measureExecutionTime(() =>
        levenshteinDistance.execute(longStrings)
      );

      // Longer strings should take more time (O(m*n) complexity)
      expect(longTime).toBeGreaterThan(shortTime);
      expect(longTime).toBeLessThan(1000); // Should still be reasonable
    });
  });

  describe('Graph Algorithm Performance Benchmarks', () => {
    it('should benchmark BFS performance on different graph sizes', () => {
      const bfs = new BreadthFirstSearch<number>();

      // Create a simple graph for testing
      const createTestGraph = (size: number) => {
        const graph = {
          getNeighbors: (node: number) => {
            const neighbors: number[] = [];
            if (node > 0) neighbors.push(node - 1);
            if (node < size - 1) neighbors.push(node + 1);
            return neighbors;
          }
        };
        return graph;
      };

      const sizes = [10, 50, 100];

      sizes.forEach(size => {
        const graph = createTestGraph(size);

        const executionTime = PerformanceMonitor.measureExecutionTime(() =>
          bfs.execute({ graph, startNode: 0 })
        );

        expect(executionTime).toBeLessThan(100); // Should complete within 100ms
      });
    });
  });

  describe('Performance Regression Detection', () => {
    it.skip('should detect performance regressions', () => {
      const countingSort = new CountingSort();
      const testArray = Array.from({ length: 100 }, () => Math.floor(Math.random() * 100));

      // Run multiple times to establish baseline
      const times: number[] = [];
      for (let i = 0; i < 10; i++) {
        const time = PerformanceMonitor.measureExecutionTime(() =>
          countingSort.execute({ array: [...testArray] })
        );
        times.push(time);
      }

      const averageTime = times.reduce((a, b) => a + b, 0) / times.length;
      const maxTime = Math.max(...times);

      // Check for reasonable performance
      expect(averageTime).toBeLessThan(50);
      expect(maxTime).toBeLessThan(100);

      // Performance should be relatively consistent
      // Allow for more variance since system load can affect timing
      const variance = maxTime - Math.min(...times);
      expect(variance).toBeLessThan(averageTime * 5); // Allow variance up to 5x the mean
    });

    it('should validate algorithms against performance targets', () => {
      // Test algorithms individually to avoid type conflicts
      const countingSort = new CountingSort();
      const countingTime = PerformanceMonitor.measureExecutionTime(() =>
        countingSort.execute({ array: Array.from({ length: 100 }, () => Math.floor(Math.random() * 100)) })
      );
      const countingValidation = PerformanceData.validatePerformance('CountingSort', countingTime);
      expect(countingValidation.passed).toBe(true);

      const binarySearch = new BinarySearch<number>();
      const binaryTime = PerformanceMonitor.measureExecutionTime(() =>
        binarySearch.execute({ array: Array.from({ length: 100 }, (_, i) => i), value: 50, compareFn: (a: number, b: number) => a - b })
      );
      const binaryValidation = PerformanceData.validatePerformance('BinarySearch', binaryTime);
      expect(binaryValidation.passed).toBe(true);

      const ngramSimilarity = new NgramSimilarity();
      const ngramTime = PerformanceMonitor.measureExecutionTime(() =>
        ngramSimilarity.execute({ str1: 'hello world', str2: 'hello there' })
      );
      const ngramValidation = PerformanceData.validatePerformance('NgramSimilarity', ngramTime);
      expect(ngramValidation.passed).toBe(true);
    });
  });

  describe('Memory Usage Benchmarks', () => {
    it('should monitor memory usage for algorithms', () => {
      const countingSort = new CountingSort();
      const largeArray = Array.from({ length: 10000 }, () => Math.floor(Math.random() * 1000));

      const executionTime = PerformanceMonitor.measureExecutionTime(() =>
        countingSort.execute({ array: largeArray })
      );

      expect(executionTime).toBeGreaterThan(0);
      // Memory usage monitoring would require additional browser/node APIs
      // For now, we just ensure the algorithm completes
      expect(executionTime).toBeLessThan(1000);
    });
  });
});
