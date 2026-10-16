import { describe, it, expect } from 'vitest';
import { CountMinSketch } from '../../../src/data-structures/count-min-sketch/countMinSketch';

describe('CountMinSketch', () => {

    it('handles empty cases', () => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const ds = new CountMinSketch(100, 10); (ds as any);
      expect(ds.estimate("test")).toBe(0);
    });
    it('handles single elements', () => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const ds = new CountMinSketch(100, 10); (ds as any);
      ds.add("test");
      expect(ds.estimate("test")).toBeGreaterThanOrEqual(1);
    });
    it('handles duplicates and multiple items', () => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const ds = new CountMinSketch(100, 10); (ds as any);
      ds.add("test", 5); ds.add("other", 2);
      expect(ds.estimate("test")).toBeGreaterThanOrEqual(5);
      expect(ds.estimate("other")).toBeGreaterThanOrEqual(2);
    });
    it('throws on invalid input', () => {
      expect(() => new CountMinSketch(0, 10)).toThrow(Error);
      expect(() => new CountMinSketch(100, 0)).toThrow(Error);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const ds = new CountMinSketch(100, 10); (ds as any);

    });

});
