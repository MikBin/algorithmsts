type Priority = number;

class CNode<T> {
  constructor(
    public value: T,
    public priority: Priority,
    public left: CNode<T> | null = null,
    public right: CNode<T> | null = null,
  ) {}
}

/**
 * @title Cartesian Tree
 * @notice A binary tree derived from a sequence of numbers, satisfying the heap property and in-order traversal property.
 * @dev Often used in range minimum query (RMQ) problems and randomized treaps.
 * @template T The type of elements stored in the tree.
 */
export class CartesianTree<T> {
  private root: CNode<T> | null = null;

  /**
   * @notice Constructs a Cartesian Tree from an array of elements.
   * @param values The values with their priorities. Assumed to be in in-order sequence.
   * @complexity Time: O(n) | Space: O(n) where n is the number of elements.
   */
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

  /**
   * @notice Performs an in-order traversal of the Cartesian tree.
   * @returns An array of values in in-order.
   * @complexity Time: O(n) | Space: O(n) (recursion depth) where n is the number of elements.
   */
  inorder(): T[] {
    const out: T[] = [];
    const dfs = (n: CNode<T> | null) => { if (!n) return; dfs(n.left); out.push(n.value); dfs(n.right); };
    dfs(this.root);
    return out;
  }

  /**
   * @notice Serializes the tree into a JSON string.
   * @returns A string representing the JSON structure of the tree.
   * @complexity Time: O(n) | Space: O(n) (recursion depth) where n is the number of elements.
   */
  toJson(): string {
    return JSON.stringify(this.root);
  }
}
