/**
 * InOrderIterator class for binary trees.
 * @class InOrderIterator
 * @complexity Time: O(1) amortized next, Space: O(H) where H is tree height
 */
import { IIterator } from "../interfaces/IIterator";

export class InOrderIterator<
  T,
  N extends { left: N | null; right: N | null; key?: T; interval?: T },
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
        this.cur = (node.key !== undefined ? node.key : node.interval) as T;
        return true;
      }
      this.stack.push({ node: node.right, visited: false });
      this.stack.push({ node, visited: true });
      this.stack.push({ node: node.left, visited: false });
    }
    return false;
  }
  hasNext(): boolean {
    if (this.cur !== null) return true;
    return this.step();
  }
  next(): T {
    if (!this.hasNext()) throw new Error("No more elements");
    const v = this.cur as T;
    this.cur = null;
    return v;
  }
  current(): T {
    if (this.cur === null) throw new Error("No current element");
    return this.cur as T;
  }
}
