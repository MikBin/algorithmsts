import { BaseDataStructure } from '../../core/abstracts/BaseDataStructure';
import { IIterator } from '../../core/interfaces/IIterator';

class ArrayIterator<T> implements IIterator<T> {
  private idx = 0; private currentIdx = -1;
  constructor(private data: T[]) {}
  hasNext(): boolean { return this.idx < this.data.length; }
  next(): T { if (!this.hasNext()) throw new Error('No more elements'); this.currentIdx = this.idx; return this.data[this.idx++]; }
  current(): T { if (this.currentIdx < 0) throw new Error('No current element'); return this.data[this.currentIdx]; }
}

export class Queue<T> extends BaseDataStructure<T> {
  private data: T[] = [];
  private head = 0;

  get size(): number { return this.data.length - this.head; }
  enqueue(value: T): void { this.data.push(value); this._size = this.size; }
  dequeue(): T | null { if (this.size === 0) return null; const v = this.data[this.head++]; if (this.head > 50 && this.head * 2 > this.data.length) { this.data = this.data.slice(this.head); this.head = 0; } this._size = this.size; return v ?? null; }
  peek(): T | null { return this.size ? this.data[this.head] : null; }
  clear(): void { this.data = []; this.head = 0; this._size = 0; }
  iterator(): IIterator<T> { return new ArrayIterator(this.toArray()); }
  contains(element: T): boolean { return this.toArray().includes(element as any); }
  toArray(): T[] { return this.data.slice(this.head); }

  toJson(): string {
    return JSON.stringify(this.toArray());
  }
}
