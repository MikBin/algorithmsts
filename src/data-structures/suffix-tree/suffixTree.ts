import { BaseDataStructure } from '../../core/abstracts/BaseDataStructure';
import { IIterator } from '../../core/interfaces/IIterator';
import { IUkkonenAlgorithm } from './interfaces';
import { SuffixTreeIterator } from './iterator';

/**
 * Suffix tree node implementation
 */
export class SuffixTreeNode<T> {
  /** A map of transitions from this node, where the key is the first character of the edge label */
  public transitions: Record<string, [SuffixTreeNode<T>, number, number]> = {};
  /** A link to another node in the tree, used in Ukkonen's algorithm */
  public suffixLink: SuffixTreeNode<T> | null = null;
  /** The total number of transitions from this node */
  public totalTransitions: number = 0;
  /** A flag indicating whether this node represents a terminal suffix */
  public isTerminal: boolean = false;

  /**
   * Creates an instance of SuffixTreeNode
   */
  constructor() {}

  /**
   * Adds a transition to this node
   * @param node The node to transition to
   * @param range The range of indices in the text that the edge label represents
   * @param t The first character of the edge label
   */
  public addTransition(node: SuffixTreeNode<T>, [start, end]: [number, number], t: string): void {
    this.transitions[t] = [node, start, end];
    this.totalTransitions++;
  }

  /**
   * Checks if this node is a leaf node (i.e., has no transitions)
   * @returns True if this node is a leaf, false otherwise
   */
  public isLeaf(): boolean {
    return this.totalTransitions === 0;
  }
}

/**
 * Implements Ukkonen's algorithm for building a suffix tree
 */
export class UkkonenAlgorithm<T> implements IUkkonenAlgorithm<T> {
  private text: string = '';
  private tree: SuffixTree<T>;
  private root: SuffixTreeNode<T>;
  private bottom: SuffixTreeNode<T>;
  private activeNode: SuffixTreeNode<T>;
  private activeEdge: number = 0;
  private activeLength: number = 0;
  private remaining: number = 0;
  private position: number = -1;

  /**
   * Creates an instance of UkkonenAlgorithm
   * @param tree The suffix tree to build
   */
  constructor(tree: SuffixTree<T>) {
    this.tree = tree;
    this.root = this.tree.root;
    this.bottom = new SuffixTreeNode<T>();
    this.root.suffixLink = this.bottom;
    this.activeNode = this.root;
  }

  /**
   * Adds a string to the suffix tree using Ukkonen's algorithm
   * @param _str The string to add (unused, kept for interface compatibility)
   * @param startPos The starting index of the new string in the text
   * @param newText The updated text
   */
  public addString(_str: string, startPos: number, newText: string): void {
    const oldLength = this.text.length;
    this.text = newText;

    // Set up bottom node transitions for new characters
    for (let j = oldLength; j < this.text.length; j++) {
      if (!this.bottom.transitions[this.text[j]]) {
        this.bottom.addTransition(this.root, [j, j], this.text[j]);
      }
    }

    // Build suffix tree character by character for new portion
    for (let i = oldLength; i < this.text.length; i++) {
      this.addChar(i);
    }
  }

  /**
   * Adds a character to the suffix tree
   * @param pos The position of the character to add
   */
  private addChar(pos: number): void {
    this.position = pos;
    this.remaining++;
    let lastCreatedNode: SuffixTreeNode<T> | null = null;

    while (this.remaining > 0) {
      if (this.activeLength === 0) {
        this.activeEdge = pos;
      }

      const edgeStartChar = this.text[this.activeEdge];

      if (!this.activeNode.transitions[edgeStartChar]) {
        // Rule 2: No edge starting with this character, create new leaf
        const newLeaf = new SuffixTreeNode<T>();
        this.activeNode.addTransition(newLeaf, [pos, Infinity], edgeStartChar);

        if (lastCreatedNode !== null) {
          lastCreatedNode.suffixLink = this.activeNode;
          lastCreatedNode = null;
        }
      } else {
        // Edge exists, need to walk down or split
        const [nextNode, edgeStart, edgeEnd] = this.activeNode.transitions[edgeStartChar];
        const edgeLength = (edgeEnd === Infinity ? this.position : edgeEnd) - edgeStart + 1;

        // Walk down if active length exceeds edge length
        if (this.activeLength >= edgeLength) {
          this.activeNode = nextNode;
          this.activeLength -= edgeLength;
          this.activeEdge += edgeLength;
          continue;
        }

        // Check if current character matches
        const nextChar = this.text[edgeStart + this.activeLength];
        if (nextChar === this.text[pos]) {
          // Rule 3: Character already in tree
          if (lastCreatedNode !== null && this.activeNode !== this.root) {
            lastCreatedNode.suffixLink = this.activeNode;
            lastCreatedNode = null;
          }
          this.activeLength++;
          break; // Rule 3 extension
        }

        // Rule 2: Split the edge
        const splitNode = new SuffixTreeNode<T>();
        const newLeaf = new SuffixTreeNode<T>();

        // Update existing edge to point to split node
        this.activeNode.addTransition(
          splitNode,
          [edgeStart, edgeStart + this.activeLength - 1],
          edgeStartChar
        );

        // Add new leaf from split node
        splitNode.addTransition(newLeaf, [pos, Infinity], this.text[pos]);

        // Add rest of original edge from split node
        splitNode.addTransition(
          nextNode,
          [edgeStart + this.activeLength, edgeEnd],
          nextChar
        );

        if (lastCreatedNode !== null) {
          lastCreatedNode.suffixLink = splitNode;
        }
        lastCreatedNode = splitNode;
      }

      this.remaining--;

      if (this.activeNode === this.root && this.activeLength > 0) {
        this.activeLength--;
        this.activeEdge = pos - this.remaining + 1;
      } else if (this.activeNode !== this.root) {
        this.activeNode = this.activeNode.suffixLink || this.root;
      }
    }
  }
}

/**
 * Suffix tree data structure for efficient string operations
 * @template T The type of values stored in the suffix tree
 */
export class SuffixTree<T> extends BaseDataStructure<T> {
  /** The text for which the suffix tree is built */
  public text: string = '';
  /** The root of the suffix tree */
  public root: SuffixTreeNode<T> = new SuffixTreeNode();
  /** A list of strings that have been added to the tree */
  public stringsList: string[] = [];
  /** A list of separators used to join strings */
  public separators: string[] = [];

  private algorithm: UkkonenAlgorithm<T>;

  /**
   * Creates an instance of SuffixTree
   * @param wholeText The initial text to build the suffix tree from
   */
  constructor(wholeText: string) {
    super();
    this.algorithm = new UkkonenAlgorithm<T>(this);
    if (wholeText && wholeText.length) {
      this.addString(wholeText);
    }
  }

  /**
   * Returns the number of elements in the suffix tree
   * @returns The number of elements
   * @complexity O(1)
   */
  get size(): number {
    return this._size;
  }

  /**
   * Adds a string to the suffix tree
   * @param str The string to add
   * @returns The SuffixTree instance
   * @complexity O(n) where n is the length of the string
   */
  public addString(str: string): SuffixTree<T> {
    const temp = this.text.length;
    // Add separator if not first string, then add string with terminator
    const separator = temp ? '⚇' : '';
    this.text += separator + str + '$';
    this.algorithm.addString(str, temp, this.text);
    this._size++;
    return this;
  }

  /**
   * Finds a substring in the suffix tree
   * @param str The substring to find
   * @param node The node to start the search from
   * @param matchedSoFar The number of characters matched so far
   * @returns The starting index of the substring in the text, or -1 if not found
   * @complexity O(m) where m is the length of the substring
   */
  public findSubstring(str: string, node = this.root, matchedSoFar = 0): number {
    // Don't search for strings containing terminators or separators
    if (str.includes('$') || str.includes('⚇')) {
      return -1;
    }

    const L = this.text.length;
    for (const t in node.transitions) {
      let [nextNode, a, b] = node.transitions[t];
      const effectiveB = b === Infinity ? L : b + 1;
      let sub = this.text.substring(a, effectiveB);

      // Try to match str against sub, considering that sub might contain terminators
      let i = 0, j = 0;
      while (i < str.length && j < sub.length) {
        if (sub[j] === '$' || sub[j] === '⚇') {
          // Skip terminators/separators in the edge
          j++;
          continue;
        }
        if (str[i] !== sub[j]) {
          break;
        }
        i++;
        j++;
      }

      if (i === str.length) {
        // Complete match
        return a - matchedSoFar;
      } else if (i > 0) {
        // Partial match, need to continue down the tree
        return this.findSubstring(str.substring(i), nextNode, matchedSoFar + i);
      }
    }
    return -1;
  }

  /**
   * Counts the number of leaves in the subtree rooted at the given node
   * @param node The root of the subtree
   * @returns The number of leaves
   * @complexity O(n) where n is the number of nodes in the subtree
   */
  public countLeaves(node: SuffixTreeNode<T>): number {
    if (node.isLeaf()) {
      return 1;
    }
    let count = 0;
    for (const t in node.transitions) {
      const [nextNode] = node.transitions[t];
      count += this.countLeaves(nextNode);
    }
    return count;
  }

  /**
   * Finds all occurrences of a substring in the suffix tree
   * @param str The substring to find
   * @param node The node to start the search from
   * @param matchedSoFar The number of characters matched so far
   * @returns A tuple containing the starting index of the substring, the node where the search ended, and the number of occurrences
   * @complexity O(m + k) where m is the length of the substring and k is the number of occurrences
   */
  public findAllSubstring(
    str: string,
    node = this.root,
    matchedSoFar = 0
  ): [number, SuffixTreeNode<T> | null, number] {
    // Don't search for strings containing terminators or separators
    if (str.includes('$') || str.includes('⚇')) {
      return [-1, null, 0];
    }

    const L = this.text.length;
    for (const t in node.transitions) {
      let [nextNode, a, b] = node.transitions[t];
      const effectiveB = b === Infinity ? L : b + 1;
      const sub = this.text.substring(a, effectiveB);

      // Try to match str against sub, considering that sub might contain terminators
      let i = 0, j = 0;
      while (i < str.length && j < sub.length) {
        if (sub[j] === '$' || sub[j] === '⚇') {
          j++;
          continue;
        }
        if (str[i] !== sub[j]) {
          break;
        }
        i++;
        j++;
      }

      if (i === str.length) {
        // Complete match
        return [a - matchedSoFar, nextNode, this.countLeaves(nextNode)];
      } else if (i > 0) {
        // Partial match, continue down the tree
        return this.findAllSubstring(str.substring(i), nextNode, matchedSoFar + i);
      }
    }
    return [-1, null, 0];
  }

  /**
   * Finds the longest repeated substrings in the text
   * @param n The number of longest repeated substrings to return
   * @returns An array of the longest repeated substrings
   * @complexity O(n) where n is the number of nodes in the tree
   */
  public findLongestRepeatedSubstrings(n = 3): string[] {
    const [text, root] = [this.text, this.root];
    const L = text.length;
    const longestSubstrings: string[] = [];
    (function traverse(node: SuffixTreeNode<T>, curStr = '') {
      if (node.isLeaf()) {
        return;
      }
      for (const t in node.transitions) {
        const [s, a, b] = node.transitions[t];
        if (!s.isLeaf()) {
          let edgeLabel = text.substring(a, b === Infinity ? L : b + 1);
          // Remove terminators and separators
          edgeLabel = edgeLabel.replace(/[$⚇]/g, '');
          const newStr = curStr + edgeLabel;
          // Only add non-empty strings
          if (newStr.length > 0) {
            longestSubstrings.push(newStr);
          }
          traverse(s, newStr);
        }
      }
    })(root);
    return longestSubstrings.sort((a, b) => b.length - a.length).slice(0, n);
  }

  /**
   * Returns a string representation of the suffix tree
   * @returns A string representation of the suffix tree
   */
  public toString(): string {
    const text = this.text;
    function traverse(node: SuffixTreeNode<T>, offset = '', ret = ''): string {
      for (const t in node.transitions) {
        const [s, a, b] = node.transitions[t];
        ret += `${offset}["${text.substring(
          a,
          b === Infinity ? text.length : b + 1
        )}", ${a}, ${b}]\r\n`;
        ret += traverse(s, `${offset}\t`);
      }
      return ret;
    }
    const res = traverse(this.root);
    return res;
  }


  /**
   * Creates an iterator for this data structure
   * @returns An iterator over the tree nodes
   */
  iterator(): IIterator<T> {
    return new SuffixTreeIterator<T>(this.root);
  }

  /**
   * Checks if the data structure contains a specific element
   * For SuffixTree, this always returns false as it's not a standard containment check
   * @param element The element to search for
   * @returns Always false
   * @complexity O(1)
   */
  contains(element: T): boolean {
    // Suffix trees don't support direct containment checks
    return false;
  }

  /**
   * Converts the data structure to an array
   * @returns An array representation of the tree nodes
   * @complexity O(n) where n is the number of nodes
   */
  toArray(): T[] {
    const result: T[] = [];
    const iterator = this.iterator();
    while (iterator.hasNext()) {
      result.push(iterator.next());
    }
    return result;
  }

  /**
   * Clears all elements from the suffix tree
   * @complexity O(1)
   */
  clear(): void {
    this.root = new SuffixTreeNode<T>();
    this.text = '';
    this.stringsList = [];
    this.separators = [];
    this._size = 0;
  }
}
