export interface baseSegmentTreeNode {
  left: number;
  right: number;
}

export type segmentTreeNodeFactory<T, U extends baseSegmentTreeNode> = (sourceArrayType: T, leftIndex: number, rightIndex: number) => U;
export type segmentTreeNodeMerger<U extends baseSegmentTreeNode> = (parentTreeNode: U, leftTreeNode: U, rightTreeNode: U) => U;
export type segmentTreeQueryMerger<U extends baseSegmentTreeNode> = (leftTreeNode: U, rightTreeNode: U) => U;
export type segmentTreeLeafNodeUpdater<T, U extends baseSegmentTreeNode> = (sourceArrayNodeType: T, segmentNode: U) => void;
