import {
    baseSegmentTreeNode,
    segmentTreeRangeNodePropagator,
    segmentTreeNodeFactory,
    segmentTreeNodeMerger,
    segmentTreeQueryMerger,
    segmentTreeLeafNodeUpdater,
    segmentTreeRangeNodeUpdater
  } from './interfaces'

  /**
   * @title Segment Tree
   * @notice A segment tree is a tree data structure that allows for efficient querying of range-based queries.
   * @dev This implementation is a generic segment tree that can be extended to support various operations.
   * @see https://codeforces.com/blog/entry/18051
   * @see https://www.geeksforgeeks.org/iterative-segment-tree-range-minimum-query/
   */

  /**
   * @notice Builds a segment tree from a source array in an iterative manner.
   * @param sourceArray The source array to build the segment tree from.
   * @param segmentNodeFactory A function that creates a new segment tree node.
   * @param segmentNodeMerger A function that merges two segment tree nodes.
   * @returns The segment tree array.
   */
  export const buildSegTreeIterative = <T, U extends baseSegmentTreeNode>(
    sourceArray: Array<T>,
    segmentNodeFactory: segmentTreeNodeFactory<T, U>,
    segmentNodeMerger: segmentTreeNodeMerger<U>
  ): Array<U> => {
    const n: number = sourceArray.length
    const segTreeArray: Array<U> = new Array(2 * n)

    // Initialize leaf nodes
    for (let i = 0; i < n; i++) {
      segTreeArray[n + i] = segmentNodeFactory(sourceArray[i], i, i)
    }

    // Build the tree by merging nodes from bottom to top
    for (let i = n - 1; i > 0; i--) {
      const leftChildIndex = i << 1
      const rightChildIndex = (i << 1) | 1
      const left = segTreeArray[leftChildIndex].left
      const right = segTreeArray[rightChildIndex].right
      segTreeArray[i] = segmentNodeFactory(sourceArray[i], left, right)
      segmentNodeMerger(segTreeArray[i], segTreeArray[leftChildIndex], segTreeArray[rightChildIndex])
    }

    return segTreeArray
  }

  /**
   * @notice Performs a range query on the segment tree in an iterative manner.
   * @param segmentTree The segment tree to query.
   * @param l The left boundary of the query range.
   * @param r The right boundary of the query range.
   * @param queryMerger A function that merges the results of the query.
   * @returns The result of the query.
   */
  export const iterativeQueryRange = <U extends baseSegmentTreeNode>(
    segmentTree: Array<U>,
    l: number,
    r: number,
    queryMerger: segmentTreeQueryMerger<U>
  ): U => {
    const n = segmentTree.length / 2
    let left = l
    let right = r
    right++ // query is [left, right), so increment right to be inclusive

    let resLeft = <U>{ left: -1, right: -1 }
    let resRight = <U>{ left: -1, right: -1 }

    for (left += n, right += n; left < right; left >>= 1, right >>= 1) {
      if (left & 1) {
        resLeft = queryMerger(resLeft, segmentTree[left++])
      }
      if (right & 1) {
        resRight = queryMerger(segmentTree[--right], resRight)
      }
    }

    const answer = JSON.parse(JSON.stringify(queryMerger(resLeft, resRight)))
    answer.left = l
    answer.right = r

    return answer
  }

  /**
   * @notice Performs a range query on the segment tree in a recursive manner.
   * @param segmentTree The segment tree to query.
   * @param nodeIndex The index of the current node in the segment tree.
   * @param left The left boundary of the query range.
   * @param right The right boundary of the query range.
   * @param queryMerger A function that merges the results of the query.
   * @returns The result of the query.
   */
  export const queryRange = <U extends baseSegmentTreeNode>(
    segmentTree: Array<U>,
    nodeIndex: number,
    left: number,
    right: number,
    queryMerger: segmentTreeQueryMerger<U>
  ): U => {
    const node: U = segmentTree[nodeIndex]
    if (!node) return <U>{ left: -1, right: -1 }
    if (node.left > right || node.right < left) return <U>{ left: -1, right: -1 } // Node is completely outside the query range
    if (node.left >= left && node.right <= right) return node // Node is completely inside the query range

    const leftBranch = queryRange(segmentTree, 2 * nodeIndex, left, right, queryMerger)
    const rightBranch = queryRange(segmentTree, 2 * nodeIndex + 1, left, right, queryMerger)

    return queryMerger(leftBranch, rightBranch)
  }

  /**
   * @notice Updates a leaf node in the segment tree in an iterative manner.
   * @param segmentTree The segment tree to update.
   * @param sourceVal The new value for the leaf node.
   * @param updateIndex The index of the leaf node to update.
   * @param segmentNodeLeafUpdater A function that updates the leaf node.
   * @param segmentNodeMerger A function that merges the updated nodes.
   */
  export const updateLeafNodeIterative = <T, U extends baseSegmentTreeNode>(
    segmentTree: Array<U>,
    sourceVal: T,
    updateIndex: number,
    segmentNodeLeafUpdater: segmentTreeLeafNodeUpdater<T, U>,
    segmentNodeMerger: segmentTreeNodeMerger<U>
  ): void => {
    let index: number = segmentTree.length / 2 + updateIndex

    segmentNodeLeafUpdater(sourceVal, segmentTree[index])

    while (index > 1) {
      const aux = index
      index >>= 1
      const r = aux & 1

      segmentNodeMerger(segmentTree[index], segmentTree[aux - r], segmentTree[aux + (r ^ 1)])
    }
  }

  /**
   * @notice Updates a range of nodes in the segment tree with lazy propagation.
   * @param segmentTree The segment tree to update.
   * @param sourceVal The new value for the range.
   * @param nodeIndex The index of the current node.
   * @param left The left boundary of the update range.
   * @param right The right boundary of the update range.
   * @param segmentNodeUpdater A function that updates the nodes in the range.
   * @param segmentNodeMerger A function that merges the updated nodes.
   * @param segmentNodePropagator A function that propagates the lazy values.
   */
  export const updateRangeLazy = <T, U extends baseSegmentTreeNode>(
    segmentTree: Array<U>,
    sourceVal: T,
    nodeIndex: number,
    left: number,
    right: number,
    segmentNodeUpdater: segmentTreeRangeNodeUpdater<T, U>,
    segmentNodeMerger: segmentTreeNodeMerger<U>,
    segmentNodePropagator: segmentTreeRangeNodePropagator<U>
  ): void => {
    const node: U = segmentTree[nodeIndex]
    if (!node) return

    const leftChild: U = segmentTree[2 * nodeIndex]
    const rightChild: U = segmentTree[2 * nodeIndex + 1]
    if (node.left !== node.right) segmentNodePropagator(node, leftChild, rightChild)

    if (node.left > right || node.right < left) return // Completely out of range

    if (node.left >= left && node.right <= right) { // Fully inside range
      if (node.left === node.right) return segmentNodeUpdater(sourceVal, node)
      return segmentNodeUpdater(sourceVal, node, leftChild, rightChild)
    }

    // Partial range overlap
    updateRangeLazy(
      segmentTree,
      sourceVal,
      2 * nodeIndex,
      left,
      right,
      segmentNodeUpdater,
      segmentNodeMerger,
      segmentNodePropagator
    )
    updateRangeLazy(
      segmentTree,
      sourceVal,
      2 * nodeIndex + 1,
      left,
      right,
      segmentNodeUpdater,
      segmentNodeMerger,
      segmentNodePropagator
    )

    segmentNodeMerger(node, leftChild, rightChild)
  }

  /**
   * @notice Propagates lazy values down the segment tree.
   * @param segmentTree The segment tree to propagate.
   * @param lazyNodesUpdater A function that updates the nodes with lazy values.
   */
  export const propagateDown = <U extends baseSegmentTreeNode>(
    segmentTree: Array<U>,
    lazyNodesUpdater: segmentTreeNodeMerger<U>
  ): void => {
    for (let i = 0; i < segmentTree.length; i++) {
      const node = segmentTree[i]
      if (node && node.left < node.right) {
        lazyNodesUpdater(node, segmentTree[i * 2], segmentTree[i * 2 + 1])
      }
    }
  }

  /**
   * @title SegmentTree
   * @notice A generic segment tree implementation.
   */
  export class SegmentTree<T, U extends baseSegmentTreeNode> {
    private _SEG_TREE: Array<U>

    constructor(
      sourceArray: Array<T>,
      protected segmentNodeFactory: segmentTreeNodeFactory<T, U>,
      protected segmentNodeMerger: segmentTreeNodeMerger<U>,
      protected segmentNodeQuery: segmentTreeQueryMerger<U>,
      protected segmentLeaftUpdater: segmentTreeLeafNodeUpdater<T, U>
    ) {
      this._SEG_TREE = buildSegTreeIterative(sourceArray, segmentNodeFactory, segmentNodeMerger)
    }

    /**
     * @notice Performs a range query on the segment tree.
     * @param left The left boundary of the query range.
     * @param right The right boundary of the query range.
     * @returns The result of the query.
     */
    query(left: number, right: number): U {
      return iterativeQueryRange(this._SEG_TREE, left, right, this.segmentNodeQuery)
    }

    /**
     * @notice Updates a leaf node in the segment tree.
     * @param value The new value for the leaf node.
     * @param position The index of the leaf node to update.
     */
    updateLeaf(value: T, position: number): void {
      updateLeafNodeIterative(
        this._SEG_TREE,
        value,
        position,
        this.segmentLeaftUpdater,
        this.segmentNodeMerger
      )
    }

    /**
     * @notice Returns the segment tree array.
     * @returns The segment tree array.
     */
    getTree() {
      return this._SEG_TREE
    }
  }
