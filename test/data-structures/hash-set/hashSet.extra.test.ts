import { describe, it, expect } from 'vitest';
import { HashSet } from '../../../src/data-structures/hash-set/hashSet';

describe('HashSet Extra', () => {
  it('handles empty cases', () => {
    const set = new HashSet<number>();
    expect(set.size).toBe(0);
    expect(set.has(1)).toBe(false);
  });

  it('handles single elements', () => {
    const set = new HashSet<number>();
    set.add(42);
    expect(set.size).toBe(1);
    expect(set.has(42)).toBe(true);
  });

  it('handles duplicates', () => {
    const set = new HashSet<number>();
    set.add(10);
    set.add(10);
    expect(set.size).toBe(1);
    expect(set.has(10)).toBe(true);
  });
});
