import { IIterator } from '../../core/interfaces/IIterator';

class ArrayIterator<T> implements IIterator<T> {
  private idx = 0; private currentIdx = -1;
  constructor(private data: T[]) {}
  hasNext(): boolean { return this.idx < this.data.length; }
  next(): T { if (!this.hasNext()) throw new Error('No more elements'); this.currentIdx = this.idx; return this.data[this.idx++]; }
  current(): T { if (this.currentIdx < 0) throw new Error('No current element'); return this.data[this.currentIdx]; }
}

export class CircularBuffer<T> {
  private buf: (T | undefined)[];
  private _size = 0;
  private head = 0;
  private tail = 0;

  constructor(private capacity: number) {
    if (capacity <= 0) throw new Error('capacity must be > 0');
    this.buf = new Array(capacity);
  }

  get size(): number { return this._size; }
  isFull(): boolean { return this._size === this.capacity; }
  isEmpty(): boolean { return this._size === 0; }

  pushBack(value: T): void { if (this.isFull()) throw new Error('Buffer full'); this.buf[this.tail] = value; this.tail = (this.tail + 1) % this.capacity; this._size++; }
  pushFront(value: T): void { if (this.isFull()) throw new Error('Buffer full'); this.head = (this.head - 1 + this.capacity) % this.capacity; this.buf[this.head] = value; this._size++; }
  popFront(): T | null { if (this.isEmpty()) return null; const v = this.buf[this.head]; this.buf[this.head] = undefined; this.head = (this.head + 1) % this.capacity; this._size--; return v ?? null; }
  popBack(): T | null { if (this.isEmpty()) return null; this.tail = (this.tail - 1 + this.capacity) % this.capacity; const v = this.buf[this.tail]; this.buf[this.tail] = undefined; this._size--; return v ?? null; }

  peekFront(): T | null { return this.isEmpty() ? null : (this.buf[this.head] as T); }
  peekBack(): T | null { return this.isEmpty() ? null : (this.buf[(this.tail - 1 + this.capacity) % this.capacity] as T); }
  clear(): void { this.buf = new Array(this.capacity); this.head = this.tail = 0; this._size = 0; }
  toArray(): T[] { const out: T[] = []; for (let i = 0; i < this._size; i++) out.push(this.buf[(this.head + i) % this.capacity] as T); return out; }
  iterator(): IIterator<T> { return new ArrayIterator(this.toArray()); }
}
