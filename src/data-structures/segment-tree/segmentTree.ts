import { BaseDataStructure } from '../../core/abstracts/BaseDataStructure';
import { IIterator } from '../../core/interfaces/IIterator';
import {
  BaseSegmentTreeNode,
  SegmentTreeNodeFactory,
  SegmentTreeNodeMerger,
  SegmentTreeQueryMerger,
  SegmentTreeLeafNodeUpdater,
  SegmentTreeRangeNodeUpdater,
  SegmentTreeRangeNodePropagator
} from './interfaces';
import { SegmentTreeIterator } from './iterator';

/**
 * @internal
 * Inserts a node into the segment tree array
 */
const insertNode = <T, U extends BaseSegmentTreeNode>(
  segTreeArray: Array<U>,
  originArray: Array<T>,
  i: number,
  left: number,
  right: number,
  segmentNodeFactory: SegmentTreeNodeFactory<T, U>
): number => {
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
};

/**
 * @internal
 * Builds a segment tree iteratively
 */
const buildSegTreeIterative = <T, U extends BaseSegmentTreeNode>(
  sourceArray: Array<T>,
  segmentNodeFactory: SegmentTreeNodeFactory<T, U>,
  segmentNodeMerger: SegmentTreeNodeMerger<U>
): Array<U> => {
  let n: number = sourceArray.length;

  const SEG_TREE_ARRAY: Array<U> = new Array(2 * n);
  for (let i = 0; i < n; i++) {
    SEG_TREE_ARRAY[n + i] = segmentNodeFactory(sourceArray[i], i, i);
  }
  for (let i = n - 1; i > 0; i--) {
    let l = i << 1;
    let r = (i << 1) | 1;
    let left = SEG_TREE_ARRAY[l].left;
    let right = SEG_TREE_ARRAY[r].right;
    SEG_TREE_ARRAY[i] = segmentNodeFactory(sourceArray[i], left, right);
    segmentNodeMerger(SEG_TREE_ARRAY[i], SEG_TREE_ARRAY[l], SEG_TREE_ARRAY[r]);
  }
  return SEG_TREE_ARRAY;
};

/**
 * @internal
 * Builds a segment tree recursively
 */
const buildSegmentTree = <T, U extends BaseSegmentTreeNode>(
  sourceArray: Array<T>,
  segmentNodeFactory: SegmentTreeNodeFactory<T, U>,
  segmentNodeMerger: SegmentTreeNodeMerger<U>
): Array<U> => {
  let l: number = sourceArray.length;
  if (l === 0) return [];

  let n: number = Math.ceil(Math.log2(l));
  let L: number = Math.pow(2, n + 1);
  const SEG_TREE_ARRAY: Array<U> = new Array(L);
  /**fill with baseSegmentTreeEmptyNodes */
  for (let i = 0; i < L; i++) SEG_TREE_ARRAY[i] = <U>{ left: -1, right: -1 };
  insertNode(SEG_TREE_ARRAY, sourceArray, 1, 0, l - 1, segmentNodeFactory);

  let j: number = L - 1;

  while (SEG_TREE_ARRAY[j].left == -1 || SEG_TREE_ARRAY[j].right >= l) {
    j--;
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
};

/**
 * @internal
 * Performs an iterative range query on the segment tree
 */
const iterativeQueryRange = <U extends BaseSegmentTreeNode>(
  segmentTree: Array<U>,
  l: number,
  r: number,
  queryMerger: SegmentTreeQueryMerger<U>
): U => {
  if (segmentTree.length === 0) return <U>{ left: -1, right: -1 };

  let n = segmentTree.length / 2;
  let left = l;
  let right = r;
  right++; //as this algorithm queries [left,right) so to be consistent with the above one right++ is needed
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

  let answer = queryMerger(resLeft, resRight);

  // Handle case when both resLeft and resRight are empty
  if (answer.left === -1 && answer.right === -1) {
    // If we're querying a single element, return that element
    if (l === r) {
      return segmentTree[n + l];
    }

    // For multi-element range, we need to accumulate all elements in the range
    // Start with the first element
    let result = segmentTree[n + l];
    // Then accumulate the rest
    for (let i = l + 1; i <= r; i++) {
      // Create a copy of the result to avoid modifying the original
      let tempResult = JSON.parse(JSON.stringify(result));
      result = queryMerger(tempResult, segmentTree[n + i]);
    }
    return result;
  }

  answer.left = l;
  answer.right = r;

  return answer;
};

/**
 * @internal
 * Performs a recursive range query on the segment tree
 */
const queryRange = <U extends BaseSegmentTreeNode>(
  segmentTree: Array<U>,
  nodeIndex: number,
  left: number,
  right: number,
  queryMerger: SegmentTreeQueryMerger<U>
): U => {
  let Node: U = segmentTree[nodeIndex];
  if (!Node) return <U>{ left: -1, right: -1 };
  if (Node.left > right || Node.right < left) return <U>{ left: -1, right: -1 };
  if (Node.left >= left && Node.right <= right) return Node;

  let leftBranch = queryRange(segmentTree, 2 * nodeIndex, left, right, queryMerger);
  let rightBranch = queryRange(segmentTree, 2 * nodeIndex + 1, left, right, queryMerger);
  return queryMerger(leftBranch, rightBranch);
};

/**
 * @internal
 * Updates a leaf node in the segment tree
 */
const updateLeafNode = <T, U extends BaseSegmentTreeNode>(
  segmentTree: Array<U>,
  sourceVal: T,
  updateIndex: number,
  segmentNodeLeafUpdater: (t: T, leafNode: U) => void,
  segmentNodeMerger: SegmentTreeNodeMerger<U>
): void => {
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

/**
 * @internal
 * Updates a leaf node iteratively
 */
const updateLeafNodeIterative = <T, U extends BaseSegmentTreeNode>(
  segmentTree: Array<U>,
  sourceVal: T,
  updateIndex: number,
  segmentNodeLeafUpdater: SegmentTreeLeafNodeUpdater<T, U>,
  segmentNodeMerger: SegmentTreeNodeMerger<U>
): void => {
  if (segmentTree.length === 0) return;

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

/**
 * @internal
 * Updates a range with lazy propagation
 */
const updateRangeLazy = <T, U extends BaseSegmentTreeNode>(
  segmentTree: Array<U>,
  sourceVal: T,
  nodeIndex: number,
  left: number,
  right: number,
  segmentNodeUpdater: SegmentTreeRangeNodeUpdater<T, U>,
  segmentNodeMerger: SegmentTreeNodeMerger<U>,
  segmentNodePropagator: SegmentTreeRangeNodePropagator<U>
): void => {
  let Node: U = segmentTree[nodeIndex];
  if (!Node) return;
  let leftChild: U = segmentTree[2 * nodeIndex];
  let rightChild: U = segmentTree[2 * nodeIndex + 1];
  if (Node.left != Node.right) segmentNodePropagator(Node, leftChild, rightChild);

  if (Node.left > right || Node.right < left) return; //completely out of range

  if (Node.left >= left && Node.right <= right) {
    //fully inside range
    if (Node.left == Node.right) return segmentNodeUpdater(sourceVal, Node);
    return segmentNodeUpdater(sourceVal, Node, leftChild, rightChild);
  }

  //partial range overlap
  updateRangeLazy(
    segmentTree,
    sourceVal,
    2 * nodeIndex,
    left,
    right,
    segmentNodeUpdater,
    segmentNodeMerger,
    segmentNodePropagator
  );
  updateRangeLazy(
    segmentTree,
    sourceVal,
    2 * nodeIndex + 1,
    left,
    right,
    segmentNodeUpdater,
    segmentNodeMerger,
    segmentNodePropagator
  );
  segmentNodeMerger(Node, leftChild, rightChild);
};

/**
 * @internal
 * Propagates changes down the tree
 */
const propagateDown = <U extends BaseSegmentTreeNode>(
  segmentTree: Array<U>,
  lazyNodesUpdater: SegmentTreeNodeMerger<U>
): void => {
  for (let i = 0; i < segmentTree.length; i++) {
    let node = segmentTree[i];
    if (node && node.left < node.right) {
      lazyNodesUpdater(node, segmentTree[i * 2], segmentTree[i * 2 + 1]);
    }
  }
};

/**
 * Segment tree implementation for efficient range queries and updates
 * @template T The type of elements in the source array
 * @template U The type of nodes in the segment tree
 */
export class SegmentTree<T, U extends BaseSegmentTreeNode> extends BaseDataStructure<T> {
  private _SEG_TREE: Array<U>;

  /**
   * Creates a new SegmentTree
   * @param sourceArray The source array to build the tree from
   * @param segmentNodeFactory Factory function for creating nodes
   * @param segmentNodeMerger Function for merging nodes
   * @param segmentNodeQuery Function for merging query results
   * @param segmentLeaftUpdater Function for updating leaf nodes
   */
  constructor(
    sourceArray: Array<T>,
    protected segmentNodeFactory: SegmentTreeNodeFactory<T, U>,
    protected segmentNodeMerger: SegmentTreeNodeMerger<U>,
    protected segmentNodeQuery: SegmentTreeQueryMerger<U>,
    protected segmentLeaftUpdater: SegmentTreeLeafNodeUpdater<T, U>
  ) {
    super();
    this._SEG_TREE = buildSegTreeIterative(sourceArray, segmentNodeFactory, segmentNodeMerger);
    this._size = sourceArray.length;
  }

  /**
   * Returns the number of elements in the segment tree
   * @returns The number of elements
   * @complexity O(1)
   */
  get size(): number {
    return this._size;
  }

  /**
   * Performs a range query on the segment tree
   * @param left The left boundary of the query range
   * @param right The right boundary of the query range
   * @returns The result of the range query
   * @complexity O(log n)
   */
  query(left: number, right: number): U {
    return iterativeQueryRange(this._SEG_TREE, left, right, this.segmentNodeQuery);
  }

  /**
   * Updates a leaf node in the segment tree
   * @param value The new value
   * @param position The position to update
   * @complexity O(log n)
   */
  updateLeaf(value: T, position: number): void {
    updateLeafNodeIterative(
      this._SEG_TREE,
      value,
      position,
      this.segmentLeaftUpdater,
      this.segmentNodeMerger
    );
  }

  /**
   * Clears all elements from the segment tree
   * @complexity O(1)
   */
  clear(): void {
    // For segment trees, clearing doesn't make much sense as they represent a fixed array
    // This is a no-op to satisfy the interface
  }

  /**
   * Creates an iterator for this data structure
   * @returns An iterator over the tree nodes
   */
  iterator(): IIterator<T> {
    return new SegmentTreeIterator<T>(this._SEG_TREE[1]);
  }

  /**
   * Checks if the data structure contains a specific element
   * @param element The element to search for
   * @returns Always false for segment trees (not applicable)
   * @complexity O(1)
   */
  contains(element: T): boolean {
    // Segment trees don't support direct containment checks
    return false;
  }

  /**
   * Converts the data structure to an array
   * @returns An array representation of the tree nodes
   * @complexity O(n)
   */
  toArray(): T[] {
    // Extract the original values from the leaf nodes
    const result: T[] = [];
    const n = this._SEG_TREE.length / 2;
    for (let i = 0; i < this._size; i++) {
      const node = this._SEG_TREE[n + i];
      // Try to extract the value from the node
      if (node && 'value' in node) {
        result.push((node as any).value);
      } else if (node) {
        // If no value property, try to use the node itself if it matches T
        result.push(node as unknown as T);
      }
    }
    return result;
  }

  /**
   * Gets the internal tree array
   * @returns The segment tree array
   */
  getTree(): Array<U> {
    return this._SEG_TREE;
  }
}

// Export internal functions for testing
export { buildSegmentTree, buildSegTreeIterative, queryRange, iterativeQueryRange, updateLeafNode, updateLeafNodeIterative, updateRangeLazy };
