import { IIterator } from "../../core/interfaces/IIterator";
import { ArrayIterator } from "../../core/iterators/ArrayIterator";

export class CircularBuffer<T> {
  private buf: (T | undefined)[];
  private _size = 0;
  private head = 0;
  private tail = 0;

  constructor(private capacity: number) {
    if (capacity <= 0) throw new Error("capacity must be > 0");
    this.buf = new Array(capacity);
  }

  get size(): number {
    return this._size;
  }
  isFull(): boolean {
    return this._size === this.capacity;
  }
  isEmpty(): boolean {
    return this._size === 0;
  }

  pushBack(value: T): void {
    if (this.isFull()) throw new Error("Buffer full");
    this.buf[this.tail] = value;
    this.tail = (this.tail + 1) % this.capacity;
    this._size++;
  }
  pushFront(value: T): void {
    if (this.isFull()) throw new Error("Buffer full");
    this.head = (this.head - 1 + this.capacity) % this.capacity;
    this.buf[this.head] = value;
    this._size++;
  }
  popFront(): T | null {
    if (this.isEmpty()) return null;
    const v = this.buf[this.head];
    this.buf[this.head] = undefined;
    this.head = (this.head + 1) % this.capacity;
    this._size--;
    return v ?? null;
  }
  popBack(): T | null {
    if (this.isEmpty()) return null;
    this.tail = (this.tail - 1 + this.capacity) % this.capacity;
    const v = this.buf[this.tail];
    this.buf[this.tail] = undefined;
    this._size--;
    return v ?? null;
  }

  peekFront(): T | null {
    return this.isEmpty() ? null : (this.buf[this.head] as T);
  }
  peekBack(): T | null {
    return this.isEmpty() ? null : (this.buf[(this.tail - 1 + this.capacity) % this.capacity] as T);
  }
  clear(): void {
    this.buf = new Array(this.capacity);
    this.head = this.tail = 0;
    this._size = 0;
  }
  toArray(): T[] {
    const out: T[] = [];
    for (let i = 0; i < this._size; i++) out.push(this.buf[(this.head + i) % this.capacity] as T);
    return out;
  }
  iterator(): IIterator<T> {
    return new ArrayIterator(this.toArray());
  }

  toJson(): string {
    return JSON.stringify(this.toArray());
  }
}
