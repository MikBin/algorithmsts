import {
    baseSegmentTreeNode,
    segmentTreeRangeNodePropagator,
    segmentTreeNodeFactory,
    segmentTreeNodeMerger,
    segmentTreeQueryMerger,
    segmentTreeRangeNodeUpdater
  } from './interfaces'

  /**
   * @title LazyMaxAndSumSegmentTree
   * @notice Represents a node in a segment tree with lazy propagation for range updates.
   * @dev This interface extends the base segment tree node with properties for sum, max, and a lazy value for range additions.
   */
  export interface segmentLazy extends baseSegmentTreeNode {
    sum: number // The sum of the elements in the range represented by this node
    max: number // The maximum element in the range represented by this node
    rangeAddedValue: number // The lazy value to be propagated to children nodes
  }

  /**
   * @notice A factory function to create a new `segmentLazy` node.
   * @param val The initial value for the node.
   * @param l The left boundary of the range.
   * @param r The right boundary of the range.
   * @returns A new `segmentLazy` node.
   */
  export const nodeFactoryFnL: segmentTreeNodeFactory<number, segmentLazy> = (val: number, l: number, r: number): segmentLazy => {
    const node: segmentLazy = {
      left: l,
      right: r,
      sum: 0,
      max: 0,
      rangeAddedValue: 0
    }

    if (r - l === 0) {
      node.sum = val
      node.max = val
    }

    return node
  }

  /**
   * @notice Updates a single node by applying its lazy value.
   * @param node The node to update.
   * @returns The lazy value that was applied.
   */
  export const singleLazyNodeUpdate = (node: segmentLazy): number => {
    const lazyValue = node.rangeAddedValue
    if (lazyValue > 0) {
      node.max += lazyValue
      node.sum += lazyValue * (node.right - node.left + 1)
      node.rangeAddedValue = 0
    }
    return lazyValue
  }

  /**
   * @notice Merges two child nodes into a parent node.
   * @param parent The parent node to merge into.
   * @param leftNode The left child node.
   * @param rightNode The right child node.
   * @returns The merged parent node.
   */
  export const nodeMergerFnL: segmentTreeNodeMerger<segmentLazy> = (
    parent: segmentLazy,
    leftNode: segmentLazy,
    rightNode: segmentLazy
  ): segmentLazy => {
    singleLazyNodeUpdate(leftNode)
    singleLazyNodeUpdate(rightNode)

    parent.max = Math.max(leftNode.max, rightNode.max)
    parent.sum = leftNode.sum + rightNode.sum

    return parent
  }

  /**
   * @notice Updates a range of nodes in the segment tree with a given value.
   * @param t The value to update the range with.
   * @param node The current node to update.
   * @param leftChild The left child of the current node.
   * @param rightChild The right child of the current node.
   */
  export const nodeSegLazyRangeUpdater: segmentTreeRangeNodeUpdater<number, segmentLazy> = (
    t: number,
    node: segmentLazy,
    leftChild?: segmentLazy,
    rightChild?: segmentLazy
  ): void => {
    if (node.rangeAddedValue > 0) {
      t += node.rangeAddedValue
      node.rangeAddedValue = 0
    }
    node.max += t
    node.sum += t * (node.right - node.left + 1)
    if (leftChild && rightChild) {
      leftChild.rangeAddedValue += t
      rightChild.rangeAddedValue += t
    }
  }

  /**
   * @notice Propagates the lazy value of a node to its children.
   * @param node The node to propagate from.
   * @param leftChild The left child to propagate to.
   * @param rightChild The right child to propagate to.
   */
  export const lazyValuePropagator: segmentTreeRangeNodePropagator<segmentLazy> = (
    node: segmentLazy,
    leftChild: segmentLazy,
    rightChild: segmentLazy
  ): void => {
    if (node.rangeAddedValue > 0) {
      const lazyValue = node.rangeAddedValue
      node.max += lazyValue
      node.sum += lazyValue * (node.right - node.left + 1)
      leftChild.rangeAddedValue += lazyValue
      rightChild.rangeAddedValue += lazyValue
      node.rangeAddedValue = 0
    }
  }

  /**
   * @notice Merges the results of a query from two child nodes.
   * @param leftNode The left child node.
   * @param rightNode The right child node.
   * @returns The merged result.
   */
  export const nodeQueryMergerL: segmentTreeQueryMerger<segmentLazy> = (
    leftNode: segmentLazy,
    rightNode: segmentLazy
  ): segmentLazy => {
    if (leftNode.left === -1) return rightNode
    if (rightNode.left === -1) return leftNode

    const mergedNode: segmentLazy = {
      left: leftNode.left,
      right: rightNode.right,
      sum: 0,
      rangeAddedValue: 0,
      max: 0
    }

    singleLazyNodeUpdate(leftNode)
    singleLazyNodeUpdate(rightNode)
    mergedNode.sum = rightNode.sum + leftNode.sum
    mergedNode.max = Math.max(leftNode.max, rightNode.max)

    return mergedNode
  }
