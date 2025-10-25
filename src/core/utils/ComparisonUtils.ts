import { IComparable } from '../interfaces/IComparable';

/**
 * Utility functions for comparisons
 */
export class ComparisonUtils {
  /**
   * Compares two values for equality
   * @param a First value to compare
   * @param b Second value to compare
   * @returns true if values are equal, false otherwise
   */
  public static equals<T>(a: T, b: T): boolean {
    return a === b;
  }

  /**
   * Compares two comparable objects
   * @param a First comparable object
   * @param b Second comparable object
   * @returns Result of comparison (-1, 0, or 1)
   */
  public static compare<T extends IComparable<T>>(a: T, b: T): number {
    return a.compareTo(b);
  }

  /**
   * Checks if first value is less than second value
   * @param a First value
   * @param b Second value
   * @returns true if a < b, false otherwise
   */
  public static lessThan<T extends IComparable<T>>(a: T, b: T): boolean {
    return a.compareTo(b) < 0;
  }

  /**
   * Checks if first value is greater than second value
   * @param a First value
   * @param b Second value
   * @returns true if a > b, false otherwise
   */
  public static greaterThan<T extends IComparable<T>>(a: T, b: T): boolean {
    return a.compareTo(b) > 0;
  }

  /**
   * Finds the minimum of two comparable values
   * @param a First value
   * @param b Second value
   * @returns The smaller value
   */
  public static min<T extends IComparable<T>>(a: T, b: T): T {
    return a.compareTo(b) <= 0 ? a : b;
  }

  /**
   * Finds the maximum of two comparable values
   * @param a First value
   * @param b Second value
   * @returns The larger value
   */
  public static max<T extends IComparable<T>>(a: T, b: T): T {
    return a.compareTo(b) >= 0 ? a : b;
  }
}
