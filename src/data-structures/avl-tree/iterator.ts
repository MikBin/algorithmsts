import { AVLNode } from './interfaces';

export class AVLTreeIterator<T> implements Iterator<T> {
  private stack: AVLNode<T>[] = [];
  private currentNode: AVLNode<T> | null;

  constructor(root: AVLNode<T> | null) {
    this.currentNode = root;
  }

  next(): IteratorResult<T> {
    while (this.currentNode) {
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
