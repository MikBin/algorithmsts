import { baseSegmentTreeNode, segmentTreeNodeFactory, segmentTreeNodeMerger, segmentTreeQueryMerger, segmentTreeLeafNodeUpdater } from "./interfaces";

/**
 * as  uper tight c++ implementation: https://codeforces.com/blog/entry/18051
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
  right++; //as this algorithm queries [left,right) so to be consistent with the above one right++ is needed
  let res = <U>{ left: -1, right: -1 };

  for (left += n, right += n; left < right; left >>= 1, right >>= 1) {
    if (left & 1) {
      res = queryMerger(segmentTree[left++], res);
    }
    if (right & 1) {
      res = queryMerger(segmentTree[--right], res);
    }
  }
  res.left = l;
  res.right = r;
  return res;
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
    //console.log("aux index: ", aux, index, r, r ^ 1);
    //console.log("to merge: ", segmentTree[index], segmentTree[aux - r], segmentTree[aux + (r ^ 1)]);
    segmentNodeMerger(segmentTree[index], segmentTree[aux - r], segmentTree[aux + (r ^ 1)]);
    // console.log("after merge: ", segmentTree[index]);
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
    //console.log("to merge: ", segmentTree[index], segmentTree[aux - aux & 1], segmentTree[aux]);
    segmentNodeMerger(segmentTree[index], segmentTree[aux - r], segmentTree[aux + (r ^ 1)]);
    //console.log("after merge: ", segmentTree[index]);
  }
};
//export const updateRange =<U extends baseSegmentTreeNode>()=>{};
//@TODO https://codeforces.com/blog/entry/18051
