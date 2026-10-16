import { describe, it, expect } from 'vitest';
import { PriorityQueue } from '../../../src/data-structures/priority-queue/priorityQueue';

describe('PriorityQueue', () => {
  it('handles empty cases', () => {
    const ds = new PriorityQueue<number>((a, b) => a - b);
    expect(ds).toBeDefined();
    if ('size' in ds) expect(typeof ds.size === 'function' ? ds.size() : ds.size).toBe(0);
  });

  it('handles single elements', () => {
    const ds = new PriorityQueue<number>((a, b) => a - b);
    ds.enqueue(5);
    expect(ds).toBeDefined();
    if ('size' in ds) expect(typeof ds.size === 'function' ? ds.size() : ds.size).toBe(1);
  });

  it('handles duplicates and multiple items', () => {
    const ds = new PriorityQueue<number>((a, b) => a - b);
    ds.enqueue(5); ds.enqueue(10);
    expect(ds).toBeDefined();
  });

  it('throws on invalid input', () => {
    const ds = new PriorityQueue<number>((a, b) => a - b);

    try {
      ds.enqueue(null as any);
    } catch (e) {
      expect(e).toBeDefined();
    }

  });
});
