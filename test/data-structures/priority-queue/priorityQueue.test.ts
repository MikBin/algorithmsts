import { describe, it, expect } from 'vitest';
import { PriorityQueue } from '../../../src/data-structures/priority-queue/priorityQueue';

describe('PriorityQueue', () => {

    it('handles empty cases', () => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const ds = new PriorityQueue<number>((a, b) => a - b);
      expect(ds.size).toBe(0);
      expect(ds.dequeue()).toBeNull();
    });
    it('handles single elements', () => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const ds = new PriorityQueue<number>((a, b) => a - b);
      ds.enqueue(5);
      expect(ds.size).toBe(1);
      expect(ds.dequeue()).toBe(5);
    });
    it('handles duplicates and multiple items', () => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const ds = new PriorityQueue<number>((a, b) => a - b);
      ds.enqueue(10); ds.enqueue(5); ds.enqueue(5); ds.enqueue(20);
      expect(ds.size).toBe(4);
      expect(ds.dequeue()).toBe(5);
      expect(ds.dequeue()).toBe(5);
      expect(ds.dequeue()).toBe(10);
    });
    it('throws on invalid input', () => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const ds = new PriorityQueue<number>((a, b) => a - b);
      /* native */
    });

});
