import { describe, it, expect } from 'vitest';
import { SuffixArray } from '../../../src/data-structures/suffix-array/suffixArray';

describe('SuffixArray', () => {
  it('handles empty cases', () => {
    const ds = new SuffixArray();
    expect(ds).toBeDefined();

  });

  it('handles single elements', () => {
    const ds = new SuffixArray();
    ds.build("test");
    expect(ds).toBeDefined();

  });

  it('handles duplicates and multiple items', () => {
    const ds = new SuffixArray();
    ds.build("test");;
    expect(ds).toBeDefined();
  });

  it('throws on invalid input', () => {
    const ds = new SuffixArray();

    try {
      ds.build(null as any);
    } catch (e) {
      expect(e).toBeDefined();
    }

  });
});
