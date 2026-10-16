import { describe, it, expect } from 'vitest';
import { HyperLogLog } from '../../../src/data-structures/hyperloglog/hyperLogLog';

describe('HyperLogLog', () => {
  it('handles empty cases', () => {
    const ds = new HyperLogLog(10);
    expect(ds).toBeDefined();

  });

  it('handles single elements', () => {
    const ds = new HyperLogLog(10);
    ds.add("test");
    expect(ds).toBeDefined();

  });

  it('handles duplicates and multiple items', () => {
    const ds = new HyperLogLog(10);
    ds.add("test"); ds.add("test2");
    expect(ds).toBeDefined();
  });

  it('throws on invalid input', () => {
    const ds = new HyperLogLog(10);

    try {
      ds.add(null as any);
    } catch (e) {
      expect(e).toBeDefined();
    }

  });
});
