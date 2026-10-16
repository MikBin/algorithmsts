import { describe, it, expect } from 'vitest';
import { ArrayList } from '../../../src/data-structures/dynamic-array/arrayList';

describe('ArrayList', () => {

    it('handles empty cases', () => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const ds = new ArrayList<number>(); (ds as any);
      expect(typeof ds.size === 'function' ? ds.size() : ds.size).toBe(0);
      expect(ds.toArray()[0] || null).toBeNull();
    });
    it('handles single elements', () => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const ds = new ArrayList<number>(); (ds as any);
      ds.add(5);
      expect(typeof ds.size === 'function' ? ds.size() : ds.size).toBe(1);
      expect(ds.toArray()[0] || null).toBe(5);
    });
    it('handles duplicates and multiple items', () => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const ds = new ArrayList<number>(); (ds as any);
      ds.add(5); ds.add(5); ds.add(10);
      expect(typeof ds.size === 'function' ? ds.size() : ds.size).toBe(3);
      expect(ds.toArray()).toEqual([5, 5, 10]);
    });
    it('throws on invalid input', () => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const ds = new ArrayList<number>(); (ds as any);
      /* native */
      expect(() => ds.set(100, 5)).toThrow(Error);
    });

});
