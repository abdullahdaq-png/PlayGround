export class Input {
  constructor(canvas) {
    this.canvas = canvas;
    this.keys = new Set();
    this.pressed = new Set();
    this.mouse = { dx: 0, dy: 0, left: false, right: false };
    this.locked = false;
    this.sensitivity = 1;
    this.touch = window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window;
    this.touchState = { moveX: 0, moveY: 0, fire: false, ads: false };
    this.enabled = false;
    this.wantLock = false;
    this.lockListeners = [];
    this._bind();
  }

  _bind() {
    window.addEventListener('keydown', (e) => {
      if (!this.enabled) return;
      if (['Space', 'Tab', 'ShiftLeft', 'ControlLeft', 'KeyW', 'KeyA', 'KeyS', 'KeyD'].includes(e.code)) e.preventDefault();
      if (!e.repeat) this.pressed.add(e.code);
      this.keys.add(e.code);
    });
    window.addEventListener('keyup', (e) => { this.keys.delete(e.code); });
    window.addEventListener('blur', () => { this.keys.clear(); this.mouse.left = false; this.mouse.right = false; });

    this.canvas.addEventListener('mousedown', (e) => {
      if (!this.enabled || this.touch) return;
      if (e.button === 0) this.mouse.left = true;
      if (e.button === 2) this.mouse.right = true;
    });
    window.addEventListener('mouseup', (e) => {
      if (e.button === 0) this.mouse.left = false;
      if (e.button === 2) this.mouse.right = false;
    });
    this.canvas.addEventListener('contextmenu', (e) => e.preventDefault());
    document.addEventListener('mousemove', (e) => {
      if (!this.locked || !this.enabled) return;
      this.mouse.dx += e.movementX || 0;
      this.mouse.dy += e.movementY || 0;
    });
    document.addEventListener('pointerlockchange', () => {
      this.locked = document.pointerLockElement === this.canvas;
      this.lockListeners.forEach((fn) => fn(this.locked));
    });

    this._bindTouch();
  }

  onLock(fn) { this.lockListeners.push(fn); }

  setEnabled(on) {
    this.enabled = on;
    if (!on) {
      this.keys.clear(); this.pressed.clear();
      this.mouse.left = false; this.mouse.right = false;
      this.touchState.fire = false; this.touchState.ads = false;
      this.touchState.moveX = 0; this.touchState.moveY = 0;
    }
  }

  requestLock() {
    if (this.touch) return;
    this.wantLock = true;
    if (document.pointerLockElement !== this.canvas) {
      const p = this.canvas.requestPointerLock?.();
      if (p && p.catch) p.catch(() => {});
    }
  }

  exitLock() {
    if (document.pointerLockElement) document.exitPointerLock();
    this.wantLock = false;
  }

  consume(code) {
    if (this.pressed.has(code)) {
      this.pressed.delete(code);
      return true;
    }
    return false;
  }

  endFrame() {
    this.mouse.dx = 0;
    this.mouse.dy = 0;
    this.pressed.clear();
  }

  get firing() {
    return this.mouse.left || this.touchState.fire;
  }
  get aiming() {
    return this.mouse.right || this.touchState.ads;
  }

  _bindTouch() {
    const stickZone = document.getElementById('stick-zone');
    const stickBase = document.getElementById('stick-base');
    const knob = document.getElementById('stick-knob');
    const controls = document.getElementById('touch-controls');
    if (!stickZone || !stickBase || !knob) return;
    if (this.touch) document.body.classList.add('touch-mode');

    let stickId = null;
    const stickCenter = { x: 0, y: 0 };
    const R = 52;
    const setStick = (dx, dy) => {
      const len = Math.hypot(dx, dy);
      const cl = Math.min(1, len / R);
      const nx = len ? (dx / len) * cl : 0;
      const ny = len ? (dy / len) * cl : 0;
      this.touchState.moveX = nx;
      this.touchState.moveY = -ny;
      knob.style.transform = `translate(${nx * R}px, ${ny * R}px)`;
    };
    stickZone.addEventListener('pointerdown', (e) => {
      if (e.pointerId !== undefined) stickId = e.pointerId;
      stickZone.setPointerCapture?.(e.pointerId);
      const rect = stickZone.getBoundingClientRect();
      stickCenter.x = rect.left + rect.width / 2;
      stickCenter.y = rect.top + rect.height / 2;
      setStick(e.clientX - stickCenter.x, e.clientY - stickCenter.y);
      stickBase.classList.add('active');
      e.preventDefault();
    });
    stickZone.addEventListener('pointermove', (e) => {
      if (stickId === null || e.pointerId !== stickId) return;
      setStick(e.clientX - stickCenter.x, e.clientY - stickCenter.y);
      e.preventDefault();
    });
    const endStick = (e) => {
      if (stickId !== null && e.pointerId !== stickId) return;
      stickId = null;
      this.touchState.moveX = 0;
      this.touchState.moveY = 0;
      knob.style.transform = 'translate(0px, 0px)';
      stickBase.classList.remove('active');
    };
    stickZone.addEventListener('pointerup', endStick);
    stickZone.addEventListener('pointercancel', endStick);

    controls.querySelectorAll('[data-touch]').forEach((btn) => {
      const action = btn.dataset.touch;
      if (action === 'fire' || action === 'ads') {
        const on = (e) => {
          e.preventDefault();
          e.stopPropagation();
          btn.classList.add('pressed');
          if (action === 'fire') this.touchState.fire = true;
          else this.touchState.ads = !this.touchState.ads;
          if (action === 'ads') btn.classList.toggle('toggled', this.touchState.ads);
        };
        const off = (e) => {
          e.preventDefault();
          if (action === 'fire') { this.touchState.fire = false; btn.classList.remove('pressed'); }
        };
        btn.addEventListener('pointerdown', on);
        btn.addEventListener('pointerup', off);
        btn.addEventListener('pointercancel', off);
        btn.addEventListener('pointerleave', off);
      } else {
        btn.addEventListener('pointerdown', (e) => {
          e.preventDefault();
          e.stopPropagation();
          const map = { reload: 'KeyR', ability: 'KeyQ', jump: 'Space', swap: 'KeyF' };
          this.pressed.add(map[action] || 'KeyR');
          btn.classList.add('pressed');
          setTimeout(() => btn.classList.remove('pressed'), 120);
        });
      }
    });

    // look drag on the scene
    let lookId = null;
    let last = { x: 0, y: 0 };
    this.canvas.addEventListener('pointerdown', (e) => {
      if (!this.touch || !this.enabled) return;
      lookId = e.pointerId;
      last = { x: e.clientX, y: e.clientY };
      this.canvas.setPointerCapture?.(e.pointerId);
    });
    this.canvas.addEventListener('pointermove', (e) => {
      if (lookId !== e.pointerId) return;
      this.mouse.dx += (e.clientX - last.x) * 1.4;
      this.mouse.dy += (e.clientY - last.y) * 1.4;
      last = { x: e.clientX, y: e.clientY };
    });
    const endLook = (e) => { if (lookId === e.pointerId) lookId = null; };
    this.canvas.addEventListener('pointerup', endLook);
    this.canvas.addEventListener('pointercancel', endLook);
  }
}
