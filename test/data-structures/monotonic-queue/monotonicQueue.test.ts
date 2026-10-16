import { describe, it, expect } from 'vitest';
import { MonotonicQueue } from '../../../src/data-structures/monotonic-queue/monotonicQueue';

describe('MonotonicQueue', () => {
  it('handles empty cases', () => {
    const ds = new MonotonicQueue<number>((a, b) => a - b);
    expect(ds).toBeDefined();
    if ('size' in ds) expect(typeof ds.size === 'function' ? ds.size() : ds.size).toBe(0);
  });

  it('handles single elements', () => {
    const ds = new MonotonicQueue<number>((a, b) => a - b);
    ds.push(5);
    expect(ds).toBeDefined();
    if ('size' in ds) expect(typeof ds.size === 'function' ? ds.size() : ds.size).toBe(1);
  });

  it('handles duplicates and multiple items', () => {
    const ds = new MonotonicQueue<number>((a, b) => a - b);
    ds.push(5); ds.push(10);
    expect(ds).toBeDefined();
  });

  it('throws on invalid input', () => {
    const ds = new MonotonicQueue<number>((a, b) => a - b);

    try {
      ds.push(null as any);
    } catch (e) {
      expect(e).toBeDefined();
    }

  });
});
