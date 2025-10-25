/**
 * Legacy API Utilities
 *
 * Provides utilities for maintaining backward compatibility with legacy APIs
 * while guiding users toward new implementations.
 *
 * @module compatibility/utils/LegacyAPI
 */

import { DeprecationWarning } from './DeprecationWarning';

/**
 * Utility class for managing legacy API compatibility
 */
export class LegacyAPI {
  /**
   * Creates a legacy export with deprecation warnings
   * @param target The new API implementation
   * @param oldName The name of the deprecated API
   * @param newName The name/path of the replacement API
   * @param version The version when the API will be removed
   * @returns The wrapped API with deprecation warnings
   */
  static createLegacyExport<T>(
    target: T,
    oldName: string,
    newName: string,
    version: string
  ): T {
    if (typeof target === 'function') {
      return DeprecationWarning.wrap(target as any, oldName, newName, version);
    }

    // For objects/classes, wrap methods
    if (typeof target === 'object' && target !== null) {
      const wrapped = { ...target };
      for (const key in wrapped) {
        if (typeof wrapped[key] === 'function') {
          wrapped[key] = DeprecationWarning.wrap(
            wrapped[key] as any,
            `${oldName}.${key}`,
            `${newName}.${key}`,
            version
          );
        }
      }
      return wrapped;
    }

    return target;
  }

  /**
   * Creates a legacy class export with constructor warnings
   * @param constructor The class constructor
   * @param oldName The name of the deprecated class
   * @param newName The name/path of the replacement class
   * @param version The version when the class will be removed
   * @returns The wrapped constructor
   */
  static createLegacyClass<T extends new (...args: any[]) => any>(
    constructor: T,
    oldName: string,
    newName: string,
    version: string
  ): T {
    return DeprecationWarning.wrapConstructor(constructor, oldName, newName, version);
  }

  /**
   * Creates a legacy module export object
   * @param exports Object containing legacy exports
   * @param version The version when these exports will be removed
   * @returns The wrapped exports object
   */
  static createLegacyModule<T extends Record<string, any>>(
    exports: T,
    version: string
  ): T {
    const wrapped: any = {};

    for (const [key, value] of Object.entries(exports)) {
      if (typeof value === 'function') {
        wrapped[key] = DeprecationWarning.wrap(
          value,
          `algorithmsts.${key}`,
          `algorithmsts/data-structures or algorithmsts/algorithms`,
          version
        );
      } else if (typeof value === 'object' && value !== null && value.constructor !== Object) {
        // Class constructor
        wrapped[key] = DeprecationWarning.wrapConstructor(
          value as any,
          `algorithmsts.${key}`,
          `algorithmsts/data-structures or algorithmsts/algorithms`,
          version
        );
      } else {
        wrapped[key] = value;
      }
    }

    return wrapped;
  }
}
