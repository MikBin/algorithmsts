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
  /**
   * Emits a deprecation warning for a specific API
   * @param oldAPI The name of the deprecated API
   * @param newAPI The name/path of the replacement API
   * @param version The version when the API will be removed
   */
  static warn(oldAPI: string, newAPI: string, version: string): void {
    if (typeof console !== 'undefined' && console.warn) {
      console.warn(
        `[DEPRECATED] ${oldAPI} is deprecated and will be removed in version ${version}. ` +
        `Use ${newAPI} instead.`
      );
    }
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
