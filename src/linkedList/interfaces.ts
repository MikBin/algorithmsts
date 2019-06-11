export interface Node<T> {
  value: T
  next: Node<T> | null
  prev: Node<T> | null // This makes the LinkedList doubly linked
  head?: boolean
  tail?: boolean
}
