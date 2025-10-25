/**
 * Data Structures Module
 *
 * This module contains all data structure implementations in the Algorithmsts library.
 * Data structures provide efficient ways to store, organize, and manipulate data.
 *
 * @module data-structures
 */

// Graph data structures
export * from '../graphs';

// Linear data structures
export { LinkedList, LinkedListIterator } from './linked-list';
export type { Node } from './linked-list';

// Probabilistic data structures
export { SkipList, SkipListIterator } from './skip-list';
export type { SkipNode, BinaryComparisonRoutine } from './skip-list';

// Tree-based data structures
export { SegmentTree, SegmentTreeIterator } from './segment-tree';
export type {
  BaseSegmentTreeNode,
  SegmentTreeNodeFactory,
  SegmentTreeNodeMerger,
  SegmentTreeQueryMerger,
  SegmentTreeLeafNodeUpdater,
  SegmentTreeRangeNodeUpdater,
  SegmentTreeRangeNodePropagator
} from './segment-tree';
export * from './binary-search-tree';

// String data structures
export { Trie, TrieNode, TrieIterator } from './trie';
export type { TrieNode as TrieNodeType } from './trie';

// Advanced string data structures
export { SuffixTree, SuffixTreeNode, UkkonenAlgorithm, SuffixTreeIterator } from './suffix-tree';
export type { IUkkonenAlgorithm } from './suffix-tree';
