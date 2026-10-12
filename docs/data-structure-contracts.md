# Data Structure API Contracts

This document outlines the standard API contracts and behaviors for all data structures in the `@mikbin80/algorithmsts` library to ensure consistency.

## 1. Comparator Polarity & Default Sorting
- **Default Comparator**: The default comparator for structures like `BinarySearchTree` and `AVLTree` is `(a, b) => a < b ? -1 : a > b ? 1 : 0`. This safely supports numbers, strings, and other natively comparable types without type coercion issues (unlike `a - b`).
- **Heap Polarity**: All heap implementations (`BinaryHeap`, `DAryHeap`, `LeftistHeap`, `SkewHeap`, `PairingHeap`, `FibonacciHeap`, `BinomialHeap`, `WeakHeap`, `ViolationHeap`) act as **Min-Heaps** by default when using a standard ascending comparator (e.g., `(a, b) => a - b`). To create a Max-Heap, invert the comparator (e.g., `(a, b) => b - a`).

## 2. Size Access
- **`get size()`**: Every data structure must expose a read-only `get size(): number` property for O(1) access to the number of elements it contains.
- **Deprecations**: Older methods such as `getSize()` or `size()` are deprecated but maintained for backward compatibility. Users are strongly encouraged to migrate to `get size()`.

## 3. Element Not Found Returns
- **`null` vs `undefined` vs `-1`**: Operations that retrieve an element (e.g., `find`, `search`, `peek`, `poll`) will uniformly return `null` if the target element is not found or the structure is empty. Returns of `undefined`, `-1`, or custom sentinel values for "not found" are explicitly disallowed in these contexts to ensure consistent handling across the library.

## 4. Duplicate Policy (Sets vs Multisets)
- **Trees (Sets)**: By default, tree structures like `BinarySearchTree` and `AVLTree` are generally treated as Sets. Duplicate keys may be dropped or overwrite the previous value, depending on the structure, unless explicitly documented otherwise.
- **Heaps (Multisets)**: Heaps are consistently treated as Multisets. Inserting duplicate values will store multiple instances of that value.

## 5. Tree Height Conventions
- **Definition**: The height of a tree is defined as the maximum number of edges from the root to a leaf.
- **Empty Tree**: The height of an empty tree is `-1`.
- **Single Node (Leaf)**: The height of a tree containing only a root node is `0`.
