import { describe, it, expect, beforeEach } from 'vitest';
import { CuckooFilter } from '../../../src/data-structures/cuckoo-filter/cuckooFilter';

describe('CuckooFilter', () => {
  let cf: CuckooFilter<string>;

  beforeEach(() => {
    cf = new CuckooFilter<string>(1000, 4);
  });

  it('should initialize correctly', () => {
    expect(cf).toBeDefined();
    expect(cf.size()).toBe(0);
  });

  it('should add and check items', () => {
    expect(cf.add('hello')).toBe(true);
    expect(cf.add('world')).toBe(true);
    expect(cf.mightContain('hello')).toBe(true);
    expect(cf.mightContain('world')).toBe(true);
    expect(cf.mightContain('foo')).toBe(false);
    expect(cf.size()).toBe(2);
  });

  it('should handle false positives (probabilistic)', () => {
    // With 16-bit fingerprints, false positive rate is very low (~0.000015)
    // We just check that it behaves reasonably
    const n = 100;
    for (let i = 0; i < n; i++) {
      cf.add(`item-${i}`);
    }
    for (let i = 0; i < n; i++) {
      expect(cf.mightContain(`item-${i}`)).toBe(true);
    }
  });

  it('should delete items', () => {
    cf.add('delete-me');
    expect(cf.mightContain('delete-me')).toBe(true);
    expect(cf.delete('delete-me')).toBe(true);
    expect(cf.mightContain('delete-me')).toBe(false);
    expect(cf.size()).toBe(0);
  });

  it('should fail to delete non-existent items', () => {
    cf.add('keep-me');
    expect(cf.delete('not-here')).toBe(false);
    expect(cf.size()).toBe(1);
  });

  it('should support generic types with serializer', () => {
    const userCf = new CuckooFilter<{id: number}>(100, 4, {
      serializer: (u) => u.id.toString()
    });
    const u1 = { id: 123 };
    const u2 = { id: 456 };

    userCf.add(u1);
    expect(userCf.mightContain(u1)).toBe(true);
    expect(userCf.mightContain(u2)).toBe(false);

    userCf.delete(u1);
    expect(userCf.mightContain(u1)).toBe(false);
  });

  it('should handle high load factor', () => {
    // Fill it up significantly
    const capacity = 500;
    const smallCf = new CuckooFilter(capacity);
    let inserted = 0;
    for (let i = 0; i < capacity * 0.95; i++) {
      if (smallCf.add(`load-${i}`)) {
        inserted++;
      }
    }
    // Just ensure we could insert a significant portion
    expect(inserted).toBeGreaterThan(capacity * 0.8);
  });
});
