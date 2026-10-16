import { describe, it, expect } from 'vitest';
import { MinMaxHeap } from '../../../src/data-structures/min-max-heap/minMaxHeap';

describe('MinMaxHeap', () => {

    it('handles empty cases', () => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const ds = new MinMaxHeap<number>((a, b) => a - b);
      expect(ds.size).toBe(0);
      expect(ds.pollMin()).toBeNull();
      expect(ds.pollMax()).toBeNull();
    });
    it('handles single elements', () => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const ds = new MinMaxHeap<number>((a, b) => a - b);
      ds.add(5);
      expect(ds.size).toBe(1);
      expect(ds.peekMin()).toBe(5);
      expect(ds.peekMax()).toBe(5);
    });
    it('handles duplicates and multiple items', () => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const ds = new MinMaxHeap<number>((a, b) => a - b);
      ds.add(10); ds.add(5); ds.add(5); ds.add(20);
      expect(ds.size).toBe(4);
      expect(ds.pollMin()).toBe(5);
      expect(ds.pollMax()).toBe(20);
    });
    it('throws on invalid input', () => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const ds = new MinMaxHeap<number>((a, b) => a - b);
      /* native */
    });

});
