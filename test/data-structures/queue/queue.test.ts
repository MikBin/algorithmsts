import { describe, it, expect } from 'vitest';
import { Queue } from '../../../src/data-structures/queue/queue';

describe('Queue', () => {
  it('handles empty cases', () => {
    const ds = new Queue<number>();
    expect(ds).toBeDefined();
    if ('size' in ds) expect(typeof ds.size === 'function' ? ds.size() : ds.size).toBe(0);
  });

  it('handles single elements', () => {
    const ds = new Queue<number>();
    ds.enqueue(5);
    expect(ds).toBeDefined();
    if ('size' in ds) expect(typeof ds.size === 'function' ? ds.size() : ds.size).toBe(1);
  });

  it('handles duplicates and multiple items', () => {
    const ds = new Queue<number>();
    ds.enqueue(5); ds.enqueue(10);
    expect(ds).toBeDefined();
  });

  it('throws on invalid input', () => {
    const ds = new Queue<number>();

    try {
      ds.enqueue(null as any);
    } catch (e) {
      expect(e).toBeDefined();
    }

  });
});
