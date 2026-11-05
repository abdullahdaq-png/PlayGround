import * as THREE from 'three';
import { CHARACTERS } from '../data.js';
import { buildOperatorModel, animateOperator } from '../game/models.js';

function gridTexture() {
  const c = document.createElement('canvas');
  c.width = c.height = 512;
  const g = c.getContext('2d');
  g.fillStyle = '#101519';
  g.fillRect(0, 0, 512, 512);
  g.strokeStyle = 'rgba(80,160,180,0.14)';
  g.lineWidth = 2;
  for (let i = 0; i <= 512; i += 32) {
    g.beginPath(); g.moveTo(i, 0); g.lineTo(i, 512); g.stroke();
    g.beginPath(); g.moveTo(0, i); g.lineTo(512, i); g.stroke();
  }
  g.strokeStyle = 'rgba(255,255,255,0.04)';
  for (let i = 0; i <= 512; i += 128) {
    g.beginPath(); g.moveTo(i, 0); g.lineTo(i, 512); g.stroke();
    g.beginPath(); g.moveTo(0, i); g.lineTo(512, i); g.stroke();
  }
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.repeat.set(8, 8);
  return tex;
}

function logoTexture() {
  const c = document.createElement('canvas');
  c.width = 1024; c.height = 512;
  const g = c.getContext('2d');
  g.clearRect(0, 0, 1024, 512);
  g.textAlign = 'center';
  g.font = '700 210px Teko, sans-serif';
  g.fillStyle = 'rgba(230,245,250,0.09)';
  g.fillText('IRON', 512, 230);
  g.strokeStyle = 'rgba(255,107,44,0.28)';
  g.lineWidth = 4;
  g.strokeText('IRON', 512, 230);
  g.font = '600 92px Rajdhani, sans-serif';
  g.fillStyle = 'rgba(72,230,210,0.15)';
  g.letterSpacing = '18px';
  g.fillText('PROTOCOL', 512, 330);
  g.fillStyle = 'rgba(255,107,44,0.35)';
  g.fillRect(340, 360, 344, 3);
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

export class MenuScene {
  constructor() {
    const scene = new THREE.Scene();
    this.scene = scene;
    scene.background = new THREE.Color(0x05080b);
    scene.fog = new THREE.Fog(0x05080b, 16, 58);
    this.camera = new THREE.PerspectiveCamera(44, 1, 0.1, 120);
    this.camera.position.set(3, 3.1, 12.5);

    const hemi = new THREE.HemisphereLight(0x5d7f92, 0x080a0c, 0.6);
    scene.add(hemi);
    const key = new THREE.DirectionalLight(0xffd2a8, 1.7);
    key.position.set(-6, 12, 8);
    key.castShadow = false;
    scene.add(key);
    const rim = new THREE.DirectionalLight(0x48e6d2, 1.4);
    rim.position.set(8, 6, -10);
    scene.add(rim);
    const orange = new THREE.PointLight(0xff6b2c, 30, 30, 2);
    orange.position.set(-7, 3.5, 1);
    scene.add(orange);
    const cyan = new THREE.PointLight(0x48e6d2, 25, 26, 2);
    cyan.position.set(7.5, 4.5, 0.5);
    scene.add(cyan);
    const top = new THREE.PointLight(0xbfe9ff, 22, 22, 2);
    top.position.set(2, 9, 1);
    scene.add(top);

    // floor
    const tex = gridTexture();
    const floor = new THREE.Mesh(
      new THREE.PlaneGeometry(90, 90),
      new THREE.MeshStandardMaterial({ map: tex, color: 0x8a98a0, roughness: 0.34, metalness: 0.72 })
    );
    floor.rotation.x = -Math.PI / 2;
    floor.position.y = -0.02;
    scene.add(floor);

    // platform
    const platMat = new THREE.MeshStandardMaterial({ color: 0x161d22, roughness: 0.32, metalness: 0.85 });
    const platform = new THREE.Mesh(new THREE.CylinderGeometry(9.4, 9.8, 0.34, 72), platMat);
    platform.position.set(2.2, 0.15, 0);
    scene.add(platform);
    const edge = new THREE.Mesh(
      new THREE.TorusGeometry(9.42, 0.045, 8, 90),
      new THREE.MeshBasicMaterial({ color: 0x48e6d2 })
    );
    edge.rotation.x = Math.PI / 2;
    edge.position.set(2.2, 0.34, 0);
    scene.add(edge);
    const innerEdge = new THREE.Mesh(
      new THREE.RingGeometry(6.8, 6.86, 72),
      new THREE.MeshBasicMaterial({ color: 0xff6b2c, transparent: true, opacity: 0.38, side: THREE.DoubleSide })
    );
    innerEdge.rotation.x = -Math.PI / 2;
    innerEdge.position.set(2.2, 0.35, 0);
    scene.add(innerEdge);
    const glowRing = new THREE.Mesh(
      new THREE.RingGeometry(7.9, 8.06, 72),
      new THREE.MeshBasicMaterial({ color: 0x48e6d2, transparent: true, opacity: 0.2, side: THREE.DoubleSide })
    );
    glowRing.rotation.x = -Math.PI / 2;
    glowRing.position.set(2.2, 0.36, 0);
    scene.add(glowRing);

    // back wall + pillars
    const wallMat = new THREE.MeshStandardMaterial({ color: 0x0b1115, roughness: 0.86, metalness: 0.3 });
    const wall = new THREE.Mesh(new THREE.BoxGeometry(60, 18, 1), wallMat);
    wall.position.set(2, 8, -16);
    scene.add(wall);
    const sideWallL = new THREE.Mesh(new THREE.BoxGeometry(1, 18, 50), wallMat);
    sideWallL.position.set(-24, 8, -4);
    scene.add(sideWallL);
    const sideWallR = sideWallL.clone();
    sideWallR.position.x = 28;
    scene.add(sideWallR);

    // pillars with light strips
    for (const [x, z] of [[-12, -9], [18, -9], [-12, 7], [18, 7]]) {
      const pillar = new THREE.Mesh(new THREE.BoxGeometry(0.9, 11, 0.9), new THREE.MeshStandardMaterial({ color: 0x161d22, roughness: 0.5, metalness: 0.7 }));
      pillar.position.set(x, 5.5, z);
      scene.add(pillar);
      const strip = new THREE.Mesh(new THREE.BoxGeometry(0.06, 8, 0.06), new THREE.MeshBasicMaterial({ color: 0x48e6d2 }));
      strip.position.set(x + 0.5, 5, z + 0.48);
      scene.add(strip);
    }

    // ceiling beams
    const beamMat = new THREE.MeshStandardMaterial({ color: 0x0e1418, roughness: 0.7, metalness: 0.6 });
    for (let i = -3; i <= 3; i++) {
      const beam = new THREE.Mesh(new THREE.BoxGeometry(0.35, 0.35, 40), beamMat);
      beam.position.set(2 + i * 5, 11.5, -2);
      scene.add(beam);
    }

    // logo backdrop + hologram ring
    const logo = new THREE.Mesh(
      new THREE.PlaneGeometry(20, 10),
      new THREE.MeshBasicMaterial({ map: logoTexture(), transparent: true, opacity: 0.9, depthWrite: false })
    );
    logo.position.set(2, 6.4, -15.2);
    scene.add(logo);
    const holo = new THREE.Mesh(
      new THREE.TorusGeometry(6.2, 0.035, 6, 90),
      new THREE.MeshBasicMaterial({ color: 0x48e6d2, transparent: true, opacity: 0.35 })
    );
    holo.position.set(2, 4.2, -13);
    scene.add(holo);
    const holo2 = new THREE.Mesh(
      new THREE.TorusGeometry(4.6, 0.02, 6, 80),
      new THREE.MeshBasicMaterial({ color: 0xff6b2c, transparent: true, opacity: 0.28 })
    );
    holo2.position.set(2, 4.2, -13);
    scene.add(holo2);
    this.holo = holo;
    this.holo2 = holo2;

    // volumetric light cones
    const coneMat = new THREE.MeshBasicMaterial({ color: 0x9fe8ff, transparent: true, opacity: 0.028, side: THREE.DoubleSide, depthWrite: false, blending: THREE.AdditiveBlending });
    for (const [x, z, c] of [[-2, -1, 0xffc48a], [5, 0, 0x8ff5ea], [10, -2, 0xffa06a]]) {
      const spot = new THREE.SpotLight(c, 60, 28, 0.32, 0.5, 1.5);
      spot.position.set(x, 11, z);
      spot.target.position.set(x, 0, z);
      scene.add(spot, spot.target);
      const cone = new THREE.Mesh(new THREE.ConeGeometry(3.4, 11, 24, 1, true), new THREE.MeshBasicMaterial({ color: c, transparent: true, opacity: 0.028, side: THREE.DoubleSide, depthWrite: false, blending: THREE.AdditiveBlending }));
      cone.position.set(x, 5.6, z);
      scene.add(cone);
    }

    // operator lineup
    this.ops = [];
    const spacing = 2.15;
    CHARACTERS.forEach((ch, i) => {
      const model = buildOperatorModel(ch, 'blue');
      const x = 2.2 + (i - 1.5) * spacing;
      const z = -0.3 + Math.abs(i - 1.5) * 0.55;
      model.position.set(x, 0.36, z);
      model.rotation.y = Math.PI + (i - 1.5) * 0.08;
      model.scale.setScalar(i === 2 ? 1.12 : 1.05);
      scene.add(model);
      this.ops.push({ model, baseX: x, baseZ: z, phase: i * 1.7, char: ch });
    });

    // floor markings "05" holographic
    const mark = new THREE.Mesh(
      new THREE.RingGeometry(3.2, 3.26, 64),
      new THREE.MeshBasicMaterial({ color: 0xff6b2c, transparent: true, opacity: 0.2, side: THREE.DoubleSide })
    );
    mark.rotation.x = -Math.PI / 2;
    mark.position.set(2.2, 0.37, 0);
    scene.add(mark);

    // dust
    const count = 260;
    const pos = new Float32Array(count * 3);
    this.seeds = [];
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 44;
      pos[i * 3 + 1] = Math.random() * 10;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 30 - 2;
      this.seeds.push(Math.random());
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    const mat = new THREE.PointsMaterial({ color: 0x9fd8e8, size: 0.035, transparent: true, opacity: 0.35, depthWrite: false, blending: THREE.AdditiveBlending });
    this.dust = new THREE.Points(geo, mat);
    scene.add(this.dust);

    this.t = 0;
    this.reduce = false;
  }

  update(dt) {
    this.t += dt;
    const t = this.t;
    const angle = Math.sin(t * 0.09) * 0.16 - 0.06;
    const radius = 12.6;
    this.camera.position.set(2.2 + Math.sin(angle) * radius, 3.05 + Math.sin(t * 0.3) * 0.08, Math.cos(angle) * radius);
    this.camera.lookAt(2.2, 1.65, -0.6);
    this.holo.rotation.z = t * 0.06;
    this.holo2.rotation.z = -t * 0.09;
    this.ops.forEach((op, i) => {
      op.model.position.y = 0.36 + Math.sin(t * 0.7 + op.phase) * 0.012;
      op.model.rotation.y = Math.PI + (i - 1.5) * 0.08 + Math.sin(t * 0.2 + op.phase) * 0.015;
      animateOperator(op.model, t, 0.15, false);
    });
    const arr = this.dust.geometry.attributes.position.array;
    for (let i = 0; i < this.seeds.length; i++) {
      arr[i * 3 + 1] += dt * (0.06 + this.seeds[i] * 0.12);
      arr[i * 3] += Math.sin(t * 0.2 + this.seeds[i] * 10) * dt * 0.08;
      if (arr[i * 3 + 1] > 10) arr[i * 3 + 1] = 0.2;
    }
    this.dust.geometry.attributes.position.needsUpdate = true;
  }
}
