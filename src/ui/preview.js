import * as THREE from 'three';
import { buildWeaponModel, buildOperatorModel, animateOperator } from '../game/models.js';
import { CHARACTER_MAP } from '../data.js';

export class PreviewRenderer {
  constructor(canvas) {
    this.canvas = canvas;
    this.renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true, powerPreference: 'high-performance' });
    this.renderer.setPixelRatio(Math.min(2, window.devicePixelRatio || 1));
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.05;
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(34, 1, 0.05, 50);
    this.scene.add(new THREE.HemisphereLight(0xaad8ee, 0x0a0e12, 0.9));
    const key = new THREE.DirectionalLight(0xffe0c0, 2.4);
    key.position.set(-3, 4, 5);
    this.scene.add(key);
    const rim = new THREE.DirectionalLight(0x48e6d2, 2.2);
    rim.position.set(4, 2, -4);
    this.scene.add(rim);
    const fill = new THREE.PointLight(0xff6b2c, 14, 14, 2);
    fill.position.set(-3, 0.8, 2);
    this.scene.add(fill);
    this.camera.position.set(0, 0.2, 3.4);
    this.camera.lookAt(0, 0.05, 0);
    this.obj = null;
    this.mode = null;
    this.t = 0;
    this.targetRot = 0;
    this.currentRot = 0;
    this.visible = false;
    this.ro = new ResizeObserver(() => this.resize());
    this.ro.observe(canvas);
    this.resize();
  }

  resize() {
    const r = this.canvas.getBoundingClientRect();
    const w = Math.max(1, Math.floor(r.width));
    const h = Math.max(1, Math.floor(r.height));
    this.renderer.setSize(w, h, false);
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
  }

  clear() {
    if (this.obj) {
      this.scene.remove(this.obj);
      this.obj.traverse((o) => {
        if (o.material) {
          const mats = Array.isArray(o.material) ? o.material : [o.material];
          mats.forEach((m) => m.dispose?.());
        }
      });
      this.obj = null;
    }
  }

  setWeapon(weaponId, skin) {
    this.clear();
    this.mode = 'weapon';
    const gun = buildWeaponModel(weaponId, skin, { hands: false });
    const holder = new THREE.Group();
    holder.add(gun);
    const long = weaponId === 'sniper' ? 1.26 : weaponId === 'pistol' ? 0.75 : 1.05;
    gun.scale.setScalar(1.5 / long);
    gun.position.set(0, 0, 0);
    gun.rotation.set(0.06, 0.55, 0);
    holder.position.y = 0.02;
    this.scene.add(holder);
    this.obj = holder;
    this.t = 0;
    this.currentRot = -0.25;
    this.targetRot = 0.18;
    this.camera.position.set(0.5, 0.42, 2.5);
    this.camera.lookAt(0, 0.02, 0);
    this.visible = true;
    this.renderer.render(this.scene, this.camera);
  }

  setCharacter(charId, team = 'blue') {
    this.clear();
    this.mode = 'character';
    const ch = CHARACTER_MAP[charId] || CHARACTER_MAP.vanguard;
    const model = buildOperatorModel(ch, team);
    model.scale.setScalar(1.15);
    const group = new THREE.Group();
    group.add(model);
    // pedestal
    const ped = new THREE.Mesh(
      new THREE.CylinderGeometry(0.9, 1.0, 0.12, 48),
      new THREE.MeshStandardMaterial({ color: 0x11181d, roughness: 0.3, metalness: 0.8 })
    );
    ped.position.y = -0.06;
    group.add(ped);
    const ring = new THREE.Mesh(
      new THREE.TorusGeometry(0.92, 0.012, 6, 64),
      new THREE.MeshBasicMaterial({ color: 0x48e6d2 })
    );
    ring.rotation.x = Math.PI / 2;
    ring.position.y = 0.01;
    group.add(ring);
    this.scene.add(group);
    this.obj = group;
    this.t = 0;
    this.currentRot = 0;
    this.targetRot = 0.12;
    this.camera.position.set(0, 1.45, 4.35);
    this.camera.lookAt(0, 1.05, 0);
    this.visible = true;
    this.renderer.render(this.scene, this.camera);
  }

  update(dt) {
    if (!this.visible || !this.obj) return;
    this.t += dt;
    this.currentRot += (this.targetRot - this.currentRot) * Math.min(1, dt * 2);
    if (this.mode === 'weapon') {
      this.obj.rotation.y = Math.sin(this.t * 0.45) * 0.32 + 0.2;
      this.obj.rotation.x = Math.sin(this.t * 0.3) * 0.025;
      this.obj.position.y = 0.02 + Math.sin(this.t * 0.7) * 0.012;
      this.camera.position.x = 0.5 + Math.sin(this.t * 0.22) * 0.18;
      this.camera.lookAt(0, 0.02, 0);
    } else {
      this.obj.rotation.y = Math.sin(this.t * 0.35) * 0.22;
      const op = this.obj.children[0];
      if (op) animateOperator(op, this.t, 0.1, false);
    }
    this.renderer.render(this.scene, this.camera);
  }

  dispose() {
    this.ro.disconnect();
    this.clear();
    this.renderer.dispose();
  }
}
