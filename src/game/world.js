import * as THREE from 'three';

const UNIT_BOX = new THREE.BoxGeometry(1, 1, 1);
const DEG = Math.PI / 180;

// ─── tiny seeded RNG so maps are stable ─────────────────────────────────────
function rng(seed) {
  let s = seed >>> 0;
  return () => {
    s = (s * 1664525 + 1013904223) >>> 0;
    return s / 4294967296;
  };
}

// ─── canvas texture helpers ─────────────────────────────────────────────────
function canvas(size) {
  const c = document.createElement('canvas');
  c.width = c.height = size;
  return [c, c.getContext('2d')];
}
function speckle(g, size, count, colors, rand, alpha = 0.2, rmax = 3) {
  for (let i = 0; i < count; i++) {
    g.globalAlpha = alpha * (0.3 + rand() * 0.7);
    g.fillStyle = colors[(rand() * colors.length) | 0];
    g.beginPath();
    g.arc(rand() * size, rand() * size, 0.6 + rand() * rmax, 0, Math.PI * 2);
    g.fill();
  }
  g.globalAlpha = 1;
}

function groundTexture(def) {
  const [c, g] = canvas(512);
  const rand = rng(9173 + def.id.length * 77);
  const base = new THREE.Color(def.palette.ground);
  g.fillStyle = `#${base.getHexString()}`;
  g.fillRect(0, 0, 512, 512);
  const light = `#${base.clone().multiplyScalar(1.35).getHexString()}`;
  const dark = `#${base.clone().multiplyScalar(0.62).getHexString()}`;
  speckle(g, 512, 2400, [light, dark], rand, 0.1, 2.2);

  g.globalAlpha = 0.18;
  g.strokeStyle = dark;
  g.lineWidth = 2;
  for (let i = 0; i < 18; i++) {
    let x = rand() * 512;
    let y = rand() * 512;
    g.beginPath();
    g.moveTo(x, y);
    for (let j = 0; j < 5; j++) {
      x += (rand() - 0.5) * 80;
      y += (rand() - 0.5) * 80;
      g.lineTo(x, y);
    }
    g.stroke();
  }
  g.globalAlpha = 1;

  const kind = def.kind;
  if (kind === 'dunes') {
    for (let y = 0; y < 512; y += 26) {
      g.strokeStyle = `rgba(255,240,200,${0.06 + rand() * 0.08})`;
      g.lineWidth = 7;
      g.beginPath();
      for (let x = 0; x <= 512; x += 16) g.lineTo(x, y + Math.sin(x * 0.03 + y) * 7);
      g.stroke();
    }
  } else if (kind === 'frost') {
    for (let i = 0; i < 30; i++) {
      g.fillStyle = `rgba(220,240,255,${0.08 + rand() * 0.12})`;
      g.beginPath();
      g.ellipse(rand() * 512, rand() * 512, 20 + rand() * 70, 10 + rand() * 35, rand() * 3, 0, 7);
      g.fill();
    }
  } else if (kind === 'bazaar' || kind === 'metro') {
    const tile = kind === 'metro' ? 52 : 44;
    for (let y = 0; y < 512; y += tile) {
      for (let x = 0; x < 512; x += tile) {
        g.fillStyle = `rgba(0,0,0,${0.05 + (rand() * 0.1)})`;
        g.fillRect(x + 2, y + 2, tile - 4, tile - 4);
        g.strokeStyle = 'rgba(0,0,0,0.24)';
        g.strokeRect(x + 1, y + 1, tile - 2, tile - 2);
      }
    }
    if (kind === 'metro') {
      for (let i = 0; i < 28; i++) {
        g.fillStyle = 'rgba(10,8,6,0.35)';
        g.beginPath();
        g.ellipse(rand() * 512, rand() * 512, 10 + rand() * 40, 6 + rand() * 18, rand() * 3, 0, 7);
        g.fill();
      }
    }
  } else if (kind === 'orbital') {
    g.strokeStyle = 'rgba(80,190,255,0.22)';
    g.lineWidth = 2;
    for (let i = 0; i < 512; i += 64) {
      g.beginPath(); g.moveTo(i, 0); g.lineTo(i, 512); g.stroke();
      g.beginPath(); g.moveTo(0, i); g.lineTo(512, i); g.stroke();
    }
    for (let i = 0; i < 14; i++) {
      g.fillStyle = 'rgba(0,0,0,0.1)';
      g.fillRect(rand() * 512, rand() * 512, 60 + rand() * 120, 18);
    }
  } else if (kind === 'volcano') {
    for (let i = 0; i < 16; i++) {
      let x = rand() * 512, y = rand() * 512;
      g.strokeStyle = `rgba(255,90,30,${0.15 + rand() * 0.2})`;
      g.lineWidth = 1 + rand() * 2.5;
      g.beginPath();
      g.moveTo(x, y);
      for (let j = 0; j < 6; j++) {
        x += (rand() - 0.5) * 60;
        y += (rand() - 0.5) * 60;
        g.lineTo(x, y);
      }
      g.stroke();
    }
  } else if (kind === 'rooftop') {
    g.strokeStyle = 'rgba(0,0,0,0.25)';
    g.lineWidth = 3;
    for (let i = 0; i < 512; i += 86) {
      g.beginPath(); g.moveTo(i, 0); g.lineTo(i, 512); g.stroke();
    }
    speckle(g, 512, 900, ['#8d8386', '#2f2a2e'], rand, 0.12, 1.6);
  } else if (kind === 'harbor' || kind === 'foundry') {
    for (let i = 0; i < 24; i++) {
      g.fillStyle = `rgba(12,14,15,${0.08 + rand() * 0.12})`;
      g.beginPath();
      g.ellipse(rand() * 512, rand() * 512, 12 + rand() * 55, 6 + rand() * 22, rand() * 3, 0, 7);
      g.fill();
    }
    g.strokeStyle = 'rgba(230,220,180,0.12)';
    g.lineWidth = 4;
    g.beginPath(); g.moveTo(0, 256); g.lineTo(512, 256); g.stroke();
  } else if (kind === 'jungle') {
    for (let i = 0; i < 40; i++) {
      g.fillStyle = `rgba(60,92,40,${0.1 + rand() * 0.2})`;
      g.beginPath();
      g.ellipse(rand() * 512, rand() * 512, 8 + rand() * 36, 4 + rand() * 16, rand() * 3, 0, 7);
      g.fill();
    }
  }
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.repeat.set(12, 12);
  tex.anisotropy = 8;
  return tex;
}

function facadeTextures(def) {
  const [c, g] = canvas(256);
  const [e, eg] = canvas(256);
  const rand = rng(551 + def.id.length * 31);
  const base = new THREE.Color(def.palette.ground).multiplyScalar(0.85);
  g.fillStyle = `#${base.getHexString()}`;
  g.fillRect(0, 0, 256, 256);
  eg.fillStyle = '#000';
  eg.fillRect(0, 0, 256, 256);
  speckle(g, 256, 900, [`#${base.clone().multiplyScalar(1.4).getHexString()}`, `#${base.clone().multiplyScalar(0.55).getHexString()}`], rand, 0.1, 1.6);
  const cols = 4, rows = 5;
  const cw = 256 / cols, ch = 256 / rows;
  const litColors = [def.palette.accent, '#ffd9a0', '#bfe8ff', '#ffb46a'];
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      const px = x * cw + cw * 0.3;
      const py = y * ch + ch * 0.26;
      const w = cw * 0.4;
      const h = ch * 0.3;
      g.fillStyle = 'rgba(8,12,16,0.75)';
      g.fillRect(px - 2, py - 2, w + 4, h + 4);
      const lit = rand() > 0.44;
      if (lit) {
        const col = litColors[(rand() * litColors.length) | 0];
        g.fillStyle = col;
        g.globalAlpha = 0.85;
        g.fillRect(px, py, w, h);
        g.globalAlpha = 1;
        eg.fillStyle = col;
        eg.fillRect(px, py, w, h);
      } else {
        g.fillStyle = 'rgba(24,32,40,0.9)';
        g.fillRect(px, py, w, h);
      }
      g.strokeStyle = 'rgba(0,0,0,0.4)';
      g.strokeRect(px, py, w, h);
    }
  }
  const map = new THREE.CanvasTexture(c);
  map.colorSpace = THREE.SRGBColorSpace;
  map.wrapS = map.wrapT = THREE.RepeatWrapping;
  const emissive = new THREE.CanvasTexture(e);
  emissive.colorSpace = THREE.SRGBColorSpace;
  emissive.wrapS = emissive.wrapT = THREE.RepeatWrapping;
  return { map, emissive };
}

function containerTexture(color, accent) {
  const [c, g] = canvas(256);
  const base = new THREE.Color(color);
  g.fillStyle = `#${base.getHexString()}`;
  g.fillRect(0, 0, 256, 256);
  for (let x = 0; x < 256; x += 16) {
    g.fillStyle = 'rgba(0,0,0,0.16)';
    g.fillRect(x, 0, 5, 256);
    g.fillStyle = 'rgba(255,255,255,0.07)';
    g.fillRect(x + 6, 0, 2, 256);
  }
  g.fillStyle = `#${new THREE.Color(accent).getHexString()}`;
  g.globalAlpha = 0.8;
  g.fillRect(0, 214, 256, 9);
  g.globalAlpha = 0.4;
  for (let i = 0; i < 10; i++) {
    g.fillStyle = 'rgba(0,0,0,0.2)';
    g.beginPath();
    g.arc(Math.random() * 256, Math.random() * 190, Math.random() * 16, 0, 7);
    g.fill();
  }
  g.globalAlpha = 1;
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  return tex;
}

function signTexture(text, color, bg = 'rgba(4,6,10,0.86)') {
  const c = document.createElement('canvas');
  c.width = 512; c.height = 128;
  const g = c.getContext('2d');
  g.fillStyle = bg;
  g.fillRect(0, 0, 512, 128);
  g.strokeStyle = color;
  g.lineWidth = 4;
  g.strokeRect(8, 8, 496, 112);
  g.font = '700 64px Rajdhani, sans-serif';
  g.textAlign = 'center';
  g.textBaseline = 'middle';
  g.shadowColor = color;
  g.shadowBlur = 24;
  g.fillStyle = color;
  g.fillText(text, 256, 68);
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

function glowTexture() {
  const [c, g] = canvas(128);
  const grad = g.createRadialGradient(64, 64, 0, 64, 64, 64);
  grad.addColorStop(0, 'rgba(255,255,255,1)');
  grad.addColorStop(0.25, 'rgba(255,230,190,0.75)');
  grad.addColorStop(0.6, 'rgba(255,190,120,0.18)');
  grad.addColorStop(1, 'rgba(255,180,100,0)');
  g.fillStyle = grad;
  g.fillRect(0, 0, 128, 128);
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

function starfield(def) {
  const rand = rng(4411 + def.id.length);
  const count = def.kind === 'orbital' || def.kind === 'metro' ? 900 : 420;
  const pos = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const theta = rand() * Math.PI * 2;
    const phi = Math.acos(0.1 + rand() * 0.85);
    const r = 170;
    pos[i * 3] = Math.cos(theta) * Math.sin(phi) * r;
    pos[i * 3 + 1] = Math.cos(phi) * r;
    pos[i * 3 + 2] = Math.sin(theta) * Math.sin(phi) * r;
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  const mat = new THREE.PointsMaterial({ color: 0xdfeaff, size: 0.65, sizeAttenuation: true, transparent: true, opacity: 0.9, depthWrite: false });
  return new THREE.Points(geo, mat);
}

// ─── World ──────────────────────────────────────────────────────────────────
export class World {
  constructor(scene, mapDef) {
    this.scene = scene;
    this.def = mapDef;
    this.group = new THREE.Group();
    this.group.name = `world-${mapDef.id}`;
    scene.add(this.group);
    this.colliders = [];
    this.spawns = { blue: [], red: [] };
    this.nav = [];
    this.disposables = [];
    this.time = 0;
    this.lamps = [];
    this.teamColor = { blue: 0x4dc5ff, red: 0xff5a4d };
    this.rand = rng(2027 + mapDef.id.length * 967);
    this.build();
  }

  mat(color, opts = {}) {
    const m = new THREE.MeshStandardMaterial({
      color,
      roughness: opts.rough ?? 0.82,
      metalness: opts.metal ?? 0.12,
      emissive: opts.emissive ?? 0x000000,
      emissiveIntensity: opts.emissiveIntensity ?? 1,
      map: opts.map ?? null,
      transparent: opts.transparent ?? false,
      opacity: opts.opacity ?? 1,
      side: opts.side ?? THREE.FrontSide,
    });
    this.disposables.push(m);
    return m;
  }

  addBox({ x, z, y = 0, w = 1, h = 1, d = 1, rot = 0, color, mat, collide = true, shadow = true, name = '' }) {
    const mesh = new THREE.Mesh(UNIT_BOX, mat || this.mat(color ?? 0x555555));
    mesh.scale.set(w, h, d);
    mesh.position.set(x, y + h / 2, z);
    mesh.rotation.y = rot;
    mesh.castShadow = shadow;
    mesh.receiveShadow = true;
    if (name) mesh.name = name;
    this.group.add(mesh);
    if (collide) {
      const c = Math.abs(Math.cos(rot)), s = Math.abs(Math.sin(rot));
      const hx = (c * w + s * d) / 2;
      const hz = (s * w + c * d) / 2;
      this.colliders.push({ minX: x - hx, maxX: x + hx, minY: y, maxY: y + h, minZ: z - hz, maxZ: z + hz });
    }
    return mesh;
  }

  addCylinder({ x, z, y = 0, r = 0.4, h = 1, color, mat, collide = true, segments = 12, rotX = 0, rotZ = 0 }) {
    const mesh = new THREE.Mesh(new THREE.CylinderGeometry(r, r, h, segments), mat || this.mat(color ?? 0x555555));
    mesh.position.set(x, y + h / 2, z);
    mesh.rotation.x = rotX;
    mesh.rotation.z = rotZ;
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    this.group.add(mesh);
    if (collide) {
      this.colliders.push({ minX: x - r, maxX: x + r, minY: y, maxY: y + h, minZ: z - r, maxZ: z + r });
    }
    return mesh;
  }

  addPlane(w, h, mat, x, y, z, rx = -Math.PI / 2, ry = 0) {
    const mesh = new THREE.Mesh(new THREE.PlaneGeometry(w, h), mat);
    mesh.position.set(x, y, z);
    mesh.rotation.set(rx, ry, 0);
    mesh.receiveShadow = true;
    this.group.add(mesh);
    return mesh;
  }

  addSign(text, color, x, y, z, ry = 0, scale = 1) {
    const tex = signTexture(text, color);
    this.disposables.push(tex);
    const mat = new THREE.MeshBasicMaterial({ map: tex, transparent: true, side: THREE.DoubleSide });
    this.disposables.push(mat);
    const mesh = new THREE.Mesh(new THREE.PlaneGeometry(4.6 * scale, 1.15 * scale), mat);
    mesh.position.set(x, y, z);
    mesh.rotation.y = ry;
    this.group.add(mesh);
    return mesh;
  }

  addLamp(x, z, color = 0xffffff, intensity = 12, height = 5) {
    const pole = this.addCylinder({ x, z, r: 0.07, h: height, color: 0x22262b, collide: false, segments: 6 }).material;
    pole.metalness = 0.7;
    const head = this.addBox({ x, z, y: height - 0.16, w: 0.7, h: 0.12, d: 0.3, color: 0x1b1e22, collide: false, shadow: false });
    head.material.emissive = new THREE.Color(color);
    head.material.emissiveIntensity = 0.8;
    const light = new THREE.PointLight(color, intensity, 18, 2);
    light.position.set(x, height - 0.3, z);
    this.group.add(light);
    this.lamps.push(light);
    return light;
  }

  addTree(x, z, scale = 1) {
    const trunk = this.mat(0x4a3524, { rough: 0.95 });
    const leaf1 = this.mat(this.def.kind === 'frost' ? 0x6e8b87 : 0x2e5c33, { rough: 0.9 });
    const leaf2 = this.mat(this.def.kind === 'frost' ? 0x87a6a1 : 0x3f7a3c, { rough: 0.9 });
    this.addCylinder({ x, z, r: 0.18 * scale, h: 2.6 * scale, mat: trunk, collide: false, segments: 6 });
    const c1 = new THREE.Mesh(new THREE.ConeGeometry(1.5 * scale, 2.4 * scale, 7), leaf1);
    c1.position.set(x, 3.2 * scale, z); c1.castShadow = true; this.group.add(c1);
    const c2 = new THREE.Mesh(new THREE.ConeGeometry(1.1 * scale, 2.0 * scale, 7), leaf2);
    c2.position.set(x, 4.1 * scale, z); c2.castShadow = true; this.group.add(c2);
    this.colliders.push({ minX: x - 0.25 * scale, maxX: x + 0.25 * scale, minY: 0, maxY: 4 * scale, minZ: z - 0.25 * scale, maxZ: z + 0.25 * scale });
  }

  addCrate(x, z, size = 1.2, color = 0x6b5a3e, accent = 0x3a3226, y = 0) {
    const mat = this.mat(color, { rough: 0.85, metal: 0.15, map: this.crateTex || (this.crateTex = containerTexture(color, accent)) });
    this.addBox({ x, z, y, w: size, h: size, d: size, mat });
    const trim = this.mat(accent, { metal: 0.5, rough: 0.55 });
    this.addBox({ x, z, y: y + size - 0.07, w: size + 0.02, h: 0.07, d: size + 0.02, mat: trim, collide: false });
  }

  addContainer(x, z, color, accent, rot = 0, y = 0, long = 5.6) {
    const key = `c-${color}-${accent}`;
    this.containerMats = this.containerMats || {};
    if (!this.containerMats[key]) {
      const tex = containerTexture(color, accent);
      this.disposables.push(tex);
      this.containerMats[key] = this.mat(0xffffff, { map: tex, rough: 0.72, metal: 0.4 });
    }
    const w = long, d = 2.5, h = 2.6;
    this.addBox({ x, z, y, w, h, d, rot, mat: this.containerMats[key] });
    const frame = this.mat(0x202428, { metal: 0.7, rough: 0.4 });
    const c = Math.cos(rot), s = Math.sin(rot);
    const fx = (dx) => x + dx * c;
    const fz = (dx) => z - dx * s;
    for (const dx of [-w / 2 + 0.05, w / 2 - 0.05]) {
      this.addBox({ x: fx(dx), z: fz(dx), y, w: 0.12, h: h + 0.02, d: d + 0.02, rot, mat: frame, collide: false });
    }
    this.addBox({ x, z, y: y + h, w: w + 0.06, h: 0.1, d: d + 0.06, rot, mat: frame, collide: false });
  }

  build() {
    const def = this.def;
    const p = def.palette;
    const scene = this.scene;
    scene.background = new THREE.Color(p.sky);
    scene.fog = new THREE.Fog(new THREE.Color(p.fog), 48, 155);
    scene.fog.color = new THREE.Color(p.fog);

    // sky dome
    const skyMat = new THREE.ShaderMaterial({
      uniforms: {
        top: { value: new THREE.Color(p.sky).multiplyScalar(1.15) },
        bottom: { value: new THREE.Color(p.fog) },
      },
      vertexShader: `varying vec3 vWorld; void main(){ vWorld = (modelMatrix*vec4(position,1.0)).xyz; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0); }`,
      fragmentShader: `uniform vec3 top; uniform vec3 bottom; varying vec3 vWorld; void main(){ float h = clamp(normalize(vWorld).y*0.5+0.5,0.0,1.0); vec3 col = mix(bottom, top, pow(h,0.7)); gl_FragColor = vec4(col,1.0); }`,
      side: THREE.BackSide,
      depthWrite: false,
      fog: false,
    });
    const sky = new THREE.Mesh(new THREE.SphereGeometry(190, 24, 16), skyMat);
    this.group.add(sky);
    this.disposables.push(skyMat);

    const night = ['bazaar', 'metro', 'orbital', 'foundry', 'volcano'].includes(def.kind);
    if (night || def.kind === 'harbor') {
      const stars = starfield(def);
      this.group.add(stars);
      this.disposables.push(stars.geometry, stars.material);
    }

    // sun / moon
    const glowTex = glowTexture();
    this.disposables.push(glowTex);
    const sunSprite = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTex, color: p.sun, transparent: true, opacity: night ? 0.5 : 0.9, depthWrite: false, blending: THREE.AdditiveBlending }));
    sunSprite.scale.set(26, 26, 1);
    sunSprite.position.set(-70, 62, -95);
    this.group.add(sunSprite);

    // lights
    const hemi = new THREE.HemisphereLight(p.ambient, new THREE.Color(p.ground).multiplyScalar(0.5), night ? 0.75 : 1.15);
    scene.add(hemi);
    this.group.userData.hemi = hemi;
    const sun = new THREE.DirectionalLight(p.sun, night ? 1.2 : 2.1);
    sun.position.set(-34, 48, -28);
    sun.castShadow = true;
    sun.shadow.mapSize.set(2048, 2048);
    sun.shadow.camera.left = -58; sun.shadow.camera.right = 58;
    sun.shadow.camera.top = 58; sun.shadow.camera.bottom = -58;
    sun.shadow.camera.near = 1; sun.shadow.camera.far = 150;
    sun.shadow.bias = -0.0009;
    sun.shadow.normalBias = 0.03;
    scope: { scene.add(sun); }
    this.group.userData.sun = sun;
    const fill = new THREE.DirectionalLight(p.accent, night ? 0.45 : 0.3);
    fill.position.set(38, 20, 42);
    scene.add(fill);
    this.group.userData.fill = fill;

    // ground
    const gTex = groundTexture(def);
    this.disposables.push(gTex);
    const groundMat = this.mat(0xffffff, { map: gTex, rough: 0.94, metal: 0.06 });
    const ground = new THREE.Mesh(new THREE.PlaneGeometry(110, 110), groundMat);
    ground.rotation.x = -Math.PI / 2;
    ground.receiveShadow = true;
    this.group.add(ground);

    // floor accents
    const accentMat = new THREE.MeshBasicMaterial({ color: p.accent, transparent: true, opacity: 0.5 });
    this.disposables.push(accentMat);
    for (const sx of [-1, 1]) {
      const strip = new THREE.Mesh(new THREE.PlaneGeometry(86, 0.18), accentMat);
      strip.rotation.x = -Math.PI / 2;
      strip.position.set(0, 0.02, sx * 21);
      this.group.add(strip);
    }
    const ring = new THREE.Mesh(new THREE.RingGeometry(5.2, 5.6, 48), new THREE.MeshBasicMaterial({ color: p.accent, transparent: true, opacity: 0.28, side: THREE.DoubleSide }));
    ring.rotation.x = -Math.PI / 2;
    ring.position.y = 0.018;
    this.group.add(ring);
    this.disposables.push(ring.geometry, ring.material);

    // perimeter
    const wallMat = this.wallMaterial || this.mat(new THREE.Color(p.ground).multiplyScalar(0.7), { rough: 0.9 });
    const wallH = def.kind === 'metro' ? 9 : 5.2;
    for (const [x, z, w, d] of [[0, -50, 102, 2.4], [0, 50, 102, 2.4], [-50, 0, 2.4, 102], [50, 0, 2.4, 102]]) {
      this.addBox({ x, z, w, h: wallH, d, mat: wallMat });
      this.addBox({ x, z, y: wallH, w: w + 0.3, h: 0.22, d: d + 0.3, mat: this.mat(p.accent, { metal: 0.5, rough: 0.4, emissive: p.accent, emissiveIntensity: 0.4 }), collide: false });
    }

    // distant skyline
    const rand = this.rand;
    const skyMatDark = this.mat(new THREE.Color(p.fog).multiplyScalar(0.55), { rough: 1 });
    for (let i = 0; i < 36; i++) {
      const a = rand() * Math.PI * 2;
      const r = 66 + rand() * 22;
      const h = 8 + rand() * 28;
      const w = 5 + rand() * 9;
      if (Math.abs(Math.cos(a) * r) < 52 && Math.abs(Math.sin(a) * r) < 52) continue;
      this.addBox({ x: Math.cos(a) * r, z: Math.sin(a) * r, y: -2, w, h, d: w, mat: skyMatDark, collide: false, shadow: false, rot: a });
    }

    // spawn zones
    this.addSpawnZone('blue', 36);
    this.addSpawnZone('red', -36);

    // generic structures
    this.buildBlocks();
    this.buildSpecific();

    // finalize nav grid
    for (let gx = -42; gx <= 42; gx += 5) {
      for (let gz = -42; gz <= 42; gz += 5) {
        if (this.isFree(gx, gz, 0.9)) this.nav.push({ x: gx, z: gz });
      }
    }

    // particles
    this.buildParticles();
    if (def.kind === 'metro') this.buildCeiling();
  }

  addSpawnZone(team, z) {
    const color = this.teamColor[team];
    const mat = new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.18, side: THREE.DoubleSide });
    this.disposables.push(mat);
    const pad = new THREE.Mesh(new THREE.PlaneGeometry(28, 7), mat);
    pad.rotation.x = -Math.PI / 2;
    pad.position.set(0, 0.025, z);
    this.group.add(pad);
    const lines = new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.6 });
    this.disposables.push(lines);
    for (const dx of [-13.4, 13.4]) {
      const l = new THREE.Mesh(new THREE.PlaneGeometry(0.16, 7), lines);
      l.rotation.x = -Math.PI / 2;
      l.position.set(dx, 0.03, z);
      this.group.add(l);
    }
    const sign = this.addSign(team === 'blue' ? 'ALFA' : 'BRAVO', `#${new THREE.Color(color).getHexString()}`, 0, 3.1, z - (team === 'blue' ? 3 : -3), team === 'blue' ? Math.PI : 0, 0.65);
    // spawn points
    const xs = [-11, -5.5, 0, 5.5, 11];
    xs.forEach((x) => { if (this.isFree(x, z, 0.7)) this.spawns[team].push(new THREE.Vector3(x, 0, z)); });
    while (this.spawns[team].length < 5) this.spawns[team].push(new THREE.Vector3((this.spawns[team].length - 2) * 4, 0, z));
  }

  buildBlocks() {
    const k = this.def.kind;
    const p = this.def.palette;
    const accent = new THREE.Color(p.accent);
    const body = this.mat(new THREE.Color(p.ground).multiplyScalar(0.8), { rough: 0.86 });
    const trim = this.mat(new THREE.Color(p.ground).multiplyScalar(0.45), { rough: 0.6, metal: 0.3 });
    const glass = this.mat(accent, { rough: 0.25, metal: 0.7, emissive: accent, emissiveIntensity: 0.35 });

    const building = (x, z, w, d, h) => {
      const key = `${w}-${h}`;
      this.buildingMats = this.buildingMats || {};
      if (!this.buildingMats[key]) {
        const { map, emissive } = facadeTextures(this.def);
        this.disposables.push(map, emissive);
        const rep = { x: Math.max(1, Math.round(w / 7)), y: Math.max(1, Math.round(h / 5)) };
        map.repeat.set(rep.x, rep.y);
        emissive.repeat.set(rep.x, rep.y);
        this.buildingMats[key] = this.mat(0xffffff, { map, rough: 0.78, metal: 0.18, emissive: 0xffffff, emissiveIntensity: 0.35 });
        this.buildingMats[key].emissiveMap = emissive;
        this.buildingMats[key].emissiveIntensity = 0.9;
      }
      this.addBox({ x, z, w, h, d, mat: this.buildingMats[key] });
      this.addBox({ x, z, y: h, w: w + 0.35, h: 0.28, d: d + 0.35, mat: trim, collide: false });
      this.addBox({ x, z, y: h + 0.28, w: w * 0.35, h: 0.12, d: d * 0.35, mat: glass, collide: false });
    };

    building(-18, -14, 8, 7, 5.5);
    building(18, 14, 8, 7, 5.5);
    building(20, -18, 6, 9, 4.2);
    building(-20, 18, 6, 9, 4.2);

    const barrier = (x, z, rot = 0, len = 3.2, color = null) => {
      const m = this.mat(color ?? new THREE.Color(p.ground).multiplyScalar(0.9), { rough: 0.85 });
      this.addBox({ x, z, w: len, h: 1.05, d: 0.5, rot, mat: m });
      this.addBox({ x, z, y: 1.05, w: len + 0.06, h: 0.08, d: 0.56, rot, mat: trim, collide: false });
      const stripe = this.mat(accent, { emissive: accent, emissiveIntensity: 0.25, rough: 0.5 });
      this.addBox({ x, z, y: 0.78, w: 0.5, h: 0.09, d: 0.54, rot, mat: stripe, collide: false });
    };

    // rotational symmetric cover
    const pairs = [
      [12, 4, 0.2], [-26, 7, Math.PI / 2], [8, 24, 0], [-9, -24, Math.PI / 2],
      [30, 5, Math.PI / 2], [-30, -5, Math.PI / 2], [3, -12, 0.5], [-3, 12, 0.5],
      [24, 30, 0], [-24, -30, 0], [36, 18, Math.PI / 2], [-36, -18, Math.PI / 2],
      [14, -32, 0], [-14, 32, 0], [42, -2, 0], [-42, 2, 0], [7, 12, 0.4], [-7, -12, 0.4],
    ];
    pairs.forEach(([x, z, r], i) => barrier(x, z, r, 2.8 + (i % 3) * 0.8));
    for (const [x, z] of [[18, 0], [-18, 0], [0, 15], [0, -15], [26, -28], [-26, 28]]) {
      this.addCrate(x, z, 1.35, new THREE.Color(p.ground).multiplyScalar(1.05).getHex(), accent.getHex());
    }

    // map-specific cover
    if (k === 'harbor') {
      const colors = [0x2e5a6b, 0x8a3d2e, 0x4c6b3c, 0x6b5a2e];
      const accentHex = accent.getHex();
      const layout = [[-8, 4, Math.PI / 2], [8, -4, Math.PI / 2], [28, 12, 0], [-28, -12, 0], [-34, 26, Math.PI / 2], [34, -26, Math.PI / 2], [6, 30, 0], [-6, -30, 0]];
      layout.forEach(([x, z, r], i) => {
        this.addContainer(x, z, colors[i % colors.length], accentHex, r);
        if (i % 3 === 0) this.addContainer(x + (r ? 0 : 0.2), z + (r ? 0.2 : 0), colors[(i + 1) % colors.length], accentHex, r, 2.6);
      });
      // crane silhouettes
      for (const sx of [-1, 1]) {
        this.addBox({ x: sx * 40, z: sx * 6, w: 1.2, h: 13, d: 1.2, mat: trim, collide: false });
        this.addBox({ x: sx * 33, z: sx * 6, y: 12, w: 16, h: 0.8, d: 0.8, mat: trim, collide: false });
        this.addBox({ x: sx * 27, z: sx * 6, y: 9.5, w: 0.15, h: 2.5, d: 0.15, mat: trim, collide: false });
      }
      this.addSign('SANCAK', '#ff9a4d', -34, 4.2, -24, 0.2, 0.75);
    } else if (k === 'bazaar') {
      const awnings = [0xff3d9a, 0x37e0c8, 0xffc857, 0xb06bff];
      for (const [x, z, rot] of [[-10, 8, 0], [10, -8, 0], [30, 24, Math.PI / 2], [-30, -24, Math.PI / 2], [12, 20, 0], [-12, -20, 0], [-32, 12, 0], [32, -12, 0]]) {
        const c = awnings[(this.rand() * awnings.length) | 0];
        this.addBox({ x, z, w: 2.6, h: 0.9, d: 1.3, mat: this.mat(c, { rough: 0.82 }) });
        const postMat = this.mat(0x2b2118, { rough: 0.8, metal: 0.3 });
        for (const dx of [-1.2, 1.2]) for (const dz of [-0.55, 0.55]) this.addBox({ x: x + dx, z: z + dz, w: 0.07, h: 2.4, d: 0.07, mat: postMat, collide: false });
        this.addBox({ x, z, y: 2.4, w: 3, h: 0.12, d: 1.8, rot, mat: this.mat(c, { rough: 0.7 }), collide: false });
        this.addBox({ x, z, y: 2.52, w: 3.02, h: 0.05, d: 0.4, rot, mat: this.mat(0xffffff, { emissive: c, emissiveIntensity: 0.7 }), collide: false });
      }
      this.addSign('NEON ÇARŞI', '#ff3d9a', -8, 4.4, -30, 0, 1.1);
      this.addSign('KEBAP', '#37e0c8', 30, 4.6, 22, -Math.PI / 2, 0.7);
      this.addSign('24/7', '#ffc857', 33, 3.4, -2, Math.PI / 2, 0.55);
      for (const [x, z, c] of [[-15, 26, 0xff3d9a], [15, -26, 0x37e0c8], [36, 10, 0xb06bff]]) {
        const l = new THREE.PointLight(c, 16, 17, 2);
        l.position.set(x, 4, z);
        this.group.add(l);
        this.lamps.push(l);
      }
    } else if (k === 'dunes') {
      const sand = this.mat(0xb08a55, { rough: 0.96 });
      for (const [x, z, s] of [[-8, 2, 1], [8, -2, 1], [28, -16, 1.3], [-28, 16, 1.3], [-32, -24, 0.8], [32, 24, 0.8]]) {
        this.addBox({ x, z, w: 6 * s, h: 2.2 * s, d: 2.2 * s, rot: 0.2, mat: sand });
        this.addBox({ x, z, y: 2.2 * s, w: 6.1 * s, h: 0.22, d: 2.3 * s, rot: 0.2, mat: this.mat(0x8d6d42), collide: false });
      }
      for (const sx of [-1, 1]) {
        this.addCylinder({ x: sx * 20, z: sx * 10, r: 1.3, h: 5.5, mat: sand, segments: 8 });
        this.addCylinder({ x: sx * 20, z: sx * 10, y: 5.5, r: 1.7, h: 0.5, mat: sand, segments: 8, collide: false });
      }
      this.addSign('KUM FIRTINASI', '#7cc7ff', 0, 4.5, -31, 0, 0.9);
    } else if (k === 'frost') {
      const ice = this.mat(0xc9dde4, { rough: 0.55, metal: 0.15 });
      const snow = this.mat(0xeef6f8, { rough: 0.98 });
      for (const [x, z, len, rot] of [[-7, 3, 5, 0.15], [7, -3, 5, 0.15], [30, 22, 4, Math.PI / 2], [-30, -22, 4, Math.PI / 2], [12, 28, 3, 0], [-12, -28, 3, 0]]) {
        this.addBox({ x, z, w: len, h: 1.7, d: 0.9, rot, mat: snow });
        this.addBox({ x, z, y: 1.7, w: len + 0.15, h: 0.25, d: 1.05, rot, mat: ice, collide: false });
      }
      for (const [x, z] of [[-24, -6], [24, 6], [10, -36], [-10, 36]]) {
        this.addCylinder({ x, z, r: 0.45, h: 3.4, mat: ice, segments: 6 });
        const cone = new THREE.Mesh(new THREE.ConeGeometry(0.55, 1.2, 6), ice);
        cone.position.set(x, 4, z);
        this.group.add(cone);
      }
      this.addSign('BUZ KALESİ', '#64d8ff', -18, 4.4, -26, 0.1, 0.7);
    } else if (k === 'foundry') {
      const rust = this.mat(0x5b3d2c, { rough: 0.8, metal: 0.4 });
      const pipe = this.mat(0x3a3a38, { rough: 0.45, metal: 0.8 });
      for (const [x, z, h] of [[-7, 4, 6], [7, -4, 6], [-30, -18, 7], [30, 18, 7]]) {
        this.addCylinder({ x, z, r: 1.5, h, mat: rust, segments: 12 });
        this.addCylinder({ x, z, y: h, r: 1.55, h: 0.3, mat: pipe, segments: 12, collide: false });
      }
      for (const sx of [-1, 1]) {
        for (const y of [2.2, 3.4, 4.6]) {
          this.addCylinder({ x: sx * 12, z: sx * 12, y, r: 0.26, h: 13, mat: pipe, segments: 8, collide: false, rotZ: Math.PI / 2 });
        }
      }
      for (const [x, z] of [[-18, 12], [18, -12], [26, 0], [-26, 0]]) {
        const l = new THREE.PointLight(0xff7a2a, 14, 14, 2);
        l.position.set(x, 3, z);
        this.group.add(l);
        this.lamps.push(l);
        this.addBox({ x, z, y: 0, w: 0.6, h: 2.4, d: 0.6, mat: this.mat(0xff6a20, { emissive: 0xff5a15, emissiveIntensity: 1.4, rough: 0.5 }), collide: false });
      }
      this.addSign('DEMİR FABRİKA', '#ff7a2a', 0, 5.6, -31, 0, 0.95);
    } else if (k === 'jungle') {
      for (const [x, z, s] of [[-12, 6, 1], [12, -6, 1], [-30, -26, 1.4], [30, 26, 1.4], [8, 28, 1.1], [-8, -28, 1.1], [32, -12, 1.2], [-32, 12, 1.2], [20, 34, 0.8], [-20, -34, 0.8], [38, 4, 0.9], [-38, -4, 0.9]]) this.addTree(x, z, s);
      const bag = this.mat(0x7a6b48, { rough: 0.95 });
      for (const [x, z, rot] of [[-6, 0, 0], [6, 0, 0], [26, 18, Math.PI / 2], [-26, -18, Math.PI / 2]]) {
        this.addBox({ x, z, w: 4, h: 0.9, d: 0.8, rot, mat: bag });
        this.addBox({ x, z, y: 0.9, w: 4.1, h: 0.12, d: 0.9, rot, mat: this.mat(0x8d7d56), collide: false });
      }
      this.addSign('KARAKOL', '#ffd166', 18, 4.2, -32, 0.1, 0.7);
    } else if (k === 'orbital') {
      const white = this.mat(0xd7e1e8, { rough: 0.45, metal: 0.55 });
      const dark = this.mat(0x1b2734, { rough: 0.5, metal: 0.6 });
      for (const [x, z, len, rot] of [[-8, 4, 7, 0], [8, -4, 7, 0], [28, -22, 6, Math.PI / 2], [-28, 22, 6, Math.PI / 2]]) {
        this.addBox({ x, z, w: len, h: 1.4, d: 0.7, rot, mat: white });
        this.addBox({ x, z, y: 0.5, w: len + 0.1, h: 0.12, d: 0.74, rot, mat: this.mat(0x4dc5ff, { emissive: 0x4dc5ff, emissiveIntensity: 1.1 }), collide: false });
      }
      for (const sx of [-1, 1]) {
        this.addBox({ x: sx * 34, z: 0, w: 0.6, h: 7, d: 12, mat: dark, collide: false });
        this.addBox({ x: sx * 34, z: 0, y: 7, w: 0.7, h: 0.12, d: 12.1, mat: this.mat(0x4dc5ff, { emissive: 0x4dc5ff, emissiveIntensity: 1.5 }), collide: false });
      }
      this.addSign('YÖRÜNGE-7', '#4dc5ff', 0, 5.4, -31, 0, 0.9);
    } else if (k === 'rooftop') {
      const ac = this.mat(0x7b7f83, { rough: 0.55, metal: 0.5 });
      const dark = this.mat(0x2d2b2f, { rough: 0.8, metal: 0.3 });
      for (const [x, z, rot] of [[-8, 5, 0], [8, -5, 0], [-26, -20, Math.PI / 2], [26, 20, Math.PI / 2], [30, 6, 0], [-30, -6, 0]]) {
        this.addBox({ x, z, w: 2.6, h: 1.2, d: 1.8, rot, mat: ac });
        this.addCylinder({ x, z, y: 1.2, r: 0.65, h: 0.12, mat: dark, segments: 12, collide: false });
      }
      // helipad
      const padMat = new THREE.MeshBasicMaterial({ color: 0xff6a5c, transparent: true, opacity: 0.5 });
      this.disposables.push(padMat);
      const hpad = new THREE.Mesh(new THREE.RingGeometry(3.4, 3.6, 40), padMat);
      hpad.rotation.x = -Math.PI / 2;
      hpad.position.set(0, 0.024, 0);
      this.group.add(hpad);
      this.addSign('ÇATI 09', '#ff6a5c', 0, 4.1, 30, Math.PI, 0.65);
      for (const [x, z] of [[-15, -3], [15, 3]]) {
        const l = new THREE.PointLight(0xff6a5c, 10, 12, 2);
        l.position.set(x, 1.2, z);
        this.group.add(l);
        this.lamps.push(l);
      }
    } else if (k === 'volcano') {
      const rock = this.mat(0x2a2523, { rough: 0.95 });
      for (const [x, z, s] of [[-9, 3, 1.2], [9, -3, 1.2], [-28, 20, 1.6], [28, -20, 1.6], [12, 28, 1], [-12, -28, 1]]) {
        const r = new THREE.Mesh(new THREE.DodecahedronGeometry(s, 0), rock);
        r.position.set(x, s * 0.7, z);
        r.rotation.set(this.rand() * 3, this.rand() * 3, this.rand() * 3);
        r.castShadow = true; r.receiveShadow = true;
        this.group.add(r);
        this.colliders.push({ minX: x - s * 0.8, maxX: x + s * 0.8, minY: 0, maxY: s * 1.4, minZ: z - s * 0.8, maxZ: z + s * 0.8 });
      }
      const lava = new THREE.MeshBasicMaterial({ color: 0xff4a1f });
      this.disposables.push(lava);
      for (const [x, z, w, d] of [[0, 20, 14, 1.1], [0, -20, 14, 1.1], [-22, 0, 1.1, 12], [22, 0, 1.1, 12]]) {
        const l = new THREE.Mesh(new THREE.PlaneGeometry(w, d), lava);
        l.rotation.x = -Math.PI / 2;
        l.position.set(x, 0.027, z);
        this.group.add(l);
        const pl = new THREE.PointLight(0xff4a1f, 9, 10, 2);
        pl.position.set(x, 0.8, z);
        this.group.add(pl);
        this.lamps.push(pl);
      }
      this.addSign('VOLKAN', '#ff4a1f', 0, 4.6, -31, 0, 0.85);
    }

    // scattered barrels / small props
    const barrelColors = { harbor: 0x8a3d2e, bazaar: 0x3d4652, dunes: 0x6b5a3e, frost: 0x7fa6b5, foundry: 0x8a4b2e, jungle: 0x4a5a3a, orbital: 0x9fb4c4, metro: 0x565048, rooftop: 0x666a70, volcano: 0x4a3a34 };
    const bmat = this.mat(barrelColors[k] || 0x555555, { rough: 0.6, metal: 0.5 });
    for (const [x, z] of [[14, 8], [-14, -8], [33, -22], [-33, 22], [2, 34], [-2, -34], [27, -4], [-27, 4]]) {
      this.addCylinder({ x, z, r: 0.35, h: 1.0, mat: bmat, segments: 10 });
    }
  }

  buildSpecific() {
    const k = this.def.kind;
    const p = this.def.palette;
    const accent = new THREE.Color(p.accent);
    const metal = this.mat(0x2c3034, { rough: 0.4, metal: 0.8 });
    const concrete = this.mat(new THREE.Color(p.ground).multiplyScalar(0.9), { rough: 0.9 });

    if (k === 'metro') {
      // stopped train across mid
      const trainMat = this.mat(0x8d9298, { rough: 0.3, metal: 0.85 });
      const stripe = this.mat(accent, { emissive: accent, emissiveIntensity: 0.6, rough: 0.4 });
      this.addBox({ x: 0, z: -2, w: 15, h: 2.8, d: 2.5, mat: trainMat });
      this.addBox({ x: 0, z: -2, y: 1.15, w: 15.05, h: 0.22, d: 2.55, mat: stripe, collide: false });
      for (const x of [-5, 0, 5]) this.addBox({ x, z: -0.78, y: 1.55, w: 2.4, h: 0.9, d: 0.04, mat: this.mat(0x16202a, { metal: 0.8, rough: 0.1 }), collide: false });
      this.addBox({ x: 0, z: 2, w: 15.5, h: 0.25, d: 1.2, mat: metal, collide: false });
      // columns
      for (const x of [-24, -12, 12, 24]) for (const z of [-16, 14]) {
        this.addCylinder({ x, z, r: 0.55, h: 7.6, mat: concrete, segments: 8 });
      }
      // rails
      for (const z of [-9, 9]) {
        this.addBox({ x: 0, z, w: 70, h: 0.05, d: 0.14, mat: metal, collide: false, shadow: false });
      }
      this.addLamp(-10, 6, 0xffb44d, 16, 4);
      this.addLamp(10, -6, 0xffb44d, 16, 4);
      this.addLamp(-30, -12, 0xff8844, 10, 3.8);
      this.addLamp(30, 12, 0xff8844, 10, 3.8);
    } else if (k === 'harbor') {
      // central container stack
      this.addContainer(-3, -1, 0x2e5a6b, accent.getHex(), 0, 0, 6);
      this.addContainer(3.2, 1, 0x8a3d2e, accent.getHex(), 0, 0, 6);
      this.addContainer(0, 0, 0x4c6b3c, accent.getHex(), Math.PI / 2, 2.6, 4.5);
      // warehouse façade
      this.addBox({ x: 36, z: -34, w: 14, h: 7, d: 6, mat: concrete });
      this.addSign('DEPO 4', '#ff9a4d', 34, 4.2, -30.8, 0.3, 0.7);
      this.addLamp(-36, 12, 0xffb46a, 12, 6);
      this.addLamp(36, -12, 0xffb46a, 12, 6);
    } else if (k === 'bazaar') {
      // central fountain + canopy strings
      this.addCylinder({ x: 0, z: 0, r: 2.6, h: 0.6, mat: concrete, segments: 16 });
      this.addCylinder({ x: 0, z: 0, r: 1.4, h: 1.1, mat: this.mat(0x3a4a58, { rough: 0.35, metal: 0.6 }), segments: 16 });
      this.addCylinder({ x: 0, z: 0, r: 0.35, h: 2.4, mat: this.mat(0x444a52, { rough: 0.5, metal: 0.5 }), segments: 8 });
      // string lights between buildings
      const bulbMat = new THREE.MeshBasicMaterial({ color: 0xffd28a });
      this.disposables.push(bulbMat);
      for (let i = 0; i < 14; i++) {
        const ang = (i / 14) * Math.PI * 2;
        const x = Math.cos(ang) * 9, z = Math.sin(ang) * 9;
        const b = new THREE.Mesh(new THREE.SphereGeometry(0.06, 6, 4), bulbMat);
        b.position.set(x, 3.4 + Math.sin(i * 2) * 0.2, z);
        this.group.add(b);
      }
    } else if (k === 'dunes') {
      // ruined arch
      this.addBox({ x: -3, z: 0, w: 1.6, h: 5, d: 1.6, mat: concrete });
      this.addBox({ x: 3, z: 0, w: 1.6, h: 5, d: 1.6, mat: concrete });
      this.addBox({ x: 0, z: 0, y: 5, w: 7.6, h: 1.1, d: 1.8, mat: concrete });
      this.addBox({ x: 0, z: 12, w: 8, h: 2.2, d: 2, mat: concrete, rot: 0.1 });
      this.addLamp(-24, -28, 0xfff0c8, 8, 4.5);
      this.addLamp(24, 28, 0xfff0c8, 8, 4.5);
    } else if (k === 'frost') {
      // keep
      this.addBox({ x: 0, z: 0, w: 10, h: 3.2, d: 10, mat: this.mat(0xa7c0c9, { rough: 0.8 }) });
      this.addBox({ x: 0, z: 0, y: 3.2, w: 11, h: 0.4, d: 11, mat: this.mat(0xe8f2f4), collide: false });
      for (const [dx, dz] of [[-4.5, -4.5], [4.5, -4.5], [-4.5, 4.5], [4.5, 4.5]]) {
        this.addBox({ x: dx, z: dz, y: 3.2, w: 1.4, h: 1.4, d: 1.4, mat: this.mat(0xbfd4d9, { rough: 0.85 }), collide: false });
      }
      const flame = new THREE.PointLight(0x64d8ff, 12, 12, 2);
      flame.position.set(0, 4.4, 0);
      this.group.add(flame);
      this.lamps.push(flame);
    } else if (k === 'foundry') {
      // central furnace
      this.addCylinder({ x: 0, z: 0, r: 3.2, h: 4.4, mat: this.mat(0x4b3a2e, { rough: 0.8, metal: 0.5 }), segments: 12 });
      this.addCylinder({ x: 0, z: 0, r: 2.2, h: 0.5, mat: this.mat(0xff6a20, { emissive: 0xff4a10, emissiveIntensity: 1.6, rough: 0.3 }), segments: 12, collide: false });
      const light = new THREE.PointLight(0xff6a20, 24, 20, 2);
      light.position.set(0, 3, 0);
      this.group.add(light);
      this.lamps.push(light);
      // elevated catwalk (decorative, non-collide above head)
      this.addBox({ x: -20, z: -10, y: 4.6, w: 18, h: 0.3, d: 1.4, mat: metal, collide: false });
      for (const x of [-28, -20, -12]) this.addCylinder({ x, z: -10, r: 0.08, h: 4.6, mat: metal, segments: 6, collide: false });
    } else if (k === 'jungle') {
      // bunker
      this.addBox({ x: 0, z: -2, w: 8, h: 2.6, d: 4.5, mat: this.mat(0x4f5a44, { rough: 0.92 }) });
      this.addBox({ x: 0, z: -2, y: 2.6, w: 9, h: 0.6, d: 5.5, mat: this.mat(0x3b4934, { rough: 0.9 }), collide: false });
      for (const x of [-2.6, 0, 2.6]) this.addBox({ x, z: -4.22, y: 1.45, w: 0.9, h: 0.35, d: 0.06, mat: this.mat(0x11150f), collide: false });
      this.addBox({ x: 0, z: 2, y: 3.2, w: 3, h: 0.3, d: 2, mat: this.mat(0x3b4934), collide: false });
    } else if (k === 'orbital') {
      // central reactor ring
      const ring = new THREE.Mesh(new THREE.TorusGeometry(4.8, 0.35, 10, 48), this.mat(0xb8c8d4, { rough: 0.3, metal: 0.9 }));
      ring.rotation.x = Math.PI / 2;
      ring.position.y = 0.5;
      this.group.add(ring);
      this.colliders.push({ minX: -5.1, maxX: 5.1, minY: 0, maxY: 0.8, minZ: -1.2, maxZ: 1.2 });
      this.colliders.push({ minX: -1.2, maxX: 1.2, minY: 0, maxY: 0.8, minZ: -5.1, maxZ: 5.1 });
      const core = new THREE.Mesh(new THREE.CylinderGeometry(1, 1, 5.4, 16), this.mat(0x4dc5ff, { emissive: 0x4dc5ff, emissiveIntensity: 1.4, transparent: true, opacity: 0.35, rough: 0.1 }));
      core.position.y = 2.7;
      this.group.add(core);
      const l = new THREE.PointLight(0x4dc5ff, 20, 18, 2);
      l.position.set(0, 3, 0);
      this.group.add(l);
      this.lamps.push(l);
    } else if (k === 'rooftop') {
      // skyline + sun
      this.addBox({ x: 28, z: -34, w: 14, h: 20, d: 12, mat: concrete, collide: false });
      this.addBox({ x: -32, z: 30, w: 12, h: 24, d: 12, mat: concrete, collide: false });
      this.addSign('TERAS', '#ff6a5c', -28, 3.2, 36, 0, 0.5);
      this.addLamp(0, 6, 0xffb08a, 8, 3.2);
    } else if (k === 'volcano') {
      // lava bridge
      this.addBox({ x: 0, z: 2, w: 4.5, h: 0.3, d: 18, mat: this.mat(0x3a3230, { rough: 0.9 }), collide: false });
      this.addBox({ x: 0, z: 2, y: 0.3, w: 4.6, h: 0.05, d: 18.1, mat: this.mat(0xff4a1f, { emissive: 0xff4a1f, emissiveIntensity: 1.2 }), collide: false });
      for (const [x, z] of [[-10, 6], [10, -6]]) {
        this.addBox({ x, z, w: 4, h: 1.8, d: 1, mat: this.mat(0x2f2826, { rough: 0.9 }) });
      }
    }

    if (k !== 'metro' && k !== 'orbital') {
      this.addLamp(0, 34, this.def.palette.accent, 6, 4.2);
      this.addLamp(0, -34, this.def.palette.accent, 6, 4.2);
    }
  }

  buildCeiling() {
    const p = this.def.palette;
    const mat = this.mat(new THREE.Color(p.ground).multiplyScalar(0.7), { rough: 0.9 });
    this.addBox({ x: 0, z: 0, y: 8.2, w: 101, h: 0.6, d: 101, mat, collide: false, shadow: false });
    for (const x of [-30, -15, 0, 15, 30]) {
      for (const z of [-30, 0, 30]) {
        const strip = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.08, 6), new THREE.MeshBasicMaterial({ color: 0xffc27a }));
        strip.position.set(x, 8.1, z);
        this.group.add(strip);
      }
    }
  }

  buildParticles() {
    const kind = this.def.kind;
    const isSnow = kind === 'frost';
    const isEmber = kind === 'volcano' || kind === 'foundry';
    const isSpore = kind === 'jungle';
    const count = isSnow ? 520 : isEmber ? 160 : isSpore ? 220 : 240;
    const positions = new Float32Array(count * 3);
    const seeds = [];
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 90;
      positions[i * 3 + 1] = Math.random() * (isSnow ? 16 : 8);
      positions[i * 3 + 2] = (Math.random() - 0.5) * 90;
      seeds.push(Math.random());
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const color = isSnow ? 0xdff2ff : isEmber ? 0xff7a3a : isSpore ? 0xa8d98a : new THREE.Color(this.def.palette.accent).getHex();
    const mat = new THREE.PointsMaterial({ color, size: isSnow ? 0.11 : isEmber ? 0.08 : 0.055, transparent: true, opacity: isSpore ? 0.5 : 0.7, depthWrite: false, blending: isEmber ? THREE.AdditiveBlending : THREE.NormalBlending });
    const pts = new THREE.Points(geo, mat);
    this.group.add(pts);
    this.disposables.push(geo, mat);
    this.particles = { pts, positions, seeds, kind, count };
  }

  update(dt, elapsed) {
    this.time = elapsed;
    if (this.particles) {
      const { positions, seeds, kind, count } = this.particles;
      const arr = positions;
      const snow = kind === 'frost';
      const ember = kind === 'volcano' || kind === 'foundry';
      const spore = kind === 'jungle';
      for (let i = 0; i < count; i++) {
        const i3 = i * 3;
        const speed = 0.2 + seeds[i] * 0.5;
        if (snow) {
          arr[i3 + 1] -= dt * (1.1 + seeds[i] * 1.5);
          arr[i3] += Math.sin(elapsed * 0.7 + seeds[i] * 10) * dt * 0.5;
          if (arr[i3 + 1] < 0) { arr[i3 + 1] = 14; arr[i3] = (Math.random() - 0.5) * 90; }
        } else if (ember) {
          arr[i3 + 1] += dt * (0.5 + seeds[i] * 1.1);
          arr[i3] += Math.sin(elapsed + seeds[i] * 8) * dt * 0.7;
          if (arr[i3 + 1] > 9) { arr[i3 + 1] = 0.2; arr[i3] = (Math.random() - 0.5) * 80; }
        } else if (spore) {
          arr[i3] += Math.sin(elapsed * 0.3 + seeds[i] * 7) * dt * 0.4;
          arr[i3 + 1] += Math.sin(elapsed * 0.5 + seeds[i] * 3) * dt * 0.22;
          arr[i3 + 2] += Math.cos(elapsed * 0.35 + seeds[i] * 9) * dt * 0.4;
        } else {
          arr[i3] += dt * 0.3 * speed;
          arr[i3 + 2] += Math.cos(elapsed * 0.3 + seeds[i] * 8) * dt * 0.35;
          if (arr[i3] > 45) arr[i3] = -45;
        }
      }
      this.particles.pts.geometry.attributes.position.needsUpdate = true;
    }
  }

  // ── physics / queries ─────────────────────────────────────────────────────
  isFree(x, z, radius = 0.45) {
    if (Math.abs(x) > 47.5 || Math.abs(z) > 47.5) return false;
    for (const c of this.colliders) {
      if (c.maxY < 0.25) continue;
      if (x + radius > c.minX && x - radius < c.maxX && z + radius > c.minZ && z - radius < c.maxZ) return false;
    }
    return true;
  }

  moveCircle(pos, radius, dx, dz) {
    const tryAxis = (axis, amount) => {
      if (!amount) return;
      const nx = pos.x + (axis === 'x' ? amount : 0);
      const nz = pos.z + (axis === 'z' ? amount : 0);
      let blocked = Math.abs(nx) > 47.3 || Math.abs(nz) > 47.3;
      if (!blocked) {
        for (const c of this.colliders) {
          if (c.maxY < 0.35) continue;
          if (nx + radius > c.minX && nx - radius < c.maxX && nz + radius > c.minZ && nz - radius < c.maxZ) { blocked = true; break; }
        }
      }
      if (!blocked) {
        if (axis === 'x') pos.x = nx; else pos.z = nz;
      }
    };
    tryAxis('x', dx);
    tryAxis('z', dz);
  }

  raycast(origin, dir, maxDist = 160) {
    let best = maxDist;
    let hit = null;
    let normal = null;
    // ground
    if (dir.y < -0.0001) {
      const t = -origin.y / dir.y;
      if (t > 0.05 && t < best) { best = t; hit = 'ground'; normal = new THREE.Vector3(0, 1, 0); }
    }
    for (const c of this.colliders) {
      const t = rayAABB(origin, dir, c);
      if (t !== null && t < best && t > 0.02) { best = t; hit = c; normal = boxNormal(origin, dir, c, t); }
    }
    if (!hit) return null;
    return {
      dist: best,
      point: new THREE.Vector3(origin.x + dir.x * best, origin.y + dir.y * best, origin.z + dir.z * best),
      normal: normal || new THREE.Vector3(0, 1, 0),
      object: hit,
    };
  }

  los(a, b) {
    const dir = new THREE.Vector3().subVectors(b, a);
    const dist = dir.length();
    if (dist < 0.01) return true;
    dir.divideScalar(dist);
    const hit = this.raycast(a, dir, dist);
    return !hit || hit.dist >= dist - 0.6;
  }

  nearestNav(x, z, ignore = null) {
    let best = null;
    let bd = Infinity;
    for (const n of this.nav) {
      if (ignore && ignore(n)) continue;
      const d = (n.x - x) ** 2 + (n.z - z) ** 2;
      if (d < bd) { bd = d; best = n; }
    }
    return best;
  }

  randomNav() {
    return this.nav[(Math.random() * this.nav.length) | 0];
  }

  spawnPoint(team, avoid) {
    const list = this.spawns[team];
    let best = list[0];
    let bd = -1;
    for (const p of list) {
      let d = 999;
      for (const a of avoid) d = Math.min(d, (a.x - p.x) ** 2 + (a.z - p.z) ** 2);
      if (d > bd) { bd = d; best = p; }
    }
    return best.clone();
  }

  dispose() {
    this.scene.remove(this.group);
    const hemi = this.group.userData.hemi;
    const sun = this.group.userData.sun;
    const fill = this.group.userData.fill;
    if (hemi) this.scene.remove(hemi);
    if (sun) this.scene.remove(sun);
    if (fill) this.scene.remove(fill);
    this.group.traverse((o) => {
      if (o.geometry && o.geometry !== UNIT_BOX) o.geometry.dispose?.();
    });
    this.disposables.forEach((d) => d?.dispose?.());
    this.scene.fog = null;
  }
}

// tiny helper used above for stall crate mats
function colorHex(c) {
  return new THREE.Color(c).getHex();
}

// ─── ray / AABB helpers ─────────────────────────────────────────────────────
function rayAABB(origin, dir, c) {
  let tmin = (c.minX - origin.x) / (dir.x || 1e-9);
  let tmax = (c.maxX - origin.x) / (dir.x || 1e-9);
  if (tmin > tmax) [tmin, tmax] = [tmax, tmin];
  let tymin = (c.minY - origin.y) / (dir.y || 1e-9);
  let tymax = (c.maxY - origin.y) / (dir.y || 1e-9);
  if (tymin > tymax) [tymin, tymax] = [tymax, tymin];
  if (tmin > tymax || tymin > tmax) return null;
  tmin = Math.max(tmin, tymin);
  tmax = Math.min(tmax, tymax);
  if (tmax < 0) return null;
  return tmin >= 0 ? tmin : null;
}

function boxNormal(origin, dir, c, t) {
  const p = {
    x: origin.x + dir.x * t,
    y: origin.y + dir.y * t,
    z: origin.z + dir.z * t,
  };
  const eps = 0.02;
  if (Math.abs(p.x - c.minX) < eps) return new THREE.Vector3(-1, 0, 0);
  if (Math.abs(p.x - c.maxX) < eps) return new THREE.Vector3(1, 0, 0);
  if (Math.abs(p.y - c.minY) < eps) return new THREE.Vector3(0, -1, 0);
  if (Math.abs(p.y - c.maxY) < eps) return new THREE.Vector3(0, 1, 0);
  if (Math.abs(p.z - c.minZ) < eps) return new THREE.Vector3(0, 0, -1);
  return new THREE.Vector3(0, 0, 1);
}

// ─── ray vs capsule (used for operators) ────────────────────────────────────
export function raySphere(origin, dir, center, radius) {
  const ox = origin.x - center.x, oy = origin.y - center.y, oz = origin.z - center.z;
  const b = ox * dir.x + oy * dir.y + oz * dir.z;
  const c = ox * ox + oy * oy + oz * oz - radius * radius;
  const h = b * b - c;
  if (h < 0) return null;
  const t = -b - Math.sqrt(h);
  return t >= 0 ? t : -b + Math.sqrt(h) >= 0 ? 0.001 : null;
}

export function rayCapsule(origin, dir, a, b, radius) {
  // closest approach between ray and segment, then sphere check (cheap & stable)
  const closest = new THREE.Vector3();
  const best = { t: Infinity, dist: Infinity };
  const seg = new THREE.Vector3().subVectors(b, a);
  const segLen2 = seg.lengthSq();
  const oa = new THREE.Vector3().subVectors(origin, a);
  const d1 = dir.dot(dir) || 1;
  const e = seg.dot(dir);
  const f = seg.dot(oa);
  const denom = d1 * segLen2 - e * e;
  let s = denom !== 0 ? (f * d1 - e * (dir.dot(oa))) / denom : 0;
  s = Math.max(0, Math.min(1, s));
  closest.copy(a).addScaledVector(seg, s);
  const t = raySphere(origin, dir, closest, radius);
  if (t !== null) return { t, point: closest };
  return null;
}

export { DEG };
