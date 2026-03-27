export class HelpPanel {
    constructor() {
        this.initUI();
    }

    initUI() {
        const body = document.querySelector('body');

        // Add button
        const btn = document.createElement('button');
        btn.innerHTML = '? Help & Shortcuts';
        btn.setAttribute('aria-label', 'Open Help and Keyboard Shortcuts');
        btn.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            z-index: 1000;
            padding: 10px 15px;
            border-radius: 20px;
            background-color: var(--color-primary);
            color: white;
            border: none;
            cursor: pointer;
            box-shadow: 0 2px 5px rgba(0,0,0,0.2);
            font-weight: bold;
        `;

        // Add Modal
        const modal = document.createElement('div');
        modal.setAttribute('role', 'dialog');
        modal.setAttribute('aria-modal', 'true');
        modal.setAttribute('aria-labelledby', 'help-modal-title');
        modal.style.cssText = `
            display: none;
            position: fixed;
            top: 0; left: 0; right: 0; bottom: 0;
            background: rgba(0,0,0,0.5);
            z-index: 1001;
            align-items: center;
            justify-content: center;
        `;

        const content = document.createElement('div');
        content.style.cssText = `
            background: var(--color-background);
            padding: 30px;
            border-radius: 8px;
            max-width: 500px;
            width: 90%;
            position: relative;
            box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        `;

        content.innerHTML = `
            <h2 id="help-modal-title" style="margin-top:0;">Accessibility & Keyboard Shortcuts</h2>
            <button id="close-help-btn" aria-label="Close Help" style="position:absolute; top:15px; right:15px; border:none; background:none; font-size:20px; cursor:pointer;">&times;</button>
            <p>This visualization suite is designed to be accessible. You can navigate the entire interface using your keyboard.</p>
            <h3>Global Shortcuts</h3>
            <ul style="line-height: 1.6;">
                <li><strong>Tab / Shift+Tab</strong>: Navigate between interactive elements.</li>
                <li><strong>Space</strong>: Toggle Play / Pause on the current animation (unless typing in an input).</li>
                <li><strong>Arrow Right</strong>: Step forward through the animation.</li>
                <li><strong>Enter / Space</strong>: Activate focused buttons.</li>
            </ul>
            <p><strong>Note:</strong> All visualizations have screen-reader support via live regions. Important visual changes are announced dynamically.</p>
        `;

        modal.appendChild(content);
        body.appendChild(btn);
        body.appendChild(modal);

        const closeBtn = content.querySelector('#close-help-btn');

        btn.addEventListener('click', () => {
            modal.style.display = 'flex';
            closeBtn.focus();
        });

        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
            btn.focus();
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
                btn.focus();
            }
        });

        document.addEventListener('keydown', (e) => {
            if (modal.style.display !== 'flex') return;

            if (e.key === 'Escape') {
                modal.style.display = 'none';
                btn.focus();
            }

            if (e.key === 'Tab') {
                // Trap focus inside modal
                const focusableElements = modal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
                const firstElement = focusableElements[0];
                const lastElement = focusableElements[focusableElements.length - 1];

                if (e.shiftKey) { // Shift + Tab
                    if (document.activeElement === firstElement) {
                        lastElement.focus();
                        e.preventDefault();
                    }
                } else { // Tab
                    if (document.activeElement === lastElement) {
                        firstElement.focus();
                        e.preventDefault();
                    }
                }
            }
        });
    }
}
