import { IIterator } from '../../core/interfaces/IIterator';
import { Node } from './interfaces';

/**
 * Iterator implementation for LinkedList
 */
export class LinkedListIterator<T> implements IIterator<T> {
  private currentNode: Node<T> | null;
  private previousNode: Node<T> | null;
  private start: boolean;

  /**
   * Creates a new LinkedListIterator
   * @param head The head node of the linked list
   */
  constructor(head: Node<T> | null) {
    this.currentNode = head;
    this.previousNode = null;
    this.start = true;
  }

  /**
   * Checks if there are more elements to iterate over
   * @returns true if there are more elements, false otherwise
   */
  hasNext(): boolean {
    return this.currentNode !== null;
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
    this.previousNode = this.currentNode;
    this.currentNode = this.currentNode!.next;
    this.start = false;
    return value;
  }

  /**
   * Returns the current element in the iteration without advancing
   * @returns The current element
   * @throws Error if there is no current element
   */
  current(): T {
    if (this.start || !this.previousNode) {
      throw new Error('No current element in the iteration');
    }
    return this.previousNode.value;
  }
}
