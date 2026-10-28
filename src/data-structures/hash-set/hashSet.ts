import { HashMap, Hasher, Equality } from "../hash-map";

/**
 * Represents a Hash Set, leveraging a HashMap for fast key lookups and ensuring unique elements.
 */
export class HashSet<T> {
  private map: HashMap<T, true>;

  /**
   * Initializes a new Hash Set.
   *
   * @param hasher Function to compute hash codes for elements.
   * @param equals Function to determine equality between elements.
   * @complexity Time: O(1) | Space: O(1)
   */
  constructor(hasher?: Hasher<T>, equals?: Equality<T>) {
    this.map = new HashMap<T, true>(hasher, equals);
  }

  /**
   * Gets the number of elements in the set.
   *
   * @returns The set size.
   * @complexity Time: O(1) | Space: O(1)
   */
  get size(): number {
    return this.map.size;
  }

  /**
   * Adds an element to the set. If it already exists, no changes are made.
   *
   * @param v The element to add.
   * @complexity Time: O(1) amortized | Space: O(1)
   */
  add(v: T): void {
    this.map.set(v, true);
  }

  /**
   * Checks if the set contains the specified element.
   *
   * @param v The element to check.
   * @returns True if the element exists, false otherwise.
   * @complexity Time: O(1) average | Space: O(1)
   */
  has(v: T): boolean {
    return this.map.has(v);
  }

  /**
   * Removes an element from the set.
   *
   * @param v The element to remove.
   * @returns True if the element was removed, false if not found.
   * @complexity Time: O(1) average | Space: O(1)
   */
  delete(v: T): boolean {
    return this.map.delete(v);
  }

  /**
   * Clears all elements from the set.
   *
   * @complexity Time: O(1) | Space: O(1)
   */
  clear(): void {
    this.map.clear();
  }

  /**
   * Returns an array of all elements in the set.
   *
   * @returns An array containing the elements.
   * @complexity Time: O(n) | Space: O(n)
   */
  values(): T[] {
    return this.map.keys();
  }

  /**
   * Returns an array of all elements in the set (alias for values).
   *
   * @returns An array containing the elements.
   * @complexity Time: O(n) | Space: O(n)
   */
  toArray(): T[] {
    return this.values();
  }

  /**
   * Serializes the set's internal state to a JSON string.
   *
   * @returns The JSON representation.
   * @complexity Time: O(n) | Space: O(n)
   */
  toJson(): string {
    return this.map.toJson();
  }
}
