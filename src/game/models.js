import * as THREE from 'three';

// ─── shared geometry / helpers ───────────────────────────────────────────────
const geoCache = new Map();
function geo(key, make) {
  if (!geoCache.has(key)) geoCache.set(key, make());
  return geoCache.get(key);
}
const box = (w, h, d, mat) => new THREE.Mesh(geo(`b${w},${h},${d}`, () => new THREE.BoxGeometry(w, h, d)), mat);
const cyl = (rt, rb, h, seg, mat) => new THREE.Mesh(geo(`c${rt},${rb},${h},${seg}`, () => new THREE.CylinderGeometry(rt, rb, h, seg)), mat);
const sphere = (r, seg, mat) => new THREE.Mesh(geo(`s${r},${seg}`, () => new THREE.SphereGeometry(r, seg, Math.max(6, seg / 2))), mat);
const cap = (r, l, mat) => new THREE.Mesh(geo(`p${r},${l}`, () => new THREE.CapsuleGeometry(r, l, 4, 8)), mat);

const M = (color, opts = {}) => new THREE.MeshStandardMaterial({
  color,
  roughness: opts.rough ?? 0.62,
  metalness: opts.metal ?? 0.25,
  emissive: opts.emissive ?? 0x000000,
  emissiveIntensity: opts.emissiveIntensity ?? 1,
  flatShading: opts.flat ?? false,
  transparent: opts.transparent ?? false,
  opacity: opts.opacity ?? 1,
  side: opts.side ?? THREE.FrontSide,
});

// ─── procedural skin textures ────────────────────────────────────────────────
function hexToRgb(hex) {
  const c = new THREE.Color(hex);
  return [Math.round(c.r * 255), Math.round(c.g * 255), Math.round(c.b * 255)];
}
function rgba([r, g, b], a = 1) { return `rgba(${r},${g},${b},${a})`; }

export function skinTexture(skin, size = 256) {
  if (!skin || skin.pattern === 'solid') return null;
  const c = document.createElement('canvas');
  c.width = c.height = size;
  const g = c.getContext('2d');
  const base = hexToRgb(skin.colors.base);
  const accent = hexToRgb(skin.colors.accent);
  const dark = hexToRgb(skin.colors.metal);
  g.fillStyle = rgba(base);
  g.fillRect(0, 0, size, size);

  if (skin.pattern === 'camo') {
    const blobs = 46;
    for (let i = 0; i < blobs; i++) {
      g.fillStyle = rgba(i % 3 === 0 ? accent : i % 3 === 1 ? dark : base, i % 3 === 1 ? 0.9 : 0.65);
      g.beginPath();
      const x = Math.random() * size;
      const y = Math.random() * size;
      const rx = 18 + Math.random() * 45;
      g.ellipse(x, y, rx, 12 + Math.random() * 28, Math.random() * Math.PI, 0, Math.PI * 2);
      g.fill();
    }
  } else if (skin.pattern === 'hex') {
    g.strokeStyle = rgba(accent, 0.8);
    g.lineWidth = 2;
    const r = 16;
    for (let y = -r; y < size + r; y += r * 1.5) {
      for (let x = -r; x < size + r; x += r * 1.732) {
        const ox = (Math.round(y / (r * 1.5)) % 2) * r * 0.866;
        g.beginPath();
        for (let i = 0; i < 6; i++) {
          const a = (Math.PI / 3) * i + Math.PI / 6;
          const px = x + ox + Math.cos(a) * r;
          const py = y + Math.sin(a) * r;
          if (i === 0) g.moveTo(px, py); else g.lineTo(px, py);
        }
        g.closePath();
        g.stroke();
      }
    }
    g.globalAlpha = 0.3;
    g.fillStyle = rgba(accent);
    for (let i = 0; i < 8; i++) g.fillRect(Math.random() * size, Math.random() * size, r * 1.6, r * 0.34);
    g.globalAlpha = 1;
  } else if (skin.pattern === 'circuit') {
    g.strokeStyle = rgba(accent, 0.85);
    g.lineWidth = 2.2;
    for (let i = 0; i < 12; i++) {
      let x = Math.random() * size;
      let y = Math.random() * size;
      g.beginPath();
      g.moveTo(x, y);
      for (let j = 0; j < 4; j++) {
        if (Math.random() > 0.5) x += (Math.random() - 0.5) * 90; else y += (Math.random() - 0.5) * 90;
        g.lineTo(x, y);
      }
      g.stroke();
      g.fillStyle = rgba(accent);
      g.beginPath();
      g.arc(x, y, 4, 0, Math.PI * 2);
      g.fill();
    }
    g.globalAlpha = 0.25;
    for (let i = 0; i < 30; i++) g.fillRect(Math.random() * size, Math.random() * size, 4, 4);
    g.globalAlpha = 1;
  } else if (skin.pattern === 'carbon') {
    g.fillStyle = 'rgba(0,0,0,0.18)';
    for (let y = 0; y < size; y += 8) {
      for (let x = 0; x < size; x += 8) {
        if (((x + y) / 8) % 2 === 0) g.fillRect(x, y, 8, 8);
      }
    }
    g.strokeStyle = rgba(accent, 0.55);
    g.lineWidth = 4;
    g.strokeRect(10, 10, size - 20, size - 20);
  } else if (skin.pattern === 'ember') {
    const grad = g.createLinearGradient(0, size, size, 0);
    grad.addColorStop(0, rgba(base));
    grad.addColorStop(0.65, rgba(dark));
    grad.addColorStop(1, rgba(accent, 0.9));
    g.fillStyle = grad;
    g.fillRect(0, 0, size, size);
    g.strokeStyle = rgba(accent, 0.9);
    g.lineWidth = 2;
    for (let i = 0; i < 10; i++) {
      g.beginPath();
      let x = Math.random() * size;
      let y = Math.random() * size;
      g.moveTo(x, y);
      for (let j = 0; j < 5; j++) {
        x += (Math.random() - 0.4) * 45;
        y += (Math.random() - 0.5) * 35;
        g.lineTo(x, y);
      }
      g.stroke();
    }
  }
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  return tex;
}

// ─── weapon model ────────────────────────────────────────────────────────────
export function buildWeaponModel(weaponId, skin = null, opts = {}) {
  const skinDef = skin;
  const weapon = WEAPONS_CACHE[weaponId] || WEAPONS_CACHE.ar || { color: 0x3c4450, accent: 0x59e0c6 };
  const pattern = skinDef ? skinTexture(skinDef, 256) : null;
  const bodyColor = skinDef ? new THREE.Color(skinDef.colors.base) : new THREE.Color(weapon.color);
  const accentColor = skinDef ? new THREE.Color(skinDef.colors.accent) : new THREE.Color(weapon.accent);
  const metalColor = skinDef ? new THREE.Color(skinDef.colors.metal) : new THREE.Color(weapon.color).multiplyScalar(1.3);
  const emissive = skinDef && skinDef.pattern !== 'solid' ? new THREE.Color(skinDef.colors.emissive) : new THREE.Color(0x000000);
  const rough = skinDef?.finish?.rough ?? 0.5;
  const metal = skinDef?.finish?.metal ?? 0.5;

  const bodyMat = new THREE.MeshStandardMaterial({
    color: bodyColor, roughness: rough, metalness: metal,
    map: pattern, emissive, emissiveIntensity: skinDef?.pattern === 'circuit' || skinDef?.pattern === 'ember' ? 0.35 : 0.08,
  });
  const accentMat = M(accentColor, { rough: 0.4, metal: 0.55, emissive: accentColor, emissiveIntensity: 0.35 });
  const metalMat = M(metalColor, { rough: 0.32, metal: 0.92 });
  const darkMat = M(0x14171b, { rough: 0.7, metal: 0.35 });
  const gloveMat = M(0x1d2025, { rough: 0.86, metal: 0.05 });
  const lensMat = new THREE.MeshStandardMaterial({ color: 0x7df3ff, emissive: 0x36d6ff, emissiveIntensity: 1.5, roughness: 0.1, metalness: 0.2, transparent: true, opacity: 0.85 });
  const g = new THREE.Group();
  g.name = `weapon-${weaponId}`;

  const add = (m, x, y, z, rx = 0, ry = 0, rz = 0) => {
    m.position.set(x, y, z);
    m.rotation.set(rx, ry, rz);
    g.add(m);
    return m;
  };

  const long = weaponId === 'sniper' ? 1.24 : weaponId === 'lmg' ? 1.1 : weaponId === 'smg' ? 0.82 : weaponId === 'shotgun' ? 1.06 : weaponId === 'pistol' ? 0.6 : 1;
  const bodyLen = 0.34 * long;
  const barrelLen = 0.44 * long;

  // receiver
  add(box(0.075, 0.115, bodyLen, bodyMat), 0, 0, 0.02);
  add(box(0.081, 0.035, bodyLen * 0.72, metalMat), 0, 0.07, 0.01);
  // handguard / barrel shroud
  add(box(0.062, 0.075, 0.28 * long, bodyMat), 0, 0.002, -0.34 * long);
  add(box(0.07, 0.02, 0.24 * long, accentMat), 0, -0.035, -0.34 * long);
  for (let i = 0; i < 4; i++) add(box(0.068, 0.012, 0.02, darkMat), 0, 0.045, -0.25 * long - i * 0.055 * long);
  // barrel + muzzle
  add(cyl(0.017, 0.019, barrelLen, 10, metalMat), 0, 0.012, -0.47 * long - barrelLen / 2 + 0.06, Math.PI / 2);
  add(cyl(0.028, 0.026, 0.075, 12, darkMat), 0, 0.012, -0.47 * long - barrelLen + 0.08, Math.PI / 2);
  if (weaponId === 'sniper' || weaponId === 'lmg') {
    add(cyl(0.036, 0.034, 0.16, 12, darkMat), 0, 0.012, -0.47 * long - barrelLen + 0.0, Math.PI / 2);
  }
  // stock
  add(box(0.06, 0.1, 0.25 * long, bodyMat), 0, -0.005, 0.3 * long);
  add(box(0.055, 0.13, 0.045, darkMat), 0, -0.02, 0.43 * long);
  // grip
  add(box(0.05, 0.15, 0.065, darkMat), 0, -0.125, 0.14, -0.28);
  add(box(0.05, 0.02, 0.065, accentMat), 0, -0.055, 0.14, -0.28);
  // magazine
  const magHeight = weaponId === 'lmg' ? 0.24 : weaponId === 'pistol' ? 0.11 : 0.17;
  const magZ = weaponId === 'pistol' ? 0.095 : -0.02;
  add(box(0.048, magHeight, 0.08, bodyMat), 0, -0.1 - magHeight / 2, magZ, weaponId === 'lmg' ? 0.05 : 0.14);
  add(box(0.052, 0.012, 0.084, accentMat), 0, -0.1 - magHeight + 0.01, magZ, 0.14);
  // trigger guard
  const guard = new THREE.Mesh(new THREE.TorusGeometry(0.035, 0.007, 6, 12, Math.PI * 1.35), darkMat);
  guard.rotation.set(Math.PI / 2, 0, 0.3);
  add(guard, 0, -0.08, 0.075);
  // top rail
  if (weaponId !== 'pistol') {
    for (let i = 0; i < 5; i++) add(box(0.05, 0.012, 0.018, darkMat), 0, 0.096, -0.1 + i * 0.045);
  }
  // optic
  if (weaponId === 'pistol') {
    add(box(0.02, 0.014, 0.018, accentMat), 0, 0.066, -0.12);
    add(box(0.018, 0.012, 0.016, darkMat), 0, 0.068, 0.13);
  } else {
    add(box(0.05, 0.028, 0.16, darkMat), 0, 0.104, -0.005);
    add(cyl(0.032, 0.032, 0.15, 12, metalMat), 0, 0.14, -0.005, Math.PI / 2);
    add(cyl(0.035, 0.035, 0.022, 12, darkMat), 0, 0.14, -0.085, Math.PI / 2);
    add(cyl(0.028, 0.028, 0.006, 12, lensMat), 0, 0.14, -0.099, Math.PI / 2);
    add(cyl(0.033, 0.033, 0.018, 12, darkMat), 0, 0.14, 0.075, Math.PI / 2);
    if (weaponId === 'sniper') {
      add(cyl(0.043, 0.043, 0.26, 12, metalMat), 0, 0.15, -0.02, Math.PI / 2);
      add(cyl(0.046, 0.046, 0.03, 12, darkMat), 0, 0.15, -0.16, Math.PI / 2);
      add(cyl(0.038, 0.038, 0.007, 12, lensMat), 0, 0.15, -0.178, Math.PI / 2);
    }
  }
  // side accessory
  if (weaponId === 'ar' || weaponId === 'smg' || weaponId === 'lmg') {
    add(box(0.02, 0.03, 0.13, darkMat), 0.052, 0.02, -0.24);
    add(box(0.012, 0.012, 0.04, accentMat), 0.052, 0.02, -0.32);
  }
  if (weaponId === 'shotgun') {
    add(box(0.04, 0.032, 0.2, darkMat), 0, -0.055, -0.29);
    add(box(0.044, 0.012, 0.07, accentMat), 0, -0.04, -0.24);
  }
  if (weaponId === 'lmg') {
    add(box(0.045, 0.2, 0.055, darkMat), 0, -0.16, 0.22, 0.1);
  }
  // muzzle anchor
  const muzzle = new THREE.Object3D();
  muzzle.position.set(0, 0.012, -0.47 * long - barrelLen + 0.04);
  g.add(muzzle);
  g.userData.muzzle = muzzle;

  // gloved hands (not for tiny preview-only builds)
  if (opts.hands !== false) {
    const right = cap(0.038, 0.1, gloveMat);
    right.rotation.z = 1.2;
    right.rotation.x = 0.2;
    add(right, 0.028, -0.16, 0.2);
    const left = cap(0.036, 0.1, gloveMat);
    left.rotation.z = 1.45;
    left.rotation.y = 0.2;
    add(left, -0.035, -0.055, -0.35 * long);
    // knuckle accent
    add(box(0.03, 0.02, 0.05, accentMat), 0.05, -0.12, 0.16, 0, 0, 0.4);
  }

  g.userData.isWeaponModel = true;
  g.userData.dispose = () => {
    pattern?.dispose();
    const mats = new Set();
    g.traverse((o) => { if (o.material) mats.add(o.material); });
    mats.forEach((m) => m.dispose());
  };
  return g;
}
const WEAPONS_CACHE = {};

export function registerWeaponData(defs) {
  Object.assign(WEAPONS_CACHE, defs);
}

// ─── operator model ──────────────────────────────────────────────────────────
const TEAM_BLUE = new THREE.Color(0x4dc5ff);
const TEAM_RED = new THREE.Color(0xff5a4d);

export function buildOperatorModel(character, team = 'blue', opts = {}) {
  const c = character;
  const suit = M(c.colors.suit, { rough: 0.82, metal: 0.1 });
  const suitDark = M(new THREE.Color(c.colors.suit).multiplyScalar(0.55), { rough: 0.9, metal: 0.05 });
  const accent = M(c.colors.accent, { rough: 0.45, metal: 0.4, emissive: c.colors.accent, emissiveIntensity: 0.25 });
  const skin = M(c.colors.skin, { rough: 0.88, metal: 0.02 });
  const visor = new THREE.MeshStandardMaterial({ color: c.colors.visor, emissive: c.colors.visor, emissiveIntensity: 1.1, roughness: 0.15, metalness: 0.6 });
  const teamCol = team === 'blue' ? TEAM_BLUE : TEAM_RED;
  const teamMat = M(teamCol, { rough: 0.45, metal: 0.35, emissive: teamCol, emissiveIntensity: 0.45 });
  const black = M(0x15171b, { rough: 0.75, metal: 0.2 });

  const root = new THREE.Group();
  root.name = `operator-${c.id}`;
  const body = new THREE.Group();
  root.add(body);

  const isHeavy = c.id === 'bastion';
  const isSlim = c.id === 'wraith';
  const scale = isHeavy ? 1.08 : isSlim ? 0.97 : 1;
  body.scale.setScalar(scale);

  // legs
  const leftLeg = new THREE.Group();
  const rightLeg = new THREE.Group();
  leftLeg.position.set(-0.13, 0.93, 0);
  rightLeg.position.set(0.13, 0.93, 0);
  const legGeo = box(0.17, 0.8, 0.19, suit);
  legGeo.position.y = -0.4;
  const knee = box(0.18, 0.17, 0.21, suitDark);
  knee.position.set(0, -0.3, -0.03);
  const boot = box(0.19, 0.14, 0.28, black);
  boot.position.set(0, -0.8, -0.04);
  leftLeg.add(legGeo.clone(), knee.clone(), boot.clone());
  rightLeg.add(legGeo.clone(), knee.clone(), boot.clone());
  body.add(leftLeg, rightLeg);

  // hips + belt
  const hips = box(0.44, 0.24, 0.28, suitDark);
  hips.position.y = 1.0;
  body.add(hips);
  const belt = box(0.46, 0.07, 0.3, black);
  belt.position.y = 1.1;
  body.add(belt);
  const buckle = box(0.08, 0.05, 0.02, accent);
  buckle.position.set(0, 1.1, -0.16);
  body.add(buckle);

  // torso
  const torso = box(0.47, 0.52, 0.28, suit);
  torso.position.y = 1.38;
  body.add(torso);
  const chest = box(0.42, 0.34, 0.1, isHeavy ? suitDark : suitDark);
  chest.position.set(0, 1.42, -0.19);
  body.add(chest);
  const chestStrip = box(0.1, 0.24, 0.02, teamMat);
  chestStrip.position.set(-0.14, 1.4, -0.25);
  body.add(chestStrip);
  const chestLight = box(0.06, 0.02, 0.02, accent);
  chestLight.position.set(0.12, 1.47, -0.25);
  body.add(chestLight);

  // backpack
  const pack = box(0.34, 0.38, 0.18, suitDark);
  pack.position.set(0, 1.39, 0.22);
  body.add(pack);
  const packTop = box(0.28, 0.06, 0.16, black);
  packTop.position.set(0, 1.6, 0.22);
  body.add(packTop);

  // shoulders
  const shoulderL = box(0.2, 0.2, 0.26, isHeavy ? suitDark : suit);
  shoulderL.position.set(-0.32, 1.5, 0);
  shoulderL.rotation.z = 0.12;
  const shoulderR = shoulderL.clone();
  shoulderR.position.x = 0.32;
  shoulderR.rotation.z = -0.12;
  body.add(shoulderL, shoulderR);
  if (isHeavy) {
    const padL = box(0.21, 0.1, 0.3, accent);
    padL.position.set(-0.33, 1.61, 0);
    padL.rotation.z = 0.14;
    const padR = padL.clone();
    padR.position.x = 0.33;
    padR.rotation.z = -0.14;
    body.add(padL, padR);
  }

  // arms posed holding rifle
  const armL = new THREE.Group();
  const armR = new THREE.Group();
  armL.position.set(-0.32, 1.48, 0);
  armR.position.set(0.32, 1.48, 0);
  const upperL = box(0.15, 0.36, 0.16, suit);
  upperL.position.set(-0.01, -0.16, -0.04);
  upperL.rotation.x = -0.7;
  const foreL = box(0.13, 0.34, 0.14, suitDark);
  foreL.position.set(-0.06, -0.36, -0.26);
  foreL.rotation.x = -1.0;
  const upperR = upperL.clone();
  upperR.position.set(0.01, -0.16, -0.04);
  const foreR = foreL.clone();
  foreR.position.set(0.09, -0.36, -0.24);
  const gloveL = box(0.12, 0.1, 0.14, black);
  gloveL.position.set(-0.06, -0.5, -0.4);
  const gloveR = box(0.12, 0.1, 0.14, black);
  gloveR.position.set(0.1, -0.5, -0.38);
  armL.add(upperL, foreL, gloveL);
  armR.add(upperR, foreR, gloveR);
  body.add(armL, armR);

  // head + helmet / hood
  const neck = box(0.16, 0.1, 0.16, skin);
  neck.position.y = 1.68;
  body.add(neck);
  const head = box(0.27, 0.29, 0.27, skin);
  head.position.y = 1.84;
  body.add(head);
  const jaw = box(0.28, 0.09, 0.24, black);
  jaw.position.set(0, 1.73, -0.02);
  body.add(jaw);

  if (c.id === 'specter') {
    const hood = new THREE.Mesh(new THREE.ConeGeometry(0.3, 0.4, 6, 1, true), suitDark);
    hood.position.set(0, 1.94, 0.02);
    body.add(hood);
    const mask = box(0.24, 0.13, 0.05, black);
    mask.position.set(0, 1.8, -0.15);
    body.add(mask);
  } else if (c.id === 'bastion') {
    const helm = box(0.36, 0.22, 0.36, suitDark);
    helm.position.y = 1.97;
    body.add(helm);
    const brim = box(0.4, 0.05, 0.38, accent);
    brim.position.y = 1.9;
    body.add(brim);
  } else if (c.id === 'wraith') {
    const scarf = box(0.34, 0.13, 0.06, accent);
    scarf.position.set(0, 1.73, -0.14);
    scarf.rotation.z = 0.08;
    body.add(scarf);
    const hood = box(0.32, 0.14, 0.32, suitDark);
    hood.position.y = 1.98;
    body.add(hood);
  } else {
    const helm = box(0.31, 0.18, 0.32, suitDark);
    helm.position.set(0, 1.98, 0.01);
    body.add(helm);
    const antenna = cyl(0.008, 0.008, 0.22, 5, black);
    antenna.position.set(0.14, 2.12, 0.06);
    body.add(antenna);
    const tip = sphere(0.018, 6, teamMat);
    tip.position.set(0.14, 2.24, 0.06);
    body.add(tip);
  }

  // visor
  const visorMesh = box(0.23, 0.075, 0.025, visor);
  visorMesh.position.set(0, 1.86, -0.142);
  body.add(visorMesh);

  // team armband
  const band = box(0.155, 0.06, 0.17, teamMat);
  band.position.set(-0.33, 1.42, 0);
  body.add(band);

  // sidearm holster
  const holster = box(0.08, 0.16, 0.08, black);
  holster.position.set(0.25, 1.01, 0.05);
  body.add(holster);

  // rifle (simplified, no hands)
  const gun = buildWeaponModel('ar', null, { hands: false });
  gun.scale.setScalar(0.82);
  gun.position.set(0.1, 1.17, -0.46);
  gun.rotation.set(0, 0, 0);
  body.add(gun);

  root.userData.parts = { leftLeg, rightLeg, armL, armR, body, head, gun };
  root.userData.team = team;
  root.userData.character = c.id;
  root.userData.phase = Math.random() * Math.PI * 2;
  return root;
}

export function animateOperator(model, t, moveSpeed = 0, dead = false) {
  const p = model.userData.parts;
  if (!p) return;
  if (dead) {
    model.rotation.z += (Math.PI / 2 - model.rotation.z) * 0.12;
    model.position.y += (0.25 - model.position.y) * 0.12;
    return;
  }
  const amp = Math.min(1, moveSpeed / 4.5);
  p.phase = (model.userData.phase += 0.001) % 1;
  const swing = Math.sin(t * 9 + model.userData.phase * 10) * 0.55 * amp;
  p.leftLeg.rotation.x = swing;
  p.rightLeg.rotation.x = -swing;
  p.armL.rotation.x = -swing * 0.18;
  p.armR.rotation.x = swing * 0.18;
  p.body.position.y = Math.abs(Math.sin(t * 9)) * 0.025 * amp;
  p.body.rotation.z = Math.sin(t * 4.5) * 0.012 * amp;
}

export function makeNameSprite(text, color = '#7ddf8f', ally = true) {
  const c = document.createElement('canvas');
  c.width = 256; c.height = 64;
  const g = c.getContext('2d');
  g.clearRect(0, 0, 256, 64);
  g.font = '600 26px Rajdhani, sans-serif';
  g.textAlign = 'center';
  g.fillStyle = 'rgba(5,8,12,0.66)';
  g.fillRect(20, 10, 216, 40);
  g.fillStyle = color;
  g.fillText(text, 128, 39);
  if (ally) {
    g.fillStyle = color;
    g.fillRect(20, 50, 216, 3);
  }
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  const mat = new THREE.SpriteMaterial({ map: tex, transparent: true, depthWrite: false, depthTest: false });
  const sprite = new THREE.Sprite(mat);
  sprite.scale.set(1.9, 0.48, 1);
  sprite.position.y = 2.35;
  sprite.renderOrder = 5;
  return sprite;
}

export function makeSkyTexture() {
  const c = document.createElement('canvas');
  c.width = 16; c.height = 256;
  const g = c.getContext('2d');
  const grad = g.createLinearGradient(0, 0, 0, 256);
  grad.addColorStop(0, '#ffffff');
  grad.addColorStop(0.5, '#dddddd');
  grad.addColorStop(1, '#000000');
  g.fillStyle = grad;
  g.fillRect(0, 0, 16, 256);
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}
