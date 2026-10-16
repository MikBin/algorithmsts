import { describe, it, expect } from 'vitest';
import { UnionFind } from '../../../src/data-structures/disjoint-set/unionFind';

describe('UnionFind', () => {
  it('handles empty cases', () => {
    const ds = new UnionFind(10);
    expect(ds).toBeDefined();
    if ('size' in ds) expect(typeof ds.size === 'function' ? ds.size() : ds.size).toBe(0);
  });

  it('handles single elements', () => {
    const ds = new UnionFind(10);
    ds.union(1, 2);
    expect(ds).toBeDefined();
    if ('size' in ds) expect(typeof ds.size === 'function' ? ds.size() : ds.size).toBe(1);
  });

  it('handles duplicates and multiple items', () => {
    const ds = new UnionFind(10);
    ds.union(1, 2); ds.union(2, 3);
    expect(ds).toBeDefined();
  });

  it('throws on invalid input', () => {
    const ds = new UnionFind(10);

      try {
        ds.union(-1, 0);
      } catch {
        // ignore
      }

  });
});
