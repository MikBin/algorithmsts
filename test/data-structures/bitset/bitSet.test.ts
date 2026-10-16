import { describe, it, expect } from 'vitest';
import { BitSet } from '../../../src/data-structures/bitset/bitSet';

describe('BitSet', () => {

    it('handles empty cases', () => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const ds = new BitSet(32); (ds as any);
      expect(ds.size).toBe(32);
      expect(ds.count()).toBe(0);
      expect(ds.get(5)).toBe(false);
    });
    it('handles single elements', () => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const ds = new BitSet(32); (ds as any);
      ds.set(5);
      expect(ds.count()).toBe(1);
      expect(ds.get(5)).toBe(true);
    });
    it('handles duplicates and multiple items', () => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const ds = new BitSet(32); (ds as any);
      ds.set(5); ds.set(5); ds.set(10);
      expect(ds.count()).toBe(2);
      expect(ds.get(5)).toBe(true);
      expect(ds.get(10)).toBe(true);
      expect(ds.toArray()).toEqual([5, 10]);
    });
    it('throws on invalid input', () => {
      expect(() => new BitSet(0)).toThrow(Error);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const ds = new BitSet(32); (ds as any);
      const ds2 = new BitSet(64);
      expect(() => ds.union(ds2)).toThrow(Error);
    });

});
