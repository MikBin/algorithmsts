import { describe, it, expect } from 'vitest';
import { IntervalSkipList } from '../../../src/data-structures';

describe('IntervalSkipList removeByValue/split/merge', () => {
  it('removes all intervals by value', () => {
    const isl = new IntervalSkipList<string>();
    isl.add(1,3,'Z'); isl.add(5,7,'Z'); isl.add(2,6,'Y');
    expect(isl.removeByValue('Z')).toBeGreaterThan(0);
    expect(new Set(isl.queryRange(0,10))).toEqual(new Set(['Y']));
  });
  it('splits and merges intervals', () => {
    const isl = new IntervalSkipList<string>();
    isl.add(1,10,'M');
    expect(isl.splitAt(4,'M')).toBe(1);
    expect(new Set(isl.queryPoint(4))).toEqual(new Set(['M']));
    isl.add(5,6,'M'); // adjacent/overlap
    isl.mergeAdjacent('M');
    const vals = new Set(isl.queryRange(1,10));
    expect(vals).toEqual(new Set(['M']));
  });
});
