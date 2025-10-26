import { BaseDataStructure } from '../../core/abstracts/BaseDataStructure';
import { IIterator } from '../../core/interfaces/IIterator';

class ArrayIterator<T> implements IIterator<T> {
  private idx = 0;
  private currentIdx = -1;
  constructor(private data: T[]) {}
  hasNext(): boolean { return this.idx < this.data.length; }
  next(): T { if (!this.hasNext()) throw new Error('No more elements'); this.currentIdx = this.idx; return this.data[this.idx++]; }
  current(): T { if (this.currentIdx < 0) throw new Error('No current element'); return this.data[this.currentIdx]; }
}

export class Stack<T> extends BaseDataStructure<T> {
  private data: T[] = [];

  get size(): number { return this.data.length; }
  push(value: T): void { this.data.push(value); this._size = this.data.length; }
  pop(): T | null { const v = this.data.pop(); this._size = this.data.length; return v ?? null; }
  peek(): T | null { return this.data.length ? this.data[this.data.length - 1] : null; }
  clear(): void { this.data = []; this._size = 0; }
  iterator(): IIterator<T> { return new ArrayIterator(this.data.slice().reverse()); }
  contains(element: T): boolean { return this.data.includes(element as any); }
  toArray(): T[] { return [...this.data]; }
}
