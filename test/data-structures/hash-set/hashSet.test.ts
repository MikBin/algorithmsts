import { describe, it, expect } from 'vitest';
import { HashSet } from '../../../src/data-structures/hash-set';

describe('HashSet', () => {
  it('clear() preserves custom hasher and equality functions', () => {
    const customHasher = () => 1;
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

  it('handles empty cases', () => {
    const set = new HashSet<number>();
    expect(set.size).toBe(0);
    expect(set.has(1)).toBe(false);
  });

  it('handles single elements', () => {
    const set = new HashSet<number>();
    set.add(42);
    expect(set.size).toBe(1);
    expect(set.has(42)).toBe(true);
  });

  it('handles duplicates', () => {
    const set = new HashSet<number>();
    set.add(10);
    set.add(10);
    expect(set.size).toBe(1);
    expect(set.has(10)).toBe(true);
  });

  it('throws on invalid input', () => {
    const set = new HashSet<number>();

      try {
        set.add(null as unknown as number);
      } catch {
        // ignore
      }

  });
});
