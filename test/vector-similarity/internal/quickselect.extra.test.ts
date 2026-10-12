import { describe, it, expect } from 'vitest';
import {
  quickselectNth,
} from '../../../src/vector-similarity/similarity/internal/quickselect';

describe('quickselectNth branches', () => {
  it('covers medianOfThreeIndex', () => {
    expect(quickselectNth([1, 2, 3], 1)).toBe(2);
    expect(quickselectNth([1, 3, 2], 1)).toBe(2);
    expect(quickselectNth([2, 1, 3], 1)).toBe(2);
    expect(quickselectNth([2, 3, 1], 1)).toBe(2);
    expect(quickselectNth([3, 1, 2], 1)).toBe(2);
    expect(quickselectNth([3, 2, 1], 1)).toBe(2);
  });
});
