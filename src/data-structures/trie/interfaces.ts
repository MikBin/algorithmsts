/**
 * Trie node interface
 */
export interface TrieNode<T> {
  /** Whether this node represents the end of a word */
  terminal: boolean;
  /** The value stored at this node */
  value: T | null;
  /** Map of child nodes keyed by character */
  children: Map<string, TrieNode<T>>;
}
