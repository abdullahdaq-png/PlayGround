import './style.css';
import * as THREE from 'three';
import { WEAPONS } from './data.js';
import { registerWeaponData } from './game/models.js';
import { loadProfile, resetProfile, saveProfile } from './core/storage.js';
import { Input } from './core/input.js';
import { audio } from './core/audio.js';
import { MenuScene } from './game/menuScene.js';
import { Match } from './game/match.js';
import { UI } from './ui/ui.js';
import { HUD } from './ui/hud.js';

class App {
  constructor() {
    this.canvas = document.getElementById('scene');
    this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas, antialias: true, powerPreference: 'high-performance' });
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.0;
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.profile = loadProfile();
    this.region = ['EU-WEST-01', 'TR-01', 'EU-EAST-02'][(Math.random() * 3) | 0];

    this.input = new Input(this.canvas);
    this.input.sensitivity = this.profile.settings.sensitivity;
    this.audio = audio;
    audio.setEnabled(this.profile.settings.sound);
    this.baseFov = this.profile.settings.fov || 78;
    this.aspect = window.innerWidth / window.innerHeight;
    this.applyQuality();

    this.ui = new UI(this);
    this.hud = new HUD(this);
    this.match = null;
    this.pendingMap = null;
    this.activeScene = null;
    this.activeCamera = null;
    this.lastTime = performance.now();
    this.fps = 60;
    this.ambientStarted = false;

    this.menuScene = new MenuScene();
    this.setScene(this.menuScene.scene, this.menuScene.camera);
    this.ui.go('menu');
    this.resize();
    this.bind();

    window.addEventListener('resize', () => this.resize());
    requestAnimationFrame((t) => this.loop(t));
    this.startAmbientOnce();
  }

  startAmbientOnce() {
    const kick = () => {
      if (this.ambientStarted) return;
      this.ambientStarted = true;
      audio.ensure();
      if (this.profile.settings.sound) audio.startAmbient();
      window.removeEventListener('pointerdown', kick);
      window.removeEventListener('keydown', kick);
    };
    window.addEventListener('pointerdown', kick);
    window.addEventListener('keydown', kick);
  }

  bind() {
    this.input.onLock((locked) => {
      if (this.match && !this.match.ended) {
        if (!locked && !this.match.paused && !this.input.touch) {
          this.pauseFromLock = true;
          this.pauseMatch();
        } else if (locked && this.match.paused && this.pauseFromLock) {
          this.pauseFromLock = false;
          this.ui.showPause(false);
          this.match.resume();
          this.input.setEnabled(true);
        }
      }
    });
    window.addEventListener('keydown', (e) => {
      if (e.code === 'Escape' && this.match && !this.match.ended) {
        if (!this.match.paused) this.pauseMatch();
      }
    });
    this.canvas.addEventListener('click', () => {
      if (this.match && !this.match.ended && !this.match.paused && !this.input.locked && !this.input.touch) {
        this.input.requestLock();
      }
    });
    window.addEventListener('error', (e) => {
      console.error('[iron-protocol]', e.message);
    });
  }

  applyQuality() {
    const q = this.profile.settings.quality || 'high';
    const dpr = window.devicePixelRatio || 1;
    const cap = q === 'high' ? 1.8 : q === 'medium' ? 1.35 : 1;
    this.renderer.setPixelRatio(Math.min(dpr, cap));
    this.renderer.shadowMap.enabled = q !== 'low';
    this.renderer.setSize(window.innerWidth, window.innerHeight, false);
  }

  resize() {
    const w = window.innerWidth;
    const h = window.innerHeight;
    this.aspect = w / h;
    this.renderer.setSize(w, h, false);
    this.menuScene.camera.aspect = this.aspect;
    this.menuScene.camera.updateProjectionMatrix();
    if (this.match) {
      this.match.camera.aspect = this.aspect;
      this.match.camera.updateProjectionMatrix();
    }
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, this.profile.settings.quality === 'high' ? 1.8 : this.profile.settings.quality === 'medium' ? 1.35 : 1));
  }

  setScene(scene, camera) {
    this.activeScene = scene;
    this.activeCamera = camera;
  }

  startMatchmaking(mapId) {
    audio.ensure();
    this.pendingMap = mapId;
    this.ui.showMatchmaking(mapId);
    if (!this.ambientStarted) { this.ambientStarted = true; audio.startAmbient(); }
  }

  deployMatch() {
    if (!this.pendingMap) return;
    audio.ensure();
    audio.stopAmbient();
    this.ui.hideMatchmaking();
    this.ui.go('menu');
    this.ui.current = null;
    this.startMatch(this.pendingMap);
    this.input.setEnabled(true);
    this.input.requestLock();
    setTimeout(() => {
      if (this.match && !this.match.ended && !this.match.paused && !this.input.locked && !this.input.touch) {
        this.pauseFromLock = true;
        this.pauseMatch();
      }
    }, 900);
  }

  startMatch(mapId) {
    if (this.match) {
      try { this.match.dispose(); } catch { /* ignore */ }
      this.match = null;
    }
    document.querySelectorAll('.screen').forEach((s) => s.classList.remove('active'));
    this.match = new Match(this, mapId);
    this.setScene(this.match.scene, this.match.camera);
    this.match.camera.aspect = this.aspect;
    this.match.camera.updateProjectionMatrix();
    this.ui.current = null;
  }

  rematch() {
    const mapId = this.match?.mapDef?.id || this.pendingMap || 'harbor';
    audio.ensure();
    if (this.match) { try { this.match.dispose(); } catch { /* ignore */ } this.match = null; }
    this.ui.showPause(false);
    document.querySelectorAll('.screen').forEach((s) => s.classList.remove('active'));
    this.startMatch(mapId);
    this.input.setEnabled(true);
    this.input.requestLock();
  }

  pauseMatch() {
    if (!this.match || this.match.ended) return;
    this.input.setEnabled(false);
    this.input.exitLock();
    this.match.pause();
    this.ui.showPause(true);
  }

  resumeMatch() {
    if (!this.match) return;
    this.ui.showPause(false);
    this.ui.closeSettings();
    this.match.resume();
    this.input.setEnabled(true);
    if (!this.input.touch) this.input.requestLock();
  }

  onMatchEnd(result, match) {
    this.input.setEnabled(false);
    this.input.exitLock();
    this.hud.hide();
    this.ui.showPostMatch(result);
    this.match = match;
  }

  quitMatch() {
    this.hud.hide();
    this.match?.dispose();
    this.match = null;
    this.ui.showPause(false);
    this.ui.closeSettings();
    document.body.classList.remove('in-match');
    this.setScene(this.menuScene.scene, this.menuScene.camera);
    this.input.setEnabled(false);
    this.ui.go('menu');
    audio.startAmbient();
  }

  backToMenu() {
    this.hud.hide();
    this.match?.dispose();
    this.match = null;
    this.ui.showPause(false);
    this.ui.closeSettings();
    document.body.classList.remove('in-match');
    this.setScene(this.menuScene.scene, this.menuScene.camera);
    this.input.setEnabled(false);
    this.ui.go('menu');
    audio.startAmbient();
  }

  resetProgress() {
    this.profile = resetProfile();
    this.input.sensitivity = this.profile.settings.sensitivity;
    this.ui.refreshChrome();
    this.ui.renderMaps();
    this.ui.renderOperators();
    this.ui.renderMarketCats();
    this.ui.renderMarket();
    this.ui.renderWeapons();
    this.ui.toast('İlerleme sıfırlandı. Yeni bir başlangıç.', 'ok');
  }

  save() { saveProfile(this.profile); }

  loop(now) {
    const raw = (now - this.lastTime) / 1000;
    this.lastTime = now;
    const dt = Math.min(0.05, Math.max(0.001, raw));
    this.fps += ((1 / dt) - this.fps) * 0.05;

    if (this.match) {
      this.match.update(dt);
    } else {
      this.menuScene.update(dt);
      this.ui.updatePreviews(dt);
    }
    if (this.activeScene && this.activeCamera) this.renderer.render(this.activeScene, this.activeCamera);
    this.input.endFrame();
    requestAnimationFrame((t) => this.loop(t));
  }
}

function boot() {
  const canvas = document.getElementById('scene');
  const gl = canvas.getContext('webgl2') || canvas.getContext('webgl');
  if (!gl) {
    document.getElementById('ui').innerHTML = '<div style="position:absolute;inset:0;display:grid;place-items:center;color:#ff6b2c;font-family:Rajdhani;letter-spacing:2px">WebGL desteklenmiyor. Lütfen donanım hızlandırmayı etkinleştir.</div>';
    return;
  }
  registerWeaponData(WEAPONS);
  window.__iron = new App();
}

boot();
