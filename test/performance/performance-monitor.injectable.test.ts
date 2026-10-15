import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { PerformanceMonitor } from '../../src/performance/performance-monitor';

describe('PerformanceMonitor Injectables', () => {
  let originalClock: () => number;
  let originalLogger: { warn: (message: string) => void } | null;

  beforeEach(() => {
    // Save original state (technically internal implementation details, but we can reset by providing defaults)
    // We'll reset after each test to avoid polluting other tests
  });

  afterEach(() => {
    // Restore default clock (performance.now) and logger (console)
    PerformanceMonitor.setClock(() => performance.now());
    PerformanceMonitor.setLogger(console);
  });

  describe('Clock Injection', () => {
    it('should use default performance.now if no custom clock is set', () => {
      // Just check it runs and returns a number
      const time = PerformanceMonitor.measureExecutionTime(() => {
        let sum = 0;
        for (let i = 0; i < 1000; i++) sum += i;
      });
      expect(typeof time).toBe('number');
      expect(time).toBeGreaterThanOrEqual(0);
    });

    it('should use custom clock if provided', () => {
      let timeValue = 100;
      const customClock = vi.fn(() => {
        const val = timeValue;
        timeValue += 50; // increment time by 50ms each call
        return val;
      });

      PerformanceMonitor.setClock(customClock);

      const time = PerformanceMonitor.measureExecutionTime(() => {
        // do nothing
      });

      expect(customClock).toHaveBeenCalledTimes(2);
      expect(time).toBe(50); // 150 - 100
    });

    it('should return current time from custom clock via clock() method', () => {
      PerformanceMonitor.setClock(() => 42);
      expect(PerformanceMonitor.clock()).toBe(42);
    });
  });

  describe('Logger Injection', () => {
    it('should return default console logger initially', () => {
      // In tests, it might be the default console
      expect(PerformanceMonitor.getLogger()).toBe(console);
    });

    it('should set and get custom logger', () => {
      const mockLogger = { warn: vi.fn() };
      PerformanceMonitor.setLogger(mockLogger);

      expect(PerformanceMonitor.getLogger()).toBe(mockLogger);

      const logger = PerformanceMonitor.getLogger();
      logger?.warn('test warning');

      expect(mockLogger.warn).toHaveBeenCalledWith('test warning');
    });

    it('should allow setting logger to null', () => {
      PerformanceMonitor.setLogger(null);
      expect(PerformanceMonitor.getLogger()).toBeNull();
    });
  });
});
