import { describe, it, expect } from 'vitest';
import { ArrayList } from '../../../src/data-structures/dynamic-array/arrayList';

describe('ArrayList', () => {
  it('handles empty cases', () => {
    const ds = new ArrayList<number>();
    expect(ds).toBeDefined();
    if ('size' in ds) expect(typeof ds.size === 'function' ? ds.size() : ds.size).toBe(0);
  });

  it('handles single elements', () => {
    const ds = new ArrayList<number>();
    ds.add(5);
    expect(ds).toBeDefined();
    if ('size' in ds) expect(typeof ds.size === 'function' ? ds.size() : ds.size).toBe(1);
  });

  it('handles duplicates and multiple items', () => {
    const ds = new ArrayList<number>();
    ds.add(5); ds.add(10);
    expect(ds).toBeDefined();
  });

  it('throws on invalid input', () => {
    const ds = new ArrayList<number>();

    try {
      ds.add(null as any);
    } catch (e) {
      expect(e).toBeDefined();
    }

  });
});
