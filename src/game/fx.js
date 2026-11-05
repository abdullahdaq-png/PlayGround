import * as THREE from 'three';

function glowCanvas() {
  const c = document.createElement('canvas');
  c.width = c.height = 128;
  const g = c.getContext('2d');
  const grad = g.createRadialGradient(64, 64, 2, 64, 64, 64);
  grad.addColorStop(0, 'rgba(255,255,255,1)');
  grad.addColorStop(0.3, 'rgba(255,220,150,0.8)');
  grad.addColorStop(1, 'rgba(255,150,60,0)');
  g.fillStyle = grad;
  g.fillRect(0, 0, 128, 128);
  return new THREE.CanvasTexture(c);
}

export class FX {
  constructor(scene, camera) {
    this.scene = scene;
    this.camera = camera;
    this.glowTex = glowCanvas();
    this.glowTex.colorSpace = THREE.SRGBColorSpace;
    this.tracers = [];
    this.impacts = [];
    this.sparks = [];
    this.muzzle = null;
    this.muzzleLight = new THREE.PointLight(0xffb066, 0, 7, 2);
    this.muzzleLight.position.set(0.2, -0.05, -0.6);
    camera.add(this.muzzleLight);
    this._initTracers();
  }

  _initTracers() {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(6), 3));
    for (let i = 0; i < 28; i++) {
      const mat = new THREE.LineBasicMaterial({ color: 0xffd9a0, transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending });
      const line = new THREE.Line(geo.clone(), mat);
      line.frustumCulled = false;
      line.visible = false;
      this.scene.add(line);
      this.tracers.push({ line, life: 0 });
    }
  }

  attachMuzzle(obj) {
    if (this.muzzle) this.muzzle.removeFromParent();
    this.muzzle = obj;
  }

  flash(color = 0xffc070) {
    if (!this.muzzle) return;
    this.muzzle.visible = true;
    this.muzzle.material.color.setHex(color);
    this.muzzle.scale.setScalar(0.3 + Math.random() * 0.2);
    this.muzzle.material.rotation = Math.random() * Math.PI * 2;
    this.muzzleLight.intensity = 9;
    this.muzzleLight.color.setHex(color);
  }

  tracer(start, end, color = 0xffe0a8) {
    const slot = this.tracers.find((t) => t.life <= 0) || this.tracers[this.tracers.length - 1];
    const pos = slot.line.geometry.attributes.position;
    pos.setXYZ(0, start.x, start.y, start.z);
    pos.setXYZ(1, end.x, end.y, end.z);
    pos.needsUpdate = true;
    slot.line.material.color.setHex(color);
    slot.line.material.opacity = 0.55;
    slot.line.visible = true;
    slot.life = 0.075;
  }

  impact(point, normal, color = 0xffc070, headshot = false) {
    // particle flash
    const mat = new THREE.SpriteMaterial({ map: this.glowTex, color: headshot ? 0xff4a4a : color, transparent: true, opacity: 1, depthWrite: false, blending: THREE.AdditiveBlending });
    const sprite = new THREE.Sprite(mat);
    sprite.position.copy(point);
    sprite.scale.setScalar(headshot ? 0.6 : 0.34);
    this.scene.add(sprite);
    this.sparks.push({ sprite, life: headshot ? 0.24 : 0.16, max: headshot ? 0.24 : 0.16 });

    // bullet mark on world surfaces
    if (!headshot && normal) {
      const geo = new THREE.CircleGeometry(0.045 + Math.random() * 0.02, 7);
      const m = new THREE.MeshBasicMaterial({ color: 0x0c0d0f, transparent: true, opacity: 0.68, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -2 });
      const mark = new THREE.Mesh(geo, m);
      mark.position.copy(point).addScaledVector(normal, 0.012);
      mark.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, 1), normal);
      this.scene.add(mark);
      this.impacts.push({ mesh: mark, life: 8 });
      if (this.impacts.length > 36) {
        const old = this.impacts.shift();
        this.scene.remove(old.mesh);
        old.mesh.geometry.dispose();
        old.mesh.material.dispose();
      }
    }
  }

  update(dt) {
    for (const t of this.tracers) {
      if (t.life > 0) {
        t.life -= dt;
        t.line.material.opacity = Math.max(0, t.life / 0.075) * 0.55;
        if (t.life <= 0) t.line.visible = false;
      }
    }
    for (let i = this.sparks.length - 1; i >= 0; i--) {
      const s = this.sparks[i];
      s.life -= dt;
      s.sprite.material.opacity = Math.max(0, s.life / s.max);
      s.sprite.scale.multiplyScalar(1 + dt * 4);
      if (s.life <= 0) {
        this.scene.remove(s.sprite);
        s.sprite.material.dispose();
        this.sparks.splice(i, 1);
      }
    }
    for (let i = this.impacts.length - 1; i >= 0; i--) {
      const it = this.impacts[i];
      it.life -= dt;
      if (it.life < 1) it.mesh.material.opacity = Math.max(0, it.life) * 0.68;
      if (it.life <= 0) {
        this.scene.remove(it.mesh);
        it.mesh.geometry.dispose();
        it.mesh.material.dispose();
        this.impacts.splice(i, 1);
      }
    }
    if (this.muzzle && this.muzzle.visible) {
      this.muzzle.visible = false;
      this.muzzleLight.intensity = 0;
    } else if (this.muzzleLight.intensity > 0) {
      this.muzzleLight.intensity = Math.max(0, this.muzzleLight.intensity - dt * 120);
    }
  }
}
