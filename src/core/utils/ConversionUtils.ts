/**
 * Utility functions for type conversions
 */
export class ConversionUtils {
  /**
   * Converts a value to string
   * @param value The value to convert
   * @returns String representation of the value
   */
  public static toString<T>(value: T): string {
    return String(value);
  }

  /**
   * Converts a value to number
   * @param value The value to convert
   * @returns Number representation of the value, or NaN if conversion fails
   */
  public static toNumber(value: any): number {
    return Number(value);
  }

  /**
   * Converts a value to boolean
   * @param value The value to convert
   * @returns Boolean representation of the value
   */
  public static toBoolean(value: any): boolean {
    return Boolean(value);
  }

  /**
   * Converts an array to a set
   * @param array The array to convert
   * @returns A set containing the array elements
   */
  public static arrayToSet<T>(array: T[]): Set<T> {
    return new Set(array);
  }

  /**
   * Converts a set to an array
   * @param set The set to convert
   * @returns An array containing the set elements
   */
  public static setToArray<T>(set: Set<T>): T[] {
    return Array.from(set);
  }

  /**
   * Converts an array to a map using indices as keys
   * @param array The array to convert
   * @returns A map with indices as keys and array elements as values
   */
  public static arrayToMap<T>(array: T[]): Map<number, T> {
    const map = new Map<number, T>();
    array.forEach((element, index) => {
      map.set(index, element);
    });
    return map;
  }

  /**
   * Converts a map to an array of key-value pairs
   * @param map The map to convert
   * @returns An array of [key, value] pairs
   */
  public static mapToArray<K, V>(map: Map<K, V>): [K, V][] {
    return Array.from(map.entries());
  }
}
