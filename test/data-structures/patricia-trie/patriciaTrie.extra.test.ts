import { describe, it, expect } from 'vitest';
import { PatriciaTrie } from '../../../src/data-structures/patricia-trie/patriciaTrie';

describe('PatriciaTrie Extra', () => {
  it('handles empty cases', () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const ds = new PatriciaTrie<number>(); (ds as any);

    expect(ds.has("test")).toBe(false);
  });

  it('handles duplicates and updates', () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const ds = new PatriciaTrie<number>(); (ds as any);
    ds.set("test", 1); ds.set("test", 2);

    expect(ds.get("test")).toBe(2);
  });
});
