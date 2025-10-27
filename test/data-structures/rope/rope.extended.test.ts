import { describe, it, expect } from 'vitest';
import { Rope } from '../../../src/data-structures';

describe('Rope insert/substring', () => {
  it('inserts and extracts correctly', () => {
    const r = Rope.fromString('hello world');
    const r2 = r.insert(5, ',');
    expect(r2.toString()).toBe('hello, world');
    expect(r2.substring(0,5)).toBe('hello');
  });
});
