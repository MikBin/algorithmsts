# Algorithmsts Library Core Infrastructure Components

## Overview

This document outlines the design of core infrastructure components for the Algorithmsts library. These components provide the foundation for all data structures and algorithms, ensuring consistency, reliability, and performance across the entire library.

## Core Infrastructure Architecture

### Component Organization

```
src/core/
├── interfaces/                 # Core interfaces
│   ├── collection.ts          # Collection interfaces
│   ├── comparable.ts          # Comparison interfaces
│   ├── iterable.ts            # Iterator interfaces
│   ├── data-structure.ts      # Data structure interfaces
│   ├── algorithm.ts           # Algorithm interfaces
│   └── index.ts               # Interface exports
├── abstracts/                 # Abstract base classes
│   ├── collection.ts          # Base collection class
│   ├── data-structure.ts      # Base data structure class
│   ├── algorithm.ts           # Base algorithm class
│   ├── tree.ts                # Base tree class
│   └── index.ts               # Abstract exports
├── utils/                     # Utility functions and helpers
│   ├── comparison.ts          # Comparison utilities
│   ├── validation.ts          # Input validation
│   ├── conversion.ts          # Type conversion utilities
│   ├── performance.ts         # Performance monitoring
│   └── index.ts               # Utility exports
├── validation/                # Input validation and error handling
│   ├── validators.ts          # Validation functions
│   ├── errors.ts              # Custom error classes
│   └── index.ts               # Validation exports
└── index.ts                   # Core module exports
```

## Core Interfaces

### Base Collection Interface

```typescript
// src/core/interfaces/collection.ts

import { Iterator } from './iterable';

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

### Comparison Interface

```typescript
// src/core/interfaces/comparable.ts

/**
 * Interface for comparable objects
 * @template T The type of object to compare
 */
export interface IComparable<T> {
  /**
   * Compares this object with another object
   * @param other The object to compare with
   * @returns Negative if this < other, 0 if equal, positive if this > other
   */
  compareTo(other: T): number;
}

/**
 * Type definition for comparison functions
 * @template T The type of values to compare
 */
export type ComparisonFunction<T> = (a: T, b: T) => number;

/**
 * Interface for comparator objects
 * @template T The type of values to compare
 */
export interface IComparator<T> {
  compare(a: T, b: T): number;
  equals(a: T, b: T): boolean;
}

/**
 * Default comparator implementation
 * @template T The type of values to compare
 */
export class DefaultComparator<T> implements IComparator<T> {
  constructor(private compareFn?: ComparisonFunction<T>) {}
  
  compare(a: T, b: T): number {
    if (this.compareFn) {
      return this.compareFn(a, b);
    }
    
    // Default comparison for primitive types
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  }
  
  equals(a: T, b: T): boolean {
    return this.compare(a, b) === 0;
  }
}
```

### Iterator Interface

```typescript
// src/core/interfaces/iterable.ts

/**
 * Enhanced iterator result interface
 * @template T The type of value
 */
export interface IteratorResult<T> {
  done: boolean;
  value: T;
}

/**
 * Enhanced iterator interface
 * @template T The type of values
 */
export interface Iterator<T> {
  next(value?: any): IteratorResult<T>;
  return?(value?: any): IteratorResult<T>;
  throw?(e?: any): IteratorResult<T>;
  
  /**
   * Checks if there are more elements
   */
  hasNext(): boolean;
  
  /**
   * Peeks at the next element without consuming it
   */
  peek(): T | undefined;
}

/**
 * Enhanced iterable interface
 * @template T The type of elements
 */
export interface Iterable<T> {
  [Symbol.iterator](): Iterator<T>;
  
  /**
   * Creates a new iterator
   */
  iterator(): Iterator<T>;
  
  /**
   * Checks if the iterable is empty
   */
  isEmpty(): boolean;
  
  /**
   * Gets the number of elements
   */
  size(): number;
}
```

## Abstract Base Classes

### Base Collection Class

```typescript
// src/core/abstracts/collection.ts

import { ICollection } from '../interfaces/collection';
import { Iterator, IteratorResult } from '../interfaces/iterable';
import { Validator } from '../validation/validators';

/**
 * Abstract base class for all collections
 * @template T The type of elements in the collection
 */
export abstract class BaseCollection<T> implements ICollection<T> {
  protected _size: number = 0;
  
  /**
   * Gets the number of elements in the collection
   */
  get size(): number {
    return this._size;
  }
  
  /**
   * Checks if the collection is empty
   */
  isEmpty(): boolean {
    return this._size === 0;
  }
  
  /**
   * Clears all elements from the collection
   */
  abstract clear(): void;
  
  /**
   * Converts the collection to an array
   */
  toArray(): T[] {
    const result: T[] = [];
    for (const item of this) {
      result.push(item);
    }
    return result;
  }
  
  /**
   * Creates a shallow copy of the collection
   */
  abstract clone(): ICollection<T>;
  
  /**
   * Gets an iterator for the collection
   */
  abstract [Symbol.iterator](): Iterator<T>;
  
  /**
   * Validates an element
   */
  protected validateElement(element: T): void {
    Validator.notNull(element, 'element');
  }
  
  /**
   * Updates the size of the collection
   */
  protected updateSize(newSize: number): void {
    if (newSize < 0) {
      throw new RangeError('Size cannot be negative');
    }
    this._size = newSize;
  }
  
  /**
   * Increments the size
   */
  protected incrementSize(): void {
    this._size++;
  }
  
  /**
   * Decrements the size
   */
  protected decrementSize(): void {
    if (this._size > 0) {
      this._size--;
    }
  }
}
```

### Base Data Structure Class

```typescript
// src/core/abstracts/data-structure.ts

import { BaseCollection } from './collection';
import { IDataStructure } from '../interfaces/data-structure';
import { PerformanceMonitor } from '../utils/performance';

/**
 * Abstract base class for all data structures
 * @template T The type of elements in the data structure
 */
export abstract class BaseDataStructure<T> extends BaseCollection<T> implements IDataStructure<T> {
  protected _lastValidation: Date | null = null;
  protected _memoryUsage: number = 0;
  
  /**
   * Gets the memory usage of the data structure in bytes
   */
  getMemoryUsage(): number {
    return this._memoryUsage;
  }
  
  /**
   * Updates the memory usage estimate
   */
  protected updateMemoryUsage(): void {
    // Base implementation - should be overridden by subclasses
    this._memoryUsage = this.size * 8; // Rough estimate
  }
  
  /**
   * Validates the internal state of the data structure
   */
  validate(): boolean {
    try {
      this.performValidation();
      this._lastValidation = new Date();
      return true;
    } catch (error) {
      return false;
    }
  }
  
  /**
   * Performs the actual validation - to be implemented by subclasses
   */
  protected abstract performValidation(): void;
  
  /**
   * Gets the internal representation of the data structure
   */
  abstract getInternalRepresentation(): any;
  
  /**
   * Rebuilds the data structure from an internal representation
   */
  abstract rebuildFromRepresentation(representation: any): void;
  
  /**
   * Gets the last validation time
   */
  getLastValidation(): Date | null {
    return this._lastValidation;
  }
  
  /**
   * Measures performance of an operation
   */
  protected measurePerformance<T>(operation: () => T, operationName: string): T {
    return PerformanceMonitor.measure(operationName, operation);
  }
}
```

### Base Algorithm Class

```typescript
// src/core/abstracts/algorithm.ts

import { IAlgorithm } from '../interfaces/algorithm';
import { Complexity } from '../interfaces/algorithm';
import { Validator } from '../validation/validators';
import { PerformanceMonitor } from '../utils/performance';

/**
 * Abstract base class for all algorithms
 * @template TInput The type of input to the algorithm
 * @template TOutput The type of output from the algorithm
 */
export abstract class BaseAlgorithm<TInput, TOutput> implements IAlgorithm<TInput, TOutput> {
  protected _executionCount: number = 0;
  protected _totalExecutionTime: number = 0;
  
  /**
   * Template method that defines the algorithm structure
   */
  execute(input: TInput): TOutput {
    return PerformanceMonitor.measure(this.getName(), () => {
      this.validateInput(input);
      this.initialize(input);
      const result = this.process(input);
      this.finalize(input, result);
      this.validateOutput(result);
      this.updateMetrics();
      return result;
    });
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
   * Updates execution metrics
   */
  protected updateMetrics(): void {
    this._executionCount++;
  }
  
  /**
   * Gets the execution statistics
   */
  getExecutionStats(): { count: number; totalTime: number; averageTime: number } {
    return {
      count: this._executionCount,
      totalTime: this._totalExecutionTime,
      averageTime: this._executionCount > 0 ? this._totalExecutionTime / this._executionCount : 0
    };
  }
  
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
```

## Utility Components

### Comparison Utilities

```typescript
// src/core/utils/comparison.ts

import { ComparisonFunction, IComparator } from '../interfaces/comparable';

/**
 * Utility class for common comparison operations
 */
export class ComparisonUtils {
  /**
   * Default comparison function for primitive types
   */
  static defaultComparison<T>(a: T, b: T): number {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  }
  
  /**
   * Reverse comparison function
   */
  static reverseComparison<T>(compareFn: ComparisonFunction<T>): ComparisonFunction<T> {
    return (a: T, b: T) => -compareFn(a, b);
  }
  
  /**
   * Comparison function for strings (case-insensitive)
   */
  static stringComparisonIgnoreCase(a: string, b: string): number {
    return a.localeCompare(b, undefined, { sensitivity: 'base' });
  }
  
  /**
   * Comparison function for numbers
   */
  static numberComparison(a: number, b: number): number {
    return a - b;
  }
  
  /**
   * Comparison function for dates
   */
  static dateComparison(a: Date, b: Date): number {
    return a.getTime() - b.getTime();
  }
  
  /**
   * Creates a comparison function for object properties
   */
  static propertyComparison<T, K extends keyof T>(property: K): ComparisonFunction<T> {
    return (a: T, b: T) => {
      const aProp = a[property];
      const bProp = b[property];
      
      if (typeof aProp === 'number' && typeof bProp === 'number') {
        return aProp - bProp;
      }
      
      if (aProp < bProp) return -1;
      if (aProp > bProp) return 1;
      return 0;
    };
  }
  
  /**
   * Chains multiple comparison functions
   */
  static chainedComparison<T>(...compareFns: ComparisonFunction<T>[]): ComparisonFunction<T> {
    return (a: T, b: T) => {
      for (const compareFn of compareFns) {
        const result = compareFn(a, b);
        if (result !== 0) return result;
      }
      return 0;
    };
  }
}
```

### Performance Monitoring

```typescript
// src/core/utils/performance.ts

/**
 * Performance monitoring utilities
 */
export class PerformanceMonitor {
  private static timers: Map<string, number> = new Map();
  private static metrics: Map<string, PerformanceMetrics[]> = new Map();
  
  /**
   * Starts a timer with the given name
   */
  static startTimer(name: string): void {
    this.timers.set(name, performance.now());
  }
  
  /**
   * Ends a timer and returns the elapsed time
   */
  static endTimer(name: string): number {
    const startTime = this.timers.get(name);
    if (!startTime) {
      throw new Error(`Timer '${name}' was not started`);
    }
    
    const endTime = performance.now();
    const duration = endTime - startTime;
    this.timers.delete(name);
    
    return duration;
  }
  
  /**
   * Measures the execution time of a function
   */
  static measure<T>(name: string, fn: () => T): T {
    this.startTimer(name);
    try {
      return fn();
    } finally {
      this.endTimer(name);
    }
  }
  
  /**
   * Records performance metrics
   */
  static recordMetrics(name: string, metrics: PerformanceMetrics): void {
    if (!this.metrics.has(name)) {
      this.metrics.set(name, []);
    }
    this.metrics.get(name)!.push(metrics);
  }
  
  /**
   * Gets performance metrics for a given operation
   */
  static getMetrics(name: string): PerformanceMetrics[] {
    return this.metrics.get(name) || [];
  }
  
  /**
   * Gets aggregated performance statistics
   */
  static getStatistics(name: string): PerformanceStatistics | null {
    const metrics = this.getMetrics(name);
    if (metrics.length === 0) return null;
    
    const times = metrics.map(m => m.executionTime);
    const memory = metrics.map(m => m.memoryUsage);
    
    return {
      count: metrics.length,
      averageTime: times.reduce((a, b) => a + b, 0) / times.length,
      minTime: Math.min(...times),
      maxTime: Math.max(...times),
      averageMemory: memory.reduce((a, b) => a + b, 0) / memory.length,
      minMemory: Math.min(...memory),
      maxMemory: Math.max(...memory)
    };
  }
  
  /**
   * Clears all metrics
   */
  static clearMetrics(): void {
    this.metrics.clear();
  }
}

/**
 * Performance metrics interface
 */
export interface PerformanceMetrics {
  operationName: string;
  executionTime: number;
  memoryUsage: number;
  inputSize: number;
  timestamp: Date;
}

/**
 * Performance statistics interface
 */
export interface PerformanceStatistics {
  count: number;
  averageTime: number;
  minTime: number;
  maxTime: number;
  averageMemory: number;
  minMemory: number;
  maxMemory: number;
}
```

### Type Conversion Utilities

```typescript
// src/core/utils/conversion.ts

/**
 * Type conversion utilities
 */
export class ConversionUtils {
  /**
   * Converts any value to a string
   */
  static toString(value: any): string {
    if (value === null || value === undefined) {
      return '';
    }
    return String(value);
  }
  
  /**
   * Converts any value to a number
   */
  static toNumber(value: any): number {
    const num = Number(value);
    if (isNaN(num)) {
      throw new Error(`Cannot convert '${value}' to number`);
    }
    return num;
  }
  
  /**
   * Converts any value to a boolean
   */
  static toBoolean(value: any): boolean {
    if (typeof value === 'boolean') return value;
    if (typeof value === 'string') {
      return value.toLowerCase() !== 'false' && value !== '0' && value !== '';
    }
    if (typeof value === 'number') {
      return value !== 0;
    }
    return Boolean(value);
  }
  
  /**
   * Converts an array-like object to an array
   */
  static toArray<T>(arrayLike: ArrayLike<T>): T[] {
    return Array.from(arrayLike);
  }
  
  /**
   * Converts a value to a specific type
   */
  static convertTo<T>(value: any, type: 'string' | 'number' | 'boolean'): T {
    switch (type) {
      case 'string':
        return this.toString(value) as T;
      case 'number':
        return this.toNumber(value) as T;
      case 'boolean':
        return this.toBoolean(value) as T;
      default:
        throw new Error(`Unsupported type: ${type}`);
    }
  }
}
```

## Validation Components

### Validator Class

```typescript
// src/core/validation/validators.ts

import { ArgumentError, RangeError } from './errors';

/**
 * Utility class for input validation
 */
export class Validator {
  /**
   * Validates that a value is not null or undefined
   */
  static notNull<T>(value: T, paramName: string): asserts value is NonNullable<T> {
    if (value === null || value === undefined) {
      throw new ArgumentError(`${paramName} cannot be null or undefined`);
    }
  }
  
  /**
   * Validates that a string is not empty
   */
  static notEmpty(value: string, paramName: string): void {
    if (value.length === 0) {
      throw new ArgumentError(`${paramName} cannot be empty`);
    }
  }
  
  /**
   * Validates that a number is within a range
   */
  static inRange(value: number, min: number, max: number, paramName: string): void {
    if (value < min || value > max) {
      throw new RangeError(`${paramName} must be between ${min} and ${max}`);
    }
  }
  
  /**
   * Validates that a number is positive
   */
  static positive(value: number, paramName: string): void {
    if (value <= 0) {
      throw new RangeError(`${paramName} must be positive`);
    }
  }
  
  /**
   * Validates that a number is non-negative
   */
  static nonNegative(value: number, paramName: string): void {
    if (value < 0) {
      throw new RangeError(`${paramName} cannot be negative`);
    }
  }
  
  /**
   * Validates that a value is an integer
   */
  static integer(value: number, paramName: string): void {
    if (!Number.isInteger(value)) {
      throw new ArgumentError(`${paramName} must be an integer`);
    }
  }
  
  /**
   * Validates that an array is not empty
   */
  static notEmptyArray<T>(array: T[], paramName: string): void {
    if (array.length === 0) {
      throw new ArgumentError(`${paramName} cannot be empty`);
    }
  }
  
  /**
   * Validates that an index is within array bounds
   */
  static validIndex(index: number, arrayLength: number, paramName: string): void {
    if (index < 0 || index >= arrayLength) {
      throw new RangeError(`${paramName} must be between 0 and ${arrayLength - 1}`);
    }
  }
  
  /**
   * Validates that a function is provided
   */
  static isFunction(value: any, paramName: string): asserts value is Function {
    if (typeof value !== 'function') {
      throw new ArgumentError(`${paramName} must be a function`);
    }
  }
  
  /**
   * Validates that a value is of a specific type
   */
  static isType<T>(value: any, type: string, paramName: string): asserts value is T {
    if (typeof value !== type) {
      throw new ArgumentError(`${paramName} must be of type ${type}`);
    }
  }
  
  /**
   * Validates that a value is an instance of a class
   */
  static isInstance<T>(value: any, constructor: new (...args: any[]) => T, paramName: string): asserts value is T {
    if (!(value instanceof constructor)) {
      throw new ArgumentError(`${paramName} must be an instance of ${constructor.name}`);
    }
  }
}
```

### Error Classes

```typescript
// src/core/validation/errors.ts

/**
 * Base error class for the library
 */
export abstract class AlgorithmstsError extends Error {
  constructor(message: string, public readonly code?: string) {
    super(message);
    this.name = this.constructor.name;
    
    // Maintains proper stack trace for where our error was thrown (only available on V8)
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

/**
 * Error thrown when an argument is invalid
 */
export class ArgumentError extends AlgorithmstsError {
  constructor(message: string, public readonly argumentName?: string) {
    super(message, 'INVALID_ARGUMENT');
  }
}

/**
 * Error thrown when an operation is not supported
 */
export class UnsupportedOperationError extends AlgorithmstsError {
  constructor(message: string) {
    super(message, 'UNSUPPORTED_OPERATION');
  }
}

/**
 * Error thrown when a data structure is in an invalid state
 */
export class DataStructureError extends AlgorithmstsError {
  constructor(message: string, public readonly dataStructureName?: string) {
    super(message, 'INVALID_DATA_STRUCTURE');
  }
}

/**
 * Error thrown when an algorithm fails
 */
export class AlgorithmError extends AlgorithmstsError {
  constructor(message: string, public readonly algorithmName?: string) {
    super(message, 'ALGORITHM_ERROR');
  }
}

/**
 * Error thrown when a validation fails
 */
export class ValidationError extends AlgorithmstsError {
  constructor(message: string, public readonly validationRule?: string) {
    super(message, 'VALIDATION_ERROR');
  }
}

/**
 * Error thrown when a capacity limit is exceeded
 */
export class CapacityExceededError extends AlgorithmstsError {
  constructor(message: string, public readonly capacity?: number) {
    super(message, 'CAPACITY_EXCEEDED');
  }
}

/**
 * Error thrown when an operation times out
 */
export class TimeoutError extends AlgorithmstsError {
  constructor(message: string, public readonly timeout?: number) {
    super(message, 'TIMEOUT');
  }
}
```

## Core Module Exports

### Main Index File

```typescript
// src/core/index.ts

// Interfaces
export * from './interfaces/collection';
export * from './interfaces/comparable';
export * from './interfaces/iterable';
export * from './interfaces/data-structure';
export * from './interfaces/algorithm';

// Abstract classes
export * from './abstracts/collection';
export * from './abstracts/data-structure';
export * from './abstracts/algorithm';
export * from './abstracts/tree';

// Utilities
export * from './utils/comparison';
export * from './utils/validation';
export * from './utils/conversion';
export * from './utils/performance';

// Validation
export * from './validation/validators';
export * from './validation/errors';
```

## Implementation Guidelines

### Error Handling

1. **Validation First**: Always validate inputs before processing
2. **Specific Errors**: Use specific error types for different failure modes
3. **Meaningful Messages**: Provide clear, actionable error messages
4. **Error Codes**: Include error codes for programmatic handling

### Performance Considerations

1. **Lazy Validation**: Validate only when necessary
2. **Caching**: Cache validation results and computed values
3. **Memory Management**: Monitor and optimize memory usage
4. **Profiling**: Use performance monitoring for optimization

### Extensibility

1. **Abstract Classes**: Use abstract classes for common functionality
2. **Template Methods**: Use template method pattern for algorithms
3. **Composition**: Favor composition over inheritance
4. **Interfaces**: Program to interfaces, not implementations

## Conclusion

The core infrastructure components provide a solid foundation for the Algorithmsts library. They ensure:

1. **Consistency**: Common interfaces and patterns across all components
2. **Reliability**: Robust validation and error handling
3. **Performance**: Built-in monitoring and optimization tools
4. **Maintainability**: Clear separation of concerns and modular design

These components establish the architectural patterns and standards that will be used throughout the library, making it easier to develop, test, and maintain high-quality data structures and algorithms.
