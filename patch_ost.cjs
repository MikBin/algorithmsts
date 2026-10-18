const fs = require('fs');
let code = fs.readFileSync('src/data-structures/order-statistic-tree/orderStatisticTree.ts', 'utf8');

// Replace toArray
code = code.replace(
  `  toArray(): T[] { const res: T[] = []; const stack: (OrderNode<T>|null)[] = [this.root]; while (stack.length){ const n=stack.pop(); if (!n) continue; res.push(n.key); stack.push(n.left,n.right); } return res; }`,
  `  toArray(): T[] {
    const res: T[] = [];
    const stack: OrderNode<T>[] = [];
    let curr = this.root;
    while (curr || stack.length) {
      while (curr) { stack.push(curr); curr = curr.left; }
      curr = stack.pop()!;
      res.push(curr.key);
      curr = curr.right;
    }
    return res;
  }

  /**
   * Perfectly balances the tree.
   *
   * @complexity Time: O(n) | Space: O(n)
   */
  rebuild(): void {
    const elements = this.toArray();
    this.root = this.buildBalanced(elements, 0, elements.length - 1);
  }

  private buildBalanced(arr: T[], start: number, end: number): OrderNode<T> | null {
    if (start > end) return null;
    const mid = start + Math.floor((end - start) / 2);
    const node = new OrderNode(arr[mid]);
    node.left = this.buildBalanced(arr, start, mid - 1);
    node.right = this.buildBalanced(arr, mid + 1, end);
    this.update(node);
    return node;
  }`
);

fs.writeFileSync('src/data-structures/order-statistic-tree/orderStatisticTree.ts', code);
