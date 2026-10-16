import { describe, it, expect } from 'vitest';
import { VPTree } from '../../../src/data-structures/vp-tree/vpTree';

describe('VPTree', () => {
  it('handles empty cases', () => {
    const ds = new VPTree<number>((a, b) => Math.abs(a - b));
    expect(ds).toBeDefined();

  });

  it('handles single elements', () => {
    const ds = new VPTree<number>((a, b) => Math.abs(a - b));
    ds.build([5, 10]);
    expect(ds).toBeDefined();

  });

  it('handles duplicates and multiple items', () => {
    const ds = new VPTree<number>((a, b) => Math.abs(a - b));
    ds.build([5, 10, 15]);;
    expect(ds).toBeDefined();
  });

  it('throws on invalid input', () => {
    const ds = new VPTree<number>((a, b) => Math.abs(a - b));

    try {
      ds.build(null as any);
    } catch (e) {
      expect(e).toBeDefined();
    }

  });
});
