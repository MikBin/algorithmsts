import { RBNode } from './interfaces';

export class RedBlackTreeIterator<T> implements Iterator<T> {
  private stack: RBNode<T>[] = [];
  private currentNode: RBNode<T> | null;

  constructor(root: RBNode<T> | null, private NIL: RBNode<T>) {
    this.currentNode = root;
  }

  next(): IteratorResult<T> {
    while (this.currentNode && this.currentNode !== this.NIL) {
      this.stack.push(this.currentNode);
      this.currentNode = this.currentNode.left;
    }

    if (this.stack.length > 0) {
      const node = this.stack.pop()!;
      this.currentNode = node.right;
      return { value: node.value, done: false };
    }

    return { value: undefined as any, done: true };
  }
}
