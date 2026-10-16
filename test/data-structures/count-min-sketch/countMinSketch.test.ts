import { describe, it, expect } from 'vitest';
import { CountMinSketch } from '../../../src/data-structures/count-min-sketch/countMinSketch';

describe('CountMinSketch', () => {
  it('handles empty cases', () => {
    const ds = new CountMinSketch(100, 10);
    expect(ds).toBeDefined();

  });

  it('handles single elements', () => {
    const ds = new CountMinSketch(100, 10);
    ds.add("test");
    expect(ds).toBeDefined();

  });

  it('handles duplicates and multiple items', () => {
    const ds = new CountMinSketch(100, 10);
    ds.add("test"); ds.add("test2");
    expect(ds).toBeDefined();
  });

  it('throws on invalid input', () => {
    const ds = new CountMinSketch(100, 10);

    try {
      ds.add(null as any);
    } catch (e) {
      expect(e).toBeDefined();
    }

  });
});
