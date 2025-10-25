/**
 * Trie Adapter for Backward Compatibility
 *
 * Provides a backward-compatible interface for the Trie data structure
 * that delegates to the new Trie implementation while maintaining
 * the legacy API.
 *
 * @module compatibility/adapters/TrieAdapter
 */

import { Trie } from '../../data-structures/trie/trie';
import { DeprecationWarning } from '../utils/DeprecationWarning';

/**
 * Legacy Trie interface for backward compatibility
 * @deprecated Use Trie from data-structures/trie instead
 */
export class TrieAdapter<T> {
  private newTrie: Trie<T>;

  /**
   * Creates a new TrieAdapter
   * @deprecated Use new Trie() from data-structures/trie instead
   */
  constructor() {
    DeprecationWarning.warn(
      'TrieAdapter',
      'Trie from data-structures/trie',
      '2.0.0'
    );
    this.newTrie = new Trie<T>();
  }

  /**
   * Returns the number of elements in the trie
   * @returns The number of elements
   */
  get length(): number {
    return this.newTrie.size;
  }

  /**
   * Checks if the trie contains a key
   * @param key The key to check
   * @returns True if the key exists, false otherwise
   */
  contains(key: string): boolean {
    return this.newTrie.get(key) !== null;
  }

  /**
   * Adds a key-value pair to the trie
   * @param key The key to add
   * @param value The value to associate
   */
  add(key: string, value: T): void {
    this.newTrie.add(key, value);
  }

  /**
   * Maps over all keys with a given prefix
   * @param prefix The prefix to search for
   * @param func The function to apply to each match
   * @returns Array of mapped results
   */
  map<U>(prefix: string, func: (key: string, value: T) => U): U[] {
    return this.newTrie.map(prefix, func);
  }

  /**
   * Gets the value associated with a key
   * @param key The key to search for
   * @returns The value if found, null otherwise
   */
  get(key: string): T | null {
    return this.newTrie.get(key);
  }

  /**
   * Removes a key from the trie
   * @param key The key to remove
   * @returns True if removed, false otherwise
   */
  remove(key: string): boolean {
    try {
      this.newTrie.remove(key);
      return true;
    } catch {
      return false;
    }
  }
}
