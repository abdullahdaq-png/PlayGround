import * as THREE from 'three';
import { CHARACTERS, WEAPONS, damageAt } from '../data.js';
import { buildOperatorModel, animateOperator, makeNameSprite } from './models.js';
import { audio } from '../core/audio.js';

const DEG = Math.PI / 180;

export class Bot {
  constructor(game, config) {
    this.game = game;
    this.world = game.world;
    this.isBot = true;
    this.name = config.name;
    this.team = config.team;
    this.character = config.character;
    this.weaponDef = WEAPONS[config.weapon];
    this.weaponId = config.weapon;
    this.skill = config.skill ?? 0.55;
    this.maxHealth = this.character.stats.health;
    this.health = this.maxHealth;
    this.overshield = 0;
    this.alive = true;
    this.radius = 0.42;
    this.pos = new THREE.Vector3();
    this.vel = new THREE.Vector3();
    this.yaw = 0;
    this.ammo = this.weaponDef.mag;
    this.reserve = this.weaponDef.reserve;
    this.reloadT = 0;
    this.fireCd = 0;
    this.burst = 0;
    this.burstPause = 0;
    this.reaction = 0;
    this.target = null;
    this.canSee = false;
    this.lastSeen = new THREE.Vector3();
    this.hasLastSeen = false;
    this.losT = Math.random() * 0.2;
    this.roam = null;
    this.strafe = Math.random() > 0.5 ? 1 : -1;
    this.strafeT = 0;
    this.stuckT = 0;
    this.lastPos = new THREE.Vector3();
    this.deadT = 0;
    this.kills = 0;
    this.deaths = 0;
    this.damageDealt = 0;
    this.abilityCd = 6 + Math.random() * 20;
    this.damagers = [];
    this.flash = Math.random() * 6;

    this.model = buildOperatorModel(this.character, this.team);
    this.model.position.copy(this.pos);
    game.scene.add(this.model);
    this.nameplate = null;
    if (this.team === 'blue') {
      this.nameplate = makeNameSprite(this.name, '#7ee7ff', true);
      this.nameplate.scale.set(1.7, 0.42, 1);
      this.model.add(this.nameplate);
    }
    this.ring = new THREE.Mesh(
      new THREE.RingGeometry(0.42, 0.52, 24),
      new THREE.MeshBasicMaterial({ color: this.team === 'blue' ? 0x4dc5ff : 0xff5a4d, transparent: true, opacity: 0.55, side: THREE.DoubleSide, depthWrite: false })
    );
    this.ring.rotation.x = -Math.PI / 2;
    this.ring.position.y = 0.03;
    this.model.add(this.ring);
  }

  spawn(pos, yaw = 0) {
    this.pos.copy(pos);
    this.pos.y = 0;
    this.vel.set(0, 0, 0);
    this.yaw = yaw;
    this.health = this.maxHealth;
    this.overshield = 0;
    this.alive = true;
    this.ammo = this.weaponDef.mag;
    this.reserve = this.weaponDef.reserve;
    this.reloadT = 0;
    this.fireCd = 0.3 + Math.random() * 0.4;
    this.reaction = 0;
    this.target = null;
    this.canSee = false;
    this.hasLastSeen = false;
    this.roam = null;
    this.deadT = 0;
    this.model.rotation.set(0, yaw, 0);
    this.model.position.copy(this.pos);
    this.model.visible = true;
    this.model.position.y = 0;
    if (this.nameplate) this.nameplate.visible = true;
    this.ring.visible = true;
  }

  update(dt, elapsed) {
    if (!this.alive) {
      this.deadT -= dt;
      animateOperator(this.model, elapsed, 0, true);
      this.model.position.copy(this.pos);
      if (this.deadT <= 0) {
        this.game.respawnBot(this);
      }
      return;
    }
    this.fireCd -= dt;
    this.reaction -= dt;
    this.strafeT -= dt;
    this.losT -= dt;
    this.abilityCd -= dt;
    this.damagers = this.damagers.filter((d) => { d.t += dt; return d.t < 5; });
    if (this.health < this.maxHealth && !this.target) this.health = Math.min(this.maxHealth, this.health + dt * 9);

    if (this.losT <= 0) {
      this.losT = 0.18 + Math.random() * 0.1;
      this.updatePerception();
    }

    let moveX = 0;
    let moveZ = 0;
    let speed = 4.6 * this.character.stats.speed;
    if (this.rushT > 0) speed *= 1.3;
    let shooting = false;

    if (this.target && this.canSee) {
      const dist = this.pos.distanceTo(this.target.pos);
      const def = this.weaponDef;
      const pref = def.id === 'shotgun' ? 5 : def.id === 'smg' ? 9 : def.id === 'sniper' ? 32 : def.id === 'lmg' ? 17 : def.id === 'dmr' ? 24 : def.id === 'pistol' ? 10 : 15;
      // face target
      const dx = this.target.pos.x - this.pos.x;
      const dz = this.target.pos.z - this.pos.z;
      this.yaw = Math.atan2(-dx, -dz);
      // range keeping + strafe
      const tx = dx / (dist || 1);
      const tz = dz / (dist || 1);
      let advance = 0;
      if (dist > pref * 1.35) advance = 1;
      else if (dist < pref * 0.62) advance = -1;
      if (this.strafeT <= 0) { this.strafeT = 0.8 + Math.random() * 1.4; this.strafe = Math.random() > 0.5 ? 1 : -1; }
      const strafeScale = dist < 25 ? 0.85 : 0.35;
      moveX = tx * advance + -tz * this.strafe * strafeScale;
      moveZ = tz * advance + tx * this.strafe * strafeScale;
      speed *= this.weaponDef.id === 'sniper' || this.weaponDef.id === 'lmg' ? 0.72 : 1;
      if (dist < 4) speed *= 0.7;
      shooting = true;
    } else if (this.hasLastSeen) {
      const dx = this.lastSeen.x - this.pos.x;
      const dz = this.lastSeen.z - this.pos.z;
      const d = Math.hypot(dx, dz);
      if (d < 2.5) this.hasLastSeen = false;
      else { moveX = dx / d; moveZ = dz / d; }
      this.yaw = Math.atan2(-dx, -dz);
      speed *= 0.9;
    } else {
      // roam toward a random nav point biased to the enemy side
      if (!this.roam || Math.hypot(this.roam.x - this.pos.x, this.roam.z - this.pos.z) < 2.5 || this.stuckT > 1.1) {
        const candidates = this.world.nav.filter((n) => (this.team === 'blue' ? n.z < 25 : n.z > -25));
        this.roam = candidates[(Math.random() * candidates.length) | 0] || this.world.randomNav();
        this.stuckT = 0;
      }
      if (this.roam) {
        const dx = this.roam.x - this.pos.x;
        const dz = this.roam.z - this.pos.z;
        const d = Math.hypot(dx, dz) || 1;
        moveX = dx / d;
        moveZ = dz / d;
        this.yaw = Math.atan2(-dx, -dz);
      }
      speed *= 0.78;
    }

    // separation from allies
    for (const other of this.game.bots) {
      if (other === this || !other.alive) continue;
      const dx = this.pos.x - other.pos.x;
      const dz = this.pos.z - other.pos.z;
      const d2 = dx * dx + dz * dz;
      if (d2 < 2.4 && d2 > 0.001) {
        const d = Math.sqrt(d2);
        moveX += (dx / d) * (1.5 - d) * 0.7;
        moveZ += (dz / d) * (1.5 - d) * 0.7;
      }
    }

    const ml = Math.hypot(moveX, moveZ);
    if (ml > 1) { moveX /= ml; moveZ /= ml; }
    const wishX = moveX * speed;
    const wishZ = moveZ * speed;
    this.vel.x += (wishX - this.vel.x) * Math.min(1, dt * 9);
    this.vel.z += (wishZ - this.vel.z) * Math.min(1, dt * 9);
    const beforeX = this.pos.x, beforeZ = this.pos.z;
    this.world.moveCircle(this.pos, this.radius, this.vel.x * dt, this.vel.z * dt);
    const moved = Math.hypot(this.pos.x - beforeX, this.pos.z - beforeZ);
    if (moved < 0.001 && ml > 0.1) this.stuckT += dt * 2.4; else this.stuckT = Math.max(0, this.stuckT - dt);

    // aim & fire
    if (shooting && this.canSee) this.updateFire(dt);

    // low health ability
    if (this.abilityCd <= 0 && this.health < this.maxHealth * 0.4) {
      this.abilityCd = 26 + Math.random() * 10;
      if (this.character.id === 'bastion') { this.overshield = 45; this.overShieldT = 4; }
      if (this.character.id === 'wraith') this.evadeT = 3;
      if (this.character.id === 'vanguard') { this.rushT = 3; }
    }
    if (this.overshield > 0) { this.overShieldT -= dt; if (this.overShieldT <= 0) this.overshield = 0; }
    this.rushT = Math.max(0, (this.rushT || 0) - dt);
    this.evadeT = Math.max(0, (this.evadeT || 0) - dt);

    const speedNow = Math.hypot(this.vel.x, this.vel.z);
    animateOperator(this.model, elapsed, speedNow, false);
    this.model.position.set(this.pos.x, 0, this.pos.z);
    this.model.rotation.y = this.yaw;
    this.flash = Math.max(0, this.flash - dt);
    if (this.ring) this.ring.material.opacity = 0.4 + Math.sin(elapsed * 3 + this.flash) * 0.08;
    if (this.nameplate) {
      const dist = this.game.camera.position.distanceTo(this.model.position);
      this.nameplate.visible = dist < 42;
    }
  }

  updatePerception() {
    let best = null;
    let bestScore = Infinity;
    for (const other of this.game.getCombatants()) {
      if (!other.alive || other === this || other.team === this.team) continue;
      const cap = other.getHitCapsule();
      const eye = new THREE.Vector3(this.pos.x, this.pos.y + 1.55, this.pos.z);
      const chest = new THREE.Vector3(other.pos.x, other.pos.y + 1.15, other.pos.z);
      const dist = eye.distanceTo(chest);
      if (dist > 75) continue;
      const visible = this.world.los(eye, chest);
      let score = dist;
      if (other === this.target) score *= 0.65;
      if (visible) score *= 0.6;
      if (score < bestScore) { bestScore = score; best = { other, visible, chest }; }
    }
    if (best) {
      const switched = this.target !== best.other;
      this.target = best.other;
      this.canSee = best.visible;
      if (best.visible) {
        if (switched) this.reaction = Math.max(0.12, 0.38 - this.skill * 0.24);
        this.lastSeen.copy(best.other.pos);
        this.hasLastSeen = true;
      }
    } else {
      this.target = null;
      this.canSee = false;
    }
  }

  updateFire(dt) {
    if (!this.target || !this.target.alive) return;
    if (this.reloadT > 0) { this.reloadT -= dt; if (this.reloadT <= 0) { this.ammo = this.weaponDef.mag; this.reserve -= this.weaponDef.mag; } return; }
    if (this.ammo <= 0) {
      this.reloadT = this.weaponDef.reload * (0.95 + Math.random() * 0.2);
      this.ammo = 0;
      return;
    }
    if (this.reaction > 0 || this.burstPause > 0) { this.burstPause -= dt; return; }
    if (this.fireCd > 0) return;

    const targetPos = this.target.pos;
    const eye = new THREE.Vector3(this.pos.x, this.pos.y + 1.5, this.pos.z);
    const muzzle = new THREE.Vector3(
      this.pos.x - Math.sin(this.yaw) * 0.55,
      this.pos.y + 1.3,
      this.pos.z - Math.cos(this.yaw) * 0.55
    );
    const aim = new THREE.Vector3(
      targetPos.x + (Math.random() - 0.5) * 0.5,
      targetPos.y + (Math.random() > 0.82 ? 1.55 : 1.05),
      targetPos.z + (Math.random() - 0.5) * 0.5
    );
    const dir = aim.sub(muzzle).normalize();
    const dist = eye.distanceTo(new THREE.Vector3(targetPos.x, targetPos.y + 1.2, targetPos.z));
    const moving = Math.hypot(this.vel.x, this.vel.z) / 5;
    let spread = (1.15 - this.skill) * 0.07 + moving * 0.022 + Math.max(0, dist - 30) * 0.0007;
    if (this.target.isPlayer && this.target.evadeT > 0) spread *= 2.2;
    if (this.target.isPlayer && this.target.crouching) spread *= 0.88;
    const spreadRad = spread;
    const pellets = this.weaponDef.pellets;
    for (let i = 0; i < pellets; i++) {
      const d = dir.clone();
      d.x += (Math.random() - 0.5) * spreadRad * 2;
      d.y += (Math.random() - 0.5) * spreadRad * 2;
      d.z += (Math.random() - 0.5) * spreadRad * 2;
      d.normalize();
      this.game.combat.hitscan(this, muzzle, d, this.weaponDef, {
        muzzle, damageScale: 0.72, tracer: true,
      });
    }
    this.ammo -= 1;
    this.fireCd = 60 / this.weaponDef.rpm;
    this.damageDealt += this.weaponDef.damage * 0.72;
    this.flash = 0.1;
    this.burst += 1;
    const burstSize = this.weaponDef.auto ? 5 + ((Math.random() * 5) | 0) : 1;
    if (this.burst >= burstSize) {
      this.burst = 0;
      this.burstPause = this.weaponDef.auto ? 0.28 + Math.random() * 0.5 : 0.12;
      this.reaction = Math.max(this.reaction, 0.06);
    }
    // audio panning based on camera
    const rel = new THREE.Vector3().subVectors(this.pos, this.game.camera.position);
    const right = new THREE.Vector3(1, 0, 0).applyEuler(this.game.camera.rotation);
    const pan = Math.max(-1, Math.min(1, rel.dot(right) / 18));
    const camDist = rel.length();
    if (camDist < 70) audio.shoot(this.weaponId, pan, camDist);
    this.muzzleFlashFx(muzzle, dir);
  }

  muzzleFlashFx(muzzle, dir) {
    const p = muzzle.clone().addScaledVector(dir, 0.2);
    this.game.fx.impact(p, null, 0xffc070, false);
  }

  takeDamage(amount, attacker, headshot = false, weaponId = 'ar') {
    if (!this.alive) return false;
    let dmg = amount;
    if (this.evadeT > 0) dmg *= 0.65;
    if (this.overshield > 0) {
      const absorb = Math.min(this.overshield, dmg);
      this.overshield -= absorb;
      dmg -= absorb;
    }
    this.health -= dmg;
    this.flash = 0.12;
    if (attacker && attacker !== this) {
      const existing = this.damagers.find((d) => d.id === attacker.id);
      if (existing) existing.t = 0;
      else this.damagers.push({ id: attacker.id, attacker, t: 0 });
      if (this.damagers.length > 6) this.damagers.shift();
    }
    if (this.health <= 0) {
      this.die(attacker, weaponId, headshot);
      return true;
    }
    return false;
  }

  die(attacker, weaponId, headshot) {
    if (!this.alive) return;
    this.alive = false;
    this.health = 0;
    this.deadT = 4.2;
    this.deaths += 1;
    this.model.visible = true;
    if (this.nameplate) this.nameplate.visible = false;
    if (this.ring) this.ring.visible = false;
    this.game.onBotKilled(this, attacker, weaponId, headshot);
  }

  getHitCapsule() {
    return {
      a: new THREE.Vector3(this.pos.x, this.pos.y + 0.55, this.pos.z),
      b: new THREE.Vector3(this.pos.x, this.pos.y + 1.42, this.pos.z),
      head: new THREE.Vector3(this.pos.x, this.pos.y + 1.72, this.pos.z),
      radius: 0.38,
      headRadius: 0.24,
    };
  }

  dispose() {
    this.game.scene.remove(this.model);
    if (this.nameplate?.material?.map) this.nameplate.material.map.dispose();
    if (this.nameplate?.material) this.nameplate.material.dispose();
    if (this.ring?.geometry) this.ring.geometry.dispose();
    if (this.ring?.material) this.ring.material.dispose();
  }
}

export function makeRoster(game) {
  const names = game.botNames;
  const used = new Set();
  const pick = () => {
    let n = names[(Math.random() * names.length) | 0];
    let guard = 0;
    while (used.has(n) && guard++ < 40) n = names[(Math.random() * names.length) | 0];
    used.add(n);
    return n;
  };
  const chars = CHARACTERS;
  const botChars = () => chars[(Math.random() * chars.length) | 0];
  const weapons = ['ar', 'smg', 'shotgun', 'sniper', 'lmg', 'dmr'];
  const bots = [];
  // 4 allies
  for (let i = 0; i < 4; i++) {
    bots.push({ name: pick(), team: 'blue', character: botChars(), weapon: weapons[(Math.random() * weapons.length) | 0], skill: 0.46 + Math.random() * 0.24 });
  }
  // 5 enemies
  for (let i = 0; i < 5; i++) {
    bots.push({ name: pick(), team: 'red', character: botChars(), weapon: weapons[(Math.random() * weapons.length) | 0], skill: 0.48 + Math.random() * 0.24 });
  }
  return bots;
}
