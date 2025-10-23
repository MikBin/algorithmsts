import { describe, expect, it, vi } from 'vitest';
import { DeprecationWarning } from '../../src/compatibility/utils/DeprecationWarning';

/**
 * Tests for deprecation warning system
 */
describe('Deprecation Warning System', () => {
  describe('DeprecationWarning Utility', () => {
    it('should emit deprecation warnings', () => {
      const consoleWarnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});

      DeprecationWarning.warn('Test deprecated method', 'Use newMethod instead');

      expect(consoleWarnSpy).toHaveBeenCalledWith(
        expect.stringContaining('DEPRECATED')
      );
      expect(consoleWarnSpy).toHaveBeenCalledWith(
        expect.stringContaining('Test deprecated method')
      );
      expect(consoleWarnSpy).toHaveBeenCalledWith(
        expect.stringContaining('Use newMethod instead')
      );

      consoleWarnSpy.mockRestore();
    });

    it('should include version information in warnings', () => {
      const consoleWarnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});

      DeprecationWarning.warn('Old method', 'New method', '2.0.0');

      expect(consoleWarnSpy).toHaveBeenCalledWith(
        expect.stringContaining('2.0.0')
      );

      consoleWarnSpy.mockRestore();
    });
  });

  describe('Warning Categories', () => {
    it('should support different warning categories', () => {
      const consoleWarnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});

      DeprecationWarning.warnMethod('oldMethod', 'newMethod');
      DeprecationWarning.warnClass('OldClass', 'NewClass');
      DeprecationWarning.warnAPI('oldAPI', 'newAPI');

      expect(consoleWarnSpy).toHaveBeenCalledTimes(3);

      consoleWarnSpy.mockRestore();
    });
  });

  describe('Warning Suppression', () => {
    it('should allow suppressing warnings', () => {
      const consoleWarnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});

      DeprecationWarning.suppress();
      DeprecationWarning.warn('This should be suppressed');

      expect(consoleWarnSpy).not.toHaveBeenCalled();

      DeprecationWarning.unsuppress();
      DeprecationWarning.warn('This should appear');

      expect(consoleWarnSpy).toHaveBeenCalledTimes(1);

      consoleWarnSpy.mockRestore();
    });
  });

  describe('Warning History', () => {
    it('should track warning history', () => {
      DeprecationWarning.clearHistory();

      DeprecationWarning.warn('Warning 1');
      DeprecationWarning.warn('Warning 2');

      const history = DeprecationWarning.getHistory();
      expect(history.length).toBe(2);
      expect(history[0]).toContain('Warning 1');
      expect(history[1]).toContain('Warning 2');
    });
  });

  describe('Integration with Legacy Code', () => {
    it('should warn when legacy methods are called', () => {
      const consoleWarnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});

      // Simulate calling a legacy method that triggers a warning
      DeprecationWarning.warn('Legacy method called', 'Use new implementation');

      expect(consoleWarnSpy).toHaveBeenCalled();

      consoleWarnSpy.mockRestore();
    });
  });
});
