import { BaseDataStructure } from '../../core/abstracts/BaseDataStructure';
import { IIterator } from '../../core/interfaces/IIterator';
import { TrieIterator } from './iterator';

/**
 * Trie node implementation
 */
export class TrieNode<T> {
  /** Whether this node represents the end of a word */
  public terminal: boolean;
  /** The value stored at this node */
  public value: T | null;
  /** Map of child nodes keyed by character */
  public children: Map<string, TrieNode<T>>;

  /**
   * Creates a new TrieNode
   */
  constructor() {
    this.terminal = false;
    this.children = new Map();
    this.value = null;
  }

  /**
   * Marks this node as terminal
   */
  setTerminal(): void {
    this.terminal = true;
  }

  /**
   * Sets the value for this node
   * @param v The value to set
   */
  setValue(v: T): void {
    this.value = v;
  }
}

/**
 * Trie data structure implementation for efficient string operations
 * @template T The type of values stored in the trie
 */
export class Trie<T> extends BaseDataStructure<T> {
  private root: TrieNode<T>;

  /**
   * Creates a new empty Trie
   */
  constructor() {
    super();
    this.root = new TrieNode<T>();
    this._size = 0;
  }

  /**
   * Returns the number of elements in the trie
   * @returns The number of elements
   * @complexity O(1)
   */
  get size(): number {
    return this._size;
  }

  /**
   * Checks if the data structure contains a specific element
   * For Trie, this checks if the element is a string key
   * @param element The element to search for
   * @returns True if the element is found, false otherwise
   * @complexity O(m) where m is the length of the key
   */
  contains(element: T): boolean {
    if (typeof element === 'string') {
      const node = this.getNode(element);
      return !!node;
    }
    return false;
  }

  /**
   * Adds a key-value pair to the trie
   * @param key The key to add
   * @param value The value to associate with the key
   * @complexity O(m) where m is the length of the key
   */
  add(key: string, value: T): void {
    this.addRecursive(key, value, 0, this.root);
  }

  /**
   * Recursive helper for adding a key-value pair
   * @param key The key to add
   * @param value The value to associate
   * @param index Current index in the key
   * @param node Current node
   */
  private addRecursive(key: string, value: T, index: number, node: TrieNode<T>): void {
    const k = key.charAt(index);
    let child = node.children.get(k);
    if (!child) {
      child = new TrieNode<T>();
      node.children.set(k, child);
    }
    if (index === key.length - 1) {
      child.setValue(value);
      child.setTerminal();
      this._size++;
      return;
    }
    this.addRecursive(key, value, ++index, child);
  }

  /**
   * Maps over all keys with a given prefix
   * @param prefix The prefix to search for
   * @param func The function to apply to each matching key-value pair
   * @returns Array of mapped results
   * @complexity O(n) where n is the number of nodes in the subtree
   */
  map<U>(prefix: string, func: (key: string, value: T) => U): U[] {
    const mapped: U[] = [];
    const node = this.getNode(prefix);
    if (node) {
      this.mapRecursive(prefix, node, func, mapped);
    }
    return mapped;
  }

  /**
   * Recursive helper for mapping over nodes
   * @param key Current key
   * @param node Current node
   * @param func Mapping function
   * @param mapped Results array
   */
  private mapRecursive<U>(
    key: string,
    node: TrieNode<T>,
    func: (key: string, value: T) => U,
    mapped: U[]
  ): void {
    if (node.terminal) {
      mapped.push(func(key, node.value as T));
    }
    for (const [char, childNode] of node.children) {
      this.mapRecursive(key + char, childNode, func, mapped);
    }
  }

  /**
   * Gets the node for a given key
   * @param key The key to search for
   * @returns The node if found, null otherwise
   * @complexity O(m) where m is the length of the key
   */
  private getNode(key: string): TrieNode<T> | null {
    let node: TrieNode<T> = this.root;
    const l = key.length;
    for (let i = 0; i < l; i++) {
      const c = key.charAt(i);
      if (!node.children.has(c)) return null;
      node = node.children.get(c)!;
    }
    return node;
  }

  /**
   * Gets the value associated with a key
   * @param key The key to search for
   * @returns The value if found, null otherwise
   * @complexity O(m) where m is the length of the key
   */
  get(key: string): T | null {
    const node: TrieNode<T> | null = this.getNode(key);
    return node ? node.value : null;
  }

  /**
   * Checks if a key exists in the trie (is terminal)
   * @param key The key to check
   * @returns True if the key exists and is terminal, false otherwise
   * @complexity O(m) where m is the length of the key
   */
  hasKey(key: string): boolean {
    const node = this.getNode(key);
    return node ? node.terminal : false;
  }

  /**
   * Removes a key from the trie
   * @param key The key to remove
   * @returns True if the key was removed, false otherwise
   * @complexity O(m) where m is the length of the key
   */
  remove(key: string): boolean {
    const node = this.getNode(key);
    if (node) {
      node.terminal = false;
      this._size--;
      return true;
    }
    return false;
  }

  /**
   * Clears all elements from the trie
   * @complexity O(1)
   */
  clear(): void {
    this.root = new TrieNode<T>();
    this._size = 0;
  }

  /**
   * Creates an iterator for this data structure
   * @returns An iterator over the values in the trie
   */
  iterator(): IIterator<T> {
    return new TrieIterator<T>(this.root);
  }

  /**
   * Converts the data structure to an array
   * @returns An array containing all values
   * @complexity O(n) where n is the number of elements
   */
  toArray(): T[] {
    const result: T[] = [];
    const iterator = this.iterator();
    while (iterator.hasNext()) {
      result.push(iterator.next());
    }
    return result;
  }
}
