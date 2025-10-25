/**
 * Performance test data generators
 */

export class PerformanceData {
  /**
   * Generates performance test datasets of various sizes
   */
  static generateDatasets(): {
    small: number[];
    medium: number[];
    large: number[];
    xlarge: number[];
  } {
    return {
      small: Array.from({ length: 100 }, (_, i) => i),
      medium: Array.from({ length: 1000 }, (_, i) => i),
      large: Array.from({ length: 10000 }, (_, i) => i),
      xlarge: Array.from({ length: 100000 }, (_, i) => i)
    };
  }

  /**
   * Generates worst-case data for performance testing
   */
  static generateWorstCaseData(): {
    sorted: number[];
    reverseSorted: number[];
    duplicates: number[];
    random: number[];
  } {
    const size = 10000;

    return {
      sorted: Array.from({ length: size }, (_, i) => i),
      reverseSorted: Array.from({ length: size }, (_, i) => size - i),
      duplicates: Array.from({ length: size }, () => Math.floor(Math.random() * 100)),
      random: Array.from({ length: size }, () => Math.floor(Math.random() * size * 10))
    };
  }

  /**
   * Performance benchmarks for different operations
   */
  static getBenchmarks(): {
    [structure: string]: {
      [operation: string]: {
        small: number;
        medium: number;
        large: number;
      };
    };
  } {
    return {
      LinkedList: {
        add: { small: 1, medium: 5, large: 10 },
        remove: { small: 1, medium: 5, large: 10 },
        contains: { small: 1, medium: 10, large: 50 },
        iterator: { small: 1, medium: 5, large: 20 }
      },
      SkipList: {
        add: { small: 2, medium: 10, large: 20 },
        remove: { small: 2, medium: 10, large: 20 },
        contains: { small: 1, medium: 5, large: 15 },
        iterator: { small: 1, medium: 5, large: 15 }
      },
      SegmentTree: {
        build: { small: 5, medium: 50, large: 200 },
        query: { small: 1, medium: 2, large: 5 },
        update: { small: 1, medium: 2, large: 5 }
      },
      Trie: {
        insert: { small: 2, medium: 10, large: 30 },
        search: { small: 1, medium: 3, large: 10 },
        remove: { small: 1, medium: 5, large: 15 }
      },
      SuffixTree: {
        build: { small: 10, medium: 100, large: 500 },
        search: { small: 1, medium: 5, large: 20 }
      }
    };
  }

  /**
   * Memory usage benchmarks
   */
  static getMemoryBenchmarks(): {
    [structure: string]: {
      perElement: number; // bytes per element
      baseOverhead: number; // base memory overhead
    };
  } {
    return {
      LinkedList: { perElement: 16, baseOverhead: 32 },
      SkipList: { perElement: 24, baseOverhead: 64 },
      SegmentTree: { perElement: 32, baseOverhead: 128 },
      Trie: { perElement: 20, baseOverhead: 48 },
      SuffixTree: { perElement: 28, baseOverhead: 96 }
    };
  }

  /**
   * Generates performance test scenarios
   */
  static generateScenarios(): Array<{
    name: string;
    description: string;
    setup: () => any;
    operations: Array<() => void>;
    expectedTimeMs: number;
  }> {
    return [
      {
        name: 'LinkedList_Add_1000',
        description: 'Add 1000 elements to LinkedList',
        setup: () => [],
        operations: [() => {
          const list = [];
          for (let i = 0; i < 1000; i++) {
            list.push(i);
          }
        }],
        expectedTimeMs: 10
      },
      {
        name: 'SkipList_Search_10000',
        description: 'Search operations on SkipList with 10000 elements',
        setup: () => {
          const data = Array.from({ length: 10000 }, (_, i) => i);
          return data;
        },
        operations: [() => {
          const data = Array.from({ length: 10000 }, (_, i) => i);
          for (let i = 0; i < 1000; i++) {
            data.includes(Math.floor(Math.random() * 10000));
          }
        }],
        expectedTimeMs: 50
      }
    ];
  }
}
