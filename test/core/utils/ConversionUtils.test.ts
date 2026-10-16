import { describe, it, expect } from 'vitest';
import { ConversionUtils } from '../../../src/core/utils/ConversionUtils';

describe('ConversionUtils', () => {
  it('should convert toString', () => {
    expect(ConversionUtils.toString(123)).toBe('123');
    expect(ConversionUtils.toString(true)).toBe('true');
  });

  it('should convert toNumber', () => {
    expect(ConversionUtils.toNumber('123')).toBe(123);
    expect(ConversionUtils.toNumber(true)).toBe(1);
    expect(ConversionUtils.toNumber('abc')).toBeNaN();
  });

  it('should convert toBoolean', () => {
    expect(ConversionUtils.toBoolean(1)).toBe(true);
    expect(ConversionUtils.toBoolean(0)).toBe(false);
    expect(ConversionUtils.toBoolean('')).toBe(false);
  });

  it('should convert arrayToSet', () => {
    const set = ConversionUtils.arrayToSet([1, 2, 2, 3]);
    expect(set).toBeInstanceOf(Set);
    expect(set.size).toBe(3);
    expect(set.has(1)).toBe(true);
  });

  it('should convert setToArray', () => {
    const set = new Set([1, 2, 3]);
    const arr = ConversionUtils.setToArray(set);
    expect(arr).toEqual([1, 2, 3]);
  });

  it('should convert arrayToMap', () => {
    const map = ConversionUtils.arrayToMap(['a', 'b']);
    expect(map.size).toBe(2);
    expect(map.get(0)).toBe('a');
    expect(map.get(1)).toBe('b');
  });

  it('should convert mapToArray', () => {
    const map = new Map([[0, 'a'], [1, 'b']]);
    const arr = ConversionUtils.mapToArray(map);
    expect(arr).toEqual([[0, 'a'], [1, 'b']]);
  });
});
