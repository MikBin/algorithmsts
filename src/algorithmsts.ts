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

// Import existing modules for backward compatibility
import * as binSearches from './binarySearch/binarySearch'
import * as segTree from './segmentTree/segmentTree'
import SkipList from './skipList/skipList'
import { Trie } from './trie/trie'
import { SuffixTree } from './suffixTree/index'
import { ngramSimilarity } from './strings/similarities'

// Import compatibility layer
import * as compatibility from './compatibility/index';
import { LegacyAPI } from './compatibility/utils/LegacyAPI';

/**
 * Default export maintaining backward compatibility
 * @deprecated Consider importing specific modules for better tree-shaking and performance.
 * Use modular imports like `import { BinarySearch } from '@mikbin80/algorithmsts/algorithms'` instead.
 */
const algorithmsts = LegacyAPI.createLegacyModule({
  binarySearch: binSearches,
  segmentTree: segTree,
  skipList: SkipList,
  trie: Trie,
  SuffixTree,
  ngramSimilarity,
  // Legacy data structures with deprecation warnings
  LinkedList: compatibility.LinkedList,
  SkipList: compatibility.SkipList,
  SegmentTree: compatibility.SegmentTree,
  Trie: compatibility.Trie,
  SuffixTreeAdapter: compatibility.SuffixTree
}, '2.0.0');
export default algorithmsts;

// Legacy comment preserved for reference:
// used on some strings remove spaces and special chars like ' " ? ...
// when looking for something like multiples ex p/e special chars are needed
