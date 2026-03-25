const fs = require('fs');

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
    '#999999': 'var(--color-border-dark)'
};

const targetFiles = [
    'visualization/algorithms/sorting/main.js',
    'visualization/algorithms/graphs/main.js',
    'visualization/data-structures/avl-tree/main.js',
    'visualization/data-structures/binary-search-tree/main.js',
    'visualization/algorithms/strings/pattern-matching/main.js',
    'visualization/data-structures/trie/main.js',
    'visualization/data-structures/spatial/spatial-visualizer.js'
];

targetFiles.forEach(file => {
    if (!fs.existsSync(file)) {
        console.log("File not found:", file);
        return;
    }
    let content = fs.readFileSync(file, 'utf8');
    let changed = false;
    let usedVars = new Set();

    for (const [hex, cssVar] of Object.entries(cssVars)) {
        const varName = 'COLOR_' + cssVar.replace('var(--color-', '').replace(')', '').toUpperCase().replace(/-/g, '_');
        const regexStr = "['\"]" + hex + "['\"]";
        const regex = new RegExp(regexStr, 'gi');
        if (content.match(regex)) {
            content = content.replace(regex, varName);
            usedVars.add({varName, cssVar});
            changed = true;
        }
    }

    if (changed) {
        let prependedCode = `const _style = typeof document !== 'undefined' ? getComputedStyle(document.documentElement) : { getPropertyValue: () => '' };\n`;
        let newVarsStr = '';
        usedVars.forEach(v => {
            if (!content.includes(`const ${v.varName} =`)) {
                 newVarsStr += `const ${v.varName} = _style.getPropertyValue('${v.cssVar.replace('var(', '').replace(')', '')}').trim() || '${v.cssVar}';\n`;
            }
        });

        if (newVarsStr !== '') {
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

        fs.writeFileSync(file, content, 'utf8');
        console.log(`Updated JS: ${file}`);
    } else {
        console.log(`No hex found in JS: ${file}`);
    }
});
