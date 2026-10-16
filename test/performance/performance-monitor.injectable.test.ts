import { describe, it, expect, vi, afterEach } from 'vitest';
import { PerformanceMonitor } from '../../src/performance/performance-monitor';

describe('PerformanceMonitor injectability', () => {
  const originalClock = performance.now.bind(performance);

  afterEach(() => {
    PerformanceMonitor.setClock(() => originalClock());
    PerformanceMonitor.setLogger(console);
  });

  it('allows injecting a custom clock', () => {
    let time = 0;
    const mockClock = () => time;
    PerformanceMonitor.setClock(mockClock);

    const fn = () => {
      time += 10;
    };

    const duration = PerformanceMonitor.measureExecutionTime(fn);
    expect(duration).toBe(10);
  });

  it('allows injecting and retrieving a custom logger', () => {
    const mockLogger = { warn: vi.fn() } as unknown as Console;
    PerformanceMonitor.setLogger(mockLogger);
    expect(PerformanceMonitor.getLogger()).toBe(mockLogger);
  });

  it('allows disabling the logger by setting it to null', () => {
    PerformanceMonitor.setLogger(null);
    expect(PerformanceMonitor.getLogger()).toBeNull();
  });
});
