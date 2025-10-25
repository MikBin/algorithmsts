# Fenwick Tree (Binary Indexed Tree)

A Fenwick Tree, also known as a Binary Indexed Tree (BIT), is a data structure that can efficiently update elements and calculate prefix sums in a table of numbers.

## Usage

```typescript
import { FenwickTree } from './fenwickTree';

const tree = new FenwickTree(10);
tree.update(0, 1);
tree.update(1, 2);
tree.update(2, 3);

console.log(tree.query(2)); // 6
console.log(tree.rangeQuery(1, 2)); // 5
```
