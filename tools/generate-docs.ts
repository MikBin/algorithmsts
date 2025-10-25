#!/usr/bin/env node

import { Application } from 'typedoc';
import { existsSync, mkdirSync } from 'fs';
import { join } from 'path';

async function generateDocs() {
  const docsDir = join(process.cwd(), 'docs', 'api');

  // Ensure docs directory exists
  if (!existsSync(docsDir)) {
    mkdirSync(docsDir, { recursive: true });
  }

  const app = await Application.bootstrapWithPlugins({
    entryPoints: [
      'src/algorithmsts.ts',
      'src/core/index.ts',
      'src/data-structures/index.ts',
      'src/algorithms/index.ts',
      'src/graphs/index.ts',
      'src/performance/index.ts',
      'src/types/index.ts',
      'src/compatibility/index.ts'
    ],
    out: docsDir,
    name: 'Algorithmsts API Documentation',
    includeVersion: true,
    excludePrivate: true,
    excludeProtected: true,
    excludeInternal: true,
    hideGenerator: true,
    readme: 'README.md',
    theme: 'default',
    githubPages: true,
    gitRevision: 'main'
  });

  const project = await app.convert();
  if (project) {
    await app.generateDocs(project, docsDir);
    console.log('✅ API documentation generated successfully in docs/api/');
  } else {
    console.error('❌ Failed to generate documentation');
    process.exit(1);
  }
}

generateDocs().catch(console.error);
