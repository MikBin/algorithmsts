import { ArgumentError } from './ArgumentError';
import { DataStructureError } from './DataStructureError';

/**
 * Class for input validation
 */
export class Validator {
  /**
   * Validates that a value is not null or undefined
   * @param value The value to validate
   * @param parameterName The name of the parameter being validated
   * @throws ArgumentError if the value is null or undefined
   */
  public static notNull<T>(value: T | null | undefined, parameterName: string): T {
    if (value === null || value === undefined) {
      throw new ArgumentError(`${parameterName} cannot be null or undefined`, parameterName);
    }
    return value;
  }

  /**
   * Validates that a number is within a specified range
   * @param value The number to validate
   * @param min The minimum allowed value (inclusive)
   * @param max The maximum allowed value (inclusive)
   * @param parameterName The name of the parameter being validated
   * @throws ArgumentError if the value is outside the range
   */
  public static inRange(value: number, min: number, max: number, parameterName: string): number {
    if (value < min || value > max) {
      throw new ArgumentError(`${parameterName} must be between ${min} and ${max}`, parameterName);
    }
    return value;
  }

  /**
   * Validates that an array is not empty
   * @param array The array to validate
   * @param parameterName The name of the parameter being validated
   * @throws ArgumentError if the array is empty
   */
  public static notEmpty<T>(array: T[], parameterName: string): T[] {
    if (array.length === 0) {
      throw new ArgumentError(`${parameterName} cannot be empty`, parameterName);
    }
    return array;
  }

  /**
   * Validates that an index is within array bounds
   * @param index The index to validate
   * @param arrayLength The length of the array
   * @param parameterName The name of the parameter being validated
   * @throws ArgumentError if the index is out of bounds
   */
  public static validIndex(index: number, arrayLength: number, parameterName: string): number {
    if (index < 0 || index >= arrayLength) {
      throw new ArgumentError(`${parameterName} must be between 0 and ${arrayLength - 1}`, parameterName);
    }
    return index;
  }

  /**
   * Validates that a data structure operation can be performed
   * @param condition The condition that must be true for the operation
   * @param message The error message if the condition is false
   * @param operation The name of the operation
   * @throws DataStructureError if the condition is false
   */
  public static validateOperation(condition: boolean, message: string, operation?: string): void {
    if (!condition) {
      throw new DataStructureError(message, operation);
    }
  }
}
