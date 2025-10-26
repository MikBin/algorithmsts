import {
  BaseSegmentTreeNode,
  SegmentTreeNodeFactory,
  SegmentTreeNodeMerger,
  SegmentTreeQueryMerger,
  SegmentTreeLeafNodeUpdater
} from './interfaces';

/**@TODO export in sample folder */
export interface finSegmentNode extends BaseSegmentTreeNode {
  min: number;
  max: number;
  avg: number;
  sigma: number;
  minIdx: number;
  maxIdx: number;
}

export const finNodeFactory: SegmentTreeNodeFactory<(string | number)[], finSegmentNode> = (val: (string | number)[], l: number, r: number): finSegmentNode => {
  let node: finSegmentNode = {
    left: l,
    right: r,
    min: Number.MAX_VALUE,
    max: -Number.MAX_VALUE,
    avg: 0,
    sigma: 0,
    minIdx: -1,
    maxIdx: -1
  };

  if (r - l == 0) {
    node.min = <number>val[3];
    node.max = <number>val[2];
    node.maxIdx = l;
    node.minIdx = l;
    node.avg = <number>val[4];
  }

  return node;
};

export const finNodeMerger: SegmentTreeNodeMerger<finSegmentNode> = (
  parent: finSegmentNode,
  leftChild: finSegmentNode,
  rightChild: finSegmentNode
): finSegmentNode => {
  parent.max = Math.max(leftChild.max, rightChild.max);
  parent.min = Math.min(leftChild.min, rightChild.min);
  parent.max == leftChild.max
    ? (parent.maxIdx = leftChild.maxIdx)
    : (parent.maxIdx = rightChild.maxIdx);
  parent.min == leftChild.min
    ? (parent.minIdx = leftChild.minIdx)
    : (parent.minIdx = rightChild.minIdx);
  let nleft = leftChild.right - leftChild.left + 1;
  let nright = rightChild.right - rightChild.left + 1;
  let nm = nleft + nright;
  let combAvg = (parent.avg = (nleft * leftChild.avg) / nm + (nright * rightChild.avg) / nm);
  let diffLeftSqaure = Math.pow(leftChild.avg - combAvg, 2);
  let diffRightSqaure = Math.pow(rightChild.avg - combAvg, 2);
  parent.sigma =
    (nleft * (leftChild.sigma + diffLeftSqaure)) / nm +
    (nright * (rightChild.sigma + diffRightSqaure)) / nm;
  return parent;
};

export const finNodeLeafUpdater: SegmentTreeLeafNodeUpdater<(string | number)[], finSegmentNode> = (t: (string | number)[], leaf: finSegmentNode): void => {
  leaf.max = <number>t[2];
  leaf.min = <number>t[3];
  leaf.avg = <number>t[4];
};

export const finNodeQuery: SegmentTreeQueryMerger<finSegmentNode> = (leftChild: finSegmentNode, rightChild: finSegmentNode) => {
  if (leftChild.left == -1) return rightChild;
  if (rightChild.left == -1) return leftChild;
  let mergedNode: finSegmentNode = {
    left: leftChild.left,
    right: rightChild.right,
    min: Number.MAX_VALUE,
    max: -Number.MAX_VALUE,
    minIdx: -1,
    sigma: 0,
    avg: 0,
    maxIdx: -1
  };
  ;[mergedNode.minIdx, mergedNode.min] =
    leftChild.min < rightChild.min
      ? [leftChild.minIdx, leftChild.min]
      : [rightChild.minIdx, rightChild.min];
  ;[mergedNode.maxIdx, mergedNode.max] =
    leftChild.max > rightChild.max
      ? [leftChild.maxIdx, leftChild.max]
      : [rightChild.maxIdx, rightChild.max];

  let nleft = leftChild.right - leftChild.left + 1;
  let nright = rightChild.right - rightChild.left + 1;
  let nm = nleft + nright;
  let combAvg = (mergedNode.avg = (nleft * leftChild.avg) / nm + (nright * rightChild.avg) / nm);
  let diffLeftSqaure = Math.pow(leftChild.avg - combAvg, 2);
  let diffRightSqaure = Math.pow(rightChild.avg - combAvg, 2);
  mergedNode.sigma =
    (nleft * (leftChild.sigma + diffLeftSqaure)) / nm +
    (nright * (rightChild.sigma + diffRightSqaure)) / nm;

  return mergedNode;
};
