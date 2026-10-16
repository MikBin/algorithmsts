import { describe, it, expect } from 'vitest';
import { SuffixArray } from '../../../src/data-structures/suffix-array/suffixArray';

describe('SuffixArray', () => {

    it('handles empty cases', () => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const ds = new SuffixArray(); (ds as any);
      ds.build("");
      expect(ds.search("a")).toEqual([]);
    });
    it('handles single elements', () => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const ds = new SuffixArray(); (ds as any);
      ds.build("test");
      expect(ds.search("e")).toEqual([1]);
    });
    it('handles duplicates and multiple items', () => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const ds = new SuffixArray(); (ds as any);
      ds.build("banana");
      const res = ds.search("ana");
      expect(res.length).toBe(2);
      expect(res.includes(1)).toBe(true);
      expect(res.includes(3)).toBe(true);
    });
    it('throws on invalid input', () => {
      expect(() => ds.build(null as any)).toThrow(TypeError);
    });

});
