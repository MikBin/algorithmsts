import { describe, it, expect } from 'vitest';
import { HashMap } from '../../../src/data-structures/hash-map/hashMap';

describe('HashMap Extra', () => {
  it('handles empty cases', () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const ds = new HashMap<number, string>(); (ds as any);
    expect(ds.size).toBe(0);
    expect(ds.has(5)).toBe(false);
  });

  it('handles duplicates and overwriting', () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const ds = new HashMap<number, string>(); (ds as any);
    ds.set(1, "a"); ds.set(1, "b");
    expect(ds.size).toBe(1);
    expect(ds.get(1)).toBe("b");
  });
});
