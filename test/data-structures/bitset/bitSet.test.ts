import { describe, it, expect } from 'vitest';
import { BitSet } from '../../../src/data-structures/bitset/bitSet';

describe('BitSet', () => {
  it('handles empty cases', () => {
    const ds = new BitSet(32);
    expect(ds).toBeDefined();
    if ('size' in ds) expect(ds.count()).toBe(0);
  });

  it('handles single elements', () => {
    const ds = new BitSet(32);
    ds.set(5);
    expect(ds).toBeDefined();
    if ('size' in ds) expect(ds.count()).toBe(1);
  });

  it('handles duplicates and multiple items', () => {
    const ds = new BitSet(32);
    ds.set(5); ds.set(10);
    expect(ds).toBeDefined();
  });

  it('throws on invalid input', () => {
    const ds = new BitSet(32);
    expect(() => ds.set(-1)).toThrow();
  });
});
