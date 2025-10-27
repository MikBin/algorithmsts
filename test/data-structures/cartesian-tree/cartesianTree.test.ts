import { describe, it, expect } from 'vitest';
import { CartesianTree } from '../../../src/data-structures';

describe('CartesianTree', () => {
  it('inorder equals original sequence', () => {
    const values = [5,1,4,3,2];
    const items = values.map((v,i)=>({ value: v, priority: i }));
    const ct = new CartesianTree(items);
    expect(ct.inorder()).toEqual(values);
  });
});
