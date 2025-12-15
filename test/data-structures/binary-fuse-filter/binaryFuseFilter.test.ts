import { describe, it, expect } from 'vitest';
import { BinaryFuseFilter } from '../../../src/data-structures/binary-fuse-filter/binaryFuseFilter';

describe('BinaryFuseFilter', () => {
  it('should construct from items and check correctly', () => {
    const items = ['apple', 'banana', 'cherry'];
    const filter = new BinaryFuseFilter(items, 8);

    expect(filter.mightContain('apple')).toBe(true);
    expect(filter.mightContain('banana')).toBe(true);
    expect(filter.mightContain('cherry')).toBe(true);

    // False positive is possible, but unlikely for "grape" in small filter?
    // Actually, with 8 bits, FP probability is 1/256 approx.
    // We expect false for most.
    expect(filter.mightContain('grape')).toBe(false);
  });

  it('should handle empty input', () => {
    const filter = new BinaryFuseFilter([], 8);
    expect(filter.size()).toBe(0);
    expect(filter.mightContain('anything')).toBe(false);
  });

  it('should handle large input (stress test light)', () => {
    const items: string[] = [];
    for (let i = 0; i < 1000; i++) {
      items.push(`item-${i}`);
    }
    const filter = new BinaryFuseFilter(items, 16);

    for (let i = 0; i < 1000; i++) {
      expect(filter.mightContain(`item-${i}`)).toBe(true);
    }

    expect(filter.mightContain('item-1001')).toBe(false);
  });

  it('should handle serialization', () => {
    const items = ['one', 'two'];
    const filter = new BinaryFuseFilter(items, 8);

    const json = filter.toJson();
    const loaded = BinaryFuseFilter.fromJson<string>(json);

    expect(loaded.mightContain('one')).toBe(true);
    expect(loaded.mightContain('three')).toBe(false);
    expect(loaded.size()).toBe(2);
  });

  it('should work with 32-bit fingerprints', () => {
    const filter = new BinaryFuseFilter(['A'], 32);
    expect(filter.mightContain('A')).toBe(true);
  });
});
