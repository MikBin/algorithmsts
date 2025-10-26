import { describe, it, expect } from 'vitest';
import { CuckooFilter } from '../../../src/data-structures';

describe('CuckooFilter', () => {
  it('adds and queries items probabilistically', () => {
    const cf = new CuckooFilter(256, 4);
    const items = Array.from({length: 200}, (_,i)=>`item-${i}`);
    for (const s of items) expect(cf.add(s)).toBe(true);
    let falseNeg = 0;
    for (const s of items) if (!cf.mightContain(s)) falseNeg++;
    expect(falseNeg).toBe(0);
    // false positives possible; just ensure API works
    const unknowns = ['z1','z2','z3'];
    for (const u of unknowns) cf.mightContain(u);
  });
});
