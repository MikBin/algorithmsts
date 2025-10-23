import { ICollection } from '../interfaces/ICollection';

/**
 * Abstract implementation of ICollection<T>
 */
export abstract class BaseCollection<T> implements ICollection<T> {
  protected _size: number = 0;

  /**
   * Gets the number of elements in the collection
   */
  public get size(): number {
    return this._size;
  }

  /**
   * Checks if the collection is empty
   * @returns true if the collection contains no elements, false otherwise
   */
  public isEmpty(): boolean {
    return this._size === 0;
  }

  /**
   * Clears all elements from the collection
   */
  public abstract clear(): void;
}
