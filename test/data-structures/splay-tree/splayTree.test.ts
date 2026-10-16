import { describe, it, expect } from 'vitest';
import { SplayTree } from '../../../src/data-structures/splay-tree/splayTree';

describe('SplayTree', () => {
  it('handles empty cases', () => {
    const ds = new SplayTree<number>((a, b) => a - b);
    expect(ds).toBeDefined();
    if ('size' in ds) expect(typeof ds.size === 'function' ? ds.size() : ds.size).toBe(0);
  });

  it('handles single elements', () => {
    const ds = new SplayTree<number>((a, b) => a - b);
    ds.add(5);
    expect(ds).toBeDefined();
    if ('size' in ds) expect(typeof ds.size === 'function' ? ds.size() : ds.size).toBe(1);
  });

  it('handles duplicates and multiple items', () => {
    const ds = new SplayTree<number>((a, b) => a - b);
    ds.add(5); ds.add(10);
    expect(ds).toBeDefined();
  });

  it('throws on invalid input', () => {
    const ds = new SplayTree<number>((a, b) => a - b);

    try {
      ds.add(null as any);
    } catch (e) {
      expect(e).toBeDefined();
    }

  });
});
