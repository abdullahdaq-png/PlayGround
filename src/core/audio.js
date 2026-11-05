// Lightweight synthesized audio — no external assets, tiny footprint.
class AudioEngine {
  constructor() {
    this.ctx = null;
    this.master = null;
    this.enabled = true;
    this.ambient = null;
    this.noise = null;
  }

  ensure() {
    if (this.ctx) {
      if (this.ctx.state === 'suspended') this.ctx.resume().catch(() => {});
      return this.ctx;
    }
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return null;
    this.ctx = new AC();
    this.master = this.ctx.createGain();
    this.master.gain.value = this.enabled ? 0.7 : 0;
    const comp = this.ctx.createDynamicsCompressor();
    comp.threshold.value = -18;
    comp.ratio.value = 6;
    this.master.connect(comp).connect(this.ctx.destination);
    this.noise = this.makeNoise();
    return this.ctx;
  }

  setEnabled(on) {
    this.enabled = on;
    if (this.master) this.master.gain.value = on ? 0.7 : 0;
    if (on) this.ensure();
  }

  makeNoise() {
    const ctx = this.ctx;
    const buffer = ctx.createBuffer(1, ctx.sampleRate * 1.2, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < data.length; i++) data[i] = Math.random() * 2 - 1;
    return buffer;
  }

  noiseBurst({ t = 0.12, gain = 0.5, filter = 1800, q = 1, type = 'lowpass', pan = 0 }) {
    const ctx = this.ensure();
    if (!ctx) return;
    const t0 = ctx.currentTime;
    const src = ctx.createBufferSource();
    src.buffer = this.noise;
    src.playbackRate.value = 0.8 + Math.random() * 0.4;
    const bq = ctx.createBiquadFilter();
    bq.type = type;
    bq.frequency.setValueAtTime(filter, t0);
    bq.frequency.exponentialRampToValueAtTime(Math.max(80, filter * 0.25), t0 + t);
    bq.Q.value = q;
    const g = ctx.createGain();
    g.gain.setValueAtTime(gain, t0);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + t);
    const p = ctx.createStereoPanner();
    p.pan.value = Math.max(-1, Math.min(1, pan));
    src.connect(bq).connect(g).connect(p).connect(this.master);
    src.start(t0);
    src.stop(t0 + t + 0.02);
  }

  tone({ freq = 440, freq2, t = 0.12, gain = 0.15, type = 'sine', delay = 0 }) {
    const ctx = this.ensure();
    if (!ctx) return;
    const t0 = ctx.currentTime + delay;
    const osc = ctx.createOscillator();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, t0);
    if (freq2) osc.frequency.exponentialRampToValueAtTime(Math.max(20, freq2), t0 + t);
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.0001, t0);
    g.gain.exponentialRampToValueAtTime(gain, t0 + 0.012);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + t);
    osc.connect(g).connect(this.master);
    osc.start(t0);
    osc.stop(t0 + t + 0.03);
  }

  shoot(weaponId, pan = 0, distance = 0) {
    if (!this.enabled) return;
    const fall = Math.max(0.12, 1 - distance / 90);
    if (weaponId === 'sniper') {
      this.noiseBurst({ t: 0.3, gain: 0.9 * fall, filter: 3200, q: 0.7, pan });
      this.tone({ freq: 120, freq2: 45, t: 0.3, gain: 0.5 * fall, type: 'triangle' });
    } else if (weaponId === 'shotgun') {
      this.noiseBurst({ t: 0.24, gain: 0.9 * fall, filter: 1500, q: 0.6, pan });
      this.tone({ freq: 90, freq2: 40, t: 0.24, gain: 0.45 * fall, type: 'triangle' });
    } else if (weaponId === 'lmg') {
      this.noiseBurst({ t: 0.16, gain: 0.7 * fall, filter: 1900, q: 0.9, pan });
      this.tone({ freq: 105, freq2: 50, t: 0.14, gain: 0.35 * fall, type: 'square' });
    } else if (weaponId === 'pistol') {
      this.noiseBurst({ t: 0.1, gain: 0.55 * fall, filter: 2600, q: 1, pan });
      this.tone({ freq: 180, freq2: 90, t: 0.09, gain: 0.25 * fall, type: 'square' });
    } else {
      this.noiseBurst({ t: 0.11, gain: 0.62 * fall, filter: 2400, q: 0.9, pan });
      this.tone({ freq: 140, freq2: 60, t: 0.1, gain: 0.28 * fall, type: 'triangle' });
    }
  }

  reload(time = 2) {
    if (!this.enabled) return;
    this.noiseBurst({ t: 0.05, gain: 0.25, filter: 3500, q: 2 });
    this.tone({ freq: 340, t: 0.04, gain: 0.08, type: 'square', delay: 0.04 });
    this.noiseBurst({ t: 0.05, gain: 0.3, filter: 2600, q: 2 });
    this.tone({ freq: 220, t: 0.05, gain: 0.1, type: 'square', delay: Math.min(0.8, time * 0.55) });
  }

  hit(kill = false) {
    if (!this.enabled) return;
    this.tone({ freq: kill ? 880 : 1500, freq2: kill ? 1200 : 1500, t: 0.05, gain: 0.09, type: 'sine' });
    if (kill) this.tone({ freq: 700, freq2: 1100, t: 0.12, gain: 0.07, type: 'triangle', delay: 0.03 });
  }

  ability() {
    if (!this.enabled) return;
    this.tone({ freq: 220, freq2: 880, t: 0.3, gain: 0.12, type: 'sine' });
    this.noiseBurst({ t: 0.25, gain: 0.12, filter: 900, type: 'bandpass', q: 4 });
  }

  damage() {
    if (!this.enabled) return;
    this.noiseBurst({ t: 0.12, gain: 0.35, filter: 700, type: 'lowpass' });
    this.tone({ freq: 70, freq2: 40, t: 0.18, gain: 0.35, type: 'sine' });
  }

  ui(kind = 'click') {
    if (!this.enabled) return;
    const f = kind === 'hover' ? 640 : kind === 'buy' ? 520 : 880;
    this.tone({ freq: f, freq2: kind === 'buy' ? 1040 : f, t: kind === 'hover' ? 0.03 : 0.07, gain: kind === 'hover' ? 0.02 : 0.05, type: 'sine' });
  }

  startAmbient() {
    if (!this.enabled || !this.ensure() || this.ambient) return;
    const ctx = this.ctx;
    const gain = ctx.createGain();
    gain.gain.value = 0.0001;
    gain.gain.exponentialRampToValueAtTime(0.035, ctx.currentTime + 3);
    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = 340;
    gain.connect(filter).connect(this.master);
    const oscs = [55, 82.4, 110, 164.8].map((f, i) => {
      const o = ctx.createOscillator();
      o.type = i % 2 ? 'sawtooth' : 'sine';
      o.frequency.value = f;
      o.detune.value = i * 4 - 6;
      const g = ctx.createGain();
      g.gain.value = 0.12 / (i + 1);
      o.connect(g).connect(gain);
      o.start();
      return o;
    });
    this.ambient = { gain, oscs };
  }

  stopAmbient() {
    if (!this.ambient || !this.ctx) return;
    const { gain, oscs } = this.ambient;
    const t = this.ctx.currentTime;
    gain.gain.cancelScheduledValues(t);
    gain.gain.setValueAtTime(gain.gain.value, t);
    gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.8);
    oscs.forEach((o) => { try { o.stop(t + 0.9); } catch { /* noop */ } });
    this.ambient = null;
  }

  victory(win = true) {
    if (!this.enabled) return;
    const notes = win ? [392, 523, 659, 784] : [330, 294, 247, 196];
    notes.forEach((f, i) => this.tone({ freq: f, t: 0.5, gain: 0.1, type: 'triangle', delay: i * 0.16 }));
  }
}

export const audio = new AudioEngine();
