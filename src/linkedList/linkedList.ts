import { Node } from './interfaces'

export class LinkedList<T> {
  private head: Node<T> | null
  private tail: Node<T> | null
  private count: number
  constructor() {
    this.head = null
    this.tail = null
    this.count = 0
  }

  size(): number {
    return this.count
  }
  /**
   * Adds an item in O(1)
   */
  add(value: T) {
    const node: Node<T> = { value: value, next: null, prev: null }
    !this.head && (this.head = node)
    if (this.tail) {
      this.tail.next = node
      node.prev = this.tail
    }
    this.tail = node

    this.count++
  }

  /**
   * Deletes the first item in O(1)
   * @returns the deleted item
   */
  shift(): T | null {
    if (this.head) {
      const value = this.head.value
      this.head = this.head.next
      !this.head ? (this.tail = null) : (this.head.prev = null)
      this.count--
      return value
    }
    return null
  }

  first(): T | null {
    return this.head ? this.head.value : null
  }

  last(): T | null {
    return this.tail ? this.tail.value : null
  }

  /**
   * Deletes the last element in O(1) - Doubly LinkedList
   * @returns the deleted item
   */
  pop(): T | null {
    if (this.tail) {
      const value = this.tail.value
      this.tail = this.tail.prev
      !this.tail ? (this.head = null) : (this.tail.next = null)
      this.count--
      return value
    }
    return null
  }

  /**
   * @returns {Iterator} values of the LinkedList
   */
  *values<T>() {
    let current = this.head
    while (current) {
      yield current.value
      current = current.next
    }
  }

  toArray(): Array<T> {
    let A: Array<T> = new Array(this.count)
    let current = this.head
    let i = 0
    while (current) {
      A[i] = current.value
      i++
      current = current.next
    }
    return A
  }

  /**
   * @returns {boolean} true if list is empty
   */
  isEmpty(): boolean {
    return !this.head
  }
}

/**
 * class linkedNode {
    constructor(data) {
        this.next = null;
        this.prev = null;
        this.data = data;
    }
    setNext(n = null) { this.next = n; }
    setPrev(p = null) { this.prev = p;}
    removeNextNode() {
        if (this.next) {
            let nn = this.next.next;
            this.next.setNext();
            this.setNext(nn);
            let next = this.next;
            if(next) next.setPrev(this);
        }
     }
    removePrevNode() { }
    insertNode(v) {
        let node = new linkedNode(v);
        let n = this;
        while (n.next) n = n.next;
        n.setNext(node);
        node.setPrev(n);
    }
    push(v) {
        if (this.next) return this.next.push(v);
        let node = new linkedNode(v);
        this.setNext(node);
        node.setPrev(this);
    }
    detatchNext() { }
    detatchPrev() { }
}
 *
 */
