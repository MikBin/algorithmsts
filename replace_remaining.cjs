const fs = require('fs');
const path = require('path');

const cssVars = {
    '#2ecc71': 'var(--color-sorted)',
    '#27ae60': 'var(--color-sorted-stroke)',
    '#e74c3c': 'var(--color-comparing)',
    '#e67e22': 'var(--color-active)',
    '#d35400': 'var(--color-active-stroke)',
    '#3498db': 'var(--color-default)',
    '#2980b9': 'var(--color-primary-dark)',
    '#9b59b6': 'var(--color-visited)',
    '#e8f4f8': 'var(--color-visited-bg)',
    '#f39c12': 'var(--color-highlight)',
    '#f8f9fa': 'var(--color-background)',
    '#ecf0f1': 'var(--color-background-alt)',
    '#e9ecef': 'var(--color-background-hover)',
    '#333333': 'var(--color-text)',
    '#2c3e50': 'var(--color-text-dark)',
    '#666666': 'var(--color-text-muted)',
    '#cccccc': 'var(--color-border)',
    '#999999': 'var(--color-border-dark)',
    '#333': 'var(--color-text)',
    '#666': 'var(--color-text-muted)',
    '#ccc': 'var(--color-border)',
    '#999': 'var(--color-border-dark)',
    '#000': 'var(--color-text)',
    '#000000': 'var(--color-text)',
    '#fff': 'var(--color-background)',
    '#ffffff': 'var(--color-background)',
    '#f4f6f9': 'var(--color-background-alt)',
    '#eef2f7': 'var(--color-background-hover)',
    '#f5f5f5': 'var(--color-background-alt)',
    '#f0f0f0': 'var(--color-background-alt)',
    '#e0e0e0': 'var(--color-border)',
    '#bdc3c7': 'var(--color-border)',
    '#dee2e6': 'var(--color-border)',
    '#495057': 'var(--color-text-muted)',
    '#007bff': 'var(--color-primary)',
    '#0056b3': 'var(--color-primary-dark)',
    '#2196f3': 'var(--color-primary)',
    '#1abc9c': 'var(--color-success)',
    '#28a745': 'var(--color-success)',
    '#d4edda': 'var(--color-visited-bg)',
    '#c0392b': 'var(--color-danger)',
    '#e91e63': 'var(--color-danger)',
    '#ff8b94': 'var(--color-danger)',
    '#f8d7da': 'var(--color-danger)',
    '#ffc107': 'var(--color-highlight)',
    '#f1c40f': 'var(--color-highlight)',
    '#ffeb3b': 'var(--color-highlight)',
    '#fbc02d': 'var(--color-highlight)',
    '#fff3cd': 'var(--color-background-hover)',
    '#ffd3b6': 'var(--color-background-hover)',
    '#a8e6cf': 'var(--color-success)',
    '#4caf50': 'var(--color-success)',
    '#388e3c': 'var(--color-success)',
    '#95a5a6': 'var(--color-text-muted)',
    '#7f8c8d': 'var(--color-text-muted)',
    '#34495e': 'var(--color-text-dark)',
    '#8e44ad': 'var(--color-visited)',
    '#17a2b8': 'var(--color-default)',
    '#d1ecf1': 'var(--color-visited-bg)',
    '#f0f7ff': 'var(--color-visited-bg)',
    '#f8fcf8': 'var(--color-visited-bg)',
    '#bbdefb': 'var(--color-visited-bg)',
    '#90caf9': 'var(--color-visited-bg)',
    '#e8f6f3': 'var(--color-visited-bg)',
    '#fdeaea': 'var(--color-background-hover)',
    '#add': 'var(--color-border)'
};

const jsVarNamesMap = {};
for (const [hex, cssVar] of Object.entries(cssVars)) {
    const varName = cssVar.replace('var(--color-', '').replace(')', '').toUpperCase().replace(/-/g, '_');
    jsVarNamesMap[hex] = 'COLOR_' + varName;
}

const cssVarsMapping = {};
for (const [hex, cssVar] of Object.entries(cssVars)) {
    cssVarsMapping[jsVarNamesMap[hex]] = cssVar;
}

const targetFiles = [
    'visualization/algorithms/sorting/main.js',
    'visualization/algorithms/graphs/main.js',
    'visualization/data-structures/avl-tree/main.js',
    'visualization/data-structures/binary-search-tree/main.js',
    'visualization/algorithms/strings/pattern-matching/main.js',
    'visualization/data-structures/trie/main.js',
    'visualization/data-structures/spatial/main.js'
];

targetFiles.forEach(file => {
    if (!fs.existsSync(file)) {
        console.log("File not found:", file);
        return;
    }
    let content = fs.readFileSync(file, 'utf8');
    let changed = false;
    let usedVars = new Set();

    const hexKeys = Object.keys(jsVarNamesMap).sort((a, b) => b.length - a.length);

    for (const hex of hexKeys) {
        const varName = jsVarNamesMap[hex];
        const regexStr = "['\"]" + hex + "['\"]";
        const regex = new RegExp(regexStr, 'gi');
        if (content.match(regex)) {
            content = content.replace(regex, varName);
            usedVars.add(varName);
            changed = true;
        }
    }

    if (changed) {
        let prependedCode = `const _style = typeof document !== 'undefined' ? getComputedStyle(document.documentElement) : { getPropertyValue: () => '#000' };\n`;
        let fileHasStyleDec = content.includes('const _style = typeof document');

        let newVarsStr = '';
        usedVars.forEach(v => {
            const cssVar = cssVarsMapping[v];
            if (!content.includes(`const ${v} =`)) {
                 newVarsStr += `const ${v} = _style.getPropertyValue('${cssVar.replace('var(', '').replace(')', '')}').trim() || '${cssVar}';\n`;
            }
        });

        if (newVarsStr !== '') {
            if (fileHasStyleDec) {
                content = content.replace(/const _style = typeof document !== 'undefined' \? getComputedStyle\(document.documentElement\) : { getPropertyValue: \(\) => '#000' };\n/, `const _style = typeof document !== 'undefined' ? getComputedStyle(document.documentElement) : { getPropertyValue: () => '#000' };\n${newVarsStr}`);
            } else {
                 if (content.includes('import ')) {
                    const lines = content.split('\n');
                    let lastImportIdx = -1;
                    for (let i = 0; i < lines.length; i++) {
                        if (lines[i].startsWith('import ')) {
                            lastImportIdx = i;
                        }
                    }
                    lines.splice(lastImportIdx + 1, 0, '\n' + prependedCode + newVarsStr);
                    content = lines.join('\n');
                } else {
                    content = prependedCode + newVarsStr + '\n' + content;
                }
            }
        }

        fs.writeFileSync(file, content, 'utf8');
        console.log(`Updated JS: ${file}`);
    }
});
