import { describe, it, expect } from 'vitest';
import { digitCount, getNthDigit } from '../../src/utils/number';
import { ArgumentError } from '../../src/core/validation/ArgumentError';

describe('number utils', () => {
  describe('getNthDigit', () => {
    it('should extract correct digit from positive numbers', () => {
      expect(getNthDigit(12345, 0)).toBe(5);
      expect(getNthDigit(12345, 1)).toBe(4);
      expect(getNthDigit(12345, 4)).toBe(1);
      expect(getNthDigit(12345, 5)).toBe(0); // Exceeding length returns 0
    });

    it('should extract correct digit from negative numbers', () => {
      expect(getNthDigit(-9876, 0)).toBe(6);
      expect(getNthDigit(-9876, 3)).toBe(9);
    });

    it('should truncate fractional numbers', () => {
      expect(getNthDigit(123.456, 0)).toBe(3);
      expect(getNthDigit(123.456, 1)).toBe(2);
      expect(getNthDigit(123.456, 2)).toBe(1);
      expect(getNthDigit(-12.34, 0)).toBe(2);
    });

    it('should throw ArgumentError for non-finite inputs', () => {
      expect(() => getNthDigit(Infinity, 0)).toThrow(ArgumentError);
      expect(() => getNthDigit(-Infinity, 1)).toThrow(ArgumentError);
      expect(() => getNthDigit(NaN, 0)).toThrow(ArgumentError);
      expect(() => getNthDigit(123, Infinity)).toThrow(ArgumentError);
      expect(() => getNthDigit(123, NaN)).toThrow(ArgumentError);
    });
  });

  describe('digitCount', () => {
    it('should count digits of positive numbers correctly', () => {
      expect(digitCount(1)).toBe(1);
      expect(digitCount(123)).toBe(3);
      expect(digitCount(1234567890)).toBe(10);
    });

    it('should count digits of negative numbers correctly', () => {
      expect(digitCount(-1)).toBe(1);
      expect(digitCount(-123)).toBe(3);
    });

    it('should return 1 for 0', () => {
      expect(digitCount(0)).toBe(1);
      expect(digitCount(-0)).toBe(1);
    });

    it('should accurately count digits near powers of 10', () => {
      expect(digitCount(999)).toBe(3);
      expect(digitCount(1000)).toBe(4);
      expect(digitCount(9999)).toBe(4);
      expect(digitCount(10000)).toBe(5);
    });

    it('should truncate fractional numbers before counting', () => {
      expect(digitCount(123.456)).toBe(3);
      expect(digitCount(0.123)).toBe(1); // truncates to 0 -> 1 digit
      expect(digitCount(-12.34)).toBe(2);
    });

    it('should throw ArgumentError for non-finite inputs', () => {
      expect(() => digitCount(Infinity)).toThrow(ArgumentError);
      expect(() => digitCount(-Infinity)).toThrow(ArgumentError);
      expect(() => digitCount(NaN)).toThrow(ArgumentError);
    });
  });
});
