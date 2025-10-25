import { SuffixTree } from './index'
import { SuffixTreeNode } from './types'

/**
 * Implements Ukkonen's algorithm for building a suffix tree.
 */
export class UkkonenAlgorithm<T> {
  private text: string = ''
  private tree: SuffixTree<T>
  private root: SuffixTreeNode<T>
  private bottom: SuffixTreeNode<T>
  private activeNode: SuffixTreeNode<T>
  private activeEdge: number = 0
  private activeLength: number = 0
  private remaining: number = 0
  private position: number = -1

  /**
   * Creates an instance of UkkonenAlgorithm.
   * @param tree The suffix tree to build.
   */
  constructor(tree: SuffixTree<T>) {
    this.tree = tree
    this.root = this.tree.root
    this.bottom = new SuffixTreeNode<T>()
    this.root.suffixLink = this.bottom
    this.activeNode = this.root
  }

  /**
   * Adds a string to the suffix tree using Ukkonen's algorithm.
   * @param _str The string to add (unused, kept for interface compatibility).
   * @param startPos The starting index of the new string in the text.
   * @param newText The updated text.
   */
  public addString(_str: string, startPos: number, newText: string): void {
    const oldLength = this.text.length
    this.text = newText

    // Set up bottom node transitions for new characters
    for (let j = oldLength; j < this.text.length; j++) {
      if (!this.bottom.transitions[this.text[j]]) {
        this.bottom.addTransition(this.root, [j, j], this.text[j])
      }
    }

    // Build suffix tree character by character for new portion
    for (let i = oldLength; i < this.text.length; i++) {
      this.addChar(i)
    }
  }

  /**
   * Adds a character to the suffix tree.
   * @param pos The position of the character to add.
   */
  private addChar(pos: number): void {
    this.position = pos
    this.remaining++
    let lastCreatedNode: SuffixTreeNode<T> | null = null

    while (this.remaining > 0) {
      if (this.activeLength === 0) {
        this.activeEdge = pos
      }

      const edgeStartChar = this.text[this.activeEdge]

      if (!this.activeNode.transitions[edgeStartChar]) {
        // Rule 2: No edge starting with this character, create new leaf
        const newLeaf = new SuffixTreeNode<T>()
        this.activeNode.addTransition(newLeaf, [pos, Infinity], edgeStartChar)

        if (lastCreatedNode !== null) {
          lastCreatedNode.suffixLink = this.activeNode
          lastCreatedNode = null
        }
      } else {
        // Edge exists, need to walk down or split
        const [nextNode, edgeStart, edgeEnd] = this.activeNode.transitions[edgeStartChar]
        const edgeLength = (edgeEnd === Infinity ? this.position : edgeEnd) - edgeStart + 1

        // Walk down if active length exceeds edge length
        if (this.activeLength >= edgeLength) {
          this.activeNode = nextNode
          this.activeLength -= edgeLength
          this.activeEdge += edgeLength
          continue
        }

        // Check if current character matches
        const nextChar = this.text[edgeStart + this.activeLength]
        if (nextChar === this.text[pos]) {
          // Rule 3: Character already in tree
          if (lastCreatedNode !== null && this.activeNode !== this.root) {
            lastCreatedNode.suffixLink = this.activeNode
            lastCreatedNode = null
          }
          this.activeLength++
          break // Rule 3 extension
        }

        // Rule 2: Split the edge
        const splitNode = new SuffixTreeNode<T>()
        const newLeaf = new SuffixTreeNode<T>()

        // Update existing edge to point to split node
        this.activeNode.addTransition(
          splitNode,
          [edgeStart, edgeStart + this.activeLength - 1],
          edgeStartChar
        )

        // Add new leaf from split node
        splitNode.addTransition(newLeaf, [pos, Infinity], this.text[pos])

        // Add rest of original edge from split node
        splitNode.addTransition(
          nextNode,
          [edgeStart + this.activeLength, edgeEnd],
          nextChar
        )

        if (lastCreatedNode !== null) {
          lastCreatedNode.suffixLink = splitNode
        }
        lastCreatedNode = splitNode
      }

      this.remaining--

      if (this.activeNode === this.root && this.activeLength > 0) {
        this.activeLength--
        this.activeEdge = pos - this.remaining + 1
      } else if (this.activeNode !== this.root) {
        this.activeNode = this.activeNode.suffixLink || this.root
      }
    }
  }
}
