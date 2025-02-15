/**build  compacated trie (suffixtree) using farach algorithm
 */
//treaps https://github.com/brenden/node-treap/blob/master/lib/treap.js

export class SuffixTreeNode<T> {
  public transition: Record<string, [SuffixTreeNode<T>, number, number]> = {}
  public suffixLink: SuffixTreeNode<T> | null = null
  public totalTransitions: number = 0
  public isTerminal: boolean = false

  addTransition = (node: SuffixTreeNode<T>, [start, end]: [number, number], t: string): void => {
    this.transition[t] = [node, start, end]
    this.totalTransitions++
  }
  isLeaf = (): boolean => Boolean(this.totalTransitions)
}

export class SuffixTree<T> {
  private text: string = ''
  public stringsList: string[] = []
  public separators: string[] = []
  private root: SuffixTreeNode<T> = new SuffixTreeNode()
  private bottom: SuffixTreeNode<T> = new SuffixTreeNode()
  private s = this.root
  private k = 0
  private i = -1

  constructor(wholeText: string) {
    /**@TODO build from whole text */
    this.root.suffixLink = this.bottom
    if (wholeText && wholeText.length) this.addString(wholeText)
  }

  addString(str: string) {
    var temp = this.text.length
    this.text += temp ? '⚇' + str : str

    var [s, k, i] = [this.s, this.k, this.i]

    for (var j = temp; j < this.text.length; j++) {
      this.bottom.addTransition(this.root, [j, j], this.text[j])
    }

    while (this.text[i + 1]) {
      i++
      ;[s, k] = this.update(s, [k, i])
      ;[s, k] = this.canonize(s, [k, i])
    }

    ;[this.s, this.k, this.i] = [s, k, i]

    this.addTerminations()

    return this
  }

  addTerminations(node = this.root) {
    for (let t in node.transition) {
      let [nextNode, a, b] = node.transition[t]
      const sub = this.text.substring(a, b + 1)
      nextNode.isTerminal = this.text.endsWith(sub)
      this.addTerminations(nextNode)
    }
  }

  update(s: SuffixTreeNode<T> | null, [k, i]: [number, number]): [SuffixTreeNode<T>, number] {
    if (!s) return [this.root, 0]

    var oldr = this.root
    var [endPoint, r] = this.testAndSplit(s, [k, i - 1], this.text[i])

    while (!endPoint) {
      r.addTransition(new SuffixTreeNode<T>(), [i, Infinity], this.text[i])

      if (oldr != this.root) {
        oldr.suffixLink = r
      }

      oldr = r
      ;[s, k] = this.canonize(s.suffixLink, [k, i - 1])
      ;[endPoint, r] = this.testAndSplit(s, [k, i - 1], this.text[i])
    }

    if (oldr != this.root) {
      oldr.suffixLink = s
    }

    return [s, k]
  }

  testAndSplit(
    s: SuffixTreeNode<T>,
    [k, p]: [number, number],
    t: string
  ): [boolean, SuffixTreeNode<T>] {
    if (k <= p) {
      var [s2, k2, p2] = s.transition[this.text[k]]

      if (t == this.text[k2 + p - k + 1]) {
        return [true, s]
      } else {
        var r = new SuffixTreeNode<T>()
        s.addTransition(r, [k2, k2 + p - k], this.text[k2])
        r.addTransition(s2, [k2 + p - k + 1, p2], this.text[k2 + p - k + 1])
        return [false, r]
      }
    } else {
      if (!s.transition[t]) return [false, s]
      else return [true, s]
    }
  }

  canonize(s: SuffixTreeNode<T> | null, [k, p]: [number, number]): [SuffixTreeNode<T>, number] {
    if (!s) return [this.root, 0]

    if (p < k) return [s, k]
    else {
      var [s2, k2, p2] = s.transition[this.text[k]]

      while (p2 - k2 <= p - k) {
        k = k + p2 - k2 + 1
        s = s2

        if (k <= p) {
          ;[s2, k2, p2] = s.transition[this.text[k]]
        }
      }

      return [s, k]
    }
  }

  findSubstring = (str: string, node = this.root, matchedSoFar = 0): number => {
    const L = this.text.length
    for (let t in node.transition) {
      let [nextNode, a, b] = node.transition[t]
      const sub = this.text.substring(a, b + 1)
      b = b === Infinity ? L : b
      const offset = b - a + 1
      if (str.indexOf(sub) === 0) {
        if (str.length === sub.length) return a - matchedSoFar
        else return this.findSubstring(str.substring(offset), nextNode, matchedSoFar + offset)
      } else if (sub.indexOf(str) === 0) return a - matchedSoFar
    }

    return -1
  }

  countLeaves(node: SuffixTreeNode<T>): number {
    if (node.isLeaf()) return 1
    let count = 0
    for (let t in node.transition) {
      let [nextNode, _a, _b] = node.transition[t]
      //if (nextNode.isLeaf()) count++
      count += this.countLeaves(nextNode)
    }
    return count
  }

  findAllSubstring = (
    str: string,
    node = this.root,
    matchedSoFar = 0
  ): [number, SuffixTreeNode<T>, number] => {
    const L = this.text.length
    for (let t in node.transition) {
      let [nextNode, a, b] = node.transition[t]
      const sub = this.text.substring(a, b + 1)
      b = b === Infinity ? L : b
      const offset = b - a + 1
      if (str.indexOf(sub) === 0) {
        if (str.length === sub.length) {
          console.log({ str, node, nextNode })
          return [
            a - matchedSoFar,
            nextNode,
            this.countLeaves(nextNode) + (nextNode.isTerminal ? 1 : 0)
          ]
        } else return this.findAllSubstring(str.substring(offset), nextNode, matchedSoFar + offset)
      } else if (sub.indexOf(str) === 0) {
        console.log({ str, node, nextNode })
        return [
          a - matchedSoFar,
          nextNode,
          this.countLeaves(nextNode) + (nextNode.isTerminal ? 1 : 0)
        ]
      }
    }

    return [-1, this.root, 0]
  }

  findLongestRepeatedSubstrings(n = 3) {
    var [text, root] = [this.text, this.root]
    var longestSubstrings = []
    ;(function traverse(node, curStr = '') {
      if (node.isLeaf()) return

      for (var t in node.transition) {
        var [s, a, b] = node.transition[t]
        if (!s.isLeaf()) {
          var curCurStr = curStr
          var curSubStr = text.substring(a, b + 1)
          curCurStr = node === root ? curSubStr : curCurStr + curSubStr

          longestSubstrings.push(curCurStr)
          traverse(s, curCurStr)
        }
      }
    })(root)

    return longestSubstrings.sort((a, b) => b.length - a.length).slice(0, n)
  }

  toString() {
    var text = this.text

    function traverse(node: SuffixTreeNode<T>, offset = '', ret = '') {
      for (var t in node.transition) {
        var [s, a, b] = node.transition[t]
        ret += offset + '["' + text.substring(a, b + 1) + '", ' + a + ', ' + b + ']' + '\r\n'
        ret += traverse(s, offset + '\t')
      }
      return ret
    }
    var res = traverse(this.root)
    return res
  }

  print() {
    console.log(this.toString())
  }
}
