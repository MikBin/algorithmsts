import { describe, it, expect } from 'vitest';
import { VPTree } from '../../../src/data-structures/vp-tree/vpTree';

describe('VPTree', () => {

    it('handles empty cases', () => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const ds = new VPTree<number>((a, b) => Math.abs(a - b));
      ds.build([]);
      expect(ds.rangeQuery(10, 5).length).toBe(0);
    });
    it('handles single elements', () => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const ds = new VPTree<number>((a, b) => Math.abs(a - b));
      ds.build([5]);
      expect(ds.rangeQuery(5, 2)).toEqual([5]);
    });
    it('handles duplicates and multiple items', () => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const ds = new VPTree<number>((a, b) => Math.abs(a - b));
      ds.build([10, 5, 20, 5]);
      const res = ds.rangeQuery(5, 2);
      expect(res.length).toBe(2);
      expect(res[0]).toBe(5);
    });
    it('throws on invalid input', () => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const ds = new VPTree<number>((a, b) => Math.abs(a - b));
      expect(() => ds.build(null as any)).toThrow();
    });

});
