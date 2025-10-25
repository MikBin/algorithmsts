/**
 * Test data generators for data structure testing
 */

export class StructureTestData {
  /**
   * Generates an array of numbers for testing
   */
  static generateNumberArray(size: number, options: {
    sorted?: boolean;
    duplicates?: boolean;
    range?: { min: number; max: number };
  } = {}): number[] {
    const { sorted = false, duplicates = true, range = { min: 0, max: 1000 } } = options;
    const { min, max } = range;

    const array: number[] = [];

    for (let i = 0; i < size; i++) {
      if (duplicates && Math.random() < 0.1) {
        // Add duplicate occasionally
        array.push(array[Math.floor(Math.random() * array.length)] || min);
      } else {
        array.push(Math.floor(Math.random() * (max - min + 1)) + min);
      }
    }

    return sorted ? array.sort((a, b) => a - b) : array;
  }

  /**
   * Generates test strings for Trie and SuffixTree testing
   */
  static generateTestStrings(count: number, options: {
    length?: { min: number; max: number };
    alphabet?: string;
    patterns?: string[];
  } = {}): string[] {
    const {
      length = { min: 3, max: 10 },
      alphabet = 'abcdefghijklmnopqrstuvwxyz',
      patterns = []
    } = options;

    const strings: string[] = [];

    for (let i = 0; i < count; i++) {
      if (patterns.length > 0 && Math.random() < 0.3) {
        // Use a pattern occasionally
        const pattern = patterns[Math.floor(Math.random() * patterns.length)];
        strings.push(pattern);
      } else {
        const len = Math.floor(Math.random() * (length.max - length.min + 1)) + length.min;
        let str = '';
        for (let j = 0; j < len; j++) {
          str += alphabet[Math.floor(Math.random() * alphabet.length)];
        }
        strings.push(str);
      }
    }

    return strings;
  }

  /**
   * Generates test data for performance testing
   */
  static generatePerformanceData(sizes: number[]): { [key: number]: number[] } {
    const data: { [key: number]: number[] } = {};

    sizes.forEach(size => {
      data[size] = this.generateNumberArray(size, {
        sorted: false,
        duplicates: true,
        range: { min: 0, max: size * 10 }
      });
    });

    return data;
  }

  /**
   * Generates edge case data
   */
  static generateEdgeCases(): {
    empty: any[];
    single: any[];
    duplicates: any[];
    largeNumbers: any[];
    negative: any[];
    mixed: any[];
  } {
    return {
      empty: [],
      single: [42],
      duplicates: [1, 1, 2, 2, 3, 3],
      largeNumbers: [Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER - 1],
      negative: [-100, -50, -1, 0, 1, 50, 100],
      mixed: ['string', 42, null, undefined, {}, []]
    };
  }

  /**
   * Generates test data for iterator testing
   */
  static generateIteratorTestData(): {
    small: number[];
    medium: number[];
    large: number[];
    withDuplicates: number[];
    sorted: number[];
    reverseSorted: number[];
  } {
    return {
      small: [1, 2, 3],
      medium: Array.from({ length: 100 }, (_, i) => i),
      large: Array.from({ length: 10000 }, (_, i) => i),
      withDuplicates: [1, 2, 2, 3, 3, 3, 4],
      sorted: Array.from({ length: 100 }, (_, i) => i).sort((a, b) => a - b),
      reverseSorted: Array.from({ length: 100 }, (_, i) => i).sort((a, b) => b - a)
    };
  }
}
