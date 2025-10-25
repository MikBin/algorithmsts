import { IDataStructure } from '../interfaces/IDataStructure';
import { IAlgorithm } from '../interfaces/IAlgorithm';

/**
 * Abstract Factory pattern implementation for Algorithmsts library
 *
 * The Abstract Factory pattern provides an interface for creating families of related
 * or dependent objects without specifying their concrete classes. In this context,
 * it allows creating related data structures and algorithms together.
 */

/**
 * Abstract factory interface for creating data structures and algorithms
 */
export interface IAbstractFactory<T> {
  /**
   * Creates a data structure instance
   * @returns A new data structure instance
   */
  createDataStructure(): IDataStructure<T>;

  /**
   * Creates an algorithm instance that operates on arrays of type T
   * @returns A new algorithm instance
   */
  createAlgorithm(): IAlgorithm<T[], any>;
}

/**
 * Concrete factory for list-based data structures and sorting algorithms
 *
 * @example
 * ```typescript
 * const factory = new ListFactory<number>();
 * const list = factory.createDataStructure();
 * const sorter = factory.createAlgorithm();
 *
 * list.add(3);
 * list.add(1);
 * list.add(2);
 *
 * const sorted = sorter.execute(list.toArray()); // [1, 2, 3]
 * ```
 */
export class ListFactory<T> implements IAbstractFactory<T> {
  public createDataStructure(): IDataStructure<T> {
    // This would typically create a concrete data structure like LinkedList
    // For now, returning a placeholder - concrete implementations would be imported
    throw new Error('Concrete data structure implementation needed');
  }

  public createAlgorithm(): IAlgorithm<T[], T[]> {
    // This would typically create a sorting algorithm
    // For now, returning a placeholder - concrete implementations would be imported
    throw new Error('Concrete algorithm implementation needed');
  }
}

/**
 * Concrete factory for tree-based data structures and search algorithms
 *
 * @example
 * ```typescript
 * const factory = new TreeFactory<number>();
 * const tree = factory.createDataStructure();
 * const searcher = factory.createAlgorithm();
 *
 * tree.add(5);
 * tree.add(3);
 * tree.add(7);
 *
 * const result = searcher.execute([5, 3, 7, 1], 7); // Found at index 2
 * ```
 */
export class TreeFactory<T> implements IAbstractFactory<T> {
  public createDataStructure(): IDataStructure<T> {
    // This would typically create a concrete data structure like BinarySearchTree
    // For now, returning a placeholder - concrete implementations would be imported
    throw new Error('Concrete data structure implementation needed');
  }

  public createAlgorithm(): IAlgorithm<T[], any> {
    // This would typically create a search algorithm like BinarySearch
    // For now, returning a placeholder - concrete implementations would be imported
    throw new Error('Concrete algorithm implementation needed');
  }
}

/**
 * Factory creator utility for getting the appropriate factory
 */
export class FactoryCreator {
  /**
   * Creates a factory based on the specified type
   * @param type The type of factory to create ('list' | 'tree')
   * @returns An abstract factory instance
   *
   * @example
   * ```typescript
   * const listFactory = FactoryCreator.createFactory<number>('list');
   * const treeFactory = FactoryCreator.createFactory<string>('tree');
   * ```
   */
  public static createFactory<T>(type: 'list' | 'tree'): IAbstractFactory<T> {
    switch (type) {
      case 'list':
        return new ListFactory<T>();
      case 'tree':
        return new TreeFactory<T>();
      default:
        throw new Error(`Unknown factory type: ${type}`);
    }
  }
}
