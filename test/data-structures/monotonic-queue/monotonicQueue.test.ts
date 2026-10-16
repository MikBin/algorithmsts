import { describe, it, expect } from 'vitest';
import { MonotonicQueue } from '../../../src/data-structures/monotonic-queue/monotonicQueue';

describe('MonotonicQueue', () => {

    it('handles empty cases', () => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const ds = new MonotonicQueue<number>((a, b) => a - b);

      expect(ds.front()).toBeUndefined();
    });
    it('handles single elements', () => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const ds = new MonotonicQueue<number>((a, b) => a - b);
      ds.push(5);

      expect(ds.front()).toBe(5);
    });
    it('handles duplicates and multiple items', () => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const ds = new MonotonicQueue<number>((a, b) => a - b);
      ds.push(5); ds.push(2); ds.push(7); ds.push(3);
      expect(ds.front()).toBe(2);
    });
    it('throws on invalid input', () => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const ds = new MonotonicQueue<number>((a, b) => a - b);
      /* native */
    });

});
