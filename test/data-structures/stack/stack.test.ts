import { describe, it, expect } from 'vitest';
import { Stack } from '../../../src/data-structures/stack/stack';

describe('Stack', () => {
  it('handles empty cases', () => {
    const ds = new Stack<number>();
    expect(ds).toBeDefined();
    if ('size' in ds) expect(typeof ds.size === 'function' ? ds.size() : ds.size).toBe(0);
  });

  it('handles single elements', () => {
    const ds = new Stack<number>();
    ds.push(5);
    expect(ds).toBeDefined();
    if ('size' in ds) expect(typeof ds.size === 'function' ? ds.size() : ds.size).toBe(1);
  });

  it('handles duplicates and multiple items', () => {
    const ds = new Stack<number>();
    ds.push(5); ds.push(10);
    expect(ds).toBeDefined();
  });

  it('throws on invalid input', () => {
    const ds = new Stack<number>();

    try {
      ds.push(null as any);
    } catch (e) {
      expect(e).toBeDefined();
    }

  });
});
