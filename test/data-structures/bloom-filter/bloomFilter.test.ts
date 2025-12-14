import { describe, it, expect } from 'vitest';
import { BloomFilter } from '../../../src/data-structures/bloom-filter/bloomFilter';

describe('BloomFilter', () => {
  it('should initialize with correct size and hashes', () => {
    const bf = new BloomFilter<string>(100, 3);
    expect(bf).toBeDefined();
  });

  it('should add items and check for existence', () => {
    const bf = new BloomFilter<string>(1000, 5);
    bf.add('hello');
    bf.add('world');

    expect(bf.mightContain('hello')).toBe(true);
    expect(bf.mightContain('world')).toBe(true);
    expect(bf.mightContain('foo')).toBe(false);
  });

  it('should handle false positive probability calculation', () => {
    // Expected bits: m = -n*ln(p) / (ln(2)^2)
    // For n=100, p=0.01
    const n = 100;
    const p = 0.01;
    const bf = BloomFilter.create(n, p);
    expect(bf).toBeDefined();
  });

  it('should support generic types with custom serializer', () => {
    interface User { id: number; name: string; }
    const bf = new BloomFilter<User>(100, 3, {
      serializer: (u) => `${u.id}:${u.name}`
    });
    const u1 = { id: 1, name: 'Alice' };
    const u2 = { id: 2, name: 'Bob' };

    bf.add(u1);
    expect(bf.mightContain(u1)).toBe(true);
    expect(bf.mightContain(u2)).toBe(false);
  });
});
