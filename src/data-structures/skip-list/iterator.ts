import { IIterator } from '../../core/interfaces/IIterator';
import { SkipNode } from './interfaces';

/**
 * Iterator implementation for SkipList
 */
export class SkipListIterator<T> implements IIterator<T> {
  private currentNode: SkipNode<T> | undefined;

  /**
   * Creates a new SkipListIterator
   * @param head The head node of the skip list
   */
  constructor(head: SkipNode<T>) {
    this.currentNode = head.pointers[1];
  }

  /**
   * Checks if there are more elements to iterate over
   * @returns true if there are more elements, false otherwise
   */
  hasNext(): boolean {
    return this.currentNode !== undefined;
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
    const value = this.currentNode!.value;
    this.currentNode = this.currentNode!.pointers[1];
    return value;
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
    return this.currentNode.value;
  }
}
