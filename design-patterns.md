
# Algorithmsts Library Design Patterns

## Overview

This document defines the consistent design patterns to be used across all data structures and algorithms in the Algorithmsts library. These patterns ensure code consistency, maintainability, and extensibility while following SOLID principles.

## Core Design Patterns

### 1. Abstract Factory Pattern

**Purpose**: Create families of related objects without specifying their concrete classes.

**Usage**: Used for creating data structures and algorithms with consistent initialization patterns.

```typescript
// src/core/patterns/factory.ts

/**
 * Abstract factory for creating data structures
 */
export abstract class DataStructureFactory<T> {
  /**
   * Creates a linked list
   */
  abstract createLinkedList(): IList<T>;
  
  /**
   * Creates an array list
   */
  abstract createArrayList(): IArrayList<T>;
  
  /**
   * Creates a stack
   */
  abstract createStack(): IStack<T>;
  
  /**
   * Creates a queue
   */
  abstract createQueue(): IQueue<T>;
  
  /**
   * Creates a binary search tree
   */
  abstract createBinarySearchTree(comparator?: ComparisonFunction<T>): IBinarySearchTree<T>;
  
  /**
   * Creates a hash map
   */
  abstract createHashMap(): IHashMap<T, any>;
}

/**
 * Abstract factory for creating algorithms
 */
export abstract class AlgorithmFactory<T> {
  /**
   * Creates a sorting algorithm
   */
  abstract createSortingAlgorithm(type: SortingAlgorithmType): ISortingAlgorithm<T>;
  
  /**
   * Creates a search algorithm
   */
  abstract createSearchAlgorithm(type: SearchAlgorithmType): ISearchAlgorithm<T>;
  
  /**
   * Creates a graph traversal algorithm
   */
  abstract createTraversalAlgorithm(type: TraversalAlgorithmType): IGraphAlgorithm<any, any>;
}

/**
 * Concrete factory implementation
 */
export class StandardDataStructureFactory<T> extends DataStructureFactory<T> {
  createLinkedList(): IList<T> {
    return new LinkedList<T>();
  }
  
  createArrayList(): IArrayList<T> {
    return new ArrayList<T>();
  }
  
  createStack(): IStack<T> {
    return new ArrayStack<T>();
  }
  
  createQueue(): IQueue<T> {
    return new ArrayQueue<T>();
  }
  
  createBinarySearchTree(comparator?: ComparisonFunction<T>): IBinarySearchTree<T> {
    return new BinarySearchTree<T>(comparator);
  }
  
  createHashMap(): IHashMap<T, any> {
    return new HashMap<T, any>();
  }
}
```

### 2. Strategy Pattern

**Purpose**: Define a family of algorithms, encapsulate each one, and make them interchangeable.

**Usage**: Used for implementing different algorithms for the same operation (e.g., different sorting strategies).

```typescript
// src/core/patterns/strategy.ts

/**
 * Strategy interface for sorting algorithms
 */
export interface ISortingStrategy<T> {
  /**
   * Sorts an array using this strategy
   */
  sort(array: T[], comparator: ComparisonFunction<T>): T[];
  
  /**
   * Gets the complexity of this strategy
   */
  getComplexity(): Complexity;
  
  /**
   * Gets the name of this strategy
   */
  getName(): string;
}

/**
 * Context class that uses a sorting strategy
 */
export class Sorter<T> {
  private strategy: ISortingStrategy<T>;
  
  constructor(strategy: ISortingStrategy<T>) {
    this.strategy = strategy;
  }
  
  /**
   * Sets the sorting strategy
   */
  setStrategy(strategy: ISortingStrategy<T>): void {
    this.strategy = strategy;
  }
  
  /**
   * Sorts an array using the current strategy
   */
  sort(array: T[], comparator?: ComparisonFunction<T>): T[] {
    const defaultComparator = (a: T, b: T) => {
      if (a < b) return -1;
      if (a > b) return 1;
      return 0;
    };
    
    return this.strategy.sort(array, comparator || defaultComparator);
  }
  
  /**
   * Gets information about the current strategy
   */
  getStrategyInfo(): { name: string; complexity: Complexity } {
    return {
      name: this.strategy.getName(),
      complexity: this.strategy.getComplexity()
    };
  }
}

/**
 * Concrete strategy implementation
 */
export class QuickSortStrategy<T> implements ISortingStrategy<T> {
  sort(array: T[], comparator: ComparisonFunction<T>): T[] {
    // Implementation of quick sort
    const result = [...array];
    this.quickSort(result, 0, result.length - 1, comparator);
    return result;
  }
  
  private quickSort(array: T[], low: number, high: number, comparator: ComparisonFunction<T>): void {
    if (low < high) {
      const pivotIndex = this.partition(array, low, high, comparator);
      this.quickSort(array, low, pivotIndex - 1, comparator);
      this.quickSort(array, pivotIndex + 1, high, comparator);
    }
  }
  
  private partition(array: T[], low: number, high: number, comparator: ComparisonFunction<T>): number {
    // Partition implementation
    const pivot = array[high];
    let i = low - 1;
    
    for (let j = low; j < high; j++) {
      if (comparator(array[j], pivot) < 0) {
        i++;
        [array[i], array[j]] = [array[j], array[i]];
      }
    }
    
    [array[i + 1], array[high]] = [array[high], array[i + 1]];
    return i + 1;
  }
  
  getComplexity(): Complexity {
    return {
      bigO: 'O(n log n)',
      best: 'O(n log n)',
      worst: 'O(n²)',
      average: 'O(n log n)',
      space: 'O(log n)'
    };
  }
  
  getName(): string {
    return 'Quick Sort';
  }
}
```

### 3. Template Method Pattern

**Purpose**: Define the skeleton of an algorithm in an operation, deferring some steps to subclasses.

**Usage**: Used for implementing algorithms with common structure but specific implementation details.

```typescript
// src/core/patterns/template-method.ts

/**
 * Abstract base class for algorithms using template method pattern
 */
export abstract class BaseAlgorithm<TInput, TOutput> implements IAlgorithm<TInput, TOutput> {
  /**
   * Template method that defines the algorithm structure
   */
  execute(input: TInput): TOutput {
    this.validateInput(input);
    this.initialize(input);
    const result = this.process(input);
    this.finalize(input, result);
    this.validateOutput(result);
    return result;
  }
  
  /**
   * Hook method for input validation
   */
  protected abstract validateInput(input: TInput): void;
  
  /**
   * Hook method for initialization
   */
  protected initialize(input: TInput): void {
    // Default implementation - can be overridden
  }
  
  /**
   * Abstract method for the main processing logic
   */
  protected abstract process(input: TInput): TOutput;
  
  /**
   * Hook method for finalization
   */
  protected finalize(input: TInput, result: TOutput): void {
    // Default implementation - can be overridden
  }
  
  /**
   * Hook method for output validation
   */
  protected abstract validateOutput(output: TOutput): void;
  
  /**
   * Abstract method for getting time complexity
   */
  public abstract getTimeComplexity(): Complexity;
  
  /**
   * Abstract method for getting space complexity
   */
  public abstract getSpaceComplexity(): Complexity;
  
  /**
   * Abstract method for getting algorithm name
   */
  public abstract getName(): string;
  
  /**
   * Default implementation for description
   */
  public getDescription(): string {
    return `${this.getName()} - ${this.getTimeComplexity().bigO} time complexity`;
  }
}

/**
 * Concrete implementation of a sorting algorithm using template method
 */
export class MergeSortAlgorithm<T> extends BaseAlgorithm<T[], T[]> {
  protected validateInput(input: T[]): void {
    if (!Array.isArray(input)) {
      throw new ArgumentError('Input must be an array');
    }
  }
  
  protected process(input: T[]): T[] {
    if (input.length <= 1) {
      return [...input];
    }
    
    const mid = Math.floor(input.length / 2);
    const left = this.process(input.slice(0, mid));
    const right = this.process(input.slice(mid));
    
    return this.merge(left, right);
  }
  
  private merge(left: T[], right: T[]): T[] {
    const result: T[] = [];
    let leftIndex = 0;
    let rightIndex = 0;
    
    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] <= right[rightIndex]) {
        result.push(left[leftIndex]);
        leftIndex++;
      } else {
        result.push(right[rightIndex]);
        rightIndex++;
      }
    }
    
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
  }
  
  protected validateOutput(output: T[]): void {
    if (!Array.isArray(output)) {
      throw new ArgumentError('Output must be an array');
    }
    
    if (output.length !== this.inputLength) {
      throw new ArgumentError('Output length must match input length');
    }
  }
  
  private inputLength: number = 0;
  
  protected initialize(input: T[]): void {
    this.inputLength = input.length;
  }
  
  public getTimeComplexity(): Complexity {
    return {
      bigO: 'O(n log n)',
      best: 'O(n log n)',
      worst: 'O(n log n)',
      average: 'O(n log n)',
      space: 'O(n)'
    };
  }
  
  public getSpaceComplexity(): Complexity {
    return {
      bigO: 'O(n)'
    };
  }
  
  public getName(): string {
    return 'Merge Sort';
  }
}
```

### 4. Observer Pattern

**Purpose**: Define a one-to-many dependency between objects so that when one object changes state, all its dependents are notified and updated automatically.

**Usage**: Used for progress tracking, event handling, and monitoring data structure changes.

```typescript
// src/core/patterns/observer.ts

/**
 * Observer interface
 */
export interface IObserver<T> {
  /**
   * Called when the subject notifies observers
   */
  update(data: T): void;
}

/**
 * Subject interface
 */
export interface ISubject<T> {
  /**
   * Subscribes an observer to notifications
   */
  subscribe(observer: IObserver<T>): void;
  
  /**
   * Unsubscribes an observer from notifications
   */
  unsubscribe(observer: IObserver<T>): void;
  
  /**
   * Notifies all observers with data
   */
  notify(data: T): void;
}

/**
 * Concrete subject implementation
 */
export class Subject<T> implements ISubject<T> {
  private observers: IObserver<T>[] = [];
  
  subscribe(observer: IObserver<T>): void {
    if (!this.observers.includes(observer)) {
      this.observers.push(observer);
    }
  }
  
  unsubscribe(observer: IObserver<T>): void {
    const index = this.observers.indexOf(observer);
    if (index !== -1) {
      this.observers.splice(index, 1);
    }
  }
  
  notify(data: T): void {
    for (const observer of this.observers) {
      observer.update(data);
    }
  }
}

/**
 * Progress tracking observer
 */
export class ProgressObserver implements IObserver<ProgressData> {
  constructor(private callback: (progress: number) => void) {}
  
  update(data: ProgressData): void {
    this.callback(data.progress);
  }
}

/**
 * Data structure change observer
 */
export class DataStructureObserver<T> implements IObserver<ChangeData<T>> {
  constructor(
    private onAdd?: (item: T) => void,
    private onRemove?: (item: T) => void,
    private onUpdate?: (oldItem: T, newItem: T) => void
  ) {}
  
  update(data: ChangeData<T>): void {
    switch (data.type) {
      case 'add':
        if (this.onAdd) this.onAdd(data.item);
        break;
      case 'remove':
        if (this.onRemove) this.onRemove(data.item);
        break;
      case 'update':
        if (this.onUpdate) this.onUpdate(data.oldItem, data.newItem);
        break;
    }
  }
}

/**
 * Data types for observers
 */
export interface ProgressData {
  progress: number;
  message?: string;
}

export interface ChangeData<T> {
  type: 'add' | 'remove' | 'update';
  item: T;
  oldItem?: T;
  newItem?: T;
}
```

### 5. Builder Pattern

**Purpose**: Separate the construction of a complex object from its representation, allowing the same construction process to create different representations.

**Usage**: Used for building complex data structures with many configuration options.

```typescript
// src/core/patterns/builder.ts

/**
 * Builder interface for data structures
 */
export interface IDataStructureBuilder<T> {
  /**
   * Adds an element to the data structure being built
   */
  add(item: T): IDataStructureBuilder<T>;
  
  /**
   * Adds multiple elements to the data structure being built
   */
  addAll(items: Iterable<T>): IDataStructureBuilder<T>;
  
  /**
   * Sets the initial capacity (for array-based structures)
   */
  withCapacity(capacity: number): IDataStructureBuilder<T>;
  
  /**
   * Sets the comparison function (for ordered structures)
   */
  withComparator(comparator: ComparisonFunction<T>): IDataStructureBuilder<T>;
  
  /**
   * Builds the final data structure
   */
  build(): IDataStructure<T>;
}

/**
 * Concrete builder for linked lists
 */
export class LinkedListBuilder<T> implements IDataStructureBuilder<T> {
  private list: LinkedList<T>;
  
  constructor() {
    this.list = new LinkedList<T>();
  }
  
  add(item: T): IDataStructureBuilder<T> {
    this.list.add(item);
    return this;
  }
  
  addAll(items: Iterable<T>): IDataStructureBuilder<T> {
    for (const item of items) {
      this.list.add(item);
    }
    return this;
  }
  
  withCapacity(capacity: number): IDataStructureBuilder<T> {
    // Ignored for linked list (no capacity concept)
    return this;
  }
  
  withComparator(comparator: ComparisonFunction<T>): IDataStructureBuilder<T> {
    // Ignored for basic linked list (no ordering)
    return this;
  }
  
  build(): LinkedList<T> {
    return this.list;
  }
}

/**
 * Concrete builder for binary search trees
 */
export class BinarySearchTreeBuilder<T> implements IDataStructureBuilder<T> {
  private items: T[] = [];
  private comparator?: ComparisonFunction<T>;
  
  add(item: T): IDataStructureBuilder<T> {
    this.items.push(item);
    return this;
  }
  
  addAll(items: Iterable<T>): IDataStructureBuilder<T> {
    for (const item of items) {
      this.items.push(item);
    }
    return this;
  }
  
  withCapacity(capacity: number): IDataStructureBuilder<T> {
    // Ignored for BST (no capacity concept)
    return this;
  }
  
  withComparator(comparator: ComparisonFunction<T>): IDataStructureBuilder<T> {
    this.comparator = comparator;
    return this;
  }
  
  build(): BinarySearchTree<T> {
    const tree = new BinarySearchTree<T>(this.comparator);
    for (const item of this.items) {
      tree.insert(item);
    }
    return tree;
  }
}

/**
 * Director class that uses builders
 */
export class DataStructureDirector {
  /**
   * Creates a sorted list from an array
   */
  static createSortedList<T>(items: T[], comparator?: ComparisonFunction<T>): IList<T> {
    const builder = new ArrayListBuilder<T>()
      .withComparator(comparator || ((a, b) => a < b ? -1 : a > b ? 1 : 0))
      .addAll(items);
    
    const list = builder.build();
    // Sort the list
    list.sort();
    return list;
  }
  
  /**
   * Creates a balanced binary search tree from a sorted array
   */
  static createBalancedBST<T>(items: T[], comparator?: ComparisonFunction<T>): IBinarySearchTree<T> {
    const sortedItems = [...items].sort(comparator);
    const builder = new BinarySearchTreeBuilder<T>()
      .withComparator(comparator);
    
    // Add items in balanced order
    DataStructureDirector.addItemsBalanced(builder, sortedItems, 0, sortedItems.length - 1);
    
    return builder.build();
  }
  
  private static addItemsBalanced<T>(
    builder: BinarySearchTreeBuilder<T>,
    items: T[],
    start: number,
    end: number
  ): void {
    if (start > end) return;
    
    const mid = Math.floor((start + end) / 2);
    builder.add(items[mid]);
    
    this.addItemsBalanced(builder, items, start, mid - 1);
    this.addItemsBalanced(builder, items, mid + 1, end);
  }
}
```

### 6. Adapter Pattern

**Purpose**: Convert the interface of a class into another interface clients expect.

**Usage**: Used for maintaining backward compatibility and integrating with external libraries.

```typescript
// src/core/patterns/adapter.ts

/**
 * Adapter for legacy data structure interfaces
 */
export class LegacyListAdapter<T> implements IList<T> {
  constructor(private legacyList: any) {}
  
  get size(): number {
    return this.legacyList.length || 0;
  }
  
  isEmpty(): boolean {
    return this.size === 0;
  }
  
  add(item: T): boolean {
    if (typeof this.legacyList.push === 'function') {
      this.legacyList.push(item);
      return true;
    }
    return false;
  }
  
  remove(item: T): boolean {
    if (typeof this.legacyList.remove === 'function') {
      return this.legacyList.remove(item);
    }
    return false;
  }
  
  contains(item: T): boolean {
    if (typeof this.legacyList.includes === 'function') {
      return this.legacyList.includes(item);
    }
    return false;
  }
  
  getAt(index: number): T | null {
    if (typeof this.legacyList.get === 'function') {
      return this.legacyList.get(index);
    }
    return this.legacyList[index] || null;
  }
  
  setAt(index: number, item: T): boolean {
    if (index >= 0 && index < this.size) {
      this.legacyList[index] = item;
      return true;
    }
    return false;
  }
  
  toArray(): T[] {
    return Array.isArray(this.legacyList) ? [...this.legacyList] : [];
  }
  
  clear(): void {
    if (typeof this.legacyList.clear === 'function') {
      this.legacyList.clear();
    } else if (Array.isArray(this.legacyList)) {
      this.legacyList.length = 0;
    }
  }
  
  clone(): IList<T> {
    const clonedLegacy = Array.isArray(this.legacyList) ? [...this.legacyList] : this.legacyList;
    return new LegacyListAdapter<T>(clonedLegacy);
  }
  
  [Symbol.iterator](): Iterator<T> {
    let index = 0;
    return {
      next: () => {
        if (index < this.size) {
          return { value: this.getAt(index++), done: false };
        }
        return { value: undefined, done: true };
      }
    };
  }
  
  // Additional IList methods
  prepend(item: T): void {
    if (typeof this.legacyList.unshift === 'function') {
      this.legacyList.unshift(item);
    }
  }
  
  append(item: T): void {
    this.add(item);
  }
  
  removeFirst(): T | null {
    if (typeof this.legacyList.shift === 'function') {
      return this.legacyList.shift();
    }
    return null;
  }
  
  removeLast(): T | null {
    if (typeof this.legacyList.pop === 'function') {
      return this.legacyList.pop();
    }
    return null;
  }
  
  subList(start: number, end: number): IList<T> {
    const subArray = this.toArray().slice(start, end);
    return new LegacyListAdapter<T>(subArray);
  }
  
  indexOf(item: T): number {
    return this.toArray().indexOf(item);
  }
  
  lastIndexOf(item: T): number {
    return this.toArray().lastIndexOf(item);
  }
  
  first(): T | null {
    return this.getAt(0);
  }
  
  last(): T | null {
    return this.getAt(this.size - 1);
  }
  
  insertAt(index: number, item: T): boolean {
    if (typeof this.legacyList.splice === 'function') {
      this.legacyList.splice(index, 0, item);
      return true;
    }
    return false;
  }
  
  removeAt(index: number): T | null {
    if (typeof this

.legacyList.splice === 'function') {
      const removed = this.legacyList.splice(index, 1);
      return removed.length > 0 ? removed[0] : null;
    }
    return null;
  }
  
  swap(index1: number, index2: number): boolean {
    if (index1 >= 0 && index1 < this.size && index2 >= 0 && index2 < this.size) {
      const temp = this.legacyList[index1];
      this.legacyList[index1] = this.legacyList[index2];
      this.legacyList[index2] = temp;
      return true;
    }
    return false;
  }
  
  addAll(items: Iterable<T>): number {
    let count = 0;
    for (const item of items) {
      if (this.add(item)) {
        count++;
      }
    }
    return count;
  }
  
  removeAll(items: Iterable<T>): number {
    let count = 0;
    for (const item of items) {
      if (this.remove(item)) {
        count++;
      }
    }
    return count;
  }
  
  removeIf(predicate: (item: T) => boolean): number {
    const items = this.toArray();
    let count = 0;
    for (const item of items) {
      if (predicate(item) && this.remove(item)) {
        count++;
      }
    }
    return count;
  }
  
  poll(): T | null {
    return this.removeFirst();
  }
  
  addIfAbsent(item: T): boolean {
    if (!this.contains(item)) {
      return this.add(item);
    }
    return false;
  }
  
  containsAll(items: Iterable<T>): boolean {
    for (const item of items) {
      if (!this.contains(item)) {
        return false;
      }
    }
    return true;
  }
  
  find(predicate: (item: T) => boolean): T | null {
    for (const item of this) {
      if (predicate(item)) {
        return item;
      }
    }
    return null;
  }
  
  findAll(predicate: (item: T) => boolean): T[] {
    const result: T[] = [];
    for (const item of this) {
      if (predicate(item)) {
        result.push(item);
      }
    }
    return result;
  }
  
  getMemoryUsage(): number {
    // Approximate memory usage calculation
    return this.size * 8; // Rough estimate
  }
  
  validate(): boolean {
    // Basic validation
    return this.size >= 0;
  }
  
  getInternalRepresentation(): any {
    return this.legacyList;
  }
  
  rebuildFromRepresentation(representation: any): void {
    this.legacyList = representation;
  }
}
```

### 7. Decorator Pattern

**Purpose**: Attach additional responsibilities to an object dynamically.

**Usage**: Used for adding functionality to data structures without modifying their core implementation.

```typescript
// src/core/patterns/decorator.ts

/**
 * Base decorator for data structures
 */
export abstract class DataStructureDecorator<T> implements IDataStructure<T> {
  constructor(protected dataStructure: IDataStructure<T>) {}
  
  get size(): number {
    return this.dataStructure.size;
  }
  
  isEmpty(): boolean {
    return this.dataStructure.isEmpty();
  }
  
  clear(): void {
    this.dataStructure.clear();
  }
  
  toArray(): T[] {
    return this.dataStructure.toArray();
  }
  
  clone(): IDataStructure<T> {
    return this.dataStructure.clone();
  }
  
  [Symbol.iterator](): Iterator<T> {
    return this.dataStructure[Symbol.iterator]();
  }
  
  getMemoryUsage(): number {
    return this.dataStructure.getMemoryUsage();
  }
  
  validate(): boolean {
    return this.dataStructure.validate();
  }
  
  getInternalRepresentation(): any {
    return this.dataStructure.getInternalRepresentation();
  }
  
  rebuildFromRepresentation(representation: any): void {
    this.dataStructure.rebuildFromRepresentation(representation);
  }
}

/**
 * Decorator that adds logging to data structure operations
 */
export class LoggingDecorator<T> extends DataStructureDecorator<T> {
  private logOperation(operation: string, ...args: any[]): void {
    console.log(`[${new Date().toISOString()}] ${operation}`, ...args);
  }
  
  add(item: T): boolean {
    this.logOperation('add', item);
    return (this.dataStructure as any).add(item);
  }
  
  remove(item: T): boolean {
    this.logOperation('remove', item);
    return (this.dataStructure as any).remove(item);
  }
  
  contains(item: T): boolean {
    this.logOperation('contains', item);
    return (this.dataStructure as any).contains(item);
  }
}

/**
 * Decorator that adds synchronization to data structure operations
 */
export class SynchronizedDecorator<T> extends DataStructureDecorator<T> {
  private readonly lock = {};
  
  synchronized<R>(operation: () => R): R {
    // Simple mutex implementation using object locking
    // In a real implementation, you might use a more sophisticated locking mechanism
    return operation();
  }
  
  add(item: T): boolean {
    return this.synchronized(() => (this.dataStructure as any).add(item));
  }
  
  remove(item: T): boolean {
    return this.synchronized(() => (this.dataStructure as any).remove(item));
  }
  
  clear(): void {
    this.synchronized(() => this.dataStructure.clear());
  }
}

/**
 * Decorator that adds caching to data structure operations
 */
export class CachingDecorator<T> extends DataStructureDecorator<T> {
  private cache = new Map<string, any>();
  private cacheHits = 0;
  private cacheMisses = 0;
  
  private getCacheKey(operation: string, ...args: any[]): string {
    return `${operation}:${JSON.stringify(args)}`;
  }
  
  private getCachedResult<R>(key: string): R | null {
    if (this.cache.has(key)) {
      this.cacheHits++;
      return this.cache.get(key);
    }
    this.cacheMisses++;
    return null;
  }
  
  private setCachedResult<R>(key: string, result: R): void {
    this.cache.set(key, result);
  }
  
  contains(item: T): boolean {
    const key = this.getCacheKey('contains', item);
    const cached = this.getCachedResult<boolean>(key);
    if (cached !== null) {
      return cached;
    }
    
    const result = (this.dataStructure as any).contains(item);
    this.setCachedResult(key, result);
    return result;
  }
  
  toArray(): T[] {
    const key = this.getCacheKey('toArray');
    const cached = this.getCachedResult<T[]>(key);
    if (cached !== null) {
      return cached;
    }
    
    const result = this.dataStructure.toArray();
    this.setCachedResult(key, result);
    return result;
  }
  
  getCacheStats(): { hits: number; misses: number; hitRate: number } {
    const total = this.cacheHits + this.cacheMisses;
    return {
      hits: this.cacheHits,
      misses: this.cacheMisses,
      hitRate: total > 0 ? this.cacheHits / total : 0
    };
  }
  
  clearCache(): void {
    this.cache.clear();
    this.cacheHits = 0;
    this.cacheMisses = 0;
  }
}
```

### 8. Command Pattern

**Purpose**: Encapsulate a request as an object, thereby letting you parameterize clients with different requests, queue or log requests, and support undoable operations.

**Usage**: Used for implementing undo/redo functionality and operation logging.

```typescript
// src/core/patterns/command.ts

/**
 * Command interface
 */
export interface ICommand<T> {
  /**
   * Executes the command
   */
  execute(): T;
  
  /**
   * Undoes the command
   */
  undo(): void;
  
  /**
   * Gets a description of the command
   */
  getDescription(): string;
}

/**
 * Invoker class that executes commands
 */
export class CommandInvoker<T> {
  private history: ICommand<T>[] = [];
  private currentIndex = -1;
  
  /**
   * Executes a command and adds it to history
   */
  execute(command: ICommand<T>): T {
    const result = command.execute();
    
    // Remove any commands after current index (for redo functionality)
    this.history = this.history.slice(0, this.currentIndex + 1);
    
    // Add the new command to history
    this.history.push(command);
    this.currentIndex++;
    
    return result;
  }
  
  /**
   * Undoes the last command
   */
  undo(): boolean {
    if (this.canUndo()) {
      const command = this.history[this.currentIndex];
      command.undo();
      this.currentIndex--;
      return true;
    }
    return false;
  }
  
  /**
   * Redoes the next command
   */
  redo(): boolean {
    if (this.canRedo()) {
      this.currentIndex++;
      const command = this.history[this.currentIndex];
      command.execute();
      return true;
    }
    return false;
  }
  
  /**
   * Checks if undo is possible
   */
  canUndo(): boolean {
    return this.currentIndex >= 0;
  }
  
  /**
   * Checks if redo is possible
   */
  canRedo(): boolean {
    return this.currentIndex < this.history.length - 1;
  }
  
  /**
   * Gets the command history
   */
  getHistory(): string[] {
    return this.history.map(cmd => cmd.getDescription());
  }
  
  /**
   * Clears the command history
   */
  clearHistory(): void {
    this.history = [];
    this.currentIndex = -1;
  }
}

/**
 * Concrete command for adding an element to a collection
 */
export class AddCommand<T> implements ICommand<boolean> {
  constructor(
    private collection: IAddableCollection<T>,
    private item: T
  ) {}
  
  execute(): boolean {
    return this.collection.add(this.item);
  }
  
  undo(): void {
    this.collection.remove(this.item);
  }
  
  getDescription(): string {
    return `Add ${JSON.stringify(this.item)}`;
  }
}

/**
 * Concrete command for removing an element from a collection
 */
export class RemoveCommand<T> implements ICommand<boolean> {
  private wasRemoved = false;
  
  constructor(
    private collection: IRemovableCollection<T>,
    private item: T
  ) {}
  
  execute(): boolean {
    this.wasRemoved = this.collection.remove(this.item);
    return this.wasRemoved;
  }
  
  undo(): void {
    if (this.wasRemoved) {
      (this.collection as IAddableCollection<T>).add(this.item);
    }
  }
  
  getDescription(): string {
    return `Remove ${JSON.stringify(this.item)}`;
  }
}

/**
 * Concrete command for sorting a collection
 */
export class SortCommand<T> implements ICommand<T[]> {
  private originalOrder: T[] = [];
  
  constructor(
    private collection: IIndexedDataStructure<T>,
    private comparator?: ComparisonFunction<T>
  ) {}
  
  execute(): T[] {
    // Store original order for undo
    this.originalOrder = this.collection.toArray();
    
    // Sort the collection
    const sorted = this.collection.toArray();
    sorted.sort(this.comparator || ((a, b) => a < b ? -1 : a > b ? 1 : 0));
    
    // Update the collection with sorted values
    for (let i = 0; i < sorted.length; i++) {
      this.collection.setAt(i, sorted[i]);
    }
    
    return sorted;
  }
  
  undo(): void {
    // Restore original order
    for (let i = 0; i < this.originalOrder.length; i++) {
      this.collection.setAt(i, this.originalOrder[i]);
    }
  }
  
  getDescription(): string {
    return 'Sort collection';
  }
}
```

## Pattern Usage Guidelines

### When to Use Each Pattern

1. **Abstract Factory**: When you need to create families of related objects
2. **Strategy**: When you have multiple algorithms for the same operation
3. **Template Method**: When you have an algorithm with fixed structure but variable steps
4. **Observer**: When you need to notify multiple objects of state changes
5. **Builder**: When constructing complex objects with many optional parameters
6. **Adapter**: When you need to integrate incompatible interfaces
7. **Decorator**: When you need to add functionality to objects dynamically
8. **Command**: When you need to parameterize operations and support undo/redo

### Pattern Combinations

1. **Factory + Strategy**: Create strategy objects using factories
2. **Observer + Command**: Log commands as they are executed
3. **Builder + Decorator**: Build objects and then decorate them with additional functionality
4. **Template Method + Strategy**: Use strategy pattern for variable steps in template method

### Performance Considerations

1. **Decorator Pattern**: Adds a layer of indirection that can impact performance
2. **Observer Pattern**: Can cause performance issues with many observers
3. **Command Pattern**: Stores command history which can consume memory
4. **Builder Pattern**: Can create many intermediate objects during construction

### Implementation Best Practices

1. **Keep Patterns Simple**: Don't over-engineer solutions
2. **Document Pattern Usage**: Clearly document when and why patterns are used
3. **Maintain SOLID Principles**: Ensure patterns support SOLID principles
4. **Test Thoroughly**: Pattern implementations can be complex and require thorough testing
5. **Consider Alternatives**: Always consider if a simpler solution would work

## Conclusion

These design patterns provide a robust foundation for implementing consistent, maintainable, and extensible data structures and algorithms in the Algorithmsts library. By following these patterns, developers can create code that is both flexible and predictable, making the library easier to use and extend.

The patterns are designed to work together harmoniously, allowing for complex combinations that solve sophisticated problems while maintaining code clarity and performance. Each pattern addresses specific design challenges and should be applied judiciously based on the requirements of the specific implementation.
