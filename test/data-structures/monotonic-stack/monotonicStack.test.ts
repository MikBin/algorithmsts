import { describe, it, expect } from 'vitest';
import { MonotonicStack } from '../../../src/data-structures/monotonic-stack/monotonicStack';

describe('MonotonicStack', () => {

    it('handles empty cases', () => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const ds = new MonotonicStack<number>((a, b) => a - b);


    });
    it('handles single elements', () => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const ds = new MonotonicStack<number>((a, b) => a - b);
      ds.push(5); expect(ds.top()).toBe(5); });
    it('handles duplicates and multiple items', () => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const ds = new MonotonicStack<number>((a, b) => a - b);
      ds.push(5); ds.push(7); ds.push(2); ds.push(3); expect(ds.top()).toBe(3); });
    it('throws on invalid input', () => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const ds = new MonotonicStack<number>((a, b) => a - b);
      /* native */
    });

});
