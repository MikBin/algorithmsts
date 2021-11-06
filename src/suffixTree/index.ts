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

  convertToJson = () => {
    // convert tree to json to use with d3js

    let text = this.text
    let ret = {
      name: '',
      parent: 'null',
      suffix: '',
      children: []
    }

    function traverse(
      node: SuffixTreeNode<T>,
      separators: string[],
      stringsList: String[],
      ret: any
    ) {
      for (let t in node.transitions) {
        let traNs = node.transitions[t]
        let s = traNs[0],
          a = traNs[1],
          b = traNs[2]
        let name = text.substring(a, b + 1)
        let position = separators.length - 1
        for (let pos = name.length - 1; pos > -1; pos--) {
          let insep = separators.indexOf(name[pos])
          position = insep > -1 ? insep : position
        }

        let names = name.split(separators[position])
        if (names.length > 1) {
          name = names[0] + separators[position]
        }
        let suffix = ret['suffix'] + name
        let cchild = {
          name: name,
          parent: ret['name'],
          suffix: suffix,
          children: [],
          seq: 0,
          start: ''
        }
        if (s.isLeaf()) {
          cchild['seq'] = position + 1
          cchild['start'] = '' + (stringsList[position].length - suffix.length)
        }
        cchild = traverse(s, separators, stringsList, cchild)
        ret['children'].push(cchild)
      }

      return ret
    }
    console.log(this.separators)
    return traverse(this.root, this.separators, this.stringsList, ret)
  }

  toString() {
    var text = this.text

    function traverse(node: SuffixTreeNode<T>, offset = '', ret = '') {
      for (var t in node.transitions) {
        var [s, a, b] = node.transitions[t]
        ret += offset + '["' + text.substring(a, b + 1) + '", ' + a + ', ' + b + ']' + '\r\n'
        ret += traverse(s, offset + '\t')
      }
      return ret
    }
    var res = traverse(this.root)
    return res
  }
}
