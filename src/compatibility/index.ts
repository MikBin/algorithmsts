/**
 * Compatibility Layer Index
 *
 * This module provides backward compatibility adapters and utilities
 * for the Algorithmsts library migration. All exports here are deprecated
 * and will be removed in version 2.0.0.
 *
 * @module compatibility
 * @deprecated Use the new modular API from data-structures/ and algorithms/ instead
 */

import { DeprecationWarning } from './utils/DeprecationWarning';
import { LegacyAPI } from './utils/LegacyAPI';

// Emit a general deprecation warning when this module is imported
if (typeof console !== 'undefined' && console.warn) {
  console.warn(
    `[DEPRECATED] The compatibility layer is deprecated and will be removed in version 2.0.0. ` +
    `Please migrate to the new modular API: import from 'algorithmsts/data-structures' or 'algorithmsts/algorithms'.`
  );
}

// Adapter exports with deprecation warnings
export { LinkedListAdapter as LinkedList } from './adapters/LinkedListAdapter';
export { SkipListAdapter as SkipList } from './adapters/SkipListAdapter';
export { SegmentTreeAdapter as SegmentTree } from './adapters/SegmentTreeAdapter';
export { TrieAdapter as Trie } from './adapters/TrieAdapter';
export { SuffixTreeAdapter as SuffixTree } from './adapters/SuffixTreeAdapter';

// Utility exports
export { DeprecationWarning } from './utils/DeprecationWarning';
export { LegacyAPI } from './utils/LegacyAPI';

/**
 * Migration Guide
 *
 * To migrate from the old API to the new API:
 *
 * 1. **LinkedList**: Replace `new LinkedList()` with `new LinkedList()` from `algorithmsts/data-structures`
 * 2. **SkipList**: Replace `new SkipList(maxLevel, dummyVal, comparator)` with `new SkipList(maxLevel, dummyVal, comparator)` from `algorithmsts/data-structures`
 * 3. **SegmentTree**: Replace `new SegmentTree(array, factory, merger, query, updater)` with `new SegmentTree(array, factory, merger, query, updater)` from `algorithmsts/data-structures`
 * 4. **Trie**: Replace `new Trie()` with `new Trie()` from `algorithmsts/data-structures`
 * 5. **SuffixTree**: Replace `new SuffixTree(text)` with `new SuffixTree(text)` from `algorithmsts/data-structures`
 *
 * The new APIs provide the same functionality with improved performance and type safety.
 */
