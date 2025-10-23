import { IIterator } from '../../core/interfaces/IIterator';
import { SuffixTreeNode } from './interfaces';

/**
 * Iterator implementation for SuffixTree
 * Iterates over all nodes in the suffix tree using DFS traversal
 */
export class SuffixTreeIterator<T> implements IIterator<T> {
  private stack: SuffixTreeNode<T>[];
  private currentNode: SuffixTreeNode<T> | undefined;

  /**
   * Creates a new SuffixTreeIterator
   * @param root The root node of the suffix tree
   */
  constructor(root: SuffixTreeNode<T>) {
    this.stack = [];
    this.currentNode = undefined;
    this.pushAll(root);
  }

  /**
   * Helper method to push all nodes using DFS
   * @param node The current node
   */
  private pushAll(node: SuffixTreeNode<T>): void {
    this.stack.push(node);
    for (const key in node.transitions) {
      const [childNode] = node.transitions[key];
      this.pushAll(childNode);
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
    // For suffix trees, we return the node itself as T (this is a limitation)
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
