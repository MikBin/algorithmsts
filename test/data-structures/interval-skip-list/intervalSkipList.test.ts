import { describe, it, expect } from 'vitest';
import { IntervalSkipList } from '../../../src/data-structures';

describe('IntervalSkipList', () => {
  it('should use injected rng for deterministic levels', () => {
    let callCount = 0;
    // A deterministic rng that always returns 0.99 will cause randomLevel to be 1.
    const isl = new IntervalSkipList<string>(() => {
      callCount++;
      return 0.99;
    });
    isl.add(1, 5, 'A');
    expect(callCount).toBeGreaterThan(0);
    expect(new Set(isl.queryPoint(3))).toEqual(new Set(['A']));

    let deepCallCount = 0;
    // A deterministic rng that always returns < 0.5 will hit the max level.
    const deepIsl = new IntervalSkipList<string>(() => {
      deepCallCount++;
      return 0.4;
    });
    deepIsl.add(2, 6, 'B');
    expect(deepCallCount).toBeGreaterThan(0);
    expect(new Set(deepIsl.queryPoint(4))).toEqual(new Set(['B']));
  });

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
