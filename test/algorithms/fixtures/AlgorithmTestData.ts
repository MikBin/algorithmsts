/**
 * Test data generators for algorithm testing
 */
export class AlgorithmTestData {
  /**
   * Generates arrays of different sizes for sorting algorithm tests
   */
  public static generateSortingTestData(): Array<{ name: string; array: number[]; expectedComplexity: string }> {
    return [
      {
        name: 'small-array',
        array: [5, 2, 8, 1, 9, 4],
        expectedComplexity: 'O(n log n)'
      },
      {
        name: 'medium-array',
        array: Array.from({ length: 100 }, () => Math.floor(Math.random() * 1000)),
        expectedComplexity: 'O(n log n)'
      },
      {
        name: 'large-array',
        array: Array.from({ length: 1000 }, () => Math.floor(Math.random() * 10000)),
        expectedComplexity: 'O(n log n)'
      },
      {
        name: 'sorted-array',
        array: Array.from({ length: 50 }, (_, i) => i),
        expectedComplexity: 'O(n log n)'
      },
      {
        name: 'reverse-sorted-array',
        array: Array.from({ length: 50 }, (_, i) => 49 - i),
        expectedComplexity: 'O(n log n)'
      },
      {
        name: 'array-with-negatives',
        array: [-10, 5, -3, 8, 0, -15, 12],
        expectedComplexity: 'O(n log n)'
      }
    ];
  }

  /**
   * Generates test data for searching algorithms
   */
  public static generateSearchingTestData(): Array<{ name: string; array: number[]; target: number; expectedFound: boolean }> {
    const sortedArray = [1, 3, 4, 6, 7, 12, 23, 33, 34, 35, 36, 55, 56, 66, 67, 78, 88, 123, 222, 234];

    return [
      {
        name: 'element-found-middle',
        array: sortedArray,
        target: 35,
        expectedFound: true
      },
      {
        name: 'element-found-start',
        array: sortedArray,
        target: 1,
        expectedFound: true
      },
      {
        name: 'element-found-end',
        array: sortedArray,
        target: 234,
        expectedFound: true
      },
      {
        name: 'element-not-found',
        array: sortedArray,
        target: 5,
        expectedFound: false
      },
      {
        name: 'empty-array',
        array: [],
        target: 1,
        expectedFound: false
      },
      {
        name: 'single-element-found',
        array: [42],
        target: 42,
        expectedFound: true
      },
      {
        name: 'single-element-not-found',
        array: [42],
        target: 43,
        expectedFound: false
      }
    ];
  }

  /**
   * Generates test data for string similarity algorithms
   */
  public static generateStringSimilarityTestData(): Array<{ name: string; str1: string; str2: string; expectedRange: [number, number] }> {
    return [
      {
        name: 'identical-strings',
        str1: 'hello world',
        str2: 'hello world',
        expectedRange: [1, 1]
      },
      {
        name: 'similar-strings',
        str1: 'martha',
        str2: 'marhta',
        expectedRange: [0.8, 1.0]
      },
      {
        name: 'different-strings',
        str1: 'apple',
        str2: 'orange',
        expectedRange: [0, 0.3]
      },
      {
        name: 'empty-strings',
        str1: '',
        str2: '',
        expectedRange: [1, 1]
      },
      {
        name: 'one-empty-string',
        str1: 'hello',
        str2: '',
        expectedRange: [0, 0.5]
      },
      {
        name: 'long-similar-strings',
        str1: 'The quick brown fox jumps over the lazy dog',
        str2: 'The quick brown fox jumps over the lazy dog.',
        expectedRange: [0.9, 1.0]
      }
    ];
  }

  /**
   * Generates performance benchmark data
   */
  public static generatePerformanceBenchmarkData(): Array<{ name: string; size: number; generator: () => any }> {
    return [
      {
        name: 'small-sorting-benchmark',
        size: 100,
        generator: () => Array.from({ length: 100 }, () => Math.floor(Math.random() * 1000))
      },
      {
        name: 'medium-sorting-benchmark',
        size: 1000,
        generator: () => Array.from({ length: 1000 }, () => Math.floor(Math.random() * 10000))
      },
      {
        name: 'large-sorting-benchmark',
        size: 10000,
        generator: () => Array.from({ length: 10000 }, () => Math.floor(Math.random() * 100000))
      },
      {
        name: 'small-searching-benchmark',
        size: 1000,
        generator: () => {
          const arr = Array.from({ length: 1000 }, () => Math.floor(Math.random() * 10000));
          return arr.sort((a, b) => a - b);
        }
      },
      {
        name: 'large-searching-benchmark',
        size: 10000,
        generator: () => {
          const arr = Array.from({ length: 10000 }, () => Math.floor(Math.random() * 100000));
          return arr.sort((a, b) => a - b);
        }
      }
    ];
  }

  /**
   * Generates edge case test data
   */
  public static generateEdgeCaseData(): Array<{ name: string; data: any; description: string }> {
    return [
      {
        name: 'empty-array',
        data: [],
        description: 'Empty array edge case'
      },
      {
        name: 'single-element',
        data: [42],
        description: 'Single element array'
      },
      {
        name: 'null-input',
        data: null,
        description: 'Null input handling'
      },
      {
        name: 'undefined-input',
        data: undefined,
        description: 'Undefined input handling'
      },
      {
        name: 'very-large-numbers',
        data: [Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER, 0],
        description: 'Very large number handling'
      },
      {
        name: 'special-characters-string',
        data: '!@#$%^&*()',
        description: 'Special characters in strings'
      },
      {
        name: 'unicode-string',
        data: '🚀🌟💻🔥',
        description: 'Unicode character handling'
      }
    ];
  }
}
