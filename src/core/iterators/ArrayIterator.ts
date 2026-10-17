/**
 * ArrayIterator class.
 * @class ArrayIterator
 * @complexity Time: O(1) for next, current, hasNext
 * Space: O(1) beyond array storage
 */
import { IIterator } from "../interfaces/IIterator";

export class ArrayIterator<T> implements IIterator<T> {
  private idx = 0;
  private currentIdx = -1;
  constructor(private data: T[]) {}
  hasNext(): boolean {
    return this.idx < this.data.length;
  }
  next(): T {
    if (!this.hasNext()) throw new Error("No more elements");
    this.currentIdx = this.idx;
    return this.data[this.idx++];
  }
  current(): T {
    if (this.currentIdx < 0) throw new Error("No current element");
    return this.data[this.currentIdx];
  }
}
