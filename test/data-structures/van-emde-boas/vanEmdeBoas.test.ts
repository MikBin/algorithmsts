import { describe, it, expect } from 'vitest';
import { VanEmdeBoasTree } from '../../../src/data-structures';

describe('VanEmdeBoasTree', () => {
  it('supports member and insert operations', () => {
    const veb = new VanEmdeBoasTree(64);
    const values = [5, 1, 9, 3, 7, 2, 8, 4, 6, 0];
    values.forEach(x=>veb.insert(x));
    for (const x of values) expect(veb.member(x)).toBe(true);
    expect(veb.member(63)).toBe(false);
  });
});

  it('supports delete, successor, predecessor', () => {
    const v = new VanEmdeBoasTree(16);
    v.insert(2);
    v.insert(4);
    v.insert(5);
    v.insert(10);
    expect(v.successor(2)).toBe(4);
    expect(v.predecessor(10)).toBe(5);
    expect(v.successor(10)).toBe(null);
    v.delete(4);
    expect(v.member(4)).toBe(false);
    expect(v.successor(2)).toBe(5);
    expect(() => v.insert(20)).toThrow();
  });
