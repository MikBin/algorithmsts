export type Hasher<K> = (key: K) => number;
export type Equality<K> = (a: K, b: K) => boolean;

const defaultHash: Hasher<any> = (k: any) => {
  const s = typeof k === 'string' ? k : JSON.stringify(k);
  let h = 2166136261 >>> 0; // FNV-1a 32-bit
  for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h += (h << 1) + (h << 4) + (h << 7) + (h << 8) + (h << 24); }
  return h >>> 0;
};
const defaultEq: Equality<any> = (a, b) => a === b;

export class HashMap<K, V> {
  private buckets: [K, V][][] = new Array(16).fill(null).map(() => []);
  private _size = 0;
  private _loadFactor = 0.75;
  constructor(private hasher: Hasher<K> = defaultHash, private equals: Equality<K> = defaultEq) {}

  get size(): number { return this._size; }
  private index(key: K, cap = this.buckets.length): number { return (this.hasher(key) & 0x7fffffff) % cap; }
  private rehash(newCap: number) {
    const nb: [K, V][][] = new Array(newCap).fill(null).map(() => []);
    for (const bucket of this.buckets) for (const [k, v] of bucket) nb[this.index(k, newCap)].push([k, v]);
    this.buckets = nb;
  }
  private ensureCapacity() { if (this._size / this.buckets.length > this._loadFactor) this.rehash(this.buckets.length << 1); }

  set(key: K, value: V): void {
    this.ensureCapacity();
    const i = this.index(key);
    const b = this.buckets[i];
    for (let j = 0; j < b.length; j++) { if (this.equals(b[j][0], key)) { b[j][1] = value; return; } }
    b.push([key, value]); this._size++;
  }
  get(key: K): V | undefined { const b = this.buckets[this.index(key)]; for (const [k, v] of b) if (this.equals(k, key)) return v; return undefined; }
  has(key: K): boolean { return this.get(key) !== undefined; }
  delete(key: K): boolean { const i = this.index(key); const b = this.buckets[i]; for (let j=0;j<b.length;j++){ if (this.equals(b[j][0], key)) { b.splice(j,1); this._size--; return true; } } return false; }
  clear(): void { this.buckets = new Array(16).fill(null).map(() => []); this._size = 0; }
  keys(): K[] { const out: K[] = []; for (const b of this.buckets) for (const [k] of b) out.push(k); return out; }
  values(): V[] { const out: V[] = []; for (const b of this.buckets) for (const [,v] of b) out.push(v); return out; }
  entries(): [K, V][] { const out: [K, V][] = []; for (const b of this.buckets) for (const e of b) out.push(e); return out; }
  forEach(fn: (value: V, key: K) => void): void { for (const [k,v] of this.entries()) fn(v,k); }
}
