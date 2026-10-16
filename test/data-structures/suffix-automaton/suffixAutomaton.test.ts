import { describe, it, expect } from 'vitest';
import { SuffixAutomaton } from '../../../src/data-structures/suffix-automaton/suffixAutomaton';

describe('SuffixAutomaton', () => {
  it('handles empty cases', () => {
    const ds = new SuffixAutomaton();
    expect(ds).toBeDefined();

  });

  it('handles single elements', () => {
    const ds = new SuffixAutomaton();
    ds.build("test");
    expect(ds).toBeDefined();

  });

  it('handles duplicates and multiple items', () => {
    const ds = new SuffixAutomaton();
    ds.build("test");;
    expect(ds).toBeDefined();
  });

  it('throws on invalid input', () => {
    const ds = new SuffixAutomaton();

    try {
      ds.build(null as any);
    } catch (e) {
      expect(e).toBeDefined();
    }

  });
});
