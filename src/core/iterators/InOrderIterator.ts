import { IIterator } from "../interfaces/IIterator";

export interface IBinaryTreeNode<T> {
  key: T;
  left: IBinaryTreeNode<T> | null;
  right: IBinaryTreeNode<T> | null;
}

export class InOrderIterator<
  T,
  N extends IBinaryTreeNode<T> = IBinaryTreeNode<T>,
> implements IIterator<T> {
  private stack: Array<{ node: N | null; visited: boolean }> = [];
  private cur: T | null = null;
  constructor(root: N | null) {
    this.stack.push({ node: root, visited: false });
  }
  private step(): boolean {
    while (this.stack.length) {
      const { node, visited } = this.stack.pop()!;
      if (!node) continue;
      if (visited) {
        this.cur = node.key;
        return true;
      }
      this.stack.push({ node: node.right as N | null, visited: false });
      this.stack.push({ node, visited: true });
      this.stack.push({ node: node.left as N | null, visited: false });
    }
    return false;
  }
  hasNext(): boolean {
    if (this.cur !== null) return true;
    return this.step();
  }
  private prev: T | null = null;
  next(): T {
    if (!this.hasNext()) throw new Error("No more elements");
    const v = this.cur as T;
    this.prev = v;
    this.cur = null;
    return v;
  }
  current(): T {
    if (this.prev === null) throw new Error("No current element");
    return this.prev as T;
  }
}
