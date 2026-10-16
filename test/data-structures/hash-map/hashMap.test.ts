import { describe, it, expect } from 'vitest';
import { HashMap } from '../../../src/data-structures/hash-map/hashMap';

describe('HashMap', () => {
  it('should support undefined values correctly', () => {
    const map = new HashMap<string, number | undefined>();
    map.set('a', 1);
    map.set('b', undefined);

    expect(map.has('a')).toBe(true);
    expect(map.has('b')).toBe(true);
    expect(map.has('c')).toBe(false);

    expect(map.get('a')).toBe(1);
    expect(map.get('b')).toBeUndefined();
    expect(map.get('c')).toBeUndefined();
  });

  it('entries() should return copies', () => {
    const map = new HashMap<string, number>();
    map.set('a', 1);

    const entries = map.entries();
    expect(entries.length).toBe(1);

    // Modify the returned array copy
    entries[0][1] = 2;

    // The map itself should be unaffected
    expect(map.get('a')).toBe(1);
  });
});
