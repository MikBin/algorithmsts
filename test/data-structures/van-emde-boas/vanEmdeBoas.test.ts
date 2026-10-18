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
  it('ignores duplicates properly', () => {
    const v = new VanEmdeBoasTree(64);
    v.insert(32);
    v.insert(32); // duplicate
    v.insert(31);
    v.insert(33);
    expect(v.member(32)).toBe(true);
    v.delete(32);
    expect(v.member(32)).toBe(false); // should be completely gone
    expect(v.successor(31)).toBe(33);
    expect(v.predecessor(33)).toBe(31);
    expect(v.getMin()).toBe(31);
    expect(v.getMax()).toBe(33);
  });
});

describe('VanEmdeBoasTree Boundaries', () => {
  it('handles empty tree delete and pred/succ', () => {
    const v = new VanEmdeBoasTree(4);
    v.delete(1);
    expect(v.successor(1)).toBeNull();
    expect(v.predecessor(1)).toBeNull();
  });
  it('handles u=2 base cases', () => {
    const v = new VanEmdeBoasTree(2);
    v.insert(0);
    expect(v.successor(0)).toBeNull();
    v.insert(1);
    expect(v.successor(0)).toBe(1);
    expect(v.predecessor(1)).toBe(0);
    v.delete(0);
    expect(v.member(0)).toBe(false);
  });
  it('handles delete to empty', () => {
    const v = new VanEmdeBoasTree(16);
    v.insert(5);
    v.delete(5);
    expect(v.member(5)).toBe(false);
    expect(v.getMin()).toBeNull();
  });
});
