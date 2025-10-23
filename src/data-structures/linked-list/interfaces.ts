/**
 * Node interface for LinkedList elements
 */
export interface Node<T> {
  /** The value stored in the node */
  value: T;
  /** Reference to the next node in the list */
  next: Node<T> | null;
  /** Reference to the previous node in the list */
  prev: Node<T> | null;
}
