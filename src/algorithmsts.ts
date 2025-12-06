/**
 * Algorithmsts Library - Main Entry Point
 *
 * This is the main entry point for the Algorithmsts library, providing access to
 * all algorithms, data structures, and utilities. The library is organized into
 * modular components for better maintainability and scalability.
 *
 * ## Library Structure
 *
 * The library follows a hierarchical organization:
 * - **core/**: Fundamental interfaces, abstract classes, and utilities
 * - **data-structures/**: Data structure implementations
 * - **algorithms/**: Algorithm implementations
 * - **graphs/**: Graph data structures and algorithms
 * - **performance/**: Performance monitoring and benchmarking tools
 * - **types/**: TypeScript type definitions
 *
 * ## Usage
 *
 * ### Modern Modular Import (Recommended)
 * ```typescript
 * // Import specific modules for better tree-shaking
 * import { BinarySearch } from '@mikbin80/algorithmsts/algorithms';
 * import { LinkedList } from '@mikbin80/algorithmsts/data-structures';
 * import { PerformanceMonitor } from '@mikbin80/algorithmsts/core';
 *
 * // Use the components
 * const searchResult = BinarySearch.search([1, 2, 3], 2);
 * const list = new LinkedList<number>();
 * ```
 *
 * ### Legacy Default Import (Deprecated)
 * ```typescript
 * import algorithmsts from '@mikbin80/algorithmsts';
 *
 * // Access existing functionality (deprecated)
 * const result = algorithmsts.binarySearch.search([1, 2, 3], 2);
 * ```
 *
 * @module algorithmsts
 */

// Import and re-export all core components
export * from './core';

// Import and re-export all data structures
export * from './data-structures';

// Import and re-export all algorithms (excluding graph traversal to avoid conflicts)
export {
  BinarySearch,
  BinaryClosestSearch,
  CountingSort,
  RadixSortNumbers,
  RadixSortStrings,
  NgramSimilarity,
  SorensenDiceCoefficient,
  TrigramSimilarity,
  SplitByUpperCase,
  JaroDistance,
  JaroWinklerDistance,
  LevenshteinDistance,
  SparseTable,
  AlgorithmComparator,
  AlgorithmSelector,
  AlgorithmTestUtils
} from './algorithms';
export type {
  AlgorithmComparisonResult,
  AlgorithmPerformanceMetrics,
  SelectionCriteria,
  AlgorithmSelectionResult
} from './algorithms';

// Import and re-export all graph components
export * from './graphs';

// Import and re-export performance monitoring utilities
export * from './performance';

// Import and re-export type definitions
export * from './types';

// Emit a deprecation warning when importing the legacy default export entry
if (typeof console !== 'undefined' && console.warn) {
  console.warn(
    `[DEPRECATED] The default export of algorithmsts is deprecated and will be removed in version 2.0.0. ` +
    `Please migrate to the new modular API: import from '@mikbin80/algorithmsts/algorithms' or '@mikbin80/algorithmsts/data-structures'.`
  );
}

// Import compatibility layer
import * as compatibility from './compatibility/index';
import { LegacyAPI } from './compatibility/utils/LegacyAPI';
import { NgramSimilarity, BinarySearch, BinaryClosestSearch } from './algorithms';
import { SegmentTreeAdapter } from './compatibility/adapters/SegmentTreeAdapter';

// --- Legacy Wrappers ---

const binarySearchWrapper = <T>(array: T[], value: T, compareFn: (a: T, b: T) => number): number => {
  if (!array) {
    throw new Error('Array cannot be null or undefined');
  }
  if (!compareFn) {
    throw new Error('Comparison function cannot be null or undefined');
  }
  const algo = new BinarySearch<T>();
  const result = algo.execute({ array, value, compareFn }).index;
  return result;
};

const binaryClosestSearchWrapper = <T>(array: T[], value: T, compareFn: (a: T, b: T) => number): number => {
  if (!array) {
    throw new Error('Array cannot be null or undefined');
  }
  const algo = new BinaryClosestSearch<T>();
  return algo.execute({ array, value, compareFn }).index;
};

const ngramSimilarityWrapper = (str1: string, str2: string, substringLength: number = 2, caseSensitive: boolean = false): number => {
  const algo = new NgramSimilarity();
  return algo.execute({ str1, str2, substringLength, caseSensitive }).similarity;
};

// --- End Legacy Wrappers ---

/**
 * Default export maintaining backward compatibility
 * @deprecated Consider importing specific modules for better tree-shaking and performance.
 * Use modular imports like `import { BinarySearch } from '@mikbin80/algorithmsts/algorithms'` instead.
 */
const algorithmsts = LegacyAPI.createLegacyModule({
  binarySearch: {
    binarySearch: binarySearchWrapper,
    binaryClosestSearch: binaryClosestSearchWrapper
  },
  segmentTree: compatibility.SegmentTree, // Map namespace to Adapter class? No, legacy was object.
  // Legacy segmentTree usage: expect(algorithmsts.segmentTree).toBeDefined().
  // And probably: new algorithmsts.segmentTree.SegmentTree(...) or new algorithmsts.SegmentTree(...)?
  // Based on "should provide legacy data structure examples", it tests constructors like `new algorithmsts.skipList`.
  // It also tests `expect(algorithmsts.SegmentTree).toBeDefined()`.

  // Data Structures (Class Constructors)
  LinkedList: compatibility.LinkedList,
  SkipList: compatibility.SkipList,
  SegmentTree: compatibility.SegmentTree,
  Trie: compatibility.Trie,
  SuffixTree: compatibility.SuffixTree,
  SuffixTreeAdapter: compatibility.SuffixTree,

  // Lowercase keys used in some legacy tests/examples (like new algorithmsts.skipList)
  skipList: compatibility.SkipList,
  trie: compatibility.Trie,

  // Functions
  ngramSimilarity: ngramSimilarityWrapper,

}, '2.0.0');
export default algorithmsts;

// Legacy comment preserved for reference:
// used on some strings remove spaces and special chars like ' " ? ...
// when looking for something like multiples ex p/e special chars are needed
