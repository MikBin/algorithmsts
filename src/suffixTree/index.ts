/**build  compacated trie (suffixtree) using farach algorithm
 */
//treaps https://github.com/brenden/node-treap/blob/master/lib/treap.js

export class SuffixTreeNode<T> {
  public transitions: Record<string, [SuffixTreeNode<T>, number, number]> = {}
  public suffixLink: SuffixTreeNode<T> | null = null
  public totalTransitions: number = 0
  addTransition = (node: SuffixTreeNode<T>, begin: number, end: number, t: string): void => {
    this.transitions[t] = [node, begin, end]
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
  private activeNode: SuffixTreeNode<T> = this.root
  private activeBegin: number = 0
  private activeEnd: number = -1

  constructor(wholeText: string) {
    /**@TODO build from whole text */
    this.root.suffixLink = this.bottom
    if (wholeText && wholeText.length) this.addString(wholeText)
  }

  addString = (st: string): SuffixTree<T> => {
    const tmpL = this.text.length
    this.text += st
    const L = this.text.length
    const lastChar = st[st.length - 1]
    this.separators.push(lastChar)
    this.stringsList.push(st)
    //activebegin is active edge
    let { activeNode, activeBegin, activeEnd } = this

    for (let j = tmpL; j < L; j++) {
      this.bottom.addTransition(this.root, j, j, this.text[j])
    }

    while (this.text[activeEnd + 1]) {
      activeEnd++
      ;[activeNode, activeBegin] = this.update(activeNode, activeBegin, activeEnd)
      ;[activeNode, activeBegin] = this.canonize(activeNode, activeBegin, activeEnd)
    }

    this.activeNode = activeNode
    this.activeBegin = activeBegin
    this.activeEnd = activeEnd

    return this
  }

  update = (_node: SuffixTreeNode<T>, begin: number, end: number): [SuffixTreeNode<T>, number] => {
    let node = _node
    if (!node) return [node, begin]

    let root = this.root
    let [endPoint, r] = this.testAndSplit(node, begin, end - 1, this.text[end])

    while (!endPoint) {
      r && r.addTransition(new SuffixTreeNode(), end, Infinity, this.text[end])
      if (root != this.root) {
        root.suffixLink = r
      }

      root = r
      ;[node, begin] = this.canonize(node.suffixLink as SuffixTreeNode<T>, begin, end - 1)

      if (!node) return [node, begin]

      ;[endPoint, r] = this.testAndSplit(node, begin, end - 1, this.text[end])
    }

    return [node, begin]
  }

  testAndSplit = (
    _node: SuffixTreeNode<T>,
    _begin: number,
    _end: number,
    t: string
  ): [boolean, SuffixTreeNode<T>] => {
    let node = _node
    let begin = _begin,
      end = _end

    if (begin <= end) {
      let [nextNode, nextBegin, nextEnd] = node.transitions[this.text[begin]]
      if (t === this.text[nextBegin + end - begin + 1]) {
        return [true, node]
      } else {
        let r = new SuffixTreeNode<T>()
        node.addTransition(r, nextBegin, nextBegin + end - begin, this.text[nextBegin])
        r.addTransition(
          nextNode,
          nextBegin + end - begin + 1,
          nextEnd,
          this.text[nextBegin + end - begin + 1]
        )
        return [false, r]
      }
    } else {
      return [Boolean(node && node.transitions[t]), node]
    }
  }

  canonize = (_node: SuffixTreeNode<T>, k: number, p: number): [SuffixTreeNode<T>, number] => {
    let node = _node
    let begin = k,
      end = p

    if (end < begin) {
      return [node, begin]
    } else {
      let [nextNode, nextBegin, nextEnd] = node.transitions[this.text[begin]]

      while (nextEnd - nextBegin <= end - begin) {
        begin = begin + nextEnd - nextBegin + 1
        node = nextNode

        if (begin <= end) {
          ;[nextNode, nextBegin, nextEnd] = node.transitions[this.text[begin]]
        }
      }

      return [node, begin]
    }
  }

  // traverse = (node: SuffixTreeNode<T>, separators: string[], stringList: string[], ret: any) => {
  //     for (let t in node.transitions) {
  //         let [nextNode, begin, end] = node.transitions[t];
  //         let name = this.text.substring(begin,end+1);
  //         let position = separators.length;
  //         const L = end-begin+1;
  //         for(let pos = L-1;pos>=1;pos--){
  //             let insep = separators.indexOf(name[pos]);
  //         }
  //     }
  // }

  /**
   
     * 
     */
}
