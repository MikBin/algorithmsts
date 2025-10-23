# Algorithmsts Library Interface Specifications

## Overview

This document provides detailed specifications for all core interfaces in the Algorithmsts library. These interfaces establish the contracts that all data structures and algorithms must follow, ensuring consistency and interoperability across the library.

## Core Collection Interfaces

### ICollection<T>

The fundamental interface for all collections in the library.

```typescript
/**
 * Base interface for all collections
 * @template T The type of elements in the collection
 */
export interface ICollection<T> extends Iterable<T> {
  /**
   * Gets the number of elements in the collection
   */
  readonly size: number;
  
  /**
   * Checks if the collection is empty
   * @returns true if the collection contains no elements
   */
  isEmpty(): boolean;
  
  /**
   * Clears all elements from the collection
   */
  clear(): void;
  
  /**
   * Converts the collection to an array
   * @returns A new array containing all elements from the collection
   */
  toArray(): T[];
  
  /**
   * Creates a shallow copy of the collection
   * @returns A new collection with the same elements
   */
  clone(): ICollection<T>;
  
  /**
   * Gets an iterator for the collection
   * @returns An iterator that yields each element in the collection
   */
  [Symbol.iterator](): Iterator<T>;
}
```

### IAddableCollection<T>

Interface for collections that support element addition.

```typescript
/**
 * Interface for collections that support element addition
 * @template T The type of elements in the collection
 */
export interface IAddableCollection<T> extends ICollection<T> {
  /**
   * Adds an element to the collection
   * @param item The element to add
   * @returns true if the element was added, false if the element already exists
   */
  add(item: T): boolean;
  
  /**
   * Adds multiple elements to the collection
   * @param items An iterable of elements to add
   * @returns The number of elements that were added
   */
  addAll(items: Iterable<T>): number;
  
  /**
   * Adds an element only if it's not already present
   * @param item The element to add
   * @returns true if the element was added, false if it already existed
   */
  addIfAbsent(item: T): boolean;
}
```

### IRemovableCollection<T>

Interface for collections that support element removal.

```typescript
/**
 * Interface for collections that support element removal
 * @template T The type of elements in the collection
 */
export interface IRemovableCollection<T> extends ICollection<T> {
  /**
   * Removes an element from the collection
   * @param item The element to remove
   * @returns true if the element was removed, false if it wasn't found
   */
  remove(item: T): boolean;
  
  /**
   * Removes multiple elements from the collection
   * @param items An iterable of elements to remove
   * @returns The number of elements that were removed
   */
  removeAll(items: Iterable<T>): number;
  
  /**
   * Removes all elements that match a predicate
   * @param predicate A function that returns true for elements to remove
   * @returns The number of elements that were removed
   */
  removeIf(predicate: (item: T) => boolean): number;
  
  /**
   * Removes and returns an element from the collection
   * @returns The removed element, or null if the collection is empty
   */
  poll(): T | null;
}
```

### ILookupCollection<T>

Interface for collections that support element lookup.

```typescript
/**
 * Interface for collections that support element lookup
 * @template T The type of elements in the collection
 */
export interface ILookupCollection<T> extends ICollection<T> {
  /**
   * Checks if the collection contains an element
   * @param item The element to check for
   * @returns true if the element is in the collection
   */
  contains(item: T): boolean;
  
  /**
   * Checks if the collection contains all elements
   * @param items An iterable of elements to check for
   * @returns true if all elements are in the collection
   */
  containsAll(items: Iterable<T>): boolean;
  
  /**
   * Finds the first element that matches a predicate
   * @param predicate A function that returns true for the desired element
   * @returns The first matching element, or null if no match is found
   */
  find(predicate: (item: T) => boolean): T | null;
  
  /**
   * Finds all elements that match a predicate
   * @param predicate A function that returns true for desired elements
   * @returns An array of all matching elements
   */
  findAll(predicate: (item: T) => boolean): T[];
}
```

## Data Structure Interfaces

### IDataStructure<T>

Base interface for all data structures.

```typescript
/**
 * Base interface for all data structures
 * @template T The type of elements in the data structure
 */
export interface IDataStructure<T> extends ICollection<T> {
  /**
   * Gets the memory usage of the data structure in bytes
   * @returns The approximate memory usage
   */
  getMemoryUsage(): number;
  
  /**
   * Validates the internal state of the data structure
   * @returns true if the data structure is in a valid state
   */
  validate(): boolean;
  
  /**
   * Gets the internal representation of the data structure
   * @returns An object representing the internal state
   */
  getInternalRepresentation(): any;
  
  /**
   * Rebuilds the data structure from an internal representation
   * @param representation The internal representation to rebuild from
   */
  rebuildFromRepresentation(representation: any): void;
}
```

### IOrderedDataStructure<T>

Interface for ordered data structures.

```typescript
/**
 * Interface for ordered data structures
 * @template T The type of elements in the data structure
 */
export interface IOrderedDataStructure<T> extends IDataStructure<T> {
  /**
   * Gets the first element
   * @returns The first element, or null if the data structure is empty
   */
  first(): T | null;
  
  /**
   * Gets the last element
   * @returns The last element, or null if the data structure is empty
   */
  last(): T | null;
  
  /**
   * Gets an element at a specific index
   * @param index The zero-based index
   * @returns The element at the index, or null if the index is out of bounds
   */
  getAt(index: number): T | null;
  
  /**
   * Gets the index of the first occurrence of an element
   * @param item The element to find
   * @returns The index of the element, or -1 if not found
   */
  indexOf(item: T): number;
  
  /**
   * Gets the index of the last occurrence of an element
   * @param item The element to find
   * @returns The index of the element, or -1 if not found
   */
  lastIndexOf(item: T): number;
}
```

### IIndexedDataStructure<T>

Interface for indexed data structures.

```typescript
/**
 * Interface for indexed data structures
 * @template T The type of elements in the data structure
 */
export interface IIndexedDataStructure<T> extends IOrderedDataStructure<T> {
  /**
   * Inserts an element at a specific index
   * @param index The zero-based index at which to insert
   * @param item The element to insert
   * @returns true if the element was inserted, false if the index is invalid
   */
  insertAt(index: number, item: T): boolean;
  
  /**
   * Removes an element at a specific index
   * @param index The zero-based index of the element to remove
   * @returns The removed element, or null if the index is out of bounds
   */
  removeAt(index: number): T | null;
  
  /**
   * Sets an element at a specific index
   * @param index The zero-based index at which to set the element
   * @param item The element to set
   * @returns true if the element was set, false if the index is invalid
   */
  setAt(index: number, item: T): boolean;
  
  /**
   * Swaps elements at two indices
   * @param index1 The first index
   * @param index2 The second index
   * @returns true if the elements were swapped, false if either index is invalid
   */
  swap(index1: number, index2: number): boolean;
}
```

## Specialized Data Structure Interfaces

### IList<T>

Interface for list data structures.

```typescript
/**
 * Interface for list data structures
 * @template T The type of elements in the list
 */
export interface IList<T> extends IIndexedDataStructure<T>, IAddableCollection<T>, IRemovableCollection<T> {
  /**
   * Adds an element to the beginning of the list
   * @param item The element to add
   */
  prepend(item: T): void;
  
  /**
   * Adds an element to the end of the list
   * @param item The element to add
   */
  append(item: T): void;
  
  /**
   * Removes and returns the first element
   * @returns The first element, or null if the list is empty
   */
  removeFirst(): T | null;
  
  /**
   * Removes and returns the last element
   * @returns The last element, or null if the list is empty
   */
  removeLast(): T | null;
  
  /**
   * Gets a sub-list between two indices
   * @param start The start index (inclusive)
   * @param end The end index (exclusive)
   * @returns A new list containing the elements between the indices
   */
  subList(start: number, end: number): IList<T>;
}
```

### IStack<T>

Interface for stack data structures.

```typescript
/**
 * Interface for stack data structures (LIFO)
 * @template T The type of elements in the stack
 */
export interface IStack<T> extends IDataStructure<T> {
  /**
   * Pushes an element onto the top of the stack
   * @param item The element to push
   */
  push(item: T): void;
  
  /**
   * Removes and returns the element at the top of the stack
   * @returns The element at the top of the stack, or null if the stack is empty
   */
  pop(): T | null;
  
  /**
   * Returns the element at the top of the stack without removing it
   * @returns The element at the top of the stack, or null if the stack is empty
   */
  peek(): T | null;
  
  /**
   * Checks if the stack is empty
   * @returns true if the stack is empty
   */
  isEmpty(): boolean;
}
```

### IQueue<T>

Interface for queue data structures.

```typescript
/**
 * Interface for queue data structures (FIFO)
 * @template T The type of elements in the queue
 */
export interface IQueue<T> extends IDataStructure<T> {
  /**
   * Adds an element to the back of the queue
   * @param item The element to add
   * @returns true if the element was added
   */
  enqueue(item: T): boolean;
  
  /**
   * Removes and returns the element at the front of the queue
   * @returns The element at the front of the queue, or null if the queue is empty
   */
  dequeue(): T | null;
  
  /**
   * Returns the element at the front of the queue without removing it
   * @returns The element at the front of the queue, or null if the queue is empty
   */
  peek(): T | null;
  
  /**
   * Checks if the queue is empty
   * @returns true if the queue is empty
   */
  isEmpty(): boolean;
}
```

## Tree Interfaces

### ITreeNode<T>

Interface for tree nodes.

```typescript
/**
 * Interface for tree nodes
 * @template T The type of value stored in the node
 */
export interface ITreeNode<T> {
  /**
   * The value stored in the node
   */
  value: T;
  
  /**
   * The parent node, or null if this is the root
   */
  parent: ITreeNode<T> | null;
  
  /**
   * The children of this node
   */
  children: ITreeNode<T>[];
  
  /**
   * Checks if this node is the root
   * @returns true if this node has no parent
   */
  isRoot(): boolean;
  
  /**
   * Checks if this node is a leaf
   * @returns true if this node has no children
   */
  isLeaf(): boolean;
  
  /**
   * Gets the depth of this node
   * @returns The depth (0 for root)
   */
  getDepth(): number;
  
  /**
   * Gets the height of this node
   * @returns The height (0 for leaf)
   */
  getHeight(): number;
}
```

### ITree<T>

Interface for tree data structures.

```typescript
/**
 * Interface for tree data structures
 * @template T The type of elements in the tree
 */
export interface ITree<T> extends IDataStructure<T> {
  /**
   * Gets the root node of the tree
   * @returns The root node, or null if the tree is empty
   */
  getRoot(): ITreeNode<T> | null;
  
  /**
   * Sets the root node of the tree
   * @param root The new root node
   */
  setRoot(root: ITreeNode<T> | null): void;
  
  /**
   * Adds a child node to a parent node
   * @param parent The parent node
   * @param child The child node to add
   * @returns true if the child was added
   */
  addChild(parent: ITreeNode<T>, child: ITreeNode<T>): boolean;
  
  /**
   * Removes a node from the tree
   * @param node The node to remove
   * @returns true if the node was removed
   */
  removeNode(node: ITreeNode<T>): boolean;
  
  /**
   * Finds a node in the tree
   * @param value The value to search for
   * @returns The first node with the given value, or null if not found
   */
  findNode(value: T): ITreeNode<T> | null;
  
  /**
   * Traverses the tree using a specific strategy
   * @param strategy The traversal strategy
   * @returns An array of node values in traversal order
   */
  traverse(strategy: TraversalStrategy): T[];
}
```

### IBinaryTreeNode<T>

Interface for binary tree nodes.

```typescript
/**
 * Interface for binary tree nodes
 * @template T The type of value stored in the node
 */
export interface IBinaryTreeNode<T> extends ITreeNode<T> {
  /**
   * The left child node, or null
   */
  left: IBinaryTreeNode<T> | null;
  
  /**
   * The right child node, or null
   */
  right: IBinaryTreeNode<T> | null;
  
  /**
   * Checks if this node has a left child
   * @returns true if this node has a left child
   */
  hasLeft(): boolean;
  
  /**
   * Checks if this node has a right child
   * @returns true if this node has a right child
   */
  hasRight(): boolean;
  
  /**
   * Gets the sibling of this node
   * @returns The sibling node, or null if there is no sibling
   */
  getSibling(): IBinaryTreeNode<T> | null;
}
```

### IBinarySearchTree<T>

Interface for binary search tree data structures.

```typescript
/**
 * Interface for binary search tree data structures
 * @template T The type of elements in the tree
 */
export interface IBinarySearchTree<T> extends ITree<T> {
  /**
   * Inserts a value into the tree
   * @param value The value to insert
   * @returns true if the value was inserted
   */
  insert(value: T): boolean;
  
  /**
   * Removes a value from the tree
   * @param value The value to remove
   * @returns true if the value was removed
   */
  remove(value: T): boolean;
  
  /**
   * Searches for a value in the tree
   * @param value The value to search for
   * @returns The node containing the value, or null if not found
   */
  search(value: T): IBinaryTreeNode<T> | null;
  
  /**
   * Gets the minimum value in the tree
   * @returns The minimum value, or null if the tree is empty
   */
  getMin(): T | null;
  
  /**
   * Gets the maximum value in the tree
   * @returns The maximum value, or null if the tree is empty
   */
  getMax(): T | null;
}
```

## Graph Interfaces

### IGraph<T, W>

Interface for graph data structures.

```typescript
/**
 * Interface for graph data structures
 * @template T The type of nodes in the graph
 * @template W The type of edge weights (defaults to number)
 */
export interface IGraph<T, W = number> extends IDataStructure<T> {
  /**
   * Adds a node to the graph
   * @param node The node to add
   * @returns true if the node was added
   */
  addNode(node: T): boolean;
  
  /**
   * Removes a node from the graph
   * @param node The node to remove
   * @returns true if the node was removed
   */
  removeNode(node: T): boolean;
  
  /**
   * Adds an edge between two nodes
   * @param from The source node
   * @param to The target node
   * @param weight The edge weight (optional)
   * @returns true if the edge was added
   */
  addEdge(from: T, to: T, weight?: W): boolean;
  
  /**
   * Removes an edge between two nodes
   * @param from The source node
   * @param to The target node
   * @returns true if the edge was removed
   */
  removeEdge(from: T, to: T): boolean;
  
  /**
   * Checks if the graph contains a node
   * @param node The node to check for
   * @returns true if the node is in the graph
   */
  hasNode(node: T): boolean;
  
  /**
   * Checks if the graph contains an edge
   * @param from The source node
   * @param to The target node
   * @returns true if the edge is in the graph
   */
  hasEdge(from: T, to: T): boolean;
  
  /**
   * Gets the neighbors of a node
   * @param node The node
   * @returns An array of neighboring nodes
   */
  getNeighbors(node: T): T[];
  
  /**
   * Gets the weight of an edge
   * @param from The source node
   * @param to The target node
   * @returns The edge weight, or undefined if the edge doesn't exist
   */
  getWeight(from: T, to: T): W | undefined;
  
  /**
   * Gets the number of nodes in the graph
   * @returns The node count
   */
  getNodeCount(): number;
  
  /**
   * Gets the number of edges in the graph
   * @returns The edge count
   */
  getEdgeCount(): number;
  
  /**
   * Checks if the graph is directed
   * @returns true if the graph is directed
   */
  isDirected(): boolean;
  
  /**
   * Checks if the graph is weighted
   * @returns true if the graph has weighted edges
   */
  isWeighted(): boolean;
}
```

### IWeightedGraph<T, W>

Interface for weighted graph data structures.

```typescript
/**
 * Interface for weighted graph data structures
 * @template T The type of nodes in the graph
 * @template W The type of edge weights
 */
export interface IWeightedGraph<T, W = number> extends IGraph<T, W> {
  /**
   * Sets the weight of an edge
   * @param from The source node
   * @param to The target node
   * @param weight The new weight
   * @returns true if the weight was set
   */
  setWeight(from: T, to: T, weight: W): boolean;
  
  /**
   * Gets all edges with their weights
   * @returns An array of edge-weight pairs
   */
  getAllEdges(): Array<{ from: T; to: T; weight: W }>;
  
  /**
   * Gets the total weight of all edges
   * @returns The sum of all edge weights
   */
  getTotalWeight(): W;
}
```

## Algorithm Interfaces

### IAlgorithm<TInput, TOutput>

Base interface for all algorithms.

```typescript
/**
 * Base interface for all algorithms
 * @template TInput The type of input to the algorithm
 * @template TOutput The type of output from the algorithm
 */
export interface IAlgorithm<TInput, TOutput> {
  /**
   * Executes the algorithm
   * @param input The input to the algorithm
   * @returns The output of the algorithm
   */
  execute(input: TInput): TOutput;
  
  /**
   * Gets the time complexity of the algorithm
   * @returns The time complexity
   */
  getTimeComplexity(): Complexity;
  
  /**
   * Gets the space complexity of the algorithm
   * @returns The space complexity
   */
  getSpaceComplexity(): Complexity;
  
  /**
   * Gets the name of the algorithm
   * @returns The algorithm name
   */
  getName(): string;
  
  /**
   * Gets a description of the algorithm
   * @returns A description of what the algorithm does
   */
  getDescription(): string;
}
```

### ISearchAlgorithm<T>

Interface for search algorithms.

```typescript
/**
 * Interface for search algorithms
 * @template T The type of elements to search
 */
export interface ISearchAlgorithm<T> extends IAlgorithm<SearchInput<T>, SearchOutput<T>> {
  /**
   * Searches for a target in a collection
   * @param collection The collection to search
   * @param target The target to find
   * @param comparator The comparison function
   * @returns The search result
   */
  search(
    collection: T[],
    target: T,
    comparator?: ComparisonFunction<T>
  ): SearchOutput<T>;
}
```

### ISortingAlgorithm<T>

Interface for sorting algorithms.

```typescript
/**
 * Interface for sorting algorithms
 * @template T The type of elements to sort
 */
export interface ISortingAlgorithm<T> extends IAlgorithm<SortInput<T>, SortOutput<T>> {
  /**
   * Sorts a collection
   * @param collection The collection to sort
   * @param comparator The comparison function
   * @returns The sorted collection
   */
  sort(
    collection: T[],
    comparator?: ComparisonFunction<T>
  ): T[];
  
  /**
   * Checks if the algorithm is stable
   * @returns true if the algorithm maintains the relative order of equal elements
   */
  isStable(): boolean;
  
  /**
   * Checks if the algorithm works in-place
   * @returns true if the algorithm sorts without using additional space
   */
  isInPlace(): boolean;
}
```

### IGraphAlgorithm<T, R, W>

Interface for graph algorithms.

```typescript
/**
 * Interface for graph algorithms
 * @template T The type of nodes in the graph
 * @template R The type of result from the algorithm
 * @template W The type of edge weights
 */
export interface IGraphAlgorithm<T, R, W = number> extends IAlgorithm<IGraph<T, W>, R> {
  /**
   * Executes the algorithm on a graph
   * @param graph The input graph
   * @param args Additional arguments for the algorithm
   * @returns The algorithm result
   */
  execute(graph: IGraph<T, W>, ...args: any[]): R;
  
  /**
   * Checks if the algorithm is applicable to the given graph
   * @param graph The graph to check
   * @returns true if the algorithm can be applied to the graph
   */
  isApplicable(graph: IGraph<T, W>): boolean;
}
```

## Supporting Types and Enums

### Complexity

```typescript
/**
 * Representation of algorithm complexity
 */
export interface Complexity {
  /**
   * Big O notation
   */
  bigO: string;
  
  /**
   * Best case complexity
   */
  best?: string;
  
  /**
   * Worst case complexity
   */
  worst?: string;
  
  /**
   * Average case complexity
   */
  average?: string;
  
  /**
   * Space complexity
   */
  space?: string;
}
```

### TraversalStrategy

```typescript
/**
 * Enumeration of tree traversal strategies
 */
export enum TraversalStrategy {
  PRE_ORDER = 'pre-order',
  IN_ORDER = 'in-order',
  POST_ORDER = 'post-order',
  LEVEL_ORDER = 'level-order',
  DEPTH_FIRST = 'depth-first',
  BREADTH_FIRST = 'breadth-first'
}
```

### SearchInput/Output Types

```typescript
/**
 * Input for search algorithms
 */
export interface SearchInput<T> {
  collection: T[];
  target: T;
  comparator?: ComparisonFunction<T>;
}

/**
 * Output from search algorithms
 */
export interface SearchOutput<T> {
  found: boolean;
  index: number;
  element: T | null;
  comparisons: number;
}
```

### SortInput/Output Types

```typescript
/**
 * Input for sorting algorithms
 */
export interface SortInput<T> {
  collection: T[];
  comparator?: ComparisonFunction<T>;
}

/**
 * Output from sorting algorithms
 */
export interface SortOutput<T> {
  sorted: T[];
  comparisons: number;
  swaps: number;
  time: number;
}
```

### Comparison Function Types

```typescript
/**
 * Function type for comparing two values
 * @template T The type of values to compare
 * @param a The first value
 * @param b The second value
 * @returns Negative if a < b, zero if a === b, positive if a > b
 */
export type ComparisonFunction<T> = (a: T, b: T) => number;

/**
 * Function type for checking equality
 * @template T The type of values to compare
 * @param a The first value
 * @param b The second value
 * @returns True if the values are equal
 */
export type EqualityFunction<T> = (a: T, b: T) => boolean;

/**
 * Function type for hashing values
 * @template T The type of value to hash
 * @param value The value to hash
 * @returns The hash code
 */
export type HashFunction<T> = (value: T) => number | string;
```

## Implementation Guidelines

### Interface Implementation Rules

1. **Complete Implementation**: All interface methods must be implemented
2. **Type Safety**: Maintain strict type checking in all implementations
3. **Error Handling**: Provide meaningful error messages for invalid operations
4. **Performance**: Consider performance implications of interface methods
5. **Documentation**: Document any implementation-specific behavior

### Interface Extension Rules

1. **Liskov Substitution**: Subinterfaces must maintain compatibility
2. **Covariance**: Return types should be covariant where appropriate
3. **Contravariance**: Parameter types should be contravariant where appropriate
4. **Minimal Interfaces**: Keep interfaces focused and minimal
5. **Consistent Naming**: Maintain consistent naming across related interfaces

### Default Implementations

1. **Utility Methods**: Provide default implementations for common operations
2. **Convenience Methods**: Add convenience methods that build on core functionality
3. **Type Conversions**: Provide methods for converting between related types
4. **Validation**: Include default validation where appropriate
5. **Performance Optimizations**: Provide optimized implementations for common cases

## Conclusion

These interface specifications provide a comprehensive foundation for the Algorithmsts library. By establishing clear contracts and consistent patterns, they ensure that all components work together seamlessly while maintaining flexibility for future extensions and optimizations.

The interfaces are designed to be both expressive and minimal, providing just enough functionality to be useful without imposing unnecessary constraints. This balance allows for diverse implementations while maintaining consistency across the library.
