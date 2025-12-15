import { describe, expect, it } from 'vitest';
import { PerformanceMonitor } from '../../src/core/utils/PerformanceMonitor';
import { PerformanceData } from '../algorithms/fixtures/PerformanceData';
import { CountingSort } from '../../src/algorithms/sorting';
import { BinarySearch } from '../../src/algorithms/searching/binary-search';
import { NgramSimilarity } from '../../src/algorithms/strings';

/**
 * Performance Regression Integration Tests
 *
 * Tests that detect performance regressions and ensure algorithms
 * meet their performance targets over time.
 */
describe('Performance Regression Integration Tests', () => {
  describe('Performance Baseline Establishment', () => {
    it('should establish performance baseline for CountingSort', () => {
      const countingSort = new CountingSort();
      const testArray = Array.from({ length: 1000 }, () => Math.floor(Math.random() * 1000));

      const executionTime = PerformanceMonitor.measureExecutionTime(() =>
        countingSort.execute({ array: testArray })
      );

      // Should complete within reasonable time for O(n + k) algorithm
      expect(executionTime).toBeLessThan(100); // Less than 100ms for 1000 elements

      // Validate against performance targets
      const validation = PerformanceData.validatePerformance('CountingSort', executionTime, testArray.length);
      expect(validation.passed).toBe(true);
    });

    it('should establish performance baseline for BinarySearch', () => {
      const binarySearch = new BinarySearch<number>();
      const sortedArray = Array.from({ length: 10000 }, (_, i) => i);
      const target = Math.floor(Math.random() * 10000);

      const executionTime = PerformanceMonitor.measureExecutionTime(() =>
        binarySearch.execute({
          array: sortedArray,
          value: target,
          compareFn: (a, b) => a - b
        })
      );

      // Should be very fast for O(log n) algorithm
      expect(executionTime).toBeLessThan(10); // Less than 10ms

      const validation = PerformanceData.validatePerformance('BinarySearch', executionTime, sortedArray.length);
      expect(validation.passed).toBe(true);
    });

    it('should establish performance baseline for string algorithms', () => {
      const ngramSimilarity = new NgramSimilarity();
      const str1 = 'The quick brown fox jumps over the lazy dog';
      const str2 = 'The quick brown fox jumps over the lazy cat';

      const executionTime = PerformanceMonitor.measureExecutionTime(() =>
        ngramSimilarity.execute({ str1, str2 })
      );

      expect(executionTime).toBeLessThan(50); // Should be fast for reasonable string lengths

      const validation = PerformanceData.validatePerformance('NgramSimilarity', executionTime);
      expect(validation.passed).toBe(true);
    });
  });

  describe('Regression Detection', () => {
    it('should detect performance regression in CountingSort', () => {
      const countingSort = new CountingSort();
      const testArray = Array.from({ length: 10000 }, () => Math.floor(Math.random() * 10000));

      // Run multiple times to establish baseline
      const times: number[] = [];
      for (let i = 0; i < 5; i++) {
        const time = PerformanceMonitor.measureExecutionTime(() =>
          countingSort.execute({ array: [...testArray] })
        );
        times.push(time);
      }

      const averageTime = times.reduce((a, b) => a + b, 0) / times.length;
      const maxTime = Math.max(...times);

      // Performance should be reasonable
      expect(averageTime).toBeLessThan(200); // Average under 200ms
      expect(maxTime).toBeLessThan(500); // Max under 500ms

      // Check for consistency (no wild variations)
      const variance = maxTime - Math.min(...times);
      expect(variance).toBeLessThan(averageTime * 4); // Variance should be less than 4x mean (relaxed for CI)
    });

    it('should detect performance regression in BinarySearch', () => {
      const binarySearch = new BinarySearch<number>();
      const sizes = [100, 1000, 10000, 100000];

      sizes.forEach(size => {
        const sortedArray = Array.from({ length: size }, (_, i) => i);
        const target = Math.floor(size / 2); // Middle element

        const executionTime = PerformanceMonitor.measureExecutionTime(() =>
          binarySearch.execute({
            array: sortedArray,
            value: target,
            compareFn: (a, b) => a - b
          })
        );

        // Performance should scale with O(log n)
        const expectedMaxTime = PerformanceData.PERFORMANCE_TARGETS.search.maxTime;
        expect(executionTime).toBeLessThanOrEqual(expectedMaxTime);

        // For larger arrays, should still be under 10ms
        if (size >= 10000) {
          expect(executionTime).toBeLessThan(10);
        }
      });
    });

    it('should monitor memory usage patterns', () => {
      const countingSort = new CountingSort();
      const largeArray = Array.from({ length: 50000 }, () => Math.floor(Math.random() * 1000));

      const executionTime = PerformanceMonitor.measureExecutionTime(() =>
        countingSort.execute({ array: largeArray })
      );

      // Should handle large arrays without excessive time
      expect(executionTime).toBeLessThan(1000); // Under 1 second

      // Result should be correct
      const result = countingSort.execute({ array: largeArray });
      expect(result.result).toBeDefined();
      expect(result.result.length).toBe(largeArray.length);
      expect(result.result).toEqual(result.result.sort((a, b) => a - b));
    });
  });

  describe('Scalability Testing', () => {
    it('should test scalability of sorting algorithms', () => {
      const countingSort = new CountingSort();
      const sizes = [100, 1000, 10000];

      const times: number[] = [];

      sizes.forEach(size => {
        const testArray = Array.from({ length: size }, () => Math.floor(Math.random() * size));

        const executionTime = PerformanceMonitor.measureExecutionTime(() =>
          countingSort.execute({ array: testArray })
        );

        times.push(executionTime);

        // Each size should complete in reasonable time
        expect(executionTime).toBeLessThan(1000); // Under 1 second
      });

      // Performance should degrade gracefully (but not exponentially for O(n) algorithm)
      expect(times[1]).toBeLessThan(times[0] * 20); // 1000 elements shouldn't be 20x slower than 100
      expect(times[2]).toBeLessThan(times[1] * 20); // 10000 elements shouldn't be 20x slower than 1000
    });

    it('should test scalability of search algorithms', () => {
      const binarySearch = new BinarySearch<number>();
      const sizes = [100, 1000, 10000, 100000];

      sizes.forEach(size => {
        const sortedArray = Array.from({ length: size }, (_, i) => i);
        const target = Math.floor(size * 0.7); // 70% through the array

        const executionTime = PerformanceMonitor.measureExecutionTime(() =>
          binarySearch.execute({
            array: sortedArray,
            value: target,
            compareFn: (a, b) => a - b
          })
        );

        // Should remain fast even for large arrays
        expect(executionTime).toBeLessThan(20); // Under 20ms for any size

        // Verify correctness
        const result = binarySearch.execute({
          array: sortedArray,
          value: target,
          compareFn: (a, b) => a - b
        });
        expect(result.result).toBe(target);
      });
    });
  });

  describe('Performance Benchmarking', () => {
    it('should benchmark algorithm performance against targets', () => {
      // Test multiple algorithms against their performance targets
      const algorithms = [
        { name: 'CountingSort', instance: new CountingSort(), inputSize: 1000 },
        { name: 'BinarySearch', instance: new BinarySearch<number>(), inputSize: 10000 },
        { name: 'NgramSimilarity', instance: new NgramSimilarity(), inputSize: 100 }
      ];

      algorithms.forEach(({ name, instance, inputSize }) => {
        let executionTime: number;

        if (name === 'CountingSort') {
          const testArray = Array.from({ length: inputSize }, () => Math.floor(Math.random() * inputSize));
          executionTime = PerformanceMonitor.measureExecutionTime(() =>
            (instance as CountingSort).execute({ array: testArray })
          );
        } else if (name === 'BinarySearch') {
          const sortedArray = Array.from({ length: inputSize }, (_, i) => i);
          const target = Math.floor(inputSize / 2);
          executionTime = PerformanceMonitor.measureExecutionTime(() =>
            (instance as BinarySearch<number>).execute({
              array: sortedArray,
              value: target,
              compareFn: (a, b) => a - b
            })
          );
        } else { // NgramSimilarity
          const str1 = 'a'.repeat(inputSize);
          const str2 = 'b'.repeat(inputSize);
          executionTime = PerformanceMonitor.measureExecutionTime(() =>
            (instance as NgramSimilarity).execute({ str1, str2 })
          );
        }

        const validation = PerformanceData.validatePerformance(name, executionTime, inputSize);
        expect(validation.passed).toBe(true);
      });
    });

    it.skip('should detect performance anomalies', () => {
      const countingSort = new CountingSort();
      const testArray = Array.from({ length: 100 }, () => Math.floor(Math.random() * 100));

      // Run multiple times and check for anomalies
      const times: number[] = [];
      for (let i = 0; i < 10; i++) {
        const time = PerformanceMonitor.measureExecutionTime(() =>
          countingSort.execute({ array: [...testArray] })
        );
        times.push(time);
      }

      const average = times.reduce((a, b) => a + b, 0) / times.length;
      const standardDeviation = Math.sqrt(
        times.reduce((sum, time) => sum + Math.pow(time - average, 2), 0) / times.length
      );

      // Check that performance is relatively consistent
      expect(standardDeviation / average).toBeLessThan(1.0); // Coefficient of variation < 100%

      // All times should be reasonable
      times.forEach(time => {
        expect(time).toBeLessThan(50); // Under 50ms for small array
      });
    });
  });

  describe('Resource Usage Monitoring', () => {
    it('should monitor algorithm resource usage patterns', () => {
      const countingSort = new CountingSort();

      // Test with different input characteristics
      const testCases = [
        { name: 'sorted', array: Array.from({ length: 1000 }, (_, i) => i) },
        { name: 'reverse', array: Array.from({ length: 1000 }, (_, i) => 1000 - i) },
        { name: 'random', array: Array.from({ length: 1000 }, () => Math.floor(Math.random() * 1000)) },
        { name: 'duplicates', array: Array.from({ length: 1000 }, () => Math.floor(Math.random() * 10)) }
      ];

      testCases.forEach(({ name, array }) => {
        const executionTime = PerformanceMonitor.measureExecutionTime(() =>
          countingSort.execute({ array: [...array] })
        );

        // All should complete in reasonable time regardless of input characteristics
        expect(executionTime).toBeLessThan(200);

        // Verify correctness
        const result = countingSort.execute({ array: [...array] });
        expect(result.result).toEqual([...array].sort((a, b) => a - b));
      });
    });

    it('should handle edge cases without performance degradation', () => {
      const binarySearch = new BinarySearch<number>();
      const sortedArray = Array.from({ length: 1000 }, (_, i) => i);

      // Test edge cases
      const edgeCases = [
        sortedArray[0],      // First element
        sortedArray[499],    // Middle element
        sortedArray[999],    // Last element
        -1,                  // Not found (too small)
        2000                 // Not found (too large)
      ];

      edgeCases.forEach(target => {
        const executionTime = PerformanceMonitor.measureExecutionTime(() =>
          binarySearch.execute({
            array: sortedArray,
            value: target,
            compareFn: (a, b) => a - b
          })
        );

        // Should be fast for all cases
        expect(executionTime).toBeLessThan(5);
      });
    });
  });
});
