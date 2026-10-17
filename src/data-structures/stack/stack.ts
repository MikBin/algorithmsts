import { BaseDataStructure } from "../../core/abstracts/BaseDataStructure";
import { IIterator } from "../../core/interfaces/IIterator";
import { ArrayIterator } from "../../core/iterators/ArrayIterator";

export class Stack<T> extends BaseDataStructure<T> {
  private data: T[] = [];

  get size(): number {
    return this.data.length;
  }
  push(value: T): void {
    this.data.push(value);
    this._size = this.data.length;
  }
  pop(): T | null {
    const v = this.data.pop();
    this._size = this.data.length;
    return v ?? null;
  }
  peek(): T | null {
    return this.data.length ? this.data[this.data.length - 1] : null;
  }
  clear(): void {
    this.data = [];
    this._size = 0;
  }
  iterator(): IIterator<T> {
    return new ArrayIterator(this.data.slice().reverse());
  }
  contains(element: T): boolean {
    return this.data.includes(element as any);
  }
  toArray(): T[] {
    return [...this.data];
  }
}
