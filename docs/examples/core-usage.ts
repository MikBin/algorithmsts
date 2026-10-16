/**
 * Core Infrastructure Usage Examples
 *
 * This file demonstrates how to use the core infrastructure components
 * of the Algorithmsts library, including base classes, interfaces,
 * utilities, and design patterns.
 */

import {
  // Core interfaces
  ICollection,
  IComparable,
  IIterator,
  IDataStructure,
  IAlgorithm,

  // Abstract base classes
  BaseCollection,
  BaseDataStructure,
  BaseAlgorithm,

  // Utilities
  ComparisonUtils,
  PerformanceMonitor,
  ConversionUtils,

  // Validation
  Validator,
  ArgumentError,

  // Design patterns
  IAbstractFactory,
  IStrategy,
  AlgorithmTemplate,
} from "@mikbin80/algorithmsts/core";

/**
 * Example 1: Using Base Classes and Interfaces
 */
class ExampleDataStructure extends BaseDataStructure<number> implements IDataStructure<number> {
  private data: number[] = [];

  constructor() {
    super();
  }

  add(item: number): void {
    this.data.push(item);
  }

  remove(item: number): boolean {
    const index = this.data.indexOf(item);
    if (index > -1) {
      this.data.splice(index, 1);
      return true;
    }
    return false;
  }

  contains(item: number): boolean {
    return this.data.includes(item);
  }

  size(): number {
    return this.data.length;
  }

  isEmpty(): boolean {
    return this.data.length === 0;
  }

  clear(): void {
    this.data = [];
  }

  toArray(): number[] {
    return [...this.data];
  }
}

/**
 * Example 2: Implementing Comparable Interface
 */
class Person implements IComparable<Person> {
  constructor(
    public name: string,
    public age: number,
  ) {}

  compareTo(other: Person): number {
    return ComparisonUtils.compare(this.age, other.age);
  }

  toString(): string {
    return `${this.name} (${this.age})`;
  }
}

/**
 * Example 3: Using Performance Monitor
 */
function performanceExample() {
  // Measure execution time of a function
  const duration = PerformanceMonitor.measureExecutionTime(() => {
    const data = Array.from({ length: 1000 }, () => Math.random());
    data.sort((a, b) => a - b);
  });

  console.log(`Sorting took ${duration}ms`);

  // Check if within performance targets
  const isBasicOp = PerformanceMonitor.isWithinBasicOperationsTarget(duration);
  const isSearchOp = PerformanceMonitor.isWithinSearchOperationsTarget(duration);

  console.log(`Within basic operations target: ${isBasicOp}`);
  console.log(`Within search operations target: ${isSearchOp}`);
}

/**
 * Example 4: Using Validation Utilities
 */
function validationExample() {
  try {
    // Validate arguments
    Validator.notNull(null, "value");
  } catch (error) {
    if (error instanceof ArgumentError) {
      console.log("Validation error:", error.message);
    }
  }

  // Validate arrays
  const array = [1, 2, 3];
  Validator.notEmpty(array, "array");
}

/**
 * Example 5: Using Design Patterns - Strategy Pattern
 */
interface ISortingStrategy {
  sort(data: number[]): number[];
}

class BubbleSortStrategy implements ISortingStrategy {
  sort(data: number[]): number[] {
    const result = [...data];
    for (let i = 0; i < result.length; i++) {
      for (let j = 0; j < result.length - i - 1; j++) {
        if (result[j] > result[j + 1]) {
          [result[j], result[j + 1]] = [result[j + 1], result[j]];
        }
      }
    }
    return result;
  }
}

class QuickSortStrategy implements ISortingStrategy {
  sort(data: number[]): number[] {
    if (data.length <= 1) return data;

    const pivot = data[0];
    const left = data.slice(1).filter((x) => x <= pivot);
    const right = data.slice(1).filter((x) => x > pivot);

    return [...this.sort(left), pivot, ...this.sort(right)];
  }
}

class Sorter {
  constructor(private strategy: ISortingStrategy) {}

  setStrategy(strategy: ISortingStrategy): void {
    this.strategy = strategy;
  }

  sort(data: number[]): number[] {
    return this.strategy.sort(data);
  }
}

/**
 * Example 6: Using Template Method Pattern
 */
class NumberArrayProcessor extends AlgorithmTemplate<number[], string> {
  protected prepareData(input: number[]): number[] {
    return input.filter((x) => typeof x === "number" && !isNaN(x));
  }

  protected processData(data: number[]): string {
    const doubled = data.map((x) => x * 2);
    return doubled.join(", ");
  }

  protected finalizeResult(result: string): string {
    return `Result: ${result}`;
  }

  protected validateInput(input: number[]): void {
    if (!Array.isArray(input)) {
      throw new ArgumentError("Input must be an array");
    }
  }
}

/**
 * Example 7: Using Conversion Utilities
 */
function conversionExample() {
  // Convert between data types
  const str = ConversionUtils.toString(42);
  const num = ConversionUtils.toNumber("3.14");
  const bool = ConversionUtils.toBoolean("true");

  console.log(`String: ${str}, Number: ${num}, Boolean: ${bool}`);

  // Convert between data types
  const original = [1, 2, 3];
  const set = ConversionUtils.arrayToSet(original);
  const backToArray = ConversionUtils.setToArray(set);

  console.log("Original array:", original);
  console.log("Converted to set and back:", backToArray);
}

/**
 * Example 8: Using Abstract Factory Pattern
 */
interface IShape {
  draw(): string;
}

class Circle implements IShape {
  draw(): string {
    return "Drawing a circle";
  }
}

class Square implements IShape {
  draw(): string {
    return "Drawing a square";
  }
}

interface IShapeFactory {
  createCircle(): IShape;
  createSquare(): IShape;
}

class SimpleShapeFactory implements IShapeFactory {
  createCircle(): IShape {
    return new Circle();
  }

  createSquare(): IShape {
    return new Square();
  }
}

/**
 * Main demonstration function
 */
export function demonstrateCoreUsage() {
  console.log("=== Core Infrastructure Usage Examples ===\n");

  // Example 1: Data Structure
  console.log("1. Custom Data Structure:");
  const ds = new ExampleDataStructure();
  ds.add(1);
  ds.add(2);
  ds.add(3);
  console.log("Data structure contents:", ds.toArray());

  // Example 2: Comparable objects
  console.log("\n2. Comparable Objects:");
  const people = [new Person("Alice", 30), new Person("Bob", 25), new Person("Charlie", 35)];
  people.sort((a, b) => a.compareTo(b));
  console.log(
    "Sorted by age:",
    people.map((p) => p.toString()),
  );

  // Example 3: Performance monitoring
  console.log("\n3. Performance Monitoring:");
  performanceExample();

  // Example 4: Validation
  console.log("\n4. Validation:");
  validationExample();

  // Example 5: Strategy pattern
  console.log("\n5. Strategy Pattern:");
  const sorter = new Sorter(new BubbleSortStrategy());
  const data = [3, 1, 4, 1, 5];
  console.log("Bubble sort result:", sorter.sort(data));

  sorter.setStrategy(new QuickSortStrategy());
  console.log("Quick sort result:", sorter.sort(data));

  // Example 6: Template method
  console.log("\n6. Template Method Pattern:");
  const processor = new NumberArrayProcessor("Number Processor", "O(n)", "O(1)");
  const result = processor.execute([1, 2, 3]);
  console.log("Processed result:", result);

  // Example 7: Conversions
  console.log("\n7. Conversion Utilities:");
  conversionExample();

  // Example 8: Abstract factory
  console.log("\n8. Abstract Factory Pattern:");
  const factory = new SimpleShapeFactory();
  const circle = factory.createCircle();
  const square = factory.createSquare();
  console.log(circle.draw());
  console.log(square.draw());
}

// Run the demonstration if this file is executed directly
if (require.main === module) {
  demonstrateCoreUsage();
}
