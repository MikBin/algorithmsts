import { describe, it, expect } from 'vitest';
import { IntervalTree } from '../../../src/data-structures';

describe('IntervalTree deletion', () => {
  it('removes exact interval and updates queries', () => {
    const t = new IntervalTree();
    t.add({ start: 1, end: 5 });
    t.add({ start: 3, end: 7 });
    t.add({ start: 6, end: 10 });
    expect(t.searchOverlap({ start: 4, end: 4 }).length).toBe(2);
    expect(t.removeExact({ start: 3, end: 7 })).toBe(true);
    expect(t.searchOverlap({ start: 4, end: 4 }).length).toBe(1);
  });
});
