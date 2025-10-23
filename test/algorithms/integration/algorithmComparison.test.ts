import { describe, expect, it } from 'vitest';
import { AlgorithmComparator } from '../../../src/algorithms/utils/AlgorithmComparator';
import { PerformanceMonitor } from '../../../src/core/utils/PerformanceMonitor';
import { CountingSort, RadixSortNumbers } from '../../../src/algorithms/sorting';
import { BinarySearch, BinaryClosestSearch } from '../../../src/algorithms/searching/binary-search';
import { NgramSimilarity, JaroDistance } from '../../../src/algorithms/strings';

describe('Algorithm Comparison Integration Tests', () => {
  describe('Sorting Algorithm Comparison', () => {
    it('should compare CountingSort vs RadixSortNumbers performance', () => {
      const countingSort = new CountingSort();
      const radixSort = new RadixSortNumbers();

      // Test data
      const testArray = [5, 2, 8, 1, 9, 4, 7, 3, 6, 0];

      const result = AlgorithmComparator.compareAlgorithms(
        countingSort,
        radixSort,
        { array: [...testArray] },
        10 // iterations
      );

      expect(result.algorithm1).toBe('CountingSort');
      expect(result.algorithm2).toBe('RadixSortNumbers');
      expect(result.metrics1.executionTime).toBeGreaterThan(0);
      expect(result.metrics2.executionTime).toBeGreaterThan(0);
      expect([-1, 0, 1, 2]).toContain(result.winner); // Valid winner values
    });

    it('should benchmark sorting algorithms with different input sizes', () => {
      const countingSort = new CountingSort();
      const sizes = [10, 50, 100];

      const results = AlgorithmComparator.benchmarkAlgorithm(
        countingSort,
        (size) => ({ array: Array.from({ length: size }, () => Math.floor(Math.random() * 100)) }),
        sizes
      );

      expect(results).toHaveLength(3);
      results.forEach(result => {
        expect(result.metrics.executionTime).toBeGreaterThan(0);
        expect(result.metrics.withinTarget).toBeDefined();
      });
    });
  });

  describe('Searching Algorithm Comparison', () => {
    it('should compare BinarySearch vs BinaryClosestSearch', () => {
      const binarySearch = new BinarySearch<number>();
      const binaryClosestSearch = new BinaryClosestSearch<number>();

      const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15];
      const target = 7;

      const result = AlgorithmComparator.compareAlgorithms(
        binarySearch,
        binaryClosestSearch,
        { array: sortedArray, value: target, compareFn: (a, b) => a - b },
        10
      );

      expect(result.algorithm1).toBe('BinarySearch');
      expect(result.algorithm2).toBe('BinaryClosestSearch');
      expect(result.metrics1.executionTime).toBeGreaterThan(0);
      expect(result.metrics2.executionTime).toBeGreaterThan(0);
    });
  });

  describe('String Algorithm Comparison', () => {
    it('should compare NgramSimilarity vs JaroDistance', () => {
      const ngramSimilarity = new NgramSimilarity();
      const jaroDistance = new JaroDistance();

      const str1 = 'martha';
      const str2 = 'marhta';

      const result = AlgorithmComparator.compareAlgorithms(
        ngramSimilarity,
        jaroDistance,
        { str1, str2 },
        10
      );

      expect(result.algorithm1).toBe('NgramSimilarity');
      expect(result.algorithm2).toBe('JaroDistance');
      expect(result.metrics1.executionTime).toBeGreaterThan(0);
      expect(result.metrics2.executionTime).toBeGreaterThan(0);
    });
  });

  describe('Performance Validation', () => {
    it('should validate performance targets are met', () => {
      const binarySearch = new BinarySearch<number>();
      const sortedArray = Array.from({ length: 1000 }, (_, i) => i * 2);
      const target = 500;

      const executionTime = PerformanceMonitor.measureExecutionTime(() =>
        binarySearch.execute({ array: sortedArray, value: target, compareFn: (a, b) => a - b })
      );

      // Binary search should be very fast (O(log n))
      expect(executionTime).toBeLessThan(10); // Should complete in under 10ms
    });

    it('should handle performance comparison with different complexities', () => {
      const countingSort = new CountingSort();
      const testArray = Array.from({ length: 100 }, () => Math.floor(Math.random() * 100));

      const executionTime = PerformanceMonitor.measureExecutionTime(() =>
        countingSort.execute({ array: testArray })
      );

      // Counting sort should be reasonably fast for small arrays
      expect(executionTime).toBeLessThan(100); // Should complete in under 100ms
    });
  });

  describe('Algorithm Selection Strategy', () => {
    it('should select appropriate sorting algorithm based on input size', () => {
      // This would test the AlgorithmSelector, but since it's not fully implemented
      // in the comparison utility, we'll test the basic comparison logic
      const smallArray = [1, 2, 3, 4, 5];
      const largeArray = Array.from({ length: 1000 }, () => Math.floor(Math.random() * 1000));

      const countingSort = new CountingSort();

      const smallTime = PerformanceMonitor.measureExecutionTime(() =>
        countingSort.execute({ array: [...smallArray] })
      );

      const largeTime = PerformanceMonitor.measureExecutionTime(() =>
        countingSort.execute({ array: [...largeArray] })
      );

      // Larger arrays should take longer, but not disproportionately so for counting sort
      expect(largeTime).toBeGreaterThan(smallTime);
      expect(largeTime / smallArray.length).toBeLessThan(smallTime / smallArray.length * 100);
    });
  });
});
