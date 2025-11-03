export class LRUCache<K, V> {
  private map = new Map<K, V>();
  constructor(private capacity: number) { if (capacity<=0) throw new Error('capacity must be > 0'); }
  get(key: K): V | undefined { if (!this.map.has(key)) return undefined; const v = this.map.get(key)!; this.map.delete(key); this.map.set(key, v); return v; }
  set(key: K, value: V): void { if (this.map.has(key)) this.map.delete(key); this.map.set(key, value); if (this.map.size > this.capacity) { const it = this.map.keys().next(); if (!it.done) this.map.delete(it.value as K); } }
  has(key: K): boolean { return this.map.has(key); }
  delete(key: K): boolean { return this.map.delete(key); }
  clear(): void { this.map.clear(); }
  size(): number { return this.map.size; }
  keys(): K[] { return Array.from(this.map.keys()); }
  values(): V[] { return Array.from(this.map.values()); }

  toJson(): string {
    return JSON.stringify(Array.from(this.map.entries()));
  }
}
