/**
 * Represents a Least Recently Used (LRU) Cache, which evicts the oldest accessed items when capacity is reached.
 * Implemented natively using the insertion-order iteration guarantee of ES6 Map.
 */
export class LRUCache<K, V> {
  private map = new Map<K, V>();

  /**
   * Initializes a new LRU Cache with a specified capacity.
   *
   * @param capacity The maximum number of elements the cache can hold.
   * @complexity Time: O(1) | Space: O(1)
   */
  constructor(private capacity: number) { if (capacity<=0) throw new Error('capacity must be > 0'); }

  /**
   * Retrieves the value associated with the key, refreshing its "recently used" status.
   *
   * @param key The key to look up.
   * @returns The associated value, or undefined if not found.
   * @complexity Time: O(1) | Space: O(1)
   */
  get(key: K): V | undefined { if (!this.map.has(key)) return undefined; const v = this.map.get(key)!; this.map.delete(key); this.map.set(key, v); return v; }

  /**
   * Inserts or updates a key-value pair, marking it as the most recently used.
   * If capacity is exceeded, the least recently used item is evicted.
   *
   * @param key The key to insert or update.
   * @param value The value to associate with the key.
   * @complexity Time: O(1) | Space: O(1)
   */
  set(key: K, value: V): void { if (this.map.has(key)) this.map.delete(key); this.map.set(key, value); if (this.map.size > this.capacity) { const it = this.map.keys().next(); if (!it.done) this.map.delete(it.value as K); } }

  /**
   * Checks if the cache contains the specified key without updating its recency.
   *
   * @param key The key to check.
   * @returns True if the key exists, false otherwise.
   * @complexity Time: O(1) | Space: O(1)
   */
  has(key: K): boolean { return this.map.has(key); }

  /**
   * Removes a key-value pair from the cache.
   *
   * @param key The key to remove.
   * @returns True if the key was removed, false if it didn't exist.
   * @complexity Time: O(1) | Space: O(1)
   */
  delete(key: K): boolean { return this.map.delete(key); }

  /**
   * Clears all items from the cache.
   *
   * @complexity Time: O(1) | Space: O(1)
   */
  clear(): void { this.map.clear(); }

  /**
   * Gets the current number of items in the cache.
   *
   * @returns The cache size.
   * @complexity Time: O(1) | Space: O(1)
   */
  size(): number { return this.map.size; }

  /**
   * Returns an array of keys in the cache, ordered from least to most recently used.
   *
   * @returns The array of keys.
   * @complexity Time: O(n) | Space: O(n)
   */
  keys(): K[] { return Array.from(this.map.keys()); }

  /**
   * Returns an array of values in the cache, ordered from least to most recently used.
   *
   * @returns The array of values.
   * @complexity Time: O(n) | Space: O(n)
   */
  values(): V[] { return Array.from(this.map.values()); }

  /**
   * Serializes the cache entries to a JSON string.
   *
   * @returns The JSON representation.
   * @complexity Time: O(n) | Space: O(n)
   */
  toJson(): string {
    return JSON.stringify(Array.from(this.map.entries()));
  }
}
