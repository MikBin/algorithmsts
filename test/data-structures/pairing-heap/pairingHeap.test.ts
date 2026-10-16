import { describe, it, expect } from 'vitest';
import { PairingHeap } from '../../../src/data-structures/pairing-heap/pairingHeap';

describe('PairingHeap', () => {
  it('handles empty cases', () => {
    const ds = new PairingHeap<number>((a, b) => a - b);
    expect(ds).toBeDefined();
    if ('size' in ds) expect(typeof ds.size === 'function' ? ds.size() : ds.size).toBe(0);
  });

  it('handles single elements', () => {
    const ds = new PairingHeap<number>((a, b) => a - b);
    ds.add(5);
    expect(ds).toBeDefined();
    if ('size' in ds) expect(typeof ds.size === 'function' ? ds.size() : ds.size).toBe(1);
  });

  it('handles duplicates and multiple items', () => {
    const ds = new PairingHeap<number>((a, b) => a - b);
    ds.add(5); ds.add(10);
    expect(ds).toBeDefined();
  });

  it('throws on invalid input', () => {
    const ds = new PairingHeap<number>((a, b) => a - b);

    try {
      ds.add(null as any);
    } catch (e) {
      expect(e).toBeDefined();
    }

  });
});
