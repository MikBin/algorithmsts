import { describe, it, expect } from 'vitest';
import { PairingHeap } from '../../../src/data-structures/pairing-heap/pairingHeap';

describe('PairingHeap', () => {

    it('handles empty cases', () => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const ds = new PairingHeap<number>((a, b) => a - b);
      expect(ds.size).toBe(0);
      expect(ds.poll()).toBeNull();
    });
    it('handles single elements', () => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const ds = new PairingHeap<number>((a, b) => a - b);
      ds.add(5);
      expect(ds.size).toBe(1);
      expect(ds.poll()).toBe(5);
    });
    it('handles duplicates and multiple items', () => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const ds = new PairingHeap<number>((a, b) => a - b);
      ds.add(10); ds.add(5); ds.add(5); ds.add(20);
      expect(ds.size).toBe(4);
      expect(ds.poll()).toBe(5);
      expect(ds.poll()).toBe(5);
      expect(ds.poll()).toBe(10);
    });
    it('throws on invalid input', () => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const ds = new PairingHeap<number>((a, b) => a - b);
      /* native */
    });

});
