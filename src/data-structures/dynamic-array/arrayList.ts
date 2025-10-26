import { BaseDataStructure } from '../../core/abstracts/BaseDataStructure';
import { IIterator } from '../../core/interfaces/IIterator';

class ArrayIterator<T> implements IIterator<T> { private idx=0; private cur=-1; constructor(private a:T[]){} hasNext(){return this.idx<this.a.length;} next(){ if(!this.hasNext()) throw new Error('No more elements'); this.cur=this.idx; return this.a[this.idx++]; } current(){ if(this.cur<0) throw new Error('No current element'); return this.a[this.cur]; }}

export class ArrayList<T> extends BaseDataStructure<T> {
  private data: (T | undefined)[] = new Array(4);
  private len = 0;

  get size(): number { return this.len; }
  private ensure(cap: number) { if (cap <= this.data.length) return; let n = this.data.length; while (n < cap) n <<= 1; const nd = new Array<T | undefined>(n); for (let i=0;i<this.len;i++) nd[i]=this.data[i]; this.data = nd; }
  add(v: T): void { this.ensure(this.len+1); this.data[this.len++] = v; this._size = this.len; }
  insertAt(idx: number, v: T): boolean { if (idx<0 || idx>this.len) return false; this.ensure(this.len+1); for (let i=this.len;i>idx;i--) this.data[i]=this.data[i-1]; this.data[idx]=v; this.len++; this._size=this.len; return true; }
  getAt(idx: number): T | null { if (idx<0 || idx>=this.len) return null; return this.data[idx] as T; }
  setAt(idx: number, v: T): boolean { if (idx<0 || idx>=this.len) return false; this.data[idx]=v; return true; }
  removeAt(idx: number): T | null { if (idx<0 || idx>=this.len) return null; const v = this.data[idx] as T; for (let i=idx;i<this.len-1;i++) this.data[i]=this.data[i+1]; this.data[--this.len]=undefined; this._size=this.len; return v; }
  clear(): void { this.data = new Array(4); this.len = 0; this._size = 0; }
  iterator(): IIterator<T> { return new ArrayIterator(this.toArray()); }
  contains(e: T): boolean { return this.toArray().includes(e as any); }
  toArray(): T[] { const out: T[] = new Array(this.len) as any; for (let i=0;i<this.len;i++) out[i]=this.data[i] as T; return out; }
}
