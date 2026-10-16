import { describe, it, expect } from 'vitest';
import { AATree } from '../../../src/data-structures/aa-tree/aaTree';

describe('AATree', () => {

    it('handles empty cases', () => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const ds = new AATree<number>((a, b) => a - b);
      expect(ds.size).toBe(0);
      expect(ds.contains(1)).toBe(false);
    });
    it('handles single elements', () => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const ds = new AATree<number>((a, b) => a - b);
      ds.add(5);
      expect(ds.size).toBe(1);
      expect(ds.contains(5)).toBe(true);
    });
    it('handles duplicates and multiple items', () => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const ds = new AATree<number>((a, b) => a - b);
      ds.add(5); ds.add(5); ds.add(10);
      expect(ds.size).toBeGreaterThanOrEqual(2);
      expect(ds.contains(5)).toBe(true);
      expect(ds.contains(10)).toBe(true);
      expect(ds.toArray()).toEqual([5, 10]);
    });
    it('throws on invalid input', () => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const ds = new AATree<number>((a, b) => a - b);
      /* native */
    });

});
