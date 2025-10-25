/**
 * Represents a node in the Suffix Tree
 */
export interface SuffixTreeNode<T> {
  /** A map of transitions from this node, where the key is the first character of the edge label */
  transitions: Record<string, [SuffixTreeNode<T>, number, number]>;
  /** A link to another node in the tree, used in Ukkonen's algorithm */
  suffixLink: SuffixTreeNode<T> | null;
  /** The total number of transitions from this node */
  totalTransitions: number;
  /** A flag indicating whether this node represents a terminal suffix */
  isTerminal: boolean;
}

/**
 * Ukkonen's algorithm for building suffix trees
 */
export interface IUkkonenAlgorithm<T> {
  /** Adds a string to the suffix tree */
  addString(str: string, startPos: number, newText: string): void;
}
