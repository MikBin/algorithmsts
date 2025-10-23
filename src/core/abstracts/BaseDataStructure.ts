import { IDataStructure } from '../interfaces/IDataStructure';
import { IIterator } from '../interfaces/IIterator';
import { BaseCollection } from './BaseCollection';

/**
 * Abstract implementation of IDataStructure<T>
 */
export abstract class BaseDataStructure<T> extends BaseCollection<T> implements IDataStructure<T> {
  /**
   * Creates an iterator for this data structure
   * @returns An iterator over the elements
   */
  public abstract iterator(): IIterator<T>;

  /**
   * Checks if the data structure contains a specific element
   * @param element The element to search for
   * @returns true if the element is found, false otherwise
   */
  public abstract contains(element: T): boolean;

  /**
   * Converts the data structure to an array
   * @returns An array containing all elements
   */
  public abstract toArray(): T[];
}
