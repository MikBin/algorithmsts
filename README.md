# Algorithms Collection in TypeScript

A comprehensive library of classic algorithms and data structures implemented in TypeScript.

## Installation

```bash
npm install @mikbin80/algorithmsts
```

## Usage

```typescript
import a from '@mikbin80/algorithmsts';

// See documentation for each module below.
```

## Algorithms and Data Structures

### Binary Search

This module provides two functions for performing binary searches on sorted arrays: `binarySearch` and `binaryClosestSearch`.

#### `binarySearch(sourceArray, value, comparisonFn)`

Performs a standard binary search to find the index of `value` in `sourceArray`.

- `sourceArray`: A sorted `Array<T>`.
- `value`: The value `T` to search for.
- `comparisonFn`: A function that compares two elements of type `T` and returns:
  - `> 0` if the first value is greater than the second.
  - `< 0` if the first value is less than the second.
  - `0` if the values are equal.

Returns the index of the found element or `-1` if not found.

#### `binaryClosestSearch(sourceArray, value, comparisonFn)`

Finds the element in `sourceArray` that is "closest" to `value`, as determined by the `comparisonFn`. This is useful when an exact match is not required.

- `sourceArray`: A sorted `Array<T>`.
- `value`: The value `T` to search for.
- `comparisonFn`: The same comparison function as used in `binarySearch`.

Returns the index of the closest element.

#### Example

```typescript
import a from '@mikbin80/algorithmsts';

const sortedArray = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91];

const comparisonFn = (a: number, b: number) => a - b;

const index = a.binarySearch.binarySearch(sortedArray, 23, comparisonFn);
console.log(index); // Output: 5

const closestIndex = a.binarySearch.binaryClosestSearch(sortedArray, 25, comparisonFn);
console.log(closestIndex); // Output: 5 (23 is closer to 25 than 16)
```

### Segment Tree

A Segment Tree is a versatile data structure that allows for efficient querying of range-based information (e.g., sum, minimum, maximum) and fast updates to the underlying data. This implementation provides a `SegmentTree` class that can be customized for various use cases.

#### `new SegmentTree(sourceArray, segmentNodeFactory, segmentNodeMerger, segmentNodeQuery, segmentLeaftUpdater)`

- `sourceArray`: The initial `Array<T>` from which to build the tree.
- `segmentNodeFactory`: A function that creates a new node in the tree. It receives the element from `sourceArray` and its indices.
- `segmentNodeMerger`: A function that merges two child nodes into their parent.
- `segmentNodeQuery`: A function that merges results during a range query.
- `segmentLeaftUpdater`: A function that updates a leaf node in the tree.

#### Methods

- `query(left, right)`: Performs a range query on the segment tree from index `left` to `right`.
- `updateLeaf(value, position)`: Updates the element at a specific `position` with a new `value`.

#### Example: Range Sum Queries

```typescript
import a from '@mikbin80/algorithmsts';

const sourceArray = [1, 3, 5, 7, 9, 11];

// Define a custom node type for sum queries
interface SumNode {
    left: number;
    right: number;
    sum: number;
}

// 1. Factory to create a new node
const nodeFactory = (val: number, left: number, right: number): SumNode => ({
    sum: val,
    left,
    right
});

// 2. Merger to combine two nodes
const nodeMerger = (parentNode: SumNode, leftChild: SumNode, rightChild: SumNode) => {
    parentNode.sum = (leftChild ? leftChild.sum : 0) + (rightChild ? rightChild.sum : 0);
};

// 3. Query merger to combine query results
const queryMerger = (nodeA: SumNode, nodeB: SumNode): SumNode => {
    if (nodeA.left === -1) return nodeB;
    if (nodeB.left === -1) return nodeA;
    return {
        sum: nodeA.sum + nodeB.sum,
        left: Math.min(nodeA.left, nodeB.left),
        right: Math.max(nodeA.right, nodeB.right)
    };
};

// 4. Leaf updater to change a value
const leafUpdater = (newVal: number, leafNode: SumNode) => {
    leafNode.sum = newVal;
};

const segTree = new a.segmentTree.SegmentTree<number, SumNode>(
    sourceArray,
    nodeFactory,
    nodeMerger,
    queryMerger,
    leafUpdater
);

// Query the sum of a range
const sum = segTree.query(1, 4);
console.log(sum.sum); // Output: 24 (3 + 5 + 7 + 9)

// Update a value
segTree.updateLeaf(10, 2); // Changes the value at index 2 from 5 to 10

const newSum = segTree.query(1, 4);
console.log(newSum.sum); // Output: 29 (3 + 10 + 7 + 9)
```

### Skip List

A Skip List is a probabilistic data structure that allows for fast search, insertion, and deletion operations, offering performance comparable to balanced trees.

#### `new SkipList(level, dummyRootVal, comparisonFn)`

- `level`: The maximum number of levels in the skip list.
- `dummyRootVal`: A value for the root node (e.g., `null` or a sentinel value).
- `comparisonFn` (optional): A function to compare two elements. Defaults to a standard numeric comparison.

#### Methods

- `insert(value)`: Inserts a `value` into the skip list.
- `remove(value)`: Removes a `value` from the skip list.
- `find(value)`: Searches for a `value` and returns its node, or `null` if not found.
- `toArray()`: Converts the skip list into a sorted array.

#### Example

```typescript
import a from '@mikbin80/algorithmsts';

const skipList = new a.skipList(10, null);

skipList.insert(15);
skipList.insert(5);
skipList.insert(25);
skipList.insert(10);

console.log(skipList.find(10)); // Returns the node containing 10

skipList.remove(15);

console.log(skipList.toArray()); // Output: [ 5, 10, 25 ]
```

### Trie

A Trie, or prefix tree, is a tree-like data structure used to store a dynamic set of strings. It is highly efficient for operations like prefix-based searches.

#### `new Trie()`

Creates a new, empty Trie.

#### Methods

- `add(key, value)`: Inserts a `key`-`value` pair into the trie.
- `get(key)`: Retrieves the value associated with a `key`.
- `contains(key)`: Checks if a `key` exists in the trie.
- `remove(key)`: "Removes" a key by marking its node as non-terminal.
- `map(prefix, func)`: Applies a function to all key-value pairs that start with a given `prefix`.

#### Example

```typescript
import a from '@mikbin80/algorithmsts';

const trie = new a.trie();

trie.add("apple", 1);
trie.add("apply", 2);
trie.add("apricot", 3);
trie.add("banana", 4);

console.log(trie.get("apple")); // Output: 1
console.log(trie.contains("app")); // Output: true (as a prefix)

const results = trie.map("ap", (key, value) => ({ key, value }));
console.log(results);
// Output:
// [
//   { key: 'apricot', value: 3 },
//   { key: 'apply', value: 2 },
//   { key: 'apple', value: 1 }
// ]
```

### Suffix Tree

A Suffix Tree is a powerful data structure for string processing, built using Ukkonen's algorithm. It enables efficient solutions to a wide variety of string problems.

#### `new SuffixTree(text)`

- `text`: The initial string to build the suffix tree from.

#### Methods

- `addString(str)`: Adds a new string to the existing tree.
- `findSubstring(str)`: Searches for a substring and returns its starting index in the original text, or `-1` if not found.
- `findAllSubstring(str)`: Finds all occurrences of a substring, returning the starting index, the node, and the count of leaves.
- `findLongestRepeatedSubstrings(n)`: Finds the `n` longest repeated substrings in the text.

#### Example

```typescript
import a from '@mikbin80/algorithmsts';

const suffixTree = new a.SuffixTree("banana");

console.log(suffixTree.findSubstring("ana")); // Output: 1
console.log(suffixTree.findSubstring("bana")); // Output: 0

const [index, node, count] = suffixTree.findAllSubstring("an");
console.log({ index, count }); // Output: { index: 1, count: 2 }

console.log(suffixTree.findLongestRepeatedSubstrings(2));
// Output: [ 'ana', 'na' ]
```

### String Similarity

This module provides several functions for calculating the similarity between two strings.

#### `ngramSimilarity(str1, str2, substringLength = 2, caseSensitive = false)`

Calculates similarity based on n-grams (substrings of a given length).

- `str1`, `str2`: The strings to compare.
- `substringLength`: The length of the n-grams (default is 2).
- `caseSensitive`: Whether the comparison should be case-sensitive (default is `false`).

Returns a similarity score between 0 and 1.

#### `jaroDistance(str1, str2)`

Implements the Jaro distance algorithm, which is particularly effective for short strings like names.

#### `jaroWinklerDistance(str1, str2, p = 0.1, L = 4)`

An extension of Jaro distance that gives more favorable scores to strings that match from the beginning for a set prefix length.

- `p`: Scaling factor (default is 0.1).
- `L`: Prefix length to consider (default is 4).

#### `LevenshteinDistance(str1, str2)`

Calculates the Levenshtein distance, which measures the number of edits (insertions, deletions, or substitutions) needed to change one word into the other.

#### Example

```typescript
import a from '@mikbin80/algorithmsts';

const str1 = "night";
const str2 = "nacht";

console.log(a.ngramSimilarity(str1, str2)); // High similarity
console.log(a.jaroWinklerDistance(str1, str2)); // Also high similarity
console.log(a.LevenshteinDistance(str1, str2)); // Measures edit distance
```