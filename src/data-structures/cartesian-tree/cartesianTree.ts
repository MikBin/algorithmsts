type Priority = number;

class CNode<T> {
  constructor(
    public value: T,
    public priority: Priority,
    public left: CNode<T> | null = null,
    public right: CNode<T> | null = null,
  ) {}
}

export class CartesianTree<T> {
  private root: CNode<T> | null = null;
  constructor(values: { value: T; priority: Priority }[]) {
    this.root = this.build(values);
  }

  private build(items: { value: T; priority: Priority }[]): CNode<T> | null {
    // Build in O(n) using stack assuming in-order order of values; if not ordered, sort by in-order index
    const nodes = items.map(it => new CNode(it.value, it.priority));
    const stack: CNode<T>[] = [];
    for (const node of nodes) {
      let last: CNode<T> | null = null;
      while (stack.length && stack[stack.length - 1].priority > node.priority) {
        last = stack.pop()!;
      }
      node.left = last;
      if (stack.length) stack[stack.length - 1].right = node;
      stack.push(node);
    }
    return stack.length ? stack[0] : null;
  }

  inorder(): T[] {
    const out: T[] = [];
    const dfs = (n: CNode<T> | null) => { if (!n) return; dfs(n.left); out.push(n.value); dfs(n.right); };
    dfs(this.root);
    return out;
  }
}
