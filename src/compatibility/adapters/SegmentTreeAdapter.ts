/**
 * SegmentTree Adapter for Backward Compatibility
 *
 * Provides a backward-compatible interface for the SegmentTree data structure
 * that delegates to the new SegmentTree implementation while maintaining
 * the legacy API.
 *
 * @module compatibility/adapters/SegmentTreeAdapter
 */

import { SegmentTree } from '../../data-structures/segment-tree/segmentTree';
import { BaseSegmentTreeNode } from '../../data-structures/segment-tree/interfaces';
import { DeprecationWarning } from '../utils/DeprecationWarning';

/**
 * Legacy SegmentTree interface for backward compatibility
 * @deprecated Use SegmentTree from data-structures/segment-tree instead
 */
export class SegmentTreeAdapter<T, U extends BaseSegmentTreeNode> {
  private newTree: SegmentTree<T, U>;

  /**
   * Creates a new SegmentTreeAdapter
   * @param sourceArray The source array to build the tree from
   * @param segmentNodeFactory Factory function for creating nodes
   * @param segmentNodeMerger Function for merging nodes
   * @param segmentNodeQuery Function for merging query results
   * @param segmentLeaftUpdater Function for updating leaf nodes
   * @deprecated Use new SegmentTree() from data-structures/segment-tree instead
   */
  constructor(
    sourceArray: T[],
    segmentNodeFactory: any,
    segmentNodeMerger: any,
    segmentNodeQuery: any,
    segmentLeaftUpdater: any
  ) {
    DeprecationWarning.warn(
      'SegmentTreeAdapter',
      'SegmentTree from data-structures/segment-tree',
      '2.0.0'
    );
    this.newTree = new SegmentTree(
      sourceArray,
      segmentNodeFactory,
      segmentNodeMerger,
      segmentNodeQuery,
      segmentLeaftUpdater
    );
  }

  /**
   * Performs a range query on the segment tree
   * @param left The left boundary of the query range
   * @param right The right boundary of the query range
   * @returns The result of the range query
   */
  query(left: number, right: number): U {
    return this.newTree.query(left, right);
  }

  /**
   * Updates a leaf node in the segment tree
   * @param value The new value
   * @param position The position to update
   */
  updateLeaf(value: T, position: number): void {
    this.newTree.updateLeaf(value, position);
  }

  /**
   * Gets the internal tree array
   * @returns The segment tree array
   */
  getTree(): U[] {
    return this.newTree.getTree();
  }
}
