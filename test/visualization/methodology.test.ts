import { describe, it, expect } from 'vitest';
import { methodologySections, generalMethodology } from '../../visualization/vector-similarity/methodology.js';

describe('vector similarity dashboard methodology', () => {
  it('exports a section for each major dashboard comparison', () => {
    const ids = methodologySections.map((s) => s.id);
    expect(ids).toEqual([
      'calculator',
      'vector-visualization',
      'benchmark',
      'outlier-resiliency',
      'stress-tests',
      'similarity-compare',
      'comparison-demo',
      'nonlinear-analysis',
    ]);
  });

  it('includes procedure, rationale, and interpretation for every section', () => {
    for (const section of methodologySections) {
      expect(section.title.length).toBeGreaterThan(0);
      expect(section.procedure.length).toBeGreaterThan(20);
      expect(section.rationale.length).toBeGreaterThan(20);
      expect(section.interpretation.length).toBeGreaterThan(20);
    }
  });

  it('documents shared methodology items', () => {
    expect(generalMethodology.items.length).toBeGreaterThanOrEqual(3);
    for (const item of generalMethodology.items) {
      expect(item.label.length).toBeGreaterThan(0);
      expect(item.text.length).toBeGreaterThan(10);
    }
  });
});
