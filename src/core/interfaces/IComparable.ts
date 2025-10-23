/**
 * Interface for comparable objects with compareTo method
 */
export interface IComparable<T> {
  /**
   * Compares this object with another object for order
   * @param other The object to compare with
   * @returns A negative number if this object is less than other,
   *          zero if they are equal, or a positive number if this object is greater than other
   */
  compareTo(other: T): number;
}
