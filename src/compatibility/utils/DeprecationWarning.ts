/**
 * Deprecation Warning Utility
 *
 * Provides utilities for emitting deprecation warnings to guide users
 * from legacy APIs to new implementations.
 *
 * @module compatibility/utils/DeprecationWarning
 */

/**
 * Utility class for emitting deprecation warnings
 */
export class DeprecationWarning {
  private static suppressed = false;
  private static history: string[] = [];

  /**
   * Emits a deprecation warning for a specific API
   * @param oldAPI The name of the deprecated API
   * @param newAPI The name/path of the replacement API
   * @param version The version when the API will be removed
   */
  static warn(oldAPI: string, newAPI: string, version: string = '2.0.0'): void {
    if (this.suppressed) return;

    const message = `[DEPRECATED] ${oldAPI} is deprecated and will be removed in version ${version}. Use ${newAPI} instead.`;
    this.history.push(message);

    if (typeof console !== 'undefined' && console.warn) {
      console.warn(message);
    }
  }

  /**
   * Emits a deprecation warning for a method
   * @param oldMethod The name of the deprecated method
   * @param newMethod The name/path of the replacement method
   * @param version The version when the method will be removed
   */
  static warnMethod(oldMethod: string, newMethod: string, version: string = '2.0.0'): void {
    this.warn(`Method ${oldMethod}`, `Method ${newMethod}`, version);
  }

  /**
   * Emits a deprecation warning for a class
   * @param oldClass The name of the deprecated class
   * @param newClass The name/path of the replacement class
   * @param version The version when the class will be removed
   */
  static warnClass(oldClass: string, newClass: string, version: string = '2.0.0'): void {
    this.warn(`Class ${oldClass}`, `Class ${newClass}`, version);
  }

  /**
   * Emits a deprecation warning for an API
   * @param oldAPI The name of the deprecated API
   * @param newAPI The name/path of the replacement API
   * @param version The version when the API will be removed
   */
  static warnAPI(oldAPI: string, newAPI: string, version: string = '2.0.0'): void {
    this.warn(`API ${oldAPI}`, `API ${newAPI}`, version);
  }

  /**
   * Suppresses all deprecation warnings
   */
  static suppress(): void {
    this.suppressed = true;
  }

  /**
   * Unsuppresses deprecation warnings
   */
  static unsuppress(): void {
    this.suppressed = false;
  }

  /**
   * Clears the warning history
   */
  static clearHistory(): void {
    this.history = [];
  }

  /**
   * Gets the warning history
   * @returns Array of warning messages
   */
  static getHistory(): string[] {
    return [...this.history];
  }

  /**
   * Wraps a function with a deprecation warning
   * @param fn The function to wrap
   * @param oldAPI The name of the deprecated API
   * @param newAPI The name/path of the replacement API
   * @param version The version when the API will be removed
   * @returns The wrapped function
   */
  static wrap<T extends Function>(
    fn: T,
    oldAPI: string,
    newAPI: string,
    version: string
  ): T {
    return ((...args: any[]) => {
      this.warn(oldAPI, newAPI, version);
      return fn(...args);
    }) as unknown as T;
  }

  /**
   * Wraps a class constructor with a deprecation warning
   * @param constructor The class constructor to wrap
   * @param oldAPI The name of the deprecated API
   * @param newAPI The name/path of the replacement API
   * @param version The version when the API will be removed
   * @returns The wrapped constructor
   */
  static wrapConstructor<T extends new (...args: any[]) => any>(
    constructor: T,
    oldAPI: string,
    newAPI: string,
    version: string
  ): T {
    return class extends constructor {
      constructor(...args: any[]) {
        super(...args);
        DeprecationWarning.warn(oldAPI, newAPI, version);
      }
    } as T;
  }
}
