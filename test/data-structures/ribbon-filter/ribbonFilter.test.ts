import { describe, it, expect } from 'vitest';
import { RibbonFilter } from '../../../src/data-structures/ribbon-filter/ribbonFilter';

describe('RibbonFilter', () => {
  it('should construct from a list of items and query correctly', () => {
    const items = ['apple', 'banana', 'cherry', 'date'];
    const rf = new RibbonFilter(items);

    expect(rf.mightContain('apple')).toBe(true);
    expect(rf.mightContain('banana')).toBe(true);
    expect(rf.mightContain('grape')).toBe(false);
  });

  it('should handle generic types', () => {
    interface Point { x: number; y: number }
    const points: Point[] = [{x:1, y:1}, {x:2, y:2}];
    const rf = new RibbonFilter<Point>(points, {
      serializer: p => `${p.x},${p.y}`
    });

    expect(rf.mightContain({x:1, y:1})).toBe(true);
    expect(rf.mightContain({x:3, y:3})).toBe(false);
  });

  it('should work with a large number of items', () => {
    const items: string[] = [];
    for (let i = 0; i < 1000; i++) items.push(`item-${i}`);

    // Default overhead 1.2 should be fine for large N
    const rf = new RibbonFilter(items);

    for (let i = 0; i < 1000; i++) {
      expect(rf.mightContain(`item-${i}`)).toBe(true);
    }

    let falsePositives = 0;
    for (let i = 0; i < 1000; i++) {
      if (rf.mightContain(`unknown-${i}`)) falsePositives++;
    }
    // False positive rate for 8-bit fingerprint is 1/256 ~ 0.4%
    // 1000 items -> ~4 false positives
    expect(falsePositives).toBeLessThan(50);
  });

  it('should throw or handle duplicate keys gracefully', () => {
     const items = ['a', 'a', 'b'];
     const rf = new RibbonFilter(items);
     expect(rf.mightContain('a')).toBe(true);
     expect(rf.mightContain('b')).toBe(true);
  });
});
