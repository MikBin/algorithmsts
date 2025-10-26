export class SparseSet {
  private sparse: number[];
  private dense: number[] = [];
  private _size = 0;
  constructor(private capacity: number) { if (capacity<=0) throw new Error('capacity must be > 0'); this.sparse = new Array(capacity).fill(-1); }
  get size(): number { return this._size; }
  has(x: number): boolean { return x>=0 && x<this.capacity && this.sparse[x] !== -1 && this.sparse[x] < this._size && this.dense[this.sparse[x]] === x; }
  add(x: number): boolean { if (x<0 || x>=this.capacity || this.has(x)) return false; this.sparse[x] = this._size; this.dense[this._size] = x; this._size++; return true; }
  delete(x: number): boolean { if (!this.has(x)) return false; const i = this.sparse[x]; const y = this.dense[this._size-1]; this.dense[i] = y; this.sparse[y] = i; this._size--; this.sparse[x] = -1; return true; }
  clear(): void { this._size = 0; this.sparse.fill(-1); this.dense = []; }
  values(): number[] { return this.dense.slice(0, this._size); }
}
