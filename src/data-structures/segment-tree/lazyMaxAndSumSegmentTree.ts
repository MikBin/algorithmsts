import {
  BaseSegmentTreeNode,
  SegmentTreeNodeFactory,
  SegmentTreeNodeMerger,
  SegmentTreeQueryMerger,
  SegmentTreeLeafNodeUpdater,
  SegmentTreeRangeNodeUpdater,
  SegmentTreeRangeNodePropagator
} from './interfaces';

export interface segmentLazy extends BaseSegmentTreeNode {
  sum: number;
  max: number;
  rangeAddedValue: number;
}

export const nodeFactoryFnL: SegmentTreeNodeFactory<number, segmentLazy> = (val: number, l: number, r: number): segmentLazy => {
  let node: segmentLazy = {
    left: l,
    right: r,
    sum: 0,
    max: 0,
    rangeAddedValue: 0
  };

  if (r - l == 0) {
    node.sum = val;
    node.max = val;
  }

  return node;
};

export const singleLazyNodeUpdate = (Node: segmentLazy): number => {
  let t = Node.rangeAddedValue;
  if (t > 0) {
    Node.max += t;
    Node.sum += t * (Node.right - Node.left + 1);
    Node.rangeAddedValue = 0;
  }
  return t;
};

/**@TODO use a single node updater or improve propagator...call nodeSegLazyRangeUpdater  */
export const nodeMergerFnL: SegmentTreeNodeMerger<segmentLazy> = (
  parent: segmentLazy,
  leftNode: segmentLazy,
  rightNode: segmentLazy
): segmentLazy => {
  singleLazyNodeUpdate(leftNode);
  singleLazyNodeUpdate(rightNode);

  parent.max = Math.max(leftNode.max, rightNode.max);
  parent.sum = leftNode.sum + rightNode.sum;

  return parent;
};

/**have to lazily update childrens */
export const nodeSegLazyRangeUpdater: SegmentTreeRangeNodeUpdater<number, segmentLazy> = (
  t: number,
  node: segmentLazy,
  leftChild?: segmentLazy,
  rightChild?: segmentLazy
): void => {
  if (node.rangeAddedValue > 0) {
    t += node.rangeAddedValue;
    node.rangeAddedValue = 0;
  }
  node.max += t;
  node.sum += t * (node.right - node.left + 1);
  if (leftChild && rightChild) {
    leftChild.rangeAddedValue += t;
    rightChild.rangeAddedValue += t;
  }
};

export const lazyValuePropagator: SegmentTreeRangeNodePropagator<segmentLazy> = (
  node: segmentLazy,
  leftChild: segmentLazy,
  rightChild: segmentLazy
): void => {
  if (node.rangeAddedValue > 0) {
    let t = node.rangeAddedValue;
    node.max += t;
    node.sum += t * (node.right - node.left + 1);
    leftChild.rangeAddedValue += t;
    rightChild.rangeAddedValue += t;
    node.rangeAddedValue = 0;
  }
};

export const nodeQueryMergerL: SegmentTreeQueryMerger<segmentLazy> = (
  leftNode: segmentLazy,
  rightNode: segmentLazy,
  segmentTree?: Array<segmentLazy>
): segmentLazy => {
  if (leftNode.left == -1) return rightNode;
  if (rightNode.left == -1) return leftNode;

  let mergedNode: segmentLazy = {
    left: leftNode.left,
    right: rightNode.right,
    sum: 0,
    rangeAddedValue: 0,
    max: 0
  };
  /**propagation/update */
  singleLazyNodeUpdate(leftNode);
  singleLazyNodeUpdate(rightNode);
  mergedNode.sum = rightNode.sum + leftNode.sum;
  mergedNode.max = Math.max(leftNode.max, rightNode.max);

  return mergedNode;
};
