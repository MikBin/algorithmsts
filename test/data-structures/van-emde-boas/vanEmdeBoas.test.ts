import { describe, it, expect } from 'vitest';
import { VanEmdeBoasTree } from '../../../src/data-structures';

describe('VanEmdeBoasTree', () => {
  it('supports member and insert operations', () => {
    const veb = new VanEmdeBoasTree(64);
    const values = [5, 1, 9, 3, 7, 2, 8, 4, 6, 0];
    values.forEach(x=>veb.insert(x));
    for (const x of values) expect(veb.member(x)).toBe(true);
    expect(veb.member(63)).toBe(false);
  });
});
