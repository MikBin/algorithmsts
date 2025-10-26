import { describe, it, expect } from 'vitest';
import { QuotientFilter } from '../../../src/data-structures';

describe('QuotientFilter', () => {
  it('adds and queries items', () => {
    const qf = new QuotientFilter(128, 10);
    const items = ['a','b','c','d','e'];
    items.forEach(s=>qf.add(s));
    items.forEach(s=>expect(qf.mightContain(s)).toBe(true));
    // false positives allowed
    qf.mightContain('zzz');
  });
});
