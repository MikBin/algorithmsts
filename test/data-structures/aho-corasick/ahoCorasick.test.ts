import { describe, it, expect } from 'vitest';
import { AhoCorasick } from '../../../src/data-structures/aho-corasick/ahoCorasick';

describe('AhoCorasick', () => {
  it('search terminates on arbitrary text with chars absent from all patterns', () => {
    const ac = new AhoCorasick();
    ac.add("pattern");
    ac.build();
    const result = ac.search("unmatched");
    expect(result).toEqual([]);

  });

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
    expect(ac.search("test").length).toBeGreaterThan(0);
  });

  it('handles single elements', () => {
    const ac = new AhoCorasick();
    ac.add("test");
    ac.build();
    expect(ac.search("test").length).toBe(1);
  });

  it('throws on invalid input', () => {
    const ac = new AhoCorasick();
    expect(() => ac.add(null as unknown as string)).toThrow();
  });
});

  it('matches positions correctly', () => {
    const ac = new AhoCorasick();
    ac.add("he");
    ac.add("she");
    ac.add("his");
    ac.add("hers");
    ac.build();
    const result = ac.search("ushers");
    expect(result).toEqual([
      { index: 1, pattern: 'she', position: 1 },
      { index: 0, pattern: 'he', position: 2 },
      { index: 3, pattern: 'hers', position: 2 }
    ]);
  });
