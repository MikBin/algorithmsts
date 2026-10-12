const fs = require('fs');
const path = require('path');

const packageJsonPath = path.join(__dirname, '..', 'package.json');
const exportsMap = require(packageJsonPath).exports;
let hasError = false;

for (const [key, value] of Object.entries(exportsMap)) {
  console.log(`Checking exports for ${key}:`);

  if (value.types) {
    const typesPath = path.join(__dirname, '..', value.types);
    if (!fs.existsSync(typesPath)) {
      console.error(`  [!] Types missing: ${value.types}`);
      hasError = true;
    } else {
      console.log(`  [v] Types found: ${value.types}`);
    }
  }

  if (value.import) {
    const importPath = path.join(__dirname, '..', value.import);
    if (!fs.existsSync(importPath)) {
      console.error(`  [!] Import (ESM) missing: ${value.import}`);
      hasError = true;
    } else {
      console.log(`  [v] Import (ESM) found: ${value.import}`);
    }
  }

  if (value.require) {
    const requirePath = path.join(__dirname, '..', value.require);
    if (!fs.existsSync(requirePath)) {
      console.error(`  [!] Require (CJS) missing: ${value.require}`);
      hasError = true;
    } else {
      console.log(`  [v] Require (CJS) found: ${value.require}`);
    }
  }
}

if (hasError) {
  process.exit(1);
} else {
  console.log('All exports are valid!');
}
