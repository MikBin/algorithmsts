import { describe, it, expect } from 'vitest';
import { AhoCorasick } from '../../../src/data-structures/aho-corasick/ahoCorasick';

describe('AhoCorasick Extra', () => {
  it('handles empty cases', () => {
    const ac = new AhoCorasick();
    ac.build();
    expect(ac.search("test")).toEqual([]);
  });

  it('handles duplicates', () => {
    const ac = new AhoCorasick();
    ac.add("test");
    ac.add("test");
    ac.build();
    expect(ac.search("test").length).toBe(2);
  });

  it('handles single elements', () => {
    const ac = new AhoCorasick();
    ac.add("test");
    ac.build();
    expect(ac.search("test").length).toBe(1);
  });
});
