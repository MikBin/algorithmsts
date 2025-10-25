import { IIterator } from '../../../src/core/interfaces/IIterator';

/**
 * Utility functions for testing data structures
 */

export class TestUtils {
  /**
   * Collects all elements from an iterator into an array
   */
  static iteratorToArray<T>(iterator: IIterator<T>): T[] {
    const result: T[] = [];
    while (iterator.hasNext()) {
      result.push(iterator.next());
    }
    return result;
  }

  /**
   * Validates that an iterator implements the IIterator interface correctly
   */
  static validateIterator<T>(iterator: IIterator<T>): {
    isValid: boolean;
    errors: string[];
  } {
    const errors: string[] = [];

    try {
      // Test hasNext
      if (typeof iterator.hasNext !== 'function') {
        errors.push('hasNext is not a function');
      }

      // Test next
      if (typeof iterator.next !== 'function') {
        errors.push('next is not a function');
      }

      // Test that next throws when no more elements
      const testIterator = { ...iterator };
      while (testIterator.hasNext()) {
        testIterator.next();
      }
      try {
        testIterator.next();
        errors.push('next() should throw when no more elements');
      } catch (e) {
        // Expected behavior
      }

      // Test current method if available
      if ('current' in iterator) {
        const currentIterator = { ...iterator };
        if (currentIterator.hasNext()) {
          currentIterator.next();
          currentIterator.current(); // Should not throw
        }
      }
    } catch (e) {
      errors.push(`Iterator validation failed: ${e}`);
    }

    return {
      isValid: errors.length === 0,
      errors
    };
  }

  /**
   * Compares two arrays for equality, handling nested structures
   */
  static deepEqual(a: any, b: any): boolean {
    if (a === b) return true;

    if (a == null || b == null) return a === b;

    if (Array.isArray(a) && Array.isArray(b)) {
      if (a.length !== b.length) return false;
      for (let i = 0; i < a.length; i++) {
        if (!this.deepEqual(a[i], b[i])) return false;
      }
      return true;
    }

    if (typeof a === 'object' && typeof b === 'object') {
      const keysA = Object.keys(a);
      const keysB = Object.keys(b);

      if (keysA.length !== keysB.length) return false;

      for (const key of keysA) {
        if (!keysB.includes(key)) return false;
        if (!this.deepEqual(a[key], b[key])) return false;
      }
      return true;
    }

    return false;
  }

  /**
   * Measures execution time of a function
   */
  static measureTime<T>(fn: () => T): { result: T; timeMs: number } {
    const start = performance.now();
    const result = fn();
    const end = performance.now();
    return { result, timeMs: end - start };
  }

  /**
   * Runs a performance test with multiple iterations
   */
  static performanceTest(
    name: string,
    fn: () => void,
    iterations: number = 100
  ): {
    name: string;
    averageTimeMs: number;
    totalTimeMs: number;
    iterations: number;
  } {
    const times: number[] = [];

    for (let i = 0; i < iterations; i++) {
      const { timeMs } = this.measureTime(fn);
      times.push(timeMs);
    }

    const totalTimeMs = times.reduce((sum, time) => sum + time, 0);
    const averageTimeMs = totalTimeMs / iterations;

    return {
      name,
      averageTimeMs,
      totalTimeMs,
      iterations
    };
  }

  /**
   * Validates interface compliance for data structures
   */
  static validateInterfaceCompliance<T>(
    instance: any,
    interfaceMethods: string[]
  ): {
    compliant: boolean;
    missingMethods: string[];
    extraMethods: string[];
  } {
    const instanceMethods = Object.getOwnPropertyNames(Object.getPrototypeOf(instance));
    const missingMethods = interfaceMethods.filter(method => !instanceMethods.includes(method));
    const extraMethods: string[] = []; // Could be implemented if needed

    return {
      compliant: missingMethods.length === 0,
      missingMethods,
      extraMethods
    };
  }

  /**
   * Generates random test data
   */
  static generateRandomData(type: 'numbers' | 'strings' | 'mixed', count: number): any[] {
    const result: any[] = [];

    for (let i = 0; i < count; i++) {
      switch (type) {
        case 'numbers':
          result.push(Math.floor(Math.random() * 1000));
          break;
        case 'strings':
          result.push(Math.random().toString(36).substring(2, 8));
          break;
        case 'mixed':
          const rand = Math.random();
          if (rand < 0.33) {
            result.push(Math.floor(Math.random() * 1000));
          } else if (rand < 0.66) {
            result.push(Math.random().toString(36).substring(2, 8));
          } else {
            result.push({ id: i, value: Math.random() });
          }
          break;
      }
    }

    return result;
  }

  /**
   * Memory usage estimation (rough approximation)
   */
  static estimateMemoryUsage(obj: any): number {
    const seen = new WeakSet();

    function sizeOf(obj: any): number {
      if (obj === null || typeof obj !== 'object') {
        return 8; // rough estimate for primitives
      }

      if (seen.has(obj)) {
        return 0; // avoid circular references
      }

      seen.add(obj);

      let bytes = 0;

      if (Array.isArray(obj)) {
        bytes += 32; // array overhead
        for (const item of obj) {
          bytes += sizeOf(item);
        }
      } else {
        bytes += 64; // object overhead
        for (const key in obj) {
          if (obj.hasOwnProperty(key)) {
            bytes += sizeOf(key) + sizeOf(obj[key]);
          }
        }
      }

      return bytes;
    }

    return sizeOf(obj);
  }
}
