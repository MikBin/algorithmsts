import { SuffixTree, SuffixTreeNode } from './index'

/**
 * Implements Ukkonen's algorithm for building a suffix tree.
 */
export class UkkonenAlgorithm<T> {
  private text: string = ''
  private tree: SuffixTree<T>
  private root: SuffixTreeNode<T>
  private bottom: SuffixTreeNode<T>
  private s: SuffixTreeNode<T>
  private k: number = 0
  private i: number = -1

  /**
   * Creates an instance of UkkonenAlgorithm.
   * @param tree The suffix tree to build.
   */
  constructor(tree: SuffixTree<T>) {
    this.tree = tree
    this.root = this.tree.root
    this.bottom = new SuffixTreeNode<T>()
    this.root.suffixLink = this.bottom
    this.s = this.root
  }

  /**
   * Adds a string to the suffix tree using Ukkonen's algorithm.
   * @param str The string to add.
   * @param temp The starting index of the new string in the text.
   * @param newText The updated text.
   */
  public addString(str: string, temp: number, newText: string): void {
    this.text = newText

    for (let j = temp; j < this.text.length; j++) {
      this.bottom.addTransition(this.root, [j, j], this.text[j])
    }

    while (this.i < this.text.length - 1) {
      this.i++
      ;[this.s, this.k] = this.update(this.s, [this.k, this.i])
      ;[this.s, this.k] = this.canonize(this.s, [this.k, this.i])
    }

    // this.addTerminations()
  }

  /**
   * Marks the terminal nodes in the suffix tree.
   * @param node The node to start from.
   */
  // private addTerminations(node: SuffixTreeNode<T> = this.root): void {
  //   for (const t in node.transitions) {
  //     const [nextNode, a, b] = node.transitions[t]
  //     const sub = this.text.substring(a, b + 1)
  //     nextNode.isTerminal = this.text.endsWith(sub)
  //     this.addTerminations(nextNode)
  //   }
  // }

  /**
   * Performs the update step of Ukkonen's algorithm.
   * @param s The current node.
   * @param param1 The range of indices in the text.
   * @returns A tuple containing the new node and the new index.
   */
  private update(
    s: SuffixTreeNode<T> | null,
    [k, i]: [number, number]
  ): [SuffixTreeNode<T>, number] {
    if (!s) {
      return [this.root, 0]
    }

    let oldr = this.root
    let [endPoint, r] = this.testAndSplit(s, [k, i - 1], this.text[i])

    while (!endPoint) {
      r.addTransition(new SuffixTreeNode<T>(), [i, Infinity], this.text[i])

      if (oldr !== this.root) {
        oldr.suffixLink = r
      }

      oldr = r
      ;[s, k] = this.canonize(s.suffixLink, [k, i - 1])
      ;[endPoint, r] = this.testAndSplit(s, [k, i - 1], this.text[i])
    }

    if (oldr !== this.root) {
      oldr.suffixLink = s
    }

    return [s, k]
  }

  /**
   * Performs the test-and-split step of Ukkonen's algorithm.
   * @param s The current node.
   * @param param1 The range of indices in the text.
   * @param t The character to test.
   * @returns A tuple containing a boolean indicating if the split occurred and the new node.
   */
  private testAndSplit(
    s: SuffixTreeNode<T>,
    [k, p]: [number, number],
    t: string
  ): [boolean, SuffixTreeNode<T>] {
    if (k <= p) {
      const [s2, k2, p2] = s.transitions[this.text[k]]

      if (t === this.text[k2 + p - k + 1]) {
        return [true, s]
      } else {
        const r = new SuffixTreeNode<T>()
        s.addTransition(r, [k2, k2 + p - k], this.text[k2])
        r.addTransition(s2, [k2 + p - k + 1, p2], this.text[k2 + p - k + 1])
        return [false, r]
      }
    } else {
      if (!s.transitions[t]) {
        return [false, s]
      } else {
        return [true, s]
      }
    }
  }

  /**
   * Performs the canonize step of Ukkonen's algorithm.
   * @param s The current node.
   * @param param1 The range of indices in the text.
   * @returns A tuple containing the new node and the new index.
   */
  private canonize(
    s: SuffixTreeNode<T> | null,
    [k, p]: [number, number]
  ): [SuffixTreeNode<T>, number] {
    if (!s) {
      return [this.root, 0]
    }

    if (p < k) {
      return [s, k]
    } else {
      let [s2, k2, p2] = s.transitions[this.text[k]]

      while (p2 - k2 <= p - k) {
        k = k + p2 - k2 + 1
        s = s2

        if (k <= p) {
          ;[s2, k2, p2] = s.transitions[this.text[k]]
        }
      }

      return [s, k]
    }
  }
}