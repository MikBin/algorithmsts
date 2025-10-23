import { IIterator } from '../../core/interfaces/IIterator';
import { BaseSegmentTreeNode } from './interfaces';

/**
 * Iterator implementation for SegmentTree
 * Note: Segment trees don't naturally support iteration like linear structures.
 * This iterator traverses the tree in-order (left to right).
 */
export class SegmentTreeIterator<T> implements IIterator<T> {
  private stack: BaseSegmentTreeNode[];
  private currentNode: BaseSegmentTreeNode | undefined;

  /**
   * Creates a new SegmentTreeIterator
   * @param root The root node of the segment tree
   */
  constructor(root: BaseSegmentTreeNode) {
    this.stack = [];
    this.currentNode = root;
    this.pushLeft(this.currentNode);
  }

  /**
   * Helper method to push all left children onto the stack
   * @param node The node to start from
   */
  private pushLeft(node: BaseSegmentTreeNode): void {
    let current = node;
    while (current) {
      this.stack.push(current);
      if (current.leftChild) {
        current = current.leftChild;
      } else {
        break;
      }
    }
  }

  /**
   * Checks if there are more elements to iterate over
   * @returns true if there are more elements, false otherwise
   */
  hasNext(): boolean {
    return this.stack.length > 0;
  }

  /**
   * Returns the next element in the iteration
   * @returns The next element
   * @throws Error if there are no more elements
   */
  next(): T {
    if (!this.hasNext()) {
      throw new Error('No more elements in the iteration');
    }

    const node = this.stack.pop()!;
    this.currentNode = node;

    // If the node has a right child, push its leftmost path
    if (node.rightChild) {
      this.pushLeft(node.rightChild);
    }

    // For segment trees, we return a representation of the node
    // Since T is generic and nodes may not directly contain T,
    // we return the node itself cast as T (this is a limitation of the generic approach)
    return node as unknown as T;
  }

  /**
   * Returns the current element in the iteration without advancing
   * @returns The current element
   * @throws Error if there is no current element
   */
  current(): T {
    if (!this.currentNode) {
      throw new Error('No current element in the iteration');
    }
    return this.currentNode as unknown as T;
  }
}
