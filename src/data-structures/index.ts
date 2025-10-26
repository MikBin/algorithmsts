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
export { Stack } from './stack';
export { Queue } from './queue';
export { Deque } from './deque';
export { CircularBuffer } from './circular-buffer';
export { ArrayList } from './dynamic-array';

// Maps/Sets
export { HashMap } from './hash-map';
export type { Hasher as HashHasher, Equality as HashEquality } from './hash-map';
export { HashSet } from './hash-set';
export { SparseSet } from './sparse-set';

// Probabilistic data structures
export { SkipList, SkipListIterator } from './skip-list';
export type { SkipNode, BinaryComparisonRoutine } from './skip-list';
export { BloomFilter } from './bloom-filter';
export type { HashFn as BloomHashFn } from './bloom-filter';
export { CountMinSketch } from './count-min-sketch';
export type { CMSHash } from './count-min-sketch';
export { HyperLogLog } from './hyperloglog';

// Tree-based data structures
export { AVLTree } from './avl-tree';
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

// Heap data structures
export * from './binary-heap';
export { DAryHeap } from './d-ary-heap';
export { MinMaxHeap } from './min-max-heap';
export { PriorityQueue } from './priority-queue';
// B-Tree
export { BTree, BTreeIterator } from './b-tree';
export type { BTreeNode } from './b-tree';

// Red-Black Tree
export * from './red-black-tree';
// Fenwick Tree
export * from './fenwick-tree';

// New tree/heaps and automata
export { Treap } from './treap';
export { SplayTree } from './splay-tree';
export { PairingHeap } from './pairing-heap';
export { BinomialHeap } from './binomial-heap';
export { LeftistHeap } from './leftist-heap';
export { SkewHeap } from './skew-heap';
export { FibonacciHeap } from './fibonacci-heap';
export { KDTree } from './kd-tree';
export { Quadtree } from './quadtree';
export { RTree } from './r-tree';
export { BKTree } from './bk-tree';
export { VPTree } from './vp-tree';
export { PatriciaTrie } from './patricia-trie';
export { Rope } from './rope';
export { AhoCorasick } from './aho-corasick';
export { IntervalTree } from './interval-tree';
export { SuffixAutomaton } from './suffix-automaton';
export { SuffixArray } from './suffix-array';
export { AATree } from './aa-tree';
export { OrderStatisticTree } from './order-statistic-tree';
export { ScapegoatTree } from './scapegoat-tree';

// Others
export { UnionFind } from './disjoint-set';
export { BitSet } from './bitset';
export { MonotonicStack } from './monotonic-stack';
export { MonotonicQueue } from './monotonic-queue';
export { LRUCache } from './lru-cache';
export { LFUCache } from './lfu-cache';
