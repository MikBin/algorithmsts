import {
    baseSegmentTreeNode,
    segmentTreeNodeFactory,
    segmentTreeNodeMerger,
    segmentTreeQueryMerger,
    segmentTreeLeafNodeUpdater
  } from './interfaces'

  /**
   * @title MeanVarianceSegmentTree
   * @notice Represents a node in a segment tree designed for financial data analysis,
   * specifically for calculating min, max, average, and variance over a range.
   */
  export interface finSegmentNode extends baseSegmentTreeNode {
    min: number // Minimum value in the range
    max: number // Maximum value in the range
    avg: number // Average value in the range
    sigma: number // Variance of the values in the range
    minIdx: number // Index of the minimum value
    maxIdx: number // Index of the maximum value
  }

  /**
   * @notice A factory function to create a new `finSegmentNode`.
   * @param val An array of string or number representing the financial data.
   *            `val[2]` is the max value, `val[3]` is the min value, `val[4]` is the average value.
   * @param l The left boundary of the range.
   * @param r The right boundary of the range.
   * @returns A new `finSegmentNode`.
   */
  export const finNodeFactory: segmentTreeNodeFactory<(string | number)[], finSegmentNode> = (
    val: (string | number)[],
    l: number,
    r: number
  ): finSegmentNode => {
    const node: finSegmentNode = {
      left: l,
      right: r,
      leftChild: null,
      rightChild: null,
      min: Number.MAX_VALUE,
      max: -Number.MAX_VALUE,
      avg: 0,
      sigma: 0,
      minIdx: -1,
      maxIdx: -1
    }

    if (r - l === 0) {
      node.min = <number>val[3]
      node.max = <number>val[2]
      node.maxIdx = l
      node.minIdx = l
      node.avg = <number>val[4]
    }

    return node
  }

  /**
   * @notice Merges two child nodes into a parent node, calculating the combined min, max, average, and variance.
   * @param parent The parent node to merge into.
   * @param leftChild The left child node.
   * @param rightChild The right child node.
   * @returns The merged parent node.
   */
  export const finNodeMerger: segmentTreeNodeMerger<finSegmentNode> = (
    parent: finSegmentNode,
    leftChild: finSegmentNode,
    rightChild: finSegmentNode
  ): finSegmentNode => {
    parent.max = Math.max(leftChild.max, rightChild.max)
    parent.min = Math.min(leftChild.min, rightChild.min)
    parent.maxIdx = parent.max === leftChild.max ? leftChild.maxIdx : rightChild.maxIdx
    parent.minIdx = parent.min === leftChild.min ? leftChild.minIdx : rightChild.minIdx

    const leftRangeSize = leftChild.right - leftChild.left + 1
    const rightRangeSize = rightChild.right - rightChild.left + 1
    const totalSize = leftRangeSize + rightRangeSize

    const combinedAvg = (parent.avg =
      (leftRangeSize * leftChild.avg) / totalSize + (rightRangeSize * rightChild.avg) / totalSize)

    const diffLeftSquare = Math.pow(leftChild.avg - combinedAvg, 2)
    const diffRightSquare = Math.pow(rightChild.avg - combinedAvg, 2)

    parent.sigma =
      (leftRangeSize * (leftChild.sigma + diffLeftSquare)) / totalSize +
      (rightRangeSize * (rightChild.sigma + diffRightSquare)) / totalSize

    return parent
  }

  /**
   * @notice Updates a leaf node with new financial data.
   * @param t An array of string or number representing the new financial data.
   *          `t[2]` is the max value, `t[3]` is the min value, `t[4]` is the average value.
   * @param leaf The leaf node to update.
   */
  export const finNodeLeafUpdater: segmentTreeLeafNodeUpdater<(string | number)[], finSegmentNode> = (
    t: (string | number)[],
    leaf: finSegmentNode
  ): void => {
    leaf.max = <number>t[2]
    leaf.min = <number>t[3]
    leaf.avg = <number>t[4]
  }

  /**
   * @notice Merges the results of a query from two child nodes.
   * @param leftChild The left child node.
   * @param rightChild The right child node.
   * @returns The merged result.
   */
  export const finNodeQuery: segmentTreeQueryMerger<finSegmentNode> = (
    leftChild: finSegmentNode,
    rightChild: finSegmentNode
  ): finSegmentNode => {
    if (leftChild.left === -1) return rightChild
    if (rightChild.left === -1) return leftChild

    const mergedNode: finSegmentNode = {
      left: leftChild.left,
      right: rightChild.right,
      leftChild: null,
      rightChild: null,
      min: Number.MAX_VALUE,
      max: -Number.MAX_VALUE,
      minIdx: -1,
      sigma: 0,
      avg: 0,
      maxIdx: -1
    }

    ;[mergedNode.minIdx, mergedNode.min] =
      leftChild.min < rightChild.min
        ? [leftChild.minIdx, leftChild.min]
        : [rightChild.minIdx, rightChild.min]
    ;[mergedNode.maxIdx, mergedNode.max] =
      leftChild.max > rightChild.max
        ? [leftChild.maxIdx, leftChild.max]
        : [rightChild.maxIdx, rightChild.max]

    const leftRangeSize = leftChild.right - leftChild.left + 1
    const rightRangeSize = rightChild.right - rightChild.left + 1
    const totalSize = leftRangeSize + rightRangeSize

    const combinedAvg = (mergedNode.avg =
      (leftRangeSize * leftChild.avg) / totalSize + (rightRangeSize * rightChild.avg) / totalSize)

    const diffLeftSquare = Math.pow(leftChild.avg - combinedAvg, 2)
    const diffRightSquare = Math.pow(rightChild.avg - combinedAvg, 2)

    mergedNode.sigma =
      (leftRangeSize * (leftChild.sigma + diffLeftSquare)) / totalSize +
      (rightRangeSize * (rightChild.sigma + diffRightSquare)) / totalSize

    return mergedNode
  }
