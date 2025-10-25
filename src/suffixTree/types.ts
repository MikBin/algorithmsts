/**
 * Shared types for Suffix Tree implementation
 */

/**
 * Represents a node in the Suffix Tree.
 */
export class SuffixTreeNode<T> {
  // A map of transitions from this node, where the key is the first character of the edge label.
  public transitions: Record<string, [SuffixTreeNode<T>, number, number]> = {}
  // A link to another node in the tree, used in Ukkonen's algorithm.
  public suffixLink: SuffixTreeNode<T> | null = null
  // The total number of transitions from this node.
  public totalTransitions: number = 0
  // A flag indicating whether this node represents a terminal suffix.
  public isTerminal: boolean = false

  /**
   * Creates an instance of SuffixTreeNode.
   */
  constructor() {}

  /**
   * Adds a transition to this node.
   * @param node The node to transition to.
   * @param range The range of indices in the text that the edge label represents.
   * @param t The first character of the edge label.
   */
  public addTransition(node: SuffixTreeNode<T>, [start, end]: [number, number], t: string): void {
    this.transitions[t] = [node, start, end]
    this.totalTransitions++
  }

  /**
   * Checks if this node is a leaf node (i.e., has no transitions).
   * @returns True if this node is a leaf, false otherwise.
   */
  public isLeaf(): boolean {
    return this.totalTransitions === 0
  }
}
