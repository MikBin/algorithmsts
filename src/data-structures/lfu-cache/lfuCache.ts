/**
 * Represents a Least Frequently Used (LFU) Cache, which evicts the least frequently accessed items when capacity is reached.
 */
export class LFUCache<K, V> {
  private values = new Map<K, V>();
  private counts = new Map<K, number>();
  private freq = new Map<number, Set<K>>();
  private minFreq = 0;

  /**
   * Initializes a new LFU Cache with a specified capacity.
   *
   * @param capacity The maximum number of elements the cache can hold.
   * @complexity Time: O(1) | Space: O(1)
   */
  constructor(private capacity: number) { if (capacity<=0) throw new Error('capacity must be > 0'); }

  /**
   * Retrieves the value associated with the key and updates its access frequency.
   *
   * @param key The key to retrieve.
   * @returns The value, or undefined if the key is not in the cache.
   * @complexity Time: O(1) | Space: O(1)
   */
  get(key: K): V | undefined { if (!this.values.has(key)) return undefined; this.touch(key); return this.values.get(key); }

  /**
   * Inserts or updates a key-value pair. If capacity is reached, the least frequently used item is evicted.
   *
   * @param key The key to insert or update.
   * @param value The value to associate with the key.
   * @complexity Time: O(1) | Space: O(1)
   */
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

  /**
   * Checks if the cache contains the specified key.
   *
   * @param key The key to check.
   * @returns True if the key is in the cache, false otherwise.
   * @complexity Time: O(1) | Space: O(1)
   */
  has(key: K): boolean { return this.values.has(key); }

  /**
   * Removes a key-value pair from the cache.
   *
   * @param key The key to remove.
   * @returns True if removed, false if not found.
   * @complexity Time: O(k) where k is the number of distinct frequencies | Space: O(1)
   */
  delete(key: K): boolean { if (!this.values.has(key)) return false; const c=this.counts.get(key)!; this.values.delete(key); this.counts.delete(key); const s=this.freq.get(c)!; s.delete(key); if (s.size===0) this.freq.delete(c); if (this.minFreq===c && !this.freq.has(c)) this.minFreq = Math.min(...Array.from(this.freq.keys(), n => n)); return true; }

  /**
   * Clears all items and resets the cache.
   *
   * @complexity Time: O(1) | Space: O(1)
   */
  clear(): void { this.values.clear(); this.counts.clear(); this.freq.clear(); this.minFreq=0; }

  /**
   * Serializes the cache's state to a JSON string.
   *
   * @returns The JSON representation.
   * @complexity Time: O(n) | Space: O(n)
   */
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
