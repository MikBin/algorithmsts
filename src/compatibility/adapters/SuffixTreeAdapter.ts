/**
 * SuffixTree Adapter for Backward Compatibility
 *
 * Provides a backward-compatible interface for the SuffixTree data structure
 * that delegates to the new SuffixTree implementation while maintaining
 * the legacy API.
 *
 * @module compatibility/adapters/SuffixTreeAdapter
 */

import { SuffixTree } from '../../data-structures/suffix-tree/suffixTree';
import { DeprecationWarning } from '../utils/DeprecationWarning';

/**
 * Legacy SuffixTree interface for backward compatibility
 * @deprecated Use SuffixTree from data-structures/suffix-tree instead
 */
export class SuffixTreeAdapter<T> {
  private newTree: SuffixTree<T>;

  /**
   * Creates a new SuffixTreeAdapter
   * @param wholeText The initial text to build the suffix tree from
   * @deprecated Use new SuffixTree() from data-structures/suffix-tree instead
   */
  constructor(wholeText: string) {
    DeprecationWarning.warn(
      'SuffixTreeAdapter',
      'SuffixTree from data-structures/suffix-tree',
      '2.0.0'
    );
    this.newTree = new SuffixTree<T>(wholeText);
  }

  /**
   * Returns the text for which the suffix tree is built
   * @returns The text
   */
  get text(): string {
    return this.newTree.text;
  }

  /**
   * Adds a string to the suffix tree
   * @param str The string to add
   * @returns The SuffixTreeAdapter instance
   */
  addString(str: string): SuffixTreeAdapter<T> {
    this.newTree.addString(str);
    return this;
  }

  /**
   * Finds a substring in the suffix tree
   * @param str The substring to find
   * @returns The starting index of the substring, or -1 if not found
   */
  findSubstring(str: string): number {
    return this.newTree.findSubstring(str);
  }

  /**
   * Finds all occurrences of a substring
   * @param str The substring to find
   * @returns A tuple containing the starting index, node, and occurrence count
   */
  findAllSubstring(str: string): [number, any, number] {
    return this.newTree.findAllSubstring(str);
  }

  /**
   * Finds the longest repeated substrings
   * @param n The number of substrings to return
   * @returns An array of the longest repeated substrings
   */
  findLongestRepeatedSubstrings(n = 3): string[] {
    return this.newTree.findLongestRepeatedSubstrings(n);
  }

  /**
   * Returns a string representation of the suffix tree
   * @returns A string representation
   */
  toString(): string {
    return this.newTree.toString();
  }

  /**
   * Prints the suffix tree to the console
   */
  print(): void {
    console.log(this.newTree.toString());
  }
}
