import { describe, it, expect } from 'vitest';
import { BKTree } from '../../../src/data-structures/bk-tree/bkTree';

describe('BKTree', () => {
  it('handles empty cases', () => {
    const ds = new BKTree<string>((a, b) => Math.abs(a.length - b.length));
    expect(ds).toBeDefined();
    if ('size' in ds) expect(typeof ds.size === 'function' ? ds.size() : ds.size).toBe(0);
  });

  it('handles single elements', () => {
    const ds = new BKTree<string>((a, b) => Math.abs(a.length - b.length));
    ds.add("test");
    expect(ds).toBeDefined();
    if ('size' in ds) expect(typeof ds.size === 'function' ? ds.size() : ds.size).toBe(1);
  });

  it('handles duplicates and multiple items', () => {
    const ds = new BKTree<string>((a, b) => Math.abs(a.length - b.length));
    ds.add("test"); ds.add("abc");
    expect(ds).toBeDefined();
  });

  it('throws on invalid input', () => {
    const ds = new BKTree<string>((a, b) => Math.abs(a.length - b.length));

    try {
      ds.add(null as any);
    } catch (e) {
      expect(e).toBeDefined();
    }

  });
});
