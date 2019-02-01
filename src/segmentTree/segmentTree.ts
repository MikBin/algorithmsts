import { baseSegmentTreeNode, segmentTreeNodeFactory, segmentTreeNodeMerger, segmentTreeQueryMerger, segmentTreeLeafNodeUpdater } from "./interfaces";

/**
 * as  upper tight c++ implementation: https://codeforces.com/blog/entry/18051
 * 
 * ITERATIVE VERSION: https://www.geeksforgeeks.org/iterative-segment-tree-range-minimum-query/
 * https://www.quora.com/What-are-the-advantage-of-binary-indexed-tree-BIT-or-fenwick-tree-over-segment-tree
 * make it faster with the above link using non recoursive queries
 */
export const insertNode = <T, U extends baseSegmentTreeNode>
  (segTreeArray: Array<U>,
    originArray: Array<T>,
    i: number,
    left: number,
    right: number,
    segmentNodeFactory: segmentTreeNodeFactory<T, U>): number => {

  const LR_DIFF: number = right - left;
  segTreeArray[i] = segmentNodeFactory(originArray[left], left, right);
  if (LR_DIFF === 0) return i;

  let leftIdx = 2 * i;
  let rightIdx = 2 * i + 1;
  let leftLeft = left;
  let leftRight = Math.floor(LR_DIFF / 2) + left;
  let rightLeft = leftRight + 1;
  let rightRight = right;

  insertNode(segTreeArray, originArray, leftIdx, leftLeft, leftRight, segmentNodeFactory);
  insertNode(segTreeArray, originArray, rightIdx, rightLeft, rightRight, segmentNodeFactory);

  return i;
}

export const buildSegTreeIterative = <T, U extends baseSegmentTreeNode>(sourceArray: Array<T>,
  segmentNodeFactory: segmentTreeNodeFactory<T, U>,
  segmentNodeMerger: segmentTreeNodeMerger<U>): Array<U> => {
  let n: number = sourceArray.length;
  /** NB n have to be power of 2 */
  const SEG_TREE_ARRAY: Array<U> = new Array(2 * n);
  for (let i = 0; i < n; i++) {
    SEG_TREE_ARRAY[n + i] = segmentNodeFactory(sourceArray[i], i, i);
  }
  for (let i = n - 1; i > 0; i--) {
    let l = i << 1;
    let r = i << 1 | 1;
    let left = SEG_TREE_ARRAY[l].left;
    let right = SEG_TREE_ARRAY[r].right;
    SEG_TREE_ARRAY[i] = segmentNodeFactory(sourceArray[i], left, right);
    segmentNodeMerger(SEG_TREE_ARRAY[i], SEG_TREE_ARRAY[l], SEG_TREE_ARRAY[r]);
  }
  return SEG_TREE_ARRAY;
};

export const buildSegmentTree = <T, U extends baseSegmentTreeNode>
  (sourceArray: Array<T>,
    segmentNodeFactory: segmentTreeNodeFactory<T, U>,
    segmentNodeMerger: segmentTreeNodeMerger<U>): Array<U> => {

  let l: number = sourceArray.length;
  let n: number = Math.ceil(Math.log2(l));
  let L: number = Math.pow(2, n + 1);
  const SEG_TREE_ARRAY: Array<U> = new Array(L);
  /**fill with baseSegmentTreeEmptyNodes */
  for (let i = 0; i < L; i++) SEG_TREE_ARRAY[i] = <U>{ left: -1, right: -1 };
  insertNode(SEG_TREE_ARRAY, sourceArray, 1, 0, l - 1, segmentNodeFactory);

  let j: number = L - 1;

  while (SEG_TREE_ARRAY[j].left == -1 || SEG_TREE_ARRAY[j].right >= l) {
    j--;
    console.log(`reducing to ${j}`);
  }
  j++;

  SEG_TREE_ARRAY.length = j;
  L = j;

  for (let i = L - 1; i > 0; i--) {
    let node = SEG_TREE_ARRAY[i];
    if (node.right - node.left !== 0) {
      let leftChild: U = SEG_TREE_ARRAY[i * 2];
      let rightChild: U = SEG_TREE_ARRAY[i * 2 + 1];
      segmentNodeMerger(node, leftChild, rightChild);
    }

  }

  return SEG_TREE_ARRAY;

}

export const iterativeQueryRange = <U extends baseSegmentTreeNode>
  (segmentTree: Array<U>,
    l: number,
    r: number,
    queryMerger: segmentTreeQueryMerger<U>): U => {
  let n = segmentTree.length / 2;
  let left = l;
  let right = r;
  right++; //as this algorithm queries [left,right) so to be consistent with the above one right++ is needed (doing right-- instead --right would get same result?)

  let resLeft = <U>{ left: -1, right: -1 };
  let resRight = <U>{ left: -1, right: -1 };

  for (left += n, right += n; left < right; left >>= 1, right >>= 1) {
    if (left & 1) {
      resLeft = queryMerger(resLeft, segmentTree[left++]);
    }
    if (right & 1) {
      resRight = queryMerger(segmentTree[--right], resRight);
    }
  }

  let answer = JSON.parse(JSON.stringify(queryMerger(resLeft, resRight)));
  answer.left = l;
  answer.right = r;

  return answer;
};

export const queryRange = <U extends baseSegmentTreeNode>
  (segmentTree: Array<U>,
    nodeIndex: number,
    left: number,
    right: number,
    queryMerger: segmentTreeQueryMerger<U>): U => {
  let Node: U = segmentTree[nodeIndex];
  if (!Node) return <U>{ left: -1, right: -1 };
  if (Node.left > right || Node.right < left) return <U>{ left: -1, right: -1 };
  if (Node.left >= left && Node.right <= right) return Node;

  let leftBranch = queryRange(segmentTree, 2 * nodeIndex, left, right, queryMerger);
  let rightBranch = queryRange(segmentTree, 2 * nodeIndex + 1, left, right, queryMerger);
  /**@TODO reteurn a full copy of the result --> cannot risk to return a piece of the tree and get it modified elsewere */
  return queryMerger(leftBranch, rightBranch);
};

export const updateLeafNode = <T, U extends baseSegmentTreeNode>
  (segmentTree: Array<U>,
    sourceVal: T,
    updateIndex: number,
    segmentNodeLeafUpdater: (t: T, leafNode: U) => void,
    segmentNodeMerger: segmentTreeNodeMerger<U>): void => {
  let index = 1;
  let Node = segmentTree[index];
  let left = Node.left;
  let right = Node.right;
  let aux = 0;
  while (right - left !== 0) {
    let mid: number = left + (right - left) / 2;
    if (updateIndex <= mid) {
      index *= 2;
      Node = segmentTree[index];
    } else {
      index = index * 2 + 1;
      Node = segmentTree[index];
    }
    left = Node.left;
    right = Node.right;
  }

  segmentNodeLeafUpdater(sourceVal, segmentTree[index]);

  let r = 0;
  while (index > 1) {
    aux = index;
    index >>= 1;
    r = aux & 1;

    segmentNodeMerger(segmentTree[index], segmentTree[aux - r], segmentTree[aux + (r ^ 1)]);

  }
};

export const updateLeafNodeIterative = <T, U extends baseSegmentTreeNode>
  (segmentTree: Array<U>,
    sourceVal: T,
    updateIndex: number,
    segmentNodeLeafUpdater: segmentTreeLeafNodeUpdater<T, U>,
    segmentNodeMerger: segmentTreeNodeMerger<U>): void => {
  let index: number = segmentTree.length / 2 + updateIndex;
  let aux: number = 0;

  segmentNodeLeafUpdater(sourceVal, segmentTree[index]);

  let r: number = 0;
  while (index > 1) {
    aux = index;
    index >>= 1;
    r = aux & 1;

    segmentNodeMerger(segmentTree[index], segmentTree[aux - r], segmentTree[aux + (r ^ 1)]);

  }
};
//export const updateRange =<U extends baseSegmentTreeNode>()=>{};
//@TODO https://codeforces.com/blog/entry/18051
//updateRAnge and lazyPropagation
//@TODO add outof bound query exception or just call within original array bounds
export class SegmentTree<T, U extends baseSegmentTreeNode> {
  private _SEG_TREE: Array<U>;
  //protected segmentNodeMerger:segmentTreeNodeMerger<U>;
  //protected segmentNodeFactory:segmentTreeNodeFactory<T,U>;
  constructor(
    sourceArray: Array<T>,
    protected segmentNodeFactory: segmentTreeNodeFactory<T, U>,
    protected segmentNodeMerger: segmentTreeNodeMerger<U>,
    protected segmentNodeQuery: segmentTreeQueryMerger<U>,
    protected segmentLeaftUpdater: segmentTreeLeafNodeUpdater<T, U>
  ) {
    this._SEG_TREE = buildSegTreeIterative(sourceArray, segmentNodeFactory, segmentNodeMerger);

  }
  query(left: number, right: number): U {
    return iterativeQueryRange(this._SEG_TREE, left, right, this.segmentNodeQuery);
  }
  updateLeaf(value: T, position: number): void {
    updateLeafNodeIterative(this._SEG_TREE, value, position, this.segmentLeaftUpdater, this.segmentNodeMerger);
  }
  getTree() {
    return this._SEG_TREE;
  }
}

export interface finSegmentNode extends baseSegmentTreeNode {
  min: number;
  max: number;
  avg: number;
  sigma: number;
  minIdx: number;
  maxIdx: number;
};

export const finNodeFactory = (val: (string | number)[], l: number, r: number): finSegmentNode => {
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

export const finNodeMerger = (parent: finSegmentNode, leftChild: finSegmentNode, rightChild: finSegmentNode): finSegmentNode => {
  parent.max = Math.max(leftChild.max, rightChild.max);
  parent.min = Math.min(leftChild.min, rightChild.min);
  parent.max == leftChild.max ? parent.maxIdx = leftChild.maxIdx : parent.maxIdx = rightChild.maxIdx;
  parent.min == leftChild.min ? parent.minIdx = leftChild.minIdx : parent.minIdx = rightChild.minIdx;
  let nleft = leftChild.right - leftChild.left + 1;
  let nright = rightChild.right - rightChild.left + 1;
  let nm = nleft + nright;
  let combAvg = parent.avg = nleft * leftChild.avg / nm + nright * rightChild.avg / nm;
  let diffLeftSqaure = Math.pow(leftChild.avg - combAvg, 2);
  let diffRightSqaure = Math.pow(rightChild.avg - combAvg, 2);
  parent.sigma = nleft * (leftChild.sigma + diffLeftSqaure) / nm + nright * (rightChild.sigma + diffRightSqaure) / nm;
  return parent;
};

export const finNodeLeafUpdater = (t: (string | number)[], leaf: finSegmentNode): void => {
  leaf.max = <number>t[2];
  leaf.min = <number>t[3];
  leaf.avg = <number>t[4];
}

export const finNodeQuery = (leftChild: finSegmentNode, rightChild: finSegmentNode) => {
  //console.log("finquery merger left: ", leftChild.left, leftChild.right, leftChild.avg, leftChild.sigma);
  //console.log("finquery merger right: ", rightChild.left, rightChild.right, rightChild.avg, rightChild.sigma);
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

  [mergedNode.minIdx, mergedNode.min] = leftChild.min < rightChild.min ? [leftChild.minIdx, leftChild.min] : [rightChild.minIdx, rightChild.min];
  [mergedNode.maxIdx, mergedNode.max] = leftChild.max > rightChild.max ? [leftChild.maxIdx, leftChild.max] : [rightChild.maxIdx, rightChild.max];

  let nleft = leftChild.right - leftChild.left + 1;
  let nright = rightChild.right - rightChild.left + 1;
  let nm = nleft + nright;
  let combAvg = mergedNode.avg = nleft * leftChild.avg / nm + nright * rightChild.avg / nm;
  let diffLeftSqaure = Math.pow(leftChild.avg - combAvg, 2);
  let diffRightSqaure = Math.pow(rightChild.avg - combAvg, 2);
  mergedNode.sigma = nleft * (leftChild.sigma + diffLeftSqaure) / nm + nright * (rightChild.sigma + diffRightSqaure) / nm;

  //console.log("querying fin: ", mergedNode.left, mergedNode.right, mergedNode.sigma, mergedNode.avg);
  //console.log("-----------------------------------------------")
  return mergedNode;
};
