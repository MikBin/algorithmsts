/* eslint-env browser */
import { methodologySections, generalMethodology } from './methodology.js';

export const MethodologySection = {
  setup() {
    return {
      sections: methodologySections,
      general: generalMethodology
    };
  },
  template: `
    <div class="methodology-section" data-testid="methodology-section">
      <h2>Methodology &amp; Rationale</h2>
      <p class="methodology-intro">
        This page summarizes offline experiments produced by
        <code>tools/vector-similarity/vector-similarity-analysis.ts</code>.
        Each block below explains how the corresponding dashboard section was conducted,
        why that design was chosen, and how to interpret the results.
      </p>

      <article
        v-for="section in sections"
        :key="section.id"
        :id="'methodology-' + section.id"
        class="methodology-block"
      >
        <h3>{{ section.title }}</h3>
        <dl class="methodology-details">
          <div class="methodology-row">
            <dt>How it was conducted</dt>
            <dd>{{ section.procedure }}</dd>
          </div>
          <div class="methodology-row">
            <dt>Rationale</dt>
            <dd>{{ section.rationale }}</dd>
          </div>
          <div class="methodology-row">
            <dt>How to interpret</dt>
            <dd>{{ section.interpretation }}</dd>
          </div>
        </dl>
      </article>

      <article class="methodology-block methodology-general">
        <h3>{{ general.title }}</h3>
        <dl class="methodology-details">
          <div
            v-for="item in general.items"
            :key="item.label"
            class="methodology-row"
          >
            <dt>{{ item.label }}</dt>
            <dd>{{ item.text }}</dd>
          </div>
        </dl>
      </article>
    </div>
  `
};
