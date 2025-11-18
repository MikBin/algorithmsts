/**
 * Legacy API Utilities
 *
 * Provides utilities for maintaining backward compatibility with legacy APIs
 * while guiding users toward new implementations.
 *
 * @module compatibility/utils/LegacyAPI
 */

import { DeprecationWarning } from './DeprecationWarning';

function isClass(fn: unknown): fn is new (...args: any[]) => any {
  if (typeof fn !== 'function') return false;
  const str = Function.prototype.toString.call(fn);
  return str.startsWith('class ') || ('prototype' in fn && Object.getOwnPropertyNames((fn as any).prototype).includes('constructor'));
}

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
      // Distinguish between functions and class constructors
      if (isClass(target)) {
        return DeprecationWarning.wrapConstructor(target as any, oldName, newName, version) as unknown as T;
      }
      return DeprecationWarning.wrap(target as any, oldName, newName, version);
    }

    // For objects/namespaces, wrap function properties
    if (typeof target === 'object' && target !== null) {
      const wrapped: Record<string, any> = { ...(target as any) };
      for (const key of Object.keys(wrapped)) {
        if (typeof wrapped[key] === 'function') {
          wrapped[key] = DeprecationWarning.wrap(
            wrapped[key] as any,
            `${oldName}.${key}`,
            `${newName}.${key}`,
            version
          );
        }
      }
      return wrapped as unknown as T;
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
      let prepared: any;
      if (typeof value === 'function') {
        // Class vs function
        prepared = isClass(value)
          ? DeprecationWarning.wrapConstructor(
              value as any,
              `algorithmsts.${key}`,
              `algorithmsts/data-structures or algorithmsts/algorithms`,
              version
            )
          : DeprecationWarning.wrap(
              value as any,
              `algorithmsts.${key}`,
              `algorithmsts/data-structures or algorithmsts/algorithms`,
              version
            );
      } else if (typeof value === 'object' && value !== null) {
        // Treat as namespace/module object: wrap its callable members
        const obj: Record<string, any> = { ...(value as any) };
        for (const prop of Object.keys(obj)) {
          if (typeof obj[prop] === 'function') {
            obj[prop] = DeprecationWarning.wrap(
              obj[prop],
              `algorithmsts.${key}.${prop}`,
              `algorithmsts/data-structures or algorithmsts/algorithms`,
              version
            );
          }
        }
        prepared = obj;
      } else {
        prepared = value;
      }

      // Define accessor that warns on property access
      Object.defineProperty(wrapped, key, {
        configurable: true,
        enumerable: true,
        get() {
          DeprecationWarning.warn(
            `algorithmsts.${key}`,
            `algorithmsts/data-structures or algorithmsts/algorithms`,
            version
          );
          // Redefine the property to avoid future getter calls
          Object.defineProperty(wrapped, key, {
            value: prepared,
            writable: true,
            configurable: true,
            enumerable: true
          });
          return prepared;
        }
      });
    }

    return wrapped;
  }
}
