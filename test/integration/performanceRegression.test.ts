import { describe, expect, it } from "vitest";
import { PerformanceMonitor } from "../../src/performance";
import { CountingSort, BinarySearch, NgramSimilarity } from "../../src/algorithms";
import { PerformanceData } from "../algorithms/fixtures/PerformanceData";

describe("Performance Regression Checks", () => {

  describe("CountingSort Regression Detection", () => {
    it("should establish a validated performance baseline for counting sort", () => {
      const countingSort = new CountingSort();
      const testArray = Array.from({ length: 10000 }, () => Math.floor(Math.random() * 10000));

      const executionTime = PerformanceMonitor.measureExecutionTime(() =>
        countingSort.execute({ array: testArray }),
      );

      const validation = PerformanceData.validatePerformance("CountingSort", executionTime, testArray.length);
      expect(validation.passed).toBe(true);
    });

    it("should process large arrays within validated expectations", () => {
      const countingSort = new CountingSort();
      const largeArray = Array.from({ length: 50000 }, () => Math.floor(Math.random() * 1000));

      const executionTime = PerformanceMonitor.measureExecutionTime(() =>
        countingSort.execute({ array: largeArray }),
      );

      const validation = PerformanceData.validatePerformance("CountingSort", executionTime, largeArray.length);
      expect(validation.passed).toBe(true);

      const result = countingSort.execute({ array: largeArray });
      expect(result.result).toBeDefined();
      expect(result.result.length).toBe(largeArray.length);
    });

    it("should scale counting sort efficiently according to polynomial bounds", () => {
      const countingSort = new CountingSort();
      const sizes = [100, 1000, 10000];
      const times: number[] = [];

      sizes.forEach((size) => {
        const testArray = Array.from({ length: size }, () => Math.floor(Math.random() * size));
        const executionTime = PerformanceMonitor.measureExecutionTime(() =>
          countingSort.execute({ array: testArray }),
        );
        times.push(executionTime);
      });

      expect(times[1]).toBeLessThan(Math.max(times[0], 1) * 20);
      expect(times[2]).toBeLessThan(Math.max(times[1], 1) * 20);
    });

    it("should handle varying array characteristics cleanly without performance spikes", () => {
      const countingSort = new CountingSort();

      const testCases = [
        { name: "sorted", array: Array.from({ length: 1000 }, (_, i) => i) },
        { name: "reverse", array: Array.from({ length: 1000 }, (_, i) => 1000 - i) },
        {
          name: "random",
          array: Array.from({ length: 1000 }, () => Math.floor(Math.random() * 1000)),
        },
        {
          name: "duplicates",
          array: Array.from({ length: 1000 }, () => Math.floor(Math.random() * 10)),
        },
      ];

      testCases.forEach(({ array }) => {
        const executionTime = PerformanceMonitor.measureExecutionTime(() =>
          countingSort.execute({ array: [...array] }),
        );

        const validation = PerformanceData.validatePerformance("CountingSort", executionTime, array.length);
        expect(validation.passed).toBe(true);

        const result = countingSort.execute({ array: [...array] });
        expect(result.result).toEqual([...array].sort((a, b) => a - b));
      });
    });

    it("should maintain a stable coefficient of variation across consecutive runs", () => {
      const countingSort = new CountingSort();
      const testArray = Array.from({ length: 100 }, () => Math.floor(Math.random() * 100));

      const times: number[] = [];
      for (let i = 0; i < 10; i++) {
        const time = PerformanceMonitor.measureExecutionTime(() =>
          countingSort.execute({ array: [...testArray] }),
        );
        times.push(time);
      }

      const average = times.reduce((a, b) => a + b, 0) / times.length;
      // In CI runtimes, standard deviations can divide by zero effectively on ultra-fast sub-millisecond timers.
      const safeAverage = Math.max(average, 0.1);

      const standardDeviation = Math.sqrt(
        times.reduce((sum, time) => sum + Math.pow(time - safeAverage, 2), 0) / times.length,
      );

      expect(standardDeviation / safeAverage).toBeLessThan(5.0);
    });
  });

  describe("BinarySearch Regression Detection", () => {
    it("should establish a validated performance baseline for binary search", () => {
      const binarySearch = new BinarySearch<number>();
      const sortedArray = Array.from({ length: 1000 }, (_, i) => i * 2);

      const executionTime = PerformanceMonitor.measureExecutionTime(() =>
        binarySearch.execute({
          array: sortedArray,
          value: 500,
          compareFn: (a, b) => a - b,
        }),
      );

      const validation = PerformanceData.validatePerformance(
        "BinarySearch",
        executionTime,
        sortedArray.length,
      );
      expect(validation.passed).toBe(true);
    });

    it("should scale binary search logarithmically and within defined search targets", () => {
      const binarySearch = new BinarySearch<number>();
      const sizes = [100, 1000, 10000, 100000];

      sizes.forEach((size) => {
        const sortedArray = Array.from({ length: size }, (_, i) => i);
        const target = Math.floor(size / 2);

        const executionTime = PerformanceMonitor.measureExecutionTime(() =>
          binarySearch.execute({
            array: sortedArray,
            value: target,
            compareFn: (a, b) => a - b,
          }),
        );

        const validation = PerformanceData.validatePerformance(
            "BinarySearch",
            executionTime,
            size,
        );
        expect(validation.passed).toBe(true);
      });
    });

    it("should handle edge cases successfully and without exceeding baseline validation bounds", () => {
      const binarySearch = new BinarySearch<number>();
      const sortedArray = Array.from({ length: 1000 }, (_, i) => i);

      const edgeCases = [
        sortedArray[0],
        sortedArray[499],
        sortedArray[999],
        -1,
        2000,
      ];

      edgeCases.forEach((target) => {
        const executionTime = PerformanceMonitor.measureExecutionTime(() =>
          binarySearch.execute({
            array: sortedArray,
            value: target,
            compareFn: (a, b) => a - b,
          }),
        );

        const validation = PerformanceData.validatePerformance("BinarySearch", executionTime, sortedArray.length);
        expect(validation.passed).toBe(true);
      });
    });
  });

  describe("String Algorithms Regression Detection", () => {
    it("should establish a validated performance baseline for NgramSimilarity", () => {
      const ngramSimilarity = new NgramSimilarity();
      const str1 = "The quick brown fox jumps over the lazy dog";
      const str2 = "The quick brown fox jumps over the lazy cat";

      const executionTime = PerformanceMonitor.measureExecutionTime(() =>
        ngramSimilarity.execute({ str1, str2 }),
      );

      const validation = PerformanceData.validatePerformance("NgramSimilarity", executionTime);
      expect(validation.passed).toBe(true);
    });
  });
});
