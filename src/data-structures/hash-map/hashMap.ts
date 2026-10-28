import { fnv1a32, jsonSerializer } from "../../core/utils/HashUtils";

export type Hasher<K> = (key: K) => number;
export type Equality<K> = (a: K, b: K) => boolean;

const defaultHash: Hasher<unknown> = (k) => fnv1a32(jsonSerializer(k));
const defaultEq: Equality<unknown> = (a, b) => a === b;

/**
 * Represents a Hash Map using separate chaining for collision resolution.
 */
export class HashMap<K, V> {
  private buckets: [K, V][][] = new Array(16).fill(null).map(() => []);
  private _size = 0;
  private _loadFactor = 0.75;

  /**
   * Initializes a new Hash Map.
   *
   * @param hasher Function to compute hash codes for keys.
   * @param equals Function to determine equality between keys.
   * @complexity Time: O(1) | Space: O(1)
   */
  constructor(
    private hasher: Hasher<K> = defaultHash,
    private equals: Equality<K> = defaultEq,
  ) {}

  /**
   * Gets the number of key-value pairs in the map.
   *
   * @returns The map size.
   * @complexity Time: O(1) | Space: O(1)
   */
  get size(): number {
    return this._size;
  }
  private index(key: K, cap = this.buckets.length): number {
    return (this.hasher(key) & 0x7fffffff) % cap;
  }
  private rehash(newCap: number) {
    const nb: [K, V][][] = new Array(newCap).fill(null).map(() => []);
    for (const bucket of this.buckets)
      for (const [k, v] of bucket) nb[this.index(k, newCap)].push([k, v]);
    this.buckets = nb;
  }
  private ensureCapacity() {
    if (this._size / this.buckets.length > this._loadFactor) this.rehash(this.buckets.length << 1);
  }

  /**
   * Sets a key-value pair in the map. Updates the value if the key exists.
   *
   * @param key The key to insert or update.
   * @param value The value associated with the key.
   * @complexity Time: O(1) amortized | Space: O(1)
   */
  set(key: K, value: V): void {
    this.ensureCapacity();
    const i = this.index(key);
    const b = this.buckets[i];
    for (let j = 0; j < b.length; j++) {
      if (this.equals(b[j][0], key)) {
        b[j][1] = value;
        return;
      }
    }
    b.push([key, value]);
    this._size++;
  }

  /**
   * Retrieves the value associated with the given key.
   *
   * @param key The key to look up.
   * @returns The associated value, or undefined if not found.
   * @complexity Time: O(1) average | Space: O(1)
   */
  get(key: K): V | undefined {
    const b = this.buckets[this.index(key)];
    for (const [k, v] of b) if (this.equals(k, key)) return v;
    return undefined;
  }

  /**
   * Checks if the map contains the given key.
   *
   * @param key The key to check.
   * @returns True if the key exists, false otherwise.
   * @complexity Time: O(1) average | Space: O(1)
   */
  has(key: K): boolean {
    const b = this.buckets[this.index(key)];
    for (const [k] of b) if (this.equals(k, key)) return true;
    return false;
  }

  /**
   * Removes a key-value pair from the map.
   *
   * @param key The key to remove.
   * @returns True if the key was removed, false if not found.
   * @complexity Time: O(1) average | Space: O(1)
   */
  delete(key: K): boolean {
    const i = this.index(key);
    const b = this.buckets[i];
    for (let j = 0; j < b.length; j++) {
      if (this.equals(b[j][0], key)) {
        b.splice(j, 1);
        this._size--;
        return true;
      }
    }
    return false;
  }

  /**
   * Clears all entries from the map.
   *
   * @complexity Time: O(1) | Space: O(1)
   */
  clear(): void {
    this.buckets = new Array(16).fill(null).map(() => []);
    this._size = 0;
  }

  /**
   * Returns an array of all keys in the map.
   *
   * @returns An array of keys.
   * @complexity Time: O(n) | Space: O(n)
   */
  keys(): K[] {
    const out: K[] = [];
    for (const b of this.buckets) for (const [k] of b) out.push(k);
    return out;
  }

  /**
   * Returns an array of all values in the map.
   *
   * @returns An array of values.
   * @complexity Time: O(n) | Space: O(n)
   */
  values(): V[] {
    const out: V[] = [];
    for (const b of this.buckets) for (const [, v] of b) out.push(v);
    return out;
  }

  /**
   * Returns an array of all key-value pairs in the map.
   *
   * @returns An array of [key, value] tuples.
   * @complexity Time: O(n) | Space: O(n)
   */
  entries(): [K, V][] {
    const out: [K, V][] = [];
    for (const b of this.buckets) for (const [k, v] of b) out.push([k, v]);
    return out;
  }

  /**
   * Executes a provided function once per each key/value pair in the map.
   *
   * @param fn The function to execute.
   * @complexity Time: O(n) | Space: O(n)
   */
  forEach(fn: (value: V, key: K) => void): void {
    for (const [k, v] of this.entries()) fn(v, k);
  }

  /**
   * Serializes the map's internal buckets to a JSON string.
   *
   * @returns The JSON representation.
   * @complexity Time: O(n) | Space: O(n)
   */
  toJson(): string {
    return JSON.stringify(this.buckets);
  }
}
