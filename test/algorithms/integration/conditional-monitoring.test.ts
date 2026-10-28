import { describe, it, expect, vi, afterEach } from "vitest";
import { PerformanceMonitor } from "../../../src/performance";
import { BubbleSort } from "../../../src/algorithms/sorting/bubbleSort";
import { QuickSort } from "../../../src/algorithms/sorting/quickSort";
import { BinarySearch } from "../../../src/algorithms/searching/binary-search/binarySearch";
import { LevenshteinDistance } from "../../../src/algorithms/strings/similarities";
import { SparseTable } from "../../../src/algorithms/range-queries/sparse-table/sparseTable";

/**
 * Verifies the conditional monitoring contract of `execute()`:
 * the PerformanceMonitor logger is read exactly once, the body is wrapped in
 * `measureExecutionTime` only when a logger is present, and return values are
 * identical whether or not monitoring is enabled.
 */
describe("execute() conditional monitoring", () => {
  afterEach(() => {
    PerformanceMonitor.setLogger(console);
    vi.restoreAllMocks();
  });

  it("runs the body without measuring when the logger is disabled", () => {
    PerformanceMonitor.setLogger(null);
    const measureSpy = vi.spyOn(PerformanceMonitor, "measureExecutionTime");

    const sort = new BubbleSort<number>();
    const output = sort.execute({ array: [3, 1, 2] });

    expect(measureSpy).not.toHaveBeenCalled();
    expect(output.sortedArray).toEqual([1, 2, 3]);
    expect(output.result).toEqual([1, 2, 3]);
  });

  it("measures the body exactly once when a logger is present", () => {
    PerformanceMonitor.setLogger(console);
    const measureSpy = vi.spyOn(PerformanceMonitor, "measureExecutionTime");

    const sort = new QuickSort<number>();
    const output = sort.execute({ array: [5, 4, 3, 2, 1] });

    expect(measureSpy).toHaveBeenCalledTimes(1);
    expect(output.sortedArray).toEqual([1, 2, 3, 4, 5]);
  });

  it("produces identical return values with monitoring on and off", () => {
    const input = { array: [9, 7, 8, 0, -1, 5] };

    PerformanceMonitor.setLogger(console);
    const withMonitoring = new BubbleSort<number>().execute({ ...input });

    PerformanceMonitor.setLogger(null);
    const withoutMonitoring = new BubbleSort<number>().execute({ ...input });

    expect(withoutMonitoring).toEqual(withMonitoring);
  });

  it("does not double-execute the body when measuring (single sort pass)", () => {
    PerformanceMonitor.setLogger(console);
    const measureSpy = vi.spyOn(PerformanceMonitor, "measureExecutionTime");

    // The comparison callback counts how many times elements are inspected;
    // a double execution would at least double the invocation count.
    let comparisons = 0;
    const countingCompare = (a: number, b: number) => {
      comparisons++;
      return a - b;
    };

    const search = new BinarySearch<number>();
    const output = search.execute({
      array: [1, 3, 5, 7, 9, 11],
      value: 7,
      compareFn: countingCompare,
    });

    expect(measureSpy).toHaveBeenCalledTimes(1);
    expect(output.index).toBe(3);

    PerformanceMonitor.setLogger(null);
    let plainComparisons = 0;
    const plainOutput = search.execute({
      array: [1, 3, 5, 7, 9, 11],
      value: 7,
      compareFn: (a, b) => {
        plainComparisons++;
        return a - b;
      },
    });

    expect(plainOutput.index).toBe(3);
    expect(plainComparisons).toBe(comparisons);
  });

  it("warns via the logger read at entry when execution exceeds the threshold", () => {
    const warn = vi.fn();
    PerformanceMonitor.setLogger({ warn } as unknown as typeof console);

    let ticks = 0;
    PerformanceMonitor.setClock(() => {
      const now = ticks;
      ticks += 250; // each clock read advances 250ms -> executionTime = 250 > 100
      return now;
    });

    try {
      const sort = new BubbleSort<number>();
      const output = sort.execute({ array: [2, 1] });

      expect(warn).toHaveBeenCalledTimes(1);
      expect(warn.mock.calls[0][0]).toContain("BubbleSort performance warning");
      expect(output.sortedArray).toEqual([1, 2]);
    } finally {
      PerformanceMonitor.setClock(() => performance.now());
    }
  });

  it("does not read the clock or warn when the logger is disabled", () => {
    PerformanceMonitor.setLogger(null);
    const clock = vi.fn(() => performance.now());
    PerformanceMonitor.setClock(clock);

    try {
      const sort = new BubbleSort<number>();
      sort.execute({ array: [2, 1] });

      expect(clock).not.toHaveBeenCalled();
    } finally {
      PerformanceMonitor.setClock(() => performance.now());
    }
  });

  it("keeps unlogged algorithms (timing discarded) working with the logger disabled", () => {
    PerformanceMonitor.setLogger(null);

    const levenshtein = new LevenshteinDistance();
    const output = levenshtein.execute({ str1: "kitten", str2: "sitting" });

    expect(output.distance).toBeCloseTo(1 - 3 / 7, 10);
  });

  it("keeps stateful algorithm construction working with the logger disabled", () => {
    PerformanceMonitor.setLogger(null);

    const sparseTable = new SparseTable<number>();
    sparseTable.execute({
      array: [5, 2, 8, 1, 9],
      operation: (a, b) => Math.min(a, b),
      idempotent: true,
    });

    expect(sparseTable.query(1, 3)).toBe(1);
    expect(sparseTable.query(0, 4)).toBe(1);
    expect(sparseTable.query(2, 2)).toBe(8);
  });
});
