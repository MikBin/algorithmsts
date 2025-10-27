import { describe, it, expect } from 'vitest';
import { IntervalSkipList } from '../../../src/data-structures';

describe('IntervalSkipList remove and range', () => {
  it('removes intervals and queries ranges', () => {
    const isl = new IntervalSkipList<string>();
    isl.add(1, 5, 'A');
    isl.add(3, 7, 'B');
    isl.add(6, 10, 'C');
    expect(new Set(isl.queryRange(2,8))).toEqual(new Set(['A','B','C']));
    expect(isl.remove(3,7,'B')).toBe(true);
    expect(new Set(isl.queryRange(2,8))).toEqual(new Set(['A','C']));
  });
});
