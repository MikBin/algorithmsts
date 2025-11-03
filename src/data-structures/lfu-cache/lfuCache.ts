export class LFUCache<K, V> {
  private values = new Map<K, V>();
  private counts = new Map<K, number>();
  private freq = new Map<number, Set<K>>();
  private minFreq = 0;
  constructor(private capacity: number) { if (capacity<=0) throw new Error('capacity must be > 0'); }
  get(key: K): V | undefined { if (!this.values.has(key)) return undefined; this.touch(key); return this.values.get(key); }
  set(key: K, value: V): void {
    if (this.capacity === 0) return;
    if (this.values.has(key)) { this.values.set(key, value); this.touch(key); return; }
    if (this.values.size >= this.capacity) this.evict();
    this.values.set(key, value); this.counts.set(key, 1);
    if (!this.freq.has(1)) this.freq.set(1, new Set());
    this.freq.get(1)!.add(key); this.minFreq = 1;
  }
  private touch(key: K): void { const c = this.counts.get(key)!; this.freq.get(c)!.delete(key); if (this.freq.get(c)!.size===0) { this.freq.delete(c); if (this.minFreq===c) this.minFreq++; }
    const nc = c+1; this.counts.set(key, nc); if (!this.freq.has(nc)) this.freq.set(nc, new Set()); this.freq.get(nc)!.add(key);
  }
  private evict(): void { const set = this.freq.get(this.minFreq)!; const key = set.values().next().value as K; set.delete(key); if (set.size===0) this.freq.delete(this.minFreq); this.values.delete(key); this.counts.delete(key); }
  has(key: K): boolean { return this.values.has(key); }
  delete(key: K): boolean { if (!this.values.has(key)) return false; const c=this.counts.get(key)!; this.values.delete(key); this.counts.delete(key); const s=this.freq.get(c)!; s.delete(key); if (s.size===0) this.freq.delete(c); if (this.minFreq===c && !this.freq.has(c)) this.minFreq = Math.min(...Array.from(this.freq.keys(), n => n)); return true; }
  clear(): void { this.values.clear(); this.counts.clear(); this.freq.clear(); this.minFreq=0; }

  toJson(): string {
    return JSON.stringify({
      capacity: this.capacity,
      values: Array.from(this.values.entries()),
      counts: Array.from(this.counts.entries()),
      freq: Array.from(this.freq.entries()).map(([f, s]) => [f, Array.from(s)]),
      minFreq: this.minFreq,
    });
  }
}
