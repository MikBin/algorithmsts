import { describe, it, expect } from 'vitest';
import { ComparisonUtils } from '../../../src/core/utils/ComparisonUtils';
import { IComparable } from '../../../src/core/interfaces/IComparable';

class DummyComparable implements IComparable<DummyComparable> {
  constructor(public value: number) {}
  compareTo(other: DummyComparable): number {
    if (this.value < other.value) return -1;
    if (this.value > other.value) return 1;
    return 0;
  }
}

describe('ComparisonUtils', () => {
  it('should compare for equality', () => {
    expect(ComparisonUtils.equals(1, 1)).toBe(true);
    expect(ComparisonUtils.equals(1, 2)).toBe(false);
  });

  it('should compare comparable objects', () => {
    const a = new DummyComparable(1);
    const b = new DummyComparable(2);
    const c = new DummyComparable(1);

    expect(ComparisonUtils.compare(a, b)).toBe(-1);
    expect(ComparisonUtils.compare(b, a)).toBe(1);
    expect(ComparisonUtils.compare(a, c)).toBe(0);
  });

  it('should check lessThan', () => {
    const a = new DummyComparable(1);
    const b = new DummyComparable(2);
    expect(ComparisonUtils.lessThan(a, b)).toBe(true);
    expect(ComparisonUtils.lessThan(b, a)).toBe(false);
  });

  it('should check greaterThan', () => {
    const a = new DummyComparable(1);
    const b = new DummyComparable(2);
    expect(ComparisonUtils.greaterThan(b, a)).toBe(true);
    expect(ComparisonUtils.greaterThan(a, b)).toBe(false);
  });

  it('should find min', () => {
    const a = new DummyComparable(1);
    const b = new DummyComparable(2);
    expect(ComparisonUtils.min(a, b)).toBe(a);
    expect(ComparisonUtils.min(b, a)).toBe(a);
  });

  it('should find max', () => {
    const a = new DummyComparable(1);
    const b = new DummyComparable(2);
    expect(ComparisonUtils.max(a, b)).toBe(b);
    expect(ComparisonUtils.max(b, a)).toBe(b);
  });
});
