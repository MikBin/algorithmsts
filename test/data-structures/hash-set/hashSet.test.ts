import { describe, it, expect } from 'vitest';
import { HashSet } from '../../../src/data-structures/hash-set';

describe('HashSet', () => {
  it('clear() preserves custom hasher and equality functions', () => {
    const customHasher = (obj: any) => 1;
    const customEquals = (a: any, b: any) => a.id === b.id;

    const set = new HashSet<any>(customHasher, customEquals);

    const obj1 = { id: 1, value: 'A' };
    const obj1Clone = { id: 1, value: 'B' };

    set.add(obj1);
    expect(set.has(obj1Clone)).toBe(true);
    expect(set.size).toBe(1);

    set.clear();
    expect(set.size).toBe(0);
    expect(set.has(obj1Clone)).toBe(false);

    set.add(obj1);
    expect(set.has(obj1Clone)).toBe(true);
    expect(set.size).toBe(1);
  });
});
