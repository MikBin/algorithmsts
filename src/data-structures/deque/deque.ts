import { BaseDataStructure } from '../../core/abstracts/BaseDataStructure';
import { IIterator } from '../../core/interfaces/IIterator';
import { CircularBuffer } from '../circular-buffer';

class ArrayIterator<T> implements IIterator<T> { private idx=0; private cur=-1; constructor(private a:T[]){} hasNext(){return this.idx<this.a.length;} next(){ if(!this.hasNext()) throw new Error('No more elements'); this.cur=this.idx; return this.a[this.idx++]; } current(){ if(this.cur<0) throw new Error('No current element'); return this.a[this.cur]; }}

export class Deque<T> extends BaseDataStructure<T> {
  private buf: CircularBuffer<T>;
  constructor(capacity = 1024) { super(); this.buf = new CircularBuffer<T>(capacity); }
  get size(): number { return this.buf.size; }
  addFirst(v: T): void { this.buf.pushFront(v); this._size = this.buf.size; }
  addLast(v: T): void { this.buf.pushBack(v); this._size = this.buf.size; }
  removeFirst(): T | null { const v = this.buf.popFront(); this._size = this.buf.size; return v; }
  removeLast(): T | null { const v = this.buf.popBack(); this._size = this.buf.size; return v; }
  peekFirst(): T | null { return this.buf.peekFront(); }
  peekLast(): T | null { return this.buf.peekBack(); }
  clear(): void { this.buf.clear(); this._size = 0; }
  iterator(): IIterator<T> { return new ArrayIterator(this.buf.toArray()); }
  contains(e: T): boolean { return this.buf.toArray().includes(e as any); }
  toArray(): T[] { return this.buf.toArray(); }

  toJson(): string {
    return this.buf.toJson();
  }
}
