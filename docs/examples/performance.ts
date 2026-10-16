/**
 * Performance Monitoring and Benchmarking Examples
 *
 * This file demonstrates how to use the performance monitoring
 * utilities and conduct performance benchmarks for algorithms
 * and data structures in the Algorithmsts library.
 */

import {
  // Performance monitoring
  PerformanceMonitor,

  // Data structures for benchmarking
  LinkedList,
  SkipList,
  SegmentTree,
  Trie,
  AdjacencyListGraph,

  // Algorithms for benchmarking
  CountingSort,
  RadixSortNumbers,
  BinarySearch,
  BreadthFirstSearch,
  DepthFirstSearch,
  DijkstraAlgorithm,
} from "@mikbin80/algorithmsts";

/**
 * Example 1: Basic Performance Monitoring
 */
function basicPerformanceMonitoring() {
  console.log("=== Basic Performance Monitoring ===");

  // Measure execution time of a simple operation
  const duration = PerformanceMonitor.measureExecutionTime(() => {
    const array = Array.from({ length: 10000 }, () => Math.random());
    array.sort((a, b) => a - b);
  });

  console.log(`Array sorting took: ${duration.toFixed(2)}ms`);

  // Check against performance targets
  const isBasicOp = PerformanceMonitor.isWithinBasicOperationsTarget(duration);
  const isSearchOp = PerformanceMonitor.isWithinSearchOperationsTarget(duration);

  console.log(`Within basic operations target (≤1ms): ${isBasicOp}`);
  console.log(`Within search operations target (≤10ms): ${isSearchOp}`);

  // Get target values
  console.log(`Basic operations target: ${PerformanceMonitor.getBasicOperationsTarget()}ms`);
  console.log(`Search operations target: ${PerformanceMonitor.getSearchOperationsTarget()}ms`);
}

/**
 * Example 2: Data Structure Performance Comparison
 */
function dataStructurePerformanceComparison() {
  console.log("\n=== Data Structure Performance Comparison ===");

  const operations = 10000;
  const testData = Array.from({ length: operations }, () => Math.floor(Math.random() * operations));

  console.log(`Testing ${operations} operations on different data structures...`);

  // Test LinkedList performance
  const linkedList = new LinkedList<number>();
  const linkedListTime = PerformanceMonitor.measureExecutionTime(() => {
    // Insert operations
    testData.forEach((value) => linkedList.add(value));
    // Search operations
    testData.slice(0, 1000).forEach((value) => linkedList.contains(value));
  });

  console.log(`LinkedList operations took: ${linkedListTime.toFixed(2)}ms`);

  // Test SkipList performance
  const skipList = new SkipList<number, number>(16, -Infinity);
  const skipListTime = PerformanceMonitor.measureExecutionTime(() => {
    // Insert operations
    testData.forEach((value) => skipList.insert(value, value));
    // Search operations
    testData.slice(0, 1000).forEach((value) => skipList.find(value));
  });

  console.log(`SkipList operations took: ${skipListTime.toFixed(2)}ms`);

  // Performance comparison
  const speedup = linkedListTime / skipListTime;
  console.log(`SkipList is ${speedup.toFixed(2)}x faster than LinkedList for this workload`);
}

/**
 * Example 3: Algorithm Performance Benchmarking
 */
function algorithmPerformanceBenchmarking() {
  console.log("\n=== Algorithm Performance Benchmarking ===");

  const sizes = [1000, 5000, 10000, 25000];

  console.log("Benchmarking sorting algorithms...");

  sizes.forEach((size) => {
    const data = Array.from({ length: size }, () => Math.floor(Math.random() * size));

    // Benchmark Counting Sort
    const countingSort = new CountingSort();
    const countingTime = PerformanceMonitor.measureExecutionTime(() => {
      countingSort.execute({ array: [...data] });
    });

    // Benchmark Radix Sort
    const radixSort = new RadixSortNumbers();
    const radixTime = PerformanceMonitor.measureExecutionTime(() => {
      radixSort.execute({ array: [...data] });
    });

    console.log(`Size ${size}:`);
    console.log(`  Counting Sort: ${countingTime.toFixed(3)}ms`);
    console.log(`  Radix Sort: ${radixTime.toFixed(3)}ms`);
    console.log(`  Radix is ${(countingTime / radixTime).toFixed(2)}x faster`);
  });
}

/**
 * Example 4: Memory Usage Analysis
 */
function memoryUsageAnalysis() {
  console.log("\n=== Memory Usage Analysis ===");

  // Function to get current memory usage (if available)
  const getMemoryUsage = () => {
    if (typeof performance !== "undefined" && (performance as any).memory) {
      return (performance as any).memory;
    }
    return null;
  };

  const initialMemory = getMemoryUsage();

  // Test memory usage with different data structures
  const testSizes = [1000, 5000, 10000];

  testSizes.forEach((size) => {
    // Create a large dataset
    const data = Array.from({ length: size }, () => ({
      id: Math.random(),
      value: Math.random() * 1000,
      metadata: "some additional data".repeat(10),
    }));

    const beforeMemory = getMemoryUsage();

    // Test with different structures
    const structures = {
      Array: () => [...data],
      LinkedList: () => {
        const list = new LinkedList<(typeof data)[0]>();
        data.forEach((item) => list.add(item));
        return list;
      },
      Trie: () => {
        const trie = new Trie<(typeof data)[0]>();
        data.forEach((item, index) => trie.insert(index.toString(), item));
        return trie;
      },
    };

    Object.entries(structures).forEach(([name, createFn]) => {
      const before = getMemoryUsage();
      const structure = createFn();
      const after = getMemoryUsage();

      if (before && after) {
        const memoryUsed = after.usedJSHeapSize - before.usedJSHeapSize;
        console.log(`${name} (${size} items): ${(memoryUsed / 1024 / 1024).toFixed(2)} MB`);
      } else {
        console.log(`${name} (${size} items): Memory monitoring not available`);
      }
    });
  });
}

/**
 * Example 5: Graph Algorithm Performance
 */
function graphAlgorithmPerformance() {
  console.log("\n=== Graph Algorithm Performance ===");

  const graphSizes = [100, 500, 1000];

  graphSizes.forEach((size) => {
    // Create a random graph
    const graph = new AdjacencyListGraph<number>(false, false);

    // Add vertices
    for (let i = 0; i < size; i++) {
      graph.addVertex(i);
    }

    // Add random edges (sparse graph)
    const edgeProbability = 0.1;
    for (let i = 0; i < size; i++) {
      for (let j = i + 1; j < size; j++) {
        if (Math.random() < edgeProbability) {
          graph.addEdge(i, j);
        }
      }
    }

    console.log(`Graph with ${size} vertices and ${graph.getEdgeCount()} edges:`);

    // Benchmark BFS
    const bfsTime = PerformanceMonitor.measureExecutionTime(() => {
      const bfs = new BreadthFirstSearch();
      bfs.execute({ graph, startVertex: 0 });
    });

    // Benchmark DFS
    const dfsTime = PerformanceMonitor.measureExecutionTime(() => {
      const dfs = new DepthFirstSearch();
      dfs.execute({ graph, startVertex: 0 });
    });

    console.log(`  BFS: ${bfsTime.toFixed(3)}ms`);
    console.log(`  DFS: ${dfsTime.toFixed(3)}ms`);
  });
}

/**
 * Example 6: Search Algorithm Performance
 */
function searchAlgorithmPerformance() {
  console.log("\n=== Search Algorithm Performance ===");

  const arraySizes = [1000, 10000, 100000];

  arraySizes.forEach((size) => {
    // Create sorted array
    const sortedArray = Array.from({ length: size }, (_, i) => i * 2);

    // Random search targets
    const searchTargets = Array.from({ length: 100 }, () => Math.floor(Math.random() * size) * 2);

    // Benchmark Binary Search
    const binarySearch = new BinarySearch();
    const binarySearchTime = PerformanceMonitor.measureExecutionTime(() => {
      searchTargets.forEach((target) => {
        binarySearch.execute({ array: sortedArray, target });
      });
    });

    console.log(`Array size ${size}:`);
    console.log(`  Binary Search (100 queries): ${binarySearchTime.toFixed(3)}ms`);
    console.log(`  Average per query: ${(binarySearchTime / 100).toFixed(4)}ms`);
  });
}

/**
 * Example 7: Scalability Testing
 */
function scalabilityTesting() {
  console.log("\n=== Scalability Testing ===");

  const scalingFactors = [1, 2, 4, 8, 16];

  console.log("Testing algorithm scalability with increasing input sizes...");

  scalingFactors.forEach((factor) => {
    const size = 1000 * factor;
    const data = Array.from({ length: size }, () => Math.floor(Math.random() * size));

    // Test sorting scalability
    const radixSort = new RadixSortNumbers();
    const sortTime = PerformanceMonitor.measureExecutionTime(() => {
      radixSort.execute({ array: [...data] });
    });

    // Test search scalability
    const sortedData = [...data].sort((a, b) => a - b);
    const binarySearch = new BinarySearch();
    const searchTime = PerformanceMonitor.measureExecutionTime(() => {
      for (let i = 0; i < 100; i++) {
        const target = sortedData[Math.floor(Math.random() * sortedData.length)];
        binarySearch.execute({ array: sortedData, target });
      }
    });

    console.log(`Size ${size}:`);
    console.log(
      `  Sort time: ${sortTime.toFixed(2)}ms (${(sortTime / factor).toFixed(2)}ms per 1000 elements)`,
    );
    console.log(`  Search time (100 queries): ${searchTime.toFixed(2)}ms`);
  });
}

/**
 * Example 8: Performance Profiling with Custom Metrics
 */
function customPerformanceMetrics() {
  console.log("\n=== Custom Performance Metrics ===");

  class PerformanceProfiler {
    private metrics: Map<string, number[]> = new Map();

    start(operation: string) {
      console.time(operation);
    }

    end(operation: string) {
      console.timeEnd(operation);

      // Record the timing (this is a simplified version)
      const duration = performance.now(); // This would need proper timing implementation
      if (!this.metrics.has(operation)) {
        this.metrics.set(operation, []);
      }
      this.metrics.get(operation)!.push(duration);
    }

    getStatistics(operation: string) {
      const times = this.metrics.get(operation) || [];
      if (times.length === 0) return null;

      const sum = times.reduce((a, b) => a + b, 0);
      const avg = sum / times.length;
      const min = Math.min(...times);
      const max = Math.max(...times);

      return { count: times.length, avg, min, max, sum };
    }

    report() {
      console.log("\nPerformance Report:");
      this.metrics.forEach((times, operation) => {
        const stats = this.getStatistics(operation);
        if (stats) {
          console.log(`${operation}:`);
          console.log(`  Runs: ${stats.count}`);
          console.log(`  Avg: ${stats.avg.toFixed(3)}ms`);
          console.log(`  Min: ${stats.min.toFixed(3)}ms`);
          console.log(`  Max: ${stats.max.toFixed(3)}ms`);
        }
      });
    }
  }

  const profiler = new PerformanceProfiler();

  // Profile different operations
  for (let i = 0; i < 5; i++) {
    profiler.start("data-structure-operations");
    const list = new LinkedList<number>();
    for (let j = 0; j < 1000; j++) {
      list.add(j);
    }
    profiler.end("data-structure-operations");

    profiler.start("algorithm-operations");
    const data = Array.from({ length: 1000 }, () => Math.random());
    data.sort();
    profiler.end("algorithm-operations");
  }

  profiler.report();
}

/**
 * Example 9: Comparative Analysis Report
 */
function comparativeAnalysisReport() {
  console.log("\n=== Comparative Analysis Report ===");

  const report = {
    dataStructures: {} as Record<string, any>,
    algorithms: {} as Record<string, any>,
    recommendations: [] as string[],
  };

  // Test data structures
  const testSize = 5000;
  const testData = Array.from({ length: testSize }, () => Math.floor(Math.random() * testSize));

  // LinkedList vs SkipList for insertions
  const linkedList = new LinkedList<number>();
  const linkedListInsertTime = PerformanceMonitor.measureExecutionTime(() => {
    testData.forEach((value) => linkedList.add(value));
  });

  const skipList = new SkipList<number, number>(16, -Infinity);
  const skipListInsertTime = PerformanceMonitor.measureExecutionTime(() => {
    testData.forEach((value) => skipList.insert(value, value));
  });

  report.dataStructures = {
    linkedList: { insertTime: linkedListInsertTime },
    skipList: { insertTime: skipListInsertTime },
    comparison: {
      skipListFaster: skipListInsertTime < linkedListInsertTime,
      speedup: linkedListInsertTime / skipListInsertTime,
    },
  };

  // Test algorithms
  const sortData = Array.from({ length: 10000 }, () => Math.floor(Math.random() * 10000));

  const countingSort = new CountingSort();
  const countingSortTime = PerformanceMonitor.measureExecutionTime(() => {
    countingSort.execute({ array: [...sortData] });
  });

  const radixSort = new RadixSortNumbers();
  const radixSortTime = PerformanceMonitor.measureExecutionTime(() => {
    radixSort.execute({ array: [...sortData] });
  });

  report.algorithms = {
    countingSort: { time: countingSortTime },
    radixSort: { time: radixSortTime },
    comparison: {
      radixFaster: radixSortTime < countingSortTime,
      speedup: countingSortTime / radixSortTime,
    },
  };

  // Generate recommendations
  if (report.dataStructures.comparison.skipListFaster) {
    report.recommendations.push("Use SkipList for frequent insertions and searches");
  }

  if (report.algorithms.comparison.radixFaster) {
    report.recommendations.push("Use RadixSort for large datasets of integers");
  }

  // Print report
  console.log("Data Structure Comparison:");
  console.log(`  LinkedList insertions: ${linkedListInsertTime.toFixed(2)}ms`);
  console.log(`  SkipList insertions: ${skipListInsertTime.toFixed(2)}ms`);
  console.log(`  SkipList is ${report.dataStructures.comparison.speedup.toFixed(2)}x faster`);

  console.log("\nAlgorithm Comparison:");
  console.log(`  Counting Sort: ${countingSortTime.toFixed(2)}ms`);
  console.log(`  Radix Sort: ${radixSortTime.toFixed(2)}ms`);
  console.log(`  Radix Sort is ${report.algorithms.comparison.speedup.toFixed(2)}x faster`);

  console.log("\nRecommendations:");
  report.recommendations.forEach((rec) => console.log(`  • ${rec}`));
}

/**
 * Main demonstration function
 */
export function demonstratePerformance() {
  console.log("=== Performance Monitoring and Benchmarking Examples ===\n");

  basicPerformanceMonitoring();
  dataStructurePerformanceComparison();
  algorithmPerformanceBenchmarking();
  memoryUsageAnalysis();
  graphAlgorithmPerformance();
  searchAlgorithmPerformance();
  scalabilityTesting();
  customPerformanceMetrics();
  comparativeAnalysisReport();
}

// Run the demonstration if this file is executed directly
if (require.main === module) {
  demonstratePerformance();
}
