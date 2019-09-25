/**@TODO add depth or terminal counter, max depth min depth
 *
 * add key in node? as substring of key till now or just single char
 */

class trie_node<T> {
  public terminal: boolean
  public value: T | null
  public children: Map<string, trie_node<T>>

  constructor() {
    this.terminal = false
    this.children = new Map()
    this.value = null
  }

  setTerminal(): void {
    this.terminal = true
  }
  setValue(v: T): void {
    this.value = v
  }
}

export class Trie<T> {
  private root: trie_node<T>
  private elements: number
  private nodes: number
  constructor() {
    this.root = new trie_node<T>()
    this.elements = 0
    this.nodes = 0
  }

  public get length(): number {
    return this.elements
  }

  public contains(key: string): boolean {
    const node = this.getNode(key)
    return !!node
  }
  public add(key: string, value: T, index: number = 0, node: trie_node<T> = this.root): void {
    let k = key.charAt(index)
    let child = node.children.get(k)
    if (!child) {
      child = new trie_node<T>()
      this.nodes++
      node.children.set(k, child)
    }
    if (index == key.length - 1) {
      child.setValue(value)
      child.setTerminal()
      this.elements++
      return
    }
    return this.add(key, value, ++index, child)
  }

  /**@TODO map only terminal and mapAll??? */
  public map<U>(prefix: string, func: (key: string, value: T) => U): U[] {
    const mapped = []
    const node = this.getNode(prefix)
    const stack: [string, trie_node<T>][] = []
    if (node) {
      stack.push([prefix, node])
    }
    while (stack.length) {
      //@ts-ignore
      const [key, node] = stack.pop()
      if (node.terminal) {
        mapped.push(func(key, node.value))
      }
      for (const c of node.children.keys()) {
        stack.push([key + c, node.children.get(c)])
      }
    }
    return mapped
  }

  private getNode(key: string): trie_node<T> | null {
    let node: trie_node<T> = this.root
    let l: number = key.length
    for (let i: number = 0; i < l; i++) {
      let c = key.charAt(i)
      if (!node.children.has(c)) return null
      //@ts-ignore
      else node = node.children.get(c)
    }
    return node
  }

  public get(key: string): T | null {
    let node: trie_node<T> | null = this.getNode(key)
    return node ? node.value : null
  }

  public remove(key: string): boolean {
    const node = this.getNode(key)
    if (node) {
      node.terminal = false
      this.elements -= 1
      return true
    }
    return false
  }

  private commonPrefix(a: string, b: string): string {
    const shortest = Math.min(a.length, b.length)
    let i = 0
    for (; i < shortest; i += 1) {
      if (a[i] !== b[i]) {
        break
      }
    }
    return a.slice(0, i)
  }
}
