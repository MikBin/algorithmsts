import { UkkonenAlgorithm } from './UkkonenAlgorithm'

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

/**
 * Represents a Suffix Tree, a data structure used for efficient string searching.
 */
export class SuffixTree<T> {
  // The text for which the suffix tree is built.
  public text: string = ''
  // The root of the suffix tree.
  public root: SuffixTreeNode<T> = new SuffixTreeNode()
  // A list of strings that have been added to the tree.
  public stringsList: string[] = []
  // A list of separators used to join strings.
  public separators: string[] = []

  private algorithm: UkkonenAlgorithm<T>

  /**
   * Creates an instance of SuffixTree.
   * @param wholeText The initial text to build the suffix tree from.
   */
  constructor(wholeText: string) {
    this.algorithm = new UkkonenAlgorithm<T>(this)
    if (wholeText && wholeText.length) {
      this.addString(wholeText)
    }
  }

  /**
   * Adds a string to the suffix tree.
   * @param str The string to add.
   * @returns The SuffixTree instance.
   */
  public addString(str: string): SuffixTree<T> {
    const temp = this.text.length
    this.text += temp ? '⚇' + str : str
    this.algorithm.addString(str, temp, this.text)
    return this
  }

  /**
   * Finds a substring in the suffix tree.
   * @param str The substring to find.
   * @param node The node to start the search from.
   * @param matchedSoFar The number of characters matched so far.
   * @returns The starting index of the substring in the text, or -1 if not found.
   */
  public findSubstring(str: string, node = this.root, matchedSoFar = 0): number {
    const L = this.text.length
    for (const t in node.transitions) {
      let [nextNode, a, b] = node.transitions[t]
      const effectiveB = b === Infinity ? L : b + 1
      const sub = this.text.substring(a, effectiveB)
      const offset = effectiveB - a
      if (str.startsWith(sub)) {
        if (str.length === sub.length) {
          return a - matchedSoFar
        } else {
          return this.findSubstring(str.substring(offset), nextNode, matchedSoFar + offset)
        }
      } else if (sub.startsWith(str)) {
        return a - matchedSoFar
      }
    }
    return -1
  }

  /**
   * Counts the number of leaves in the subtree rooted at the given node.
   * @param node The root of the subtree.
   * @returns The number of leaves.
   */
  public countLeaves(node: SuffixTreeNode<T>): number {
    if (node.isLeaf()) {
      return 1
    }
    let count = 0
    for (const t in node.transitions) {
      const [nextNode] = node.transitions[t]
      count += this.countLeaves(nextNode)
    }
    return count
  }

  /**
   * Finds all occurrences of a substring in the suffix tree.
   * @param str The substring to find.
   * @param node The node to start the search from.
   * @param matchedSoFar The number of characters matched so far.
   * @returns A tuple containing the starting index of the substring, the node where the search ended, and the number of occurrences.
   */
  public findAllSubstring(
    str: string,
    node = this.root,
    matchedSoFar = 0
  ): [number, SuffixTreeNode<T> | null, number] {
    const L = this.text.length
    for (const t in node.transitions) {
      let [nextNode, a, b] = node.transitions[t]
      const effectiveB = b === Infinity ? L : b + 1
      const sub = this.text.substring(a, effectiveB)
      const offset = effectiveB - a
      if (str.startsWith(sub)) {
        if (str.length === sub.length) {
          return [a - matchedSoFar, nextNode, this.countLeaves(nextNode)]
        } else {
          return this.findAllSubstring(str.substring(offset), nextNode, matchedSoFar + offset)
        }
      } else if (sub.startsWith(str)) {
        return [a - matchedSoFar, nextNode, this.countLeaves(nextNode)]
      }
    }
    return [-1, null, 0]
  }

  /**
   * Finds the longest repeated substrings in the text.
   * @param n The number of longest repeated substrings to return.
   * @returns An array of the longest repeated substrings.
   */
  public findLongestRepeatedSubstrings(n = 3): string[] {
    const [text, root] = [this.text, this.root]
    const L = text.length
    const longestSubstrings: string[] = []
    ;(function traverse(node, curStr = '') {
      if (node.isLeaf()) {
        return
      }
      for (const t in node.transitions) {
        const [s, a, b] = node.transitions[t]
        if (!s.isLeaf()) {
          const edgeLabel = text.substring(a, b === Infinity ? L : b + 1)
          const newStr = curStr + edgeLabel
          longestSubstrings.push(newStr)
          traverse(s, newStr)
        }
      }
    })(root)
    return longestSubstrings.sort((a, b) => b.length - a.length).slice(0, n)
  }

  /**
   * Returns a string representation of the suffix tree.
   * @returns A string representation of the suffix tree.
   */
  public toString(): string {
    const text = this.text
    function traverse(node: SuffixTreeNode<T>, offset = '', ret = ''): string {
      for (const t in node.transitions) {
        const [s, a, b] = node.transitions[t]
        ret += `${offset}["${text.substring(
          a,
          b === Infinity ? text.length : b + 1
        )}", ${a}, ${b}]\r\n`
        ret += traverse(s, `${offset}\t`)
      }
      return ret
    }
    const res = traverse(this.root)
    return res
  }

  /**
   * Prints the suffix tree to the console.
   */
  public print(): void {
    console.log(this.toString())
  }
}