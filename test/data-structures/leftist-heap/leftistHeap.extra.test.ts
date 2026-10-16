import { describe, it, expect } from 'vitest';
import { LeftistHeap } from '../../../src/data-structures/leftist-heap/leftistHeap';

describe('LeftistHeap Extra', () => {
  it('handles empty cases', () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const ds = new LeftistHeap<number>((a, b) => a - b);
    expect(ds.size).toBe(0);
    expect(ds.poll()).toBeNull();
  });

  it('handles duplicates', () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const ds = new LeftistHeap<number>((a, b) => a - b);
    ds.add(5); ds.add(5); ds.add(2);
    expect(ds.size).toBe(3);
    expect(ds.poll()).toBe(2);
    expect(ds.poll()).toBe(5);
    expect(ds.poll()).toBe(5);
  });
});
