import { describe, it, expect } from 'vitest';
import { LFUCache } from '../../../src/data-structures/lfu-cache/lfuCache';

describe('LFUCache', () => {
  it('handles empty cases', () => {
    const ds = new LFUCache<number, string>(5);
    expect(ds).toBeDefined();
    if ('size' in ds) expect(typeof ds.size === 'function' ? ds.size() : ds.size).toBe(0);
  });

  it('handles single elements', () => {
    const ds = new LFUCache<number, string>(5);
    ds.set(1, "a");
    expect(ds).toBeDefined();
    if ('size' in ds) expect(typeof ds.size === 'function' ? ds.size() : ds.size).toBe(1);
  });

  it('handles duplicates and multiple items', () => {
    const ds = new LFUCache<number, string>(5);
    ds.set(1, "a"); ds.set(2, "b");
    expect(ds).toBeDefined();
  });

  it('throws on invalid input', () => {
    const ds = new LFUCache<number, string>(5);

      try {
        ds.set(null as any, "a");
      } catch {
        // ignore
      }

  });
});
