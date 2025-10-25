import { ICollection } from './ICollection';
import { IIterator } from './IIterator';

/**
 * Base interface for all data structures
 */
export interface IDataStructure<T> extends ICollection<T> {
  /**
   * Creates an iterator for this data structure
   * @returns An iterator over the elements
   */
  iterator(): IIterator<T>;

  /**
   * Checks if the data structure contains a specific element
   * @param element The element to search for
   * @returns true if the element is found, false otherwise
   */
  contains(element: T): boolean;

  /**
   * Converts the data structure to an array
   * @returns An array containing all elements
   */
  toArray(): T[];
}
