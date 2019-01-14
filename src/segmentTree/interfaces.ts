export interface baseSegmentTreeNode {
  left: number;
  right: number;
}

export type segmentTreeNodeFactory<T, U extends baseSegmentTreeNode> = (t: T, l: number, r: number, i: number) => U;
