import { describe, it, expect } from 'vitest';
import { IntervalSkipList } from '../../../src/data-structures';

describe('IntervalSkipList', () => {
  it('adds intervals and queries points', () => {
    const isl = new IntervalSkipList<string>();
    isl.add(1, 5, 'A');
    isl.add(3, 7, 'B');
    isl.add(6, 10, 'C');
    expect(new Set(isl.queryPoint(2))).toEqual(new Set(['A']));
    expect(new Set(isl.queryPoint(4))).toEqual(new Set(['A','B']));
    expect(new Set(isl.queryPoint(8))).toEqual(new Set(['C']));
  });
});
