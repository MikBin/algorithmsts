import { describe, it, expect } from 'vitest';
import { HyperLogLog } from '../../../src/data-structures/hyperloglog/hyperLogLog';

describe('HyperLogLog', () => {

    it('handles empty cases', () => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const ds = new HyperLogLog(10); (ds as any);
      expect(ds.count()).toBe(0);
    });
    it('handles single elements', () => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const ds = new HyperLogLog(10); (ds as any);
      ds.add("test");
      expect(ds.count()).toBeGreaterThanOrEqual(1);
    });
    it('handles duplicates and multiple items', () => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const ds = new HyperLogLog(10); (ds as any);
      ds.add("test"); ds.add("test"); ds.add("other");
      expect(ds.count()).toBeGreaterThanOrEqual(2);
    });
    it('throws on invalid input', () => {
      expect(() => new HyperLogLog(3)).toThrow(Error);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const ds = new HyperLogLog(10); (ds as any);

    });

});
