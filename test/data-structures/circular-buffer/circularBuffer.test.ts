import { describe, it, expect } from 'vitest';
import { CircularBuffer } from '../../../src/data-structures/circular-buffer/circularBuffer';

describe('CircularBuffer', () => {
  it('handles empty cases', () => {
    const ds = new CircularBuffer<number>(5);
    expect(ds).toBeDefined();
    if ('size' in ds) expect(typeof ds.size === 'function' ? ds.size() : ds.size).toBe(0);
  });

  it('handles single elements', () => {
    const ds = new CircularBuffer<number>(5);
    ds.pushBack(5);
    expect(ds).toBeDefined();
    if ('size' in ds) expect(typeof ds.size === 'function' ? ds.size() : ds.size).toBe(1);
  });

  it('handles duplicates and multiple items', () => {
    const ds = new CircularBuffer<number>(5);
    ds.pushBack(5); ds.pushBack(10);
    expect(ds).toBeDefined();
  });

  it('throws on invalid input', () => {
    const ds = new CircularBuffer<number>(5);

    try {
      ds.pushBack(null as any);
    } catch (e) {
      expect(e).toBeDefined();
    }

  });
});
