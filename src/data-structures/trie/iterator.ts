import { IIterator } from '../../core/interfaces/IIterator';
import { TrieNode } from './interfaces';

/**
 * Iterator implementation for Trie
 * Iterates over all terminal nodes (words) in the trie
 */
export class TrieIterator<T> implements IIterator<T> {
  private stack: Array<{ key: string; node: TrieNode<T> }>;
  private currentItem: { key: string; node: TrieNode<T> } | undefined;

  /**
   * Creates a new TrieIterator
   * @param root The root node of the trie
   */
  constructor(root: TrieNode<T>) {
    this.stack = [];
    this.currentItem = undefined;
    this.pushAll(root, '');
  }

  /**
   * Helper method to push all terminal nodes onto the stack
   * @param node The current node
   * @param prefix The current prefix
   */
  private pushAll(node: TrieNode<T>, prefix: string): void {
    if (node.terminal) {
      this.stack.push({ key: prefix, node });
    }
    for (const [char, childNode] of node.children) {
      this.pushAll(childNode, prefix + char);
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
    const item = this.stack.pop()!;
    this.currentItem = item;
    return item.node.value!;
  }

  /**
   * Returns the current element in the iteration without advancing
   * @returns The current element
   * @throws Error if there is no current element
   */
  current(): T {
    if (!this.currentItem) {
      throw new Error('No current element in the iteration');
    }
    return this.currentItem.node.value!;
  }
}
