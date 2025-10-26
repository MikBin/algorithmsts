// Compatibility CJS shim for tests
// This file exists so that require('../../src/compatibility') works under Vitest.
// It emits the same deprecation warning the TS module does.

if (typeof console !== 'undefined' && console.warn) {
  console.warn(
    '[DEPRECATED] The compatibility layer is deprecated and will be removed in version 2.0.0. ' +
      "Please migrate to the new modular API: import from 'algorithmsts/data-structures' or 'algorithmsts/algorithms'."
  );
}

export default {};
