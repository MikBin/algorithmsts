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
});
