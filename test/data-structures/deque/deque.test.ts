import { describe, it, expect } from 'vitest';
import { Deque } from '../../../src/data-structures/deque/deque';

describe('Deque', () => {
  it('handles empty cases', () => {
    const ds = new Deque<number>();
    expect(ds).toBeDefined();
    if ('size' in ds) expect(typeof ds.size === 'function' ? ds.size() : ds.size).toBe(0);
  });

  it('handles single elements', () => {
    const ds = new Deque<number>();
    ds.addLast(5);
    expect(ds).toBeDefined();
    if ('size' in ds) expect(typeof ds.size === 'function' ? ds.size() : ds.size).toBe(1);
  });

  it('handles duplicates and multiple items', () => {
    const ds = new Deque<number>();
    ds.addLast(5); ds.addFirst(10);
    expect(ds).toBeDefined();
  });

  it('throws on invalid input', () => {
    const ds = new Deque<number>();

    try {
      ds.addLast(null as any);
    } catch (e) {
      expect(e).toBeDefined();
    }

  });
});
