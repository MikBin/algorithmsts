/**
 * Performance test data and benchmarks for algorithms
 */
export class PerformanceData {
  /**
   * Performance targets for different algorithm types
   */
  public static readonly PERFORMANCE_TARGETS = {
    // Basic operations (O(1))
    basic: {
      maxTime: 1, // milliseconds
      description: 'Basic operations should complete in under 1ms'
    },

    // Search operations (O(log n))
    search: {
      maxTime: 10, // milliseconds
      description: 'Search operations should complete in under 10ms'
    },

    // Linear operations (O(n))
    linear: {
      maxTime: 100, // milliseconds for reasonable input sizes
      description: 'Linear operations should complete in under 100ms for typical inputs'
    },

    // Quadratic operations (O(n²))
    quadratic: {
      maxTime: 1000, // milliseconds
      description: 'Quadratic operations should complete in under 1s for small inputs'
    }
  };

  /**
   * Benchmark configurations for different input sizes
   */
  public static readonly BENCHMARK_CONFIGS = {
    small: {
      size: 100,
      iterations: 100,
      description: 'Small input benchmark (100 elements, 100 iterations)'
    },

    medium: {
      size: 1000,
      iterations: 50,
      description: 'Medium input benchmark (1000 elements, 50 iterations)'
    },

    large: {
      size: 10000,
      iterations: 10,
      description: 'Large input benchmark (10000 elements, 10 iterations)'
    },

    xl: {
      size: 100000,
      iterations: 5,
      description: 'Extra large input benchmark (100000 elements, 5 iterations)'
    }
  };

  /**
   * Expected performance characteristics for each algorithm
   */
  public static readonly ALGORITHM_PERFORMANCE_EXPECTATIONS = {
    // Sorting algorithms
    CountingSort: {
      timeComplexity: 'O(n + k)',
      spaceComplexity: 'O(n + k)',
      expectedPerformance: 'linear',
      suitableFor: ['small-to-medium arrays', 'integer sorting', 'known range']
    },

    RadixSortNumbers: {
      timeComplexity: 'O(n * d)',
      spaceComplexity: 'O(n + k)',
      expectedPerformance: 'linear',
      suitableFor: ['large arrays', 'fixed digit length', 'integer sorting']
    },

    RadixSortStrings: {
      timeComplexity: 'O(n * m)',
      spaceComplexity: 'O(n + k)',
      expectedPerformance: 'linear',
      suitableFor: ['string sorting', 'fixed length strings']
    },

    // Searching algorithms
    BinarySearch: {
      timeComplexity: 'O(log n)',
      spaceComplexity: 'O(1)',
      expectedPerformance: 'search',
      suitableFor: ['sorted arrays', 'exact matches']
    },

    BinaryClosestSearch: {
      timeComplexity: 'O(log n)',
      spaceComplexity: 'O(1)',
      expectedPerformance: 'search',
      suitableFor: ['sorted arrays', 'closest matches']
    },

    // String algorithms
    NgramSimilarity: {
      timeComplexity: 'O(m + n)',
      spaceComplexity: 'O(min(m, n))',
      expectedPerformance: 'linear',
      suitableFor: ['text similarity', 'fuzzy matching']
    },

    JaroDistance: {
      timeComplexity: 'O(m * n)',
      spaceComplexity: 'O(min(m, n))',
      expectedPerformance: 'quadratic',
      suitableFor: ['short strings', 'name matching']
    },

    LevenshteinDistance: {
      timeComplexity: 'O(m * n)',
      spaceComplexity: 'O(min(m, n))',
      expectedPerformance: 'quadratic',
      suitableFor: ['edit distance', 'spell checking']
    },

    SplitByUpperCase: {
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(n)',
      expectedPerformance: 'linear',
      suitableFor: ['string parsing', 'camelCase splitting']
    },

    // Graph algorithms
    BreadthFirstSearch: {
      timeComplexity: 'O(V + E)',
      spaceComplexity: 'O(V)',
      expectedPerformance: 'linear',
      suitableFor: ['unweighted graphs', 'shortest path (unweighted)']
    },

    DepthFirstSearch: {
      timeComplexity: 'O(V + E)',
      spaceComplexity: 'O(V)',
      expectedPerformance: 'linear',
      suitableFor: ['graph traversal', 'cycle detection']
    },

    // Range query algorithms
    SparseTable: {
      timeComplexity: 'O(N log N) build, O(1) query',
      spaceComplexity: 'O(N log N)',
      expectedPerformance: 'linear',
      suitableFor: ['static arrays', 'range queries', 'idempotent operations']
    }
  };

  /**
   * Performance regression thresholds
   */
  public static readonly REGRESSION_THRESHOLDS = {
    warning: 1.5, // 50% performance degradation
    critical: 2.0, // 100% performance degradation
    description: 'Performance regression thresholds for automated testing'
  };

  /**
   * Gets performance target for a given complexity class
   */
  public static getPerformanceTarget(complexity: string): { maxTime: number; description: string } {
    if (complexity.includes('O(1)')) {
      return this.PERFORMANCE_TARGETS.basic;
    } else if (complexity.includes('O(log n)')) {
      return this.PERFORMANCE_TARGETS.search;
    } else if (complexity.includes('O(n)')) {
      return this.PERFORMANCE_TARGETS.linear;
    } else if (complexity.includes('O(n²)') || complexity.includes('O(m * n)')) {
      return this.PERFORMANCE_TARGETS.quadratic;
    }

    // Default to linear for unknown complexities
    return this.PERFORMANCE_TARGETS.linear;
  }

  /**
   * Validates if execution time meets performance expectations
   */
  public static validatePerformance(
    algorithmName: string,
    executionTime: number,
    inputSize?: number
  ): { passed: boolean; expectedMaxTime: number; message: string } {
    const expectations = this.ALGORITHM_PERFORMANCE_EXPECTATIONS[algorithmName as keyof typeof this.ALGORITHM_PERFORMANCE_EXPECTATIONS];

    if (!expectations) {
      return {
        passed: true,
        expectedMaxTime: 1000,
        message: `No performance expectations defined for ${algorithmName}`
      };
    }

    const target = this.getPerformanceTarget(expectations.timeComplexity);
    const passed = executionTime <= target.maxTime;

    return {
      passed,
      expectedMaxTime: target.maxTime,
      message: passed
        ? `Performance within target: ${executionTime}ms <= ${target.maxTime}ms`
        : `Performance exceeded target: ${executionTime}ms > ${target.maxTime}ms (${target.description})`
    };
  }
}
