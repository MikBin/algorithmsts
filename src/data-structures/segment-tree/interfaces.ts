/**
 * Base interface for segment tree nodes
 */
export interface BaseSegmentTreeNode {
  /** Left boundary of the segment */
  left: number;
  /** Right boundary of the segment */
  right: number;
  /** Optional left child reference */
  leftChild?: BaseSegmentTreeNode | null;
  /** Optional right child reference */
  rightChild?: BaseSegmentTreeNode | null;
}

/**
 * Factory function for creating segment tree nodes
 */
export type SegmentTreeNodeFactory<T, U extends BaseSegmentTreeNode> = (
  sourceArrayType: T,
  leftIndex: number,
  rightIndex: number
) => U;

/**
 * Function for merging segment tree nodes
 */
export type SegmentTreeNodeMerger<U extends BaseSegmentTreeNode> = (
  parentTreeNode: U,
  leftTreeNode: U,
  rightTreeNode: U
) => U;

/**
 * Function for merging query results
 */
export type SegmentTreeQueryMerger<U extends BaseSegmentTreeNode> = (
  leftTreeNode: U,
  rightTreeNode: U,
  SEG_TREE?: Array<U>
) => U;

/**
 * Function for updating leaf nodes
 */
export type SegmentTreeLeafNodeUpdater<T, U extends BaseSegmentTreeNode> = (
  sourceArrayNodeType: T,
  segmentNode: U
) => void;

/**
 * Function for updating range nodes
 */
export type SegmentTreeRangeNodeUpdater<T, U extends BaseSegmentTreeNode> = (
  sourceArrayNodeType: T,
  segmentNode: U,
  leftNode?: U,
  rightNode?: U
) => void;

/**
 * Function for propagating lazy updates
 */
export type SegmentTreeRangeNodePropagator<U extends BaseSegmentTreeNode> = (
  segmentNode: U,
  leftNode: U,
  rightNode: U
) => void;
