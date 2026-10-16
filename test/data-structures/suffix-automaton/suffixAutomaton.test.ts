import { describe, it, expect } from 'vitest';
import { SuffixAutomaton } from '../../../src/data-structures/suffix-automaton/suffixAutomaton';

describe('SuffixAutomaton', () => {

    it('handles empty cases', () => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const ds = new SuffixAutomaton(); (ds as any);
      ds.build("");
      expect(ds.contains("a")).toBe(false);
    });
    it('handles single elements', () => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const ds = new SuffixAutomaton(); (ds as any);
      ds.build("test");
      expect(ds.contains("es")).toBe(true);
      expect(ds.contains("x")).toBe(false);
    });
    it('handles duplicates and multiple items', () => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const ds = new SuffixAutomaton(); (ds as any);
      ds.build("banana");
      expect(ds.contains("ana")).toBe(true);
      expect(ds.contains("ban")).toBe(true);
    });
    it('throws on invalid input', () => {
      expect(() => ds.build(null as any)).toThrow(TypeError);
    });

});
