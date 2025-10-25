import { BTreeNode } from './interfaces';
import { IIterator } from '../../core/interfaces/IIterator';

export class BTreeIterator<T> implements IIterator<T> {
  private _stack: { node: BTreeNode<T>; index: number }[] = [];
  private _currentValue: T | undefined; // For current()

  constructor(root: BTreeNode<T> | null) {
    this._pushLeftmost(root);
  }

  hasNext(): boolean {
    return this._stack.length > 0;
  }

  next(): T {
    if (!this.hasNext()) {
      throw new Error('No more elements in the iteration.');
    }

    const { node, index } = this._stack.pop()!;
    const key = node.keys[index];
    this._currentValue = key;

    // Schedule the next key in the same node to be visited later.
    // Must be pushed BEFORE traversing the child, so it's processed AFTER.
    if (index + 1 < node.keys.length) {
      this._stack.push({ node: node, index: index + 1 });
    }

    // Schedule the subtree between this key and the next to be visited now.
    if (!node.isLeaf) {
      this._pushLeftmost(node.children[index + 1]);
    }

    return key;
  }

  current(): T {
    if (this._currentValue === undefined) {
      throw new Error('No current element in the iteration.');
    }
    return this._currentValue;
  }

  private _pushLeftmost(node: BTreeNode<T> | null): void {
    let current = node;
    while (current) {
      this._stack.push({ node: current, index: 0 });
      if (current.isLeaf) {
        break;
      }
      current = current.children[0];
    }
  }
}
