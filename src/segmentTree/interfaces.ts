export interface baseSegmentTreeNode {
  left: number
  right: number
  leftChild?: baseSegmentTreeNode | null
  rightChild?: baseSegmentTreeNode | null
}

/**@TODO try to remove nodemerger and do everything with segmentTreeQueryMerger */
export type segmentTreeNodeFactory<T, U extends baseSegmentTreeNode> = (
  sourceArrayType: T,
  leftIndex: number,
  rightIndex: number
) => U
export type segmentTreeNodeMerger<U extends baseSegmentTreeNode> = (
  parentTreeNode: U,
  leftTreeNode: U,
  rightTreeNode: U
) => U
export type segmentTreeQueryMerger<U extends baseSegmentTreeNode> = (
  leftTreeNode: U,
  rightTreeNode: U,
  SEG_TREE?: Array<U>
) => U
export type segmentTreeLeafNodeUpdater<T, U extends baseSegmentTreeNode> = (
  sourceArrayNodeType: T,
  segmentNode: U
) => void
export type segmentTreeRangeNodeUpdater<T, U extends baseSegmentTreeNode> = (
  sourceArrayNodeType: T,
  segmentNode: U,
  leftNode?: U,
  rightNode?: U
) => void
export type segmentTreeRangeNodePropagator<U extends baseSegmentTreeNode> = (
  segmentNode: U,
  leftNode: U,
  rightNode: U
) => void
