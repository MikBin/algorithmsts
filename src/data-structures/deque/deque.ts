import { BaseDataStructure } from "../../core/abstracts/BaseDataStructure";
import { IIterator } from "../../core/interfaces/IIterator";
import { ArrayIterator } from "../../core/iterators/ArrayIterator";
import { CircularBuffer } from "../circular-buffer";

export class Deque<T> extends BaseDataStructure<T> {
  private buf: CircularBuffer<T>;
  constructor(capacity = 1024) {
    super();
    this.buf = new CircularBuffer<T>(capacity);
  }
  get size(): number {
    return this.buf.size;
  }
  addFirst(v: T): void {
    this.buf.pushFront(v);
    this._size = this.buf.size;
  }
  addLast(v: T): void {
    this.buf.pushBack(v);
    this._size = this.buf.size;
  }
  removeFirst(): T | null {
    const v = this.buf.popFront();
    this._size = this.buf.size;
    return v;
  }
  removeLast(): T | null {
    const v = this.buf.popBack();
    this._size = this.buf.size;
    return v;
  }
  peekFirst(): T | null {
    return this.buf.peekFront();
  }
  peekLast(): T | null {
    return this.buf.peekBack();
  }
  clear(): void {
    this.buf.clear();
    this._size = 0;
  }
  iterator(): IIterator<T> {
    return new ArrayIterator(this.buf.toArray());
  }
  contains(e: T): boolean {
    return this.buf.toArray().includes(e as any);
  }
  toArray(): T[] {
    return this.buf.toArray();
  }

  toJson(): string {
    return this.buf.toJson();
  }
}
