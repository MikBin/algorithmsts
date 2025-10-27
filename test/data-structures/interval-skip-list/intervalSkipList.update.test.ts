import { describe, it, expect } from 'vitest';
import { IntervalSkipList } from '../../../src/data-structures';

describe('IntervalSkipList update', () => {
  it('updates interval by remove+add', () => {
    const isl = new IntervalSkipList<string>();
    isl.add(2, 4, 'X');
    expect(new Set(isl.queryPoint(3))).toEqual(new Set(['X']));
    isl.update(2, 4, 'X', 5, 7, 'Y');
    expect(new Set(isl.queryPoint(3))).toEqual(new Set());
    expect(new Set(isl.queryPoint(6))).toEqual(new Set(['Y']));
  });
});
