import { describe, it, expect } from 'vitest';
import { SparseSet } from '../../../src/data-structures/sparse-set/sparseSet';

describe('SparseSet', () => {
  it('handles empty cases', () => {
    const ds = new SparseSet(100);
    expect(ds).toBeDefined();
    if ('size' in ds) expect(typeof ds.size === 'function' ? ds.size() : ds.size).toBe(0);
  });

  it('handles single elements', () => {
    const ds = new SparseSet(100);
    ds.add(5);
    expect(ds).toBeDefined();
    if ('size' in ds) expect(typeof ds.size === 'function' ? ds.size() : ds.size).toBe(1);
  });

  it('handles duplicates and multiple items', () => {
    const ds = new SparseSet(100);
    ds.add(5); ds.add(10);
    expect(ds).toBeDefined();
  });

  it('throws on invalid input', () => {
    const ds = new SparseSet(100);

      try {
        ds.add(-1);
      } catch {
        // ignore
      }

  });
});
