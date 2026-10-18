import { describe, it, expect } from 'vitest';
import { Rope } from '../../../src/data-structures';

describe('Rope extended', () => {
  it('inserts and extracts correctly', () => {
    const r = Rope.fromString('hello world');
    const r2 = r.insert(5, ',');
    expect(r2.toString()).toBe('hello, world');
    expect(r2.substring(0,5)).toBe('hello');
  });

  it('can split and recombine', () => {
    const r = Rope.fromString('abcdef');
    const r2 = r.insert(3, '123'); // abc123def
    expect(r2.toString()).toBe('abc123def');
    expect(r2.length()).toBe(9);
    expect(r2.charAt(0)).toBe('a');
    expect(r2.charAt(3)).toBe('1');
    expect(r2.charAt(6)).toBe('d');
    expect(r2.substring(2, 5)).toBe('c12');
  });

  it('throws on out of bounds', () => {
    const r = Rope.fromString('abc');
    expect(() => r.charAt(-1)).toThrow();
    expect(() => r.charAt(3)).toThrow();
    expect(() => r.substring(-1, 2)).toThrow();
    expect(() => r.substring(0, 4)).toThrow();
    expect(() => r.substring(2, 1)).toThrow();
    expect(() => r.insert(4, 'd')).toThrow();
  });
});

  it('degenerate left-deep rope retrieves correct characters using weights', () => {
    let r = Rope.fromString('a');
    for (let i = 1; i < 10; i++) {
      r = r.concat(Rope.fromString(i.toString()));
    }
    // Length should be 10: a123456789
    expect(r.length()).toBe(10);
    expect(r.charAt(0)).toBe('a');
    expect(r.charAt(1)).toBe('1');
    expect(r.charAt(5)).toBe('5');
    expect(r.charAt(9)).toBe('9');
    expect(r.toString()).toBe('a123456789');
  });
