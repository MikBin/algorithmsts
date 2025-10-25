/**
 * Basic collection interface with size, isEmpty, clear methods
 */
export interface ICollection<T> {
  /**
   * Gets the number of elements in the collection
   */
  readonly size: number;

  /**
   * Checks if the collection is empty
   * @returns true if the collection contains no elements, false otherwise
   */
  isEmpty(): boolean;

  /**
   * Clears all elements from the collection
   */
  clear(): void;
}
