/**
 * Design Patterns Module for Algorithmsts Library
 *
 * This module provides implementations of fundamental design patterns that are
 * commonly used in algorithm and data structure libraries. These patterns help
 * create flexible, maintainable, and extensible code.
 */

// Abstract Factory Pattern
export type {
  IAbstractFactory
} from './AbstractFactory';
export {
  ListFactory,
  TreeFactory,
  FactoryCreator
} from './AbstractFactory';

// Strategy Pattern
export type {
  IStrategy,
  ISortingStrategy,
  ISearchingStrategy
} from './Strategy';
export {
  StrategyContext,
  BubbleSortStrategy,
  QuickSortStrategy,
  LinearSearchStrategy,
  BinarySearchStrategy
} from './Strategy';

// Template Method Pattern
export {
  AlgorithmTemplate,
  SortingAlgorithm,
  SearchAlgorithm,
  DataProcessingAlgorithm
} from './TemplateMethod';

/**
 * Abstract Factory Pattern
 *
 * Provides an interface for creating families of related or dependent objects
 * without specifying their concrete classes. Useful for creating related data
 * structures and algorithms together.
 *
 * @example
 * ```typescript
 * import { FactoryCreator } from 'algorithmsts/core/patterns';
 *
 * const factory = FactoryCreator.createFactory<number>('list');
 * const dataStructure = factory.createDataStructure();
 * const algorithm = factory.createAlgorithm();
 * ```
 */

/**
 * Strategy Pattern
 *
 * Defines a family of algorithms, encapsulates each one, and makes them
 * interchangeable. Strategy lets the algorithm vary independently from clients
 * that use it. Particularly useful for sorting and searching algorithms.
 *
 * @example
 * ```typescript
 * import { StrategyContext, BubbleSortStrategy } from 'algorithmsts/core/patterns';
 *
 * const context = new StrategyContext<number[], number[]>();
 * context.setStrategy(new BubbleSortStrategy());
 * const sorted = context.executeStrategy([3, 1, 2]); // [1, 2, 3]
 * ```
 */

/**
 * Template Method Pattern
 *
 * Defines the skeleton of an algorithm in a method, deferring some steps to
 * subclasses. Template Method lets subclasses redefine certain steps of an
 * algorithm without changing the algorithm's structure. Useful for algorithms
 * with common structure but varying implementation details.
 *
 * @example
 * ```typescript
 * import { SortingAlgorithm } from 'algorithmsts/core/patterns';
 *
 * const sorter = new SortingAlgorithm('Custom Sort', 'O(n log n)', 'O(n)');
 * const sorted = sorter.execute([3, 1, 2]); // [1, 2, 3]
 * ```
 */
