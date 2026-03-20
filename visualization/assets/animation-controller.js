export class AnimationController {
    constructor() {
        this.steps = [];
        this.currentStepIndex = 0;
        this.isPlaying = false;
        this.speed = 500; // ms
        this.timer = null;
        this.onStepChange = null;
        this.onStateChange = null; // Play/Pause state
    }

    addStep(description, fn) {
        this.steps.push({ description, fn });
    }

    clearSteps() {
        this.steps = [];
        this.currentStepIndex = 0;
        this.stopTimer();
        this._emitStepChange();
    }

    play() {
        if (this.isPlaying) return;
        if (this.currentStepIndex >= this.steps.length) {
            // If finished, reset and play
            this.reset();
        }
        this.isPlaying = true;
        this._emitStateChange();
        this._scheduleNextStep();
    }

    pause() {
        this.isPlaying = false;
        this.stopTimer();
        this._emitStateChange();
    }

    step() {
        this.pause();
        this._executeNextStep();
    }

    reset() {
        this.pause();
        this.currentStepIndex = 0;
        this._emitStepChange();
    }

    setSpeed(ms) {
        this.speed = ms;
        if (this.isPlaying) {
            // Reschedule with new speed if playing
            this.stopTimer();
            this._scheduleNextStep();
        }
    }

    stopTimer() {
        if (this.timer) {
            clearTimeout(this.timer);
            this.timer = null;
        }
    }

    _scheduleNextStep() {
        if (!this.isPlaying) return;

        if (this.currentStepIndex < this.steps.length) {
            this.timer = setTimeout(() => {
                this._executeNextStep();
                if (this.isPlaying) {
                    this._scheduleNextStep();
                }
            }, this.speed);
        } else {
            this.pause();
        }
    }

    _executeNextStep() {
        if (this.currentStepIndex < this.steps.length) {
            const step = this.steps[this.currentStepIndex];
            if (step.fn) {
                step.fn();
            }
            this.currentStepIndex++;
            this._emitStepChange();
        }
    }

    _emitStepChange() {
        if (this.onStepChange) {
            const currentStep = this.currentStepIndex > 0 ? this.steps[this.currentStepIndex - 1] : null;
            this.onStepChange({
                index: this.currentStepIndex,
                total: this.steps.length,
                description: currentStep ? currentStep.description : 'Ready',
                isFinished: this.currentStepIndex >= this.steps.length
            });
        }
    }

    _emitStateChange() {
        if (this.onStateChange) {
            this.onStateChange({ isPlaying: this.isPlaying });
        }
    }
}

export class PlaybackControls {
    constructor(containerSelector, controller) {
        this.container = document.querySelector(containerSelector);
        this.controller = controller;
        this.initUI();
        this.bindEvents();
    }

    initUI() {
        if (!this.container) return;

        this.container.classList.add('playback-controls');

        this.container.innerHTML = `
            <div class="playback-buttons">
                <button class="btn-play-pause" title="Play" aria-label="Play">▶ Play</button>
                <button class="btn-step" title="Step Forward" aria-label="Step Forward">⏭ Step</button>
                <button class="btn-reset" title="Reset" aria-label="Reset">⏮ Reset</button>
            </div>
            <div class="playback-speed">
                <label for="speed-slider">Speed:</label>
                <input type="range" id="speed-slider" min="100" max="2000" value="500" step="100" dir="rtl" aria-label="Playback speed">
            </div>
            <div class="playback-status">
                <div class="step-indicator" aria-live="polite">Step: 0 / 0</div>
                <div class="step-description" aria-live="assertive">Ready</div>
            </div>
        `;

        this.btnPlayPause = this.container.querySelector('.btn-play-pause');
        this.btnStep = this.container.querySelector('.btn-step');
        this.btnReset = this.container.querySelector('.btn-reset');
        this.speedSlider = this.container.querySelector('#speed-slider');
        this.stepIndicator = this.container.querySelector('.step-indicator');
        this.stepDescription = this.container.querySelector('.step-description');
    }

    bindEvents() {
        if (!this.container) return;

        this.btnPlayPause.addEventListener('click', () => {
            if (this.controller.isPlaying) {
                this.controller.pause();
            } else {
                this.controller.play();
            }
        });

        this.btnStep.addEventListener('click', () => {
            this.controller.step();
        });

        this.btnReset.addEventListener('click', () => {
            this.controller.reset();
        });

        this.speedSlider.addEventListener('input', (e) => {
            this.controller.setSpeed(parseInt(e.target.value, 10));
        });

        this.controller.onStateChange = (state) => {
            if (state.isPlaying) {
                this.btnPlayPause.textContent = '⏸ Pause';
                this.btnPlayPause.title = 'Pause';
                this.btnPlayPause.setAttribute('aria-label', 'Pause');
            } else {
                this.btnPlayPause.textContent = '▶ Play';
                this.btnPlayPause.title = 'Play';
                this.btnPlayPause.setAttribute('aria-label', 'Play');
            }
        };

        // Add keyboard navigation for steps
        document.addEventListener('keydown', (e) => {
            const activeTag = document.activeElement ? document.activeElement.tagName.toLowerCase() : '';
            if (activeTag === 'input' || activeTag === 'textarea' || activeTag === 'select') {
                return;
            }
            if (e.code === 'ArrowRight' && !this.btnStep.disabled) {
                this.controller.step();
            } else if (e.code === 'Space' && !this.btnPlayPause.disabled) {
                e.preventDefault();
                if (this.controller.isPlaying) {
                    this.controller.pause();
                } else {
                    this.controller.play();
                }
            }
        });

        this.controller.onStepChange = (status) => {
            this.stepIndicator.textContent = `Step: ${status.index} / ${status.total}`;
            this.stepDescription.textContent = status.description;

            if (status.isFinished) {
                this.btnPlayPause.textContent = '▶ Play';
                this.btnPlayPause.title = 'Play';
                this.btnStep.disabled = true;
            } else {
                this.btnStep.disabled = false;
            }

            // Disable play if there are no steps or we are at the end (unless we want play to reset-and-play, which controller handles)
            if (status.total === 0) {
                 this.btnPlayPause.disabled = true;
                 this.btnStep.disabled = true;
            } else {
                 this.btnPlayPause.disabled = false;
            }
        };

        // Initial update
        this.controller._emitStepChange();
    }
}
