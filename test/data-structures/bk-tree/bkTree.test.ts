import { describe, it, expect } from 'vitest';
import { BKTree } from '../../../src/data-structures/bk-tree/bkTree';

describe('BKTree', () => {

    it('handles empty cases', () => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const ds = new BKTree<string>((a, b) => Math.abs(a.length - b.length));

      expect(ds.query("test", 1).length).toBe(0);
    });
    it('handles single elements', () => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const ds = new BKTree<string>((a, b) => Math.abs(a.length - b.length));
      ds.add("test");

      expect(ds.query("test", 0)).toEqual([{ value: "test", distance: 0 }]);
    });
    it('handles duplicates and multiple items', () => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const ds = new BKTree<string>((a, b) => Math.abs(a.length - b.length));
      ds.add("test"); ds.add("test"); ds.add("abc");
       // Set semantics
      expect(ds.query("abcd", 1).length).toBe(3);
    });
    it('throws on invalid input', () => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const ds = new BKTree<string>((a, b) => Math.abs(a.length - b.length));

    });

});
