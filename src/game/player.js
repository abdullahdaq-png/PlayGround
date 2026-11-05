import * as THREE from 'three';
import { WEAPONS, CHARACTER_MAP, SKIN_MAP, damageAt } from '../data.js';
import { buildWeaponModel } from './models.js';
import { audio } from '../core/audio.js';

const DEG = Math.PI / 180;

export class Player {
  constructor(game, characterId, primaryId, secondaryId, skins) {
    this.game = game;
    this.world = game.world;
    this.camera = game.camera;
    this.isPlayer = true;
    this.team = 'blue';
    this.name = 'SEN';
    this.character = CHARACTER_MAP[characterId] || CHARACTER_MAP.vanguard;
    this.primaryId = primaryId in WEAPONS ? primaryId : 'ar';
    this.secondaryId = secondaryId in WEAPONS ? secondaryId : 'pistol';
    this.skins = skins || {};
    this.maxHealth = this.character.stats.health;
    this.health = this.maxHealth;
    this.overshield = 0;
    this.alive = true;
    this.radius = 0.42;

    this.pos = new THREE.Vector3();
    this.vel = new THREE.Vector3();
    this.vy = 0;
    this.onGround = true;
    this.yaw = 0;
    this.pitch = 0;
    this.eye = 1.66;
    this.eyeTarget = 1.66;
    this.crouching = false;
    this.sprinting = false;
    this.adsT = 0;
    this.scoped = false;
    this.bobT = 0;
    this.stepT = 0;

    this.slot = 0;
    this.cooldown = 0;
    this.reloading = false;
    this.reloadT = 0;
    this.reloadTotal = 1;
    this.switchT = 0;
    this.triggerHeld = false;

    this.recoilPitch = 0;
    this.recoilYaw = 0;
    this.kick = 0;
    this.swayX = 0;
    this.swayY = 0;

    this.abilityCd = 0;
    this.abilityActive = 0;
    this.rushT = 0;
    this.shieldT = 0;
    this.evadeT = 0;
    this.lastDamage = 99;
    this.streak = 0;
    this.kills = 0;
    this.deaths = 0;
    this.assists = 0;
    this.damageDealt = 0;
    this.headshots = 0;
    this.deadT = 0;

    this.ammo = {};
    for (const id of [this.primaryId, this.secondaryId]) {
      const d = WEAPONS[id];
      this.ammo[id] = { mag: d.mag, reserve: d.reserve };
    }

    this.viewGroup = new THREE.Group();
    this.viewGroup.name = 'viewmodel';
    this.camera.add(this.viewGroup);
    this.viewmodels = [];
    this.buildViewmodels();

    this.sensitivity = 1;
    this.baseFov = game.baseFov;
    this.currentFov = this.baseFov;
    this.aimAssistEnabled = game.isTouch;
  }

  get weaponId() { return this.slot === 0 ? this.primaryId : this.secondaryId; }
  get weaponDef() { return WEAPONS[this.weaponId]; }
  get ammoState() { return this.ammo[this.weaponId]; }
  get activeView() { return this.viewmodels[this.slot]; }
  get charHealthRatio() { return this.health / this.maxHealth; }

  buildViewmodels() {
    this.viewGroup.clear();
    this.viewmodels = [];
    [this.primaryId, this.secondaryId].forEach((id) => {
      const def = WEAPONS[id];
      const skinId = this.skins[id];
      const skin = skinId ? SKIN_MAP[skinId] : null;
      const holder = new THREE.Group();
      const model = buildWeaponModel(id, skin);
      model.scale.setScalar(id === 'pistol' ? 0.9 : 0.92);
      model.traverse((o) => {
        if (o.isMesh) { o.castShadow = false; o.receiveShadow = false; o.renderOrder = 5; o.frustumCulled = false; }
      });
      holder.add(model);
      this.viewGroup.add(holder);
      // muzzle flash sprite
      const flashMat = new THREE.SpriteMaterial({ map: this.game.fx.glowTex, color: 0xffc070, transparent: true, opacity: 1, depthTest: false, depthWrite: false, blending: THREE.AdditiveBlending });
      const flash = new THREE.Sprite(flashMat);
      flash.scale.setScalar(0.28);
      flash.visible = false;
      model.userData.muzzle.add(flash);
      holder.userData = { weaponId: id, def, model, flash, skin };
      this.viewmodels.push(holder);
    });
    this.setViewmodelForSlot();
  }

  setViewmodelForSlot() {
    this.viewmodels.forEach((v, i) => { v.visible = i === this.slot; });
    const active = this.activeView;
    if (active) this.game.fx.attachMuzzle(active.userData.flash);
  }

  spawn(pos, yaw = 0) {
    this.pos.copy(pos);
    this.vel.set(0, 0, 0);
    this.vy = 0;
    this.yaw = yaw;
    this.pitch = 0;
    this.health = this.maxHealth;
    this.overshield = 0;
    this.shieldT = 0;
    this.alive = true;
    this.crouching = false;
    this.sprinting = false;
    this.adsT = 0;
    this.scoped = false;
    this.reloading = false;
    this.reloadT = 0;
    this.cooldown = 0;
    this.switchT = 0;
    this.lastDamage = 99;
    this.rushT = 0;
    this.evadeT = 0;
    this.abilityCd = 0;
    for (const id of [this.primaryId, this.secondaryId]) {
      const d = WEAPONS[id];
      this.ammo[id] = { mag: d.mag, reserve: d.reserve };
    }
    this.viewGroup.visible = true;
    this.setViewmodelForSlot();
    this.updateCamera(0);
  }

  update(dt) {
    if (!this.alive) {
      this.deadT -= dt;
      return;
    }
    this.lastDamage += dt;
    this.cooldown -= dt;
    this.switchT -= dt;
    this.abilityCd = Math.max(0, this.abilityCd - dt);
    this.rushT = Math.max(0, this.rushT - dt);
    this.evadeT = Math.max(0, this.evadeT - dt);
    this.shieldT = Math.max(0, this.shieldT - dt);
    if (this.shieldT <= 0 && this.overshield > 0) this.overshield = Math.max(0, this.overshield - dt * 18);
    this.abilityActive = Math.max(0, this.abilityActive - dt);
    if (this.lastDamage > 5 && this.health < this.maxHealth) {
      this.health = Math.min(this.maxHealth, this.health + dt * 15);
    }

    const input = this.game.input;
    const sens = 0.0021 * input.sensitivity * (this.adsT > 0.5 ? 0.62 : 1);
    this.yaw -= input.mouse.dx * sens;
    this.pitch -= input.mouse.dy * sens;
    this.pitch = Math.max(-1.45, Math.min(1.45, this.pitch));
    this.swayX += (input.mouse.dx * 0.0014 - this.swayX) * Math.min(1, dt * 10);
    this.swayY += (input.mouse.dy * 0.0014 - this.swayY) * Math.min(1, dt * 10);

    const forward = (input.keys.has('KeyW') ? 1 : 0) - (input.keys.has('KeyS') ? 1 : 0);
    const strafe = (input.keys.has('KeyD') ? 1 : 0) - (input.keys.has('KeyA') ? 1 : 0);
    let mx = strafe, mz = forward;
    if (input.touch) {
      mx += input.touchState.moveX;
      mz += input.touchState.moveY;
    }
    const moveLen = Math.hypot(mx, mz);
    if (moveLen > 1) { mx /= moveLen; mz /= moveLen; }

    this.crouching = input.keys.has('ControlLeft') || input.keys.has('ControlRight');
    this.sprinting = (input.keys.has('ShiftLeft') || input.keys.has('ShiftRight') || (input.touch && Math.hypot(input.touchState.moveX, input.touchState.moveY) > 0.94)) && mz > 0.2 && !this.crouching && !this.reloading;

    const wantAds = input.aiming && !this.sprinting && !this.reloading && this.switchT < 0.1;
    const adsSpeed = (1 / Math.max(0.08, this.weaponDef.adsTime)) * this.character.stats.ads;
    this.adsT += ((wantAds ? 1 : 0) - this.adsT) * Math.min(1, dt * 14 * adsSpeed);
    this.adsT = Math.max(0, Math.min(1, this.adsT));
    this.scoped = this.weaponId === 'sniper' && this.adsT > 0.86;

    const charSpeed = this.character.stats.speed;
    let speed = 5.5 * charSpeed;
    if (this.sprinting) speed *= 1.5;
    if (this.crouching) speed *= 0.52;
    if (this.adsT > 0.5) speed *= this.weaponDef.adsMove;
    if (this.rushT > 0) speed *= 1.3;

    const sin = Math.sin(this.yaw), cos = Math.cos(this.yaw);
    const wishX = (mx * cos - mz * sin) * speed;
    const wishZ = (-mx * sin - mz * cos) * speed;
    const accel = this.onGround ? 13 : 3.5;
    this.vel.x += (wishX - this.vel.x) * Math.min(1, dt * accel);
    this.vel.z += (wishZ - this.vel.z) * Math.min(1, dt * accel);

    if (this.onGround && input.keys.has('Space')) {
      this.vy = 5.6;
      this.onGround = false;
      audio.ui('click');
    }
    this.vy -= 20 * dt;
    this.pos.y += this.vy * dt;
    if (this.pos.y <= 0) { this.pos.y = 0; this.vy = 0; this.onGround = true; }

    this.world.moveCircle(this.pos, this.radius, this.vel.x * dt, this.vel.z * dt);

    const horiz = Math.hypot(this.vel.x, this.vel.z);
    if (this.onGround && horiz > 0.4) {
      this.bobT += dt * horiz * 1.75;
      this.stepT -= dt * horiz;
      if (this.stepT <= 0) { this.stepT = 3.4; }
    }
    this.eyeTarget = this.crouching ? 1.06 : 1.66;
    this.eye += (this.eyeTarget - this.eye) * Math.min(1, dt * 11);

    this.recoilPitch *= Math.exp(-9 * dt);
    this.recoilYaw *= Math.exp(-9 * dt);
    this.kick *= Math.exp(-10 * dt);

    if (input.consume('KeyR')) this.startReload();
    if (input.consume('Digit1')) this.switchWeapon(0);
    if (input.consume('Digit2')) this.switchWeapon(1);
    if (input.consume('KeyF')) this.switchWeapon(this.slot === 0 ? 1 : 0);
    if (input.consume('KeyQ')) this.useAbility();

    if (this.reloading) {
      this.reloadT -= dt;
      if (this.reloadT <= 0) this.finishReload();
    }

    // firing
    const wantFire = input.firing && !this.sprinting && !this.reloading && this.switchT <= 0;
    if (wantFire) {
      if (this.ammoState.mag <= 0) {
        if (!this.reloading) this.startReload();
      } else if (this.cooldown <= 0 && (this.weaponDef.auto || !this.triggerHeld)) {
        this.shoot();
      }
    }
    this.triggerHeld = input.firing;

    this.updateCamera(dt);
    this.updateViewmodel(dt, horiz);
    this.game.hud?.updatePlayer(this);
  }

  updateCamera(dt) {
    const bobAmp = this.sprinting ? 1.25 : 1;
    const bobX = Math.cos(this.bobT) * 0.018 * bobAmp;
    const bobY = Math.abs(Math.sin(this.bobT * 2)) * 0.022 * bobAmp;
    this.camera.position.set(this.pos.x + bobX, this.pos.y + this.eye + bobY, this.pos.z);
    const roll = -this.vel.x * 0.0016 + Math.sin(this.bobT) * 0.002;
    this.camera.rotation.set(this.pitch + this.recoilPitch, this.yaw + this.recoilYaw, roll, 'YXZ');
    const targetFov = this.scoped ? 30 : this.adsT > 0.05 ? this.baseFov - this.adsT * (this.baseFov - (this.weaponId === 'sniper' ? 38 : 55)) : this.baseFov;
    this.currentFov += (targetFov - this.currentFov) * Math.min(1, (dt || 1) * 16);
    if (Math.abs(this.camera.fov - this.currentFov) > 0.01) {
      this.camera.fov = this.currentFov;
      this.camera.updateProjectionMatrix();
    }
  }

  updateViewmodel(dt, horiz) {
    const view = this.activeView;
    if (!view) return;
    const def = view.userData.def;
    const isSniperScoped = this.scoped;
    view.visible = !isSniperScoped;
    const ads = this.adsT;
    const gun = view.userData.model;
    const adsPos = def.id === 'pistol' ? [0.0, -0.09, -0.32] : [0, -0.117, -0.40];
    const hipPos = [0.245, -0.235, -0.52];
    const swayScale = 1 - ads * 0.7;
    const walk = Math.sin(this.bobT) * 0.012 * (1 - ads * 0.6);
    const walkY = Math.abs(Math.cos(this.bobT * 2)) * 0.012 * (1 - ads * 0.6);
    const baseX = hipPos[0] + (adsPos[0] - hipPos[0]) * ads;
    const baseY = hipPos[1] + (adsPos[1] - hipPos[1]) * ads;
    const baseZ = hipPos[2] + (adsPos[2] - hipPos[2]) * ads;
    const reloadDip = this.reloading ? Math.sin(Math.min(1, (1 - this.reloadT / this.reloadTotal) * Math.PI)) * 0.16 : 0;
    const switchDip = Math.max(0, this.switchT) * 0.55;
    view.position.set(
      baseX + walk + this.swayX * 0.3 * swayScale,
      baseY + walkY - reloadDip - switchDip + this.swayY * 0.14 * swayScale - this.kick * 0.06,
      baseZ + this.kick * 0.16
    );
    view.rotation.set(
      this.kick * 0.5 + (this.reloading ? 0.35 : 0) + (ads ? 0 : 0.015),
      -0.045 + (ads ? 0 : 0.03) + this.swayX * 0.5 * swayScale,
      (this.reloading ? 0.5 : 0) + (ads ? 0 : -0.02)
    );
    // subtle idle breathing
    view.position.y += Math.sin(performance.now() * 0.0011) * 0.0035 * (1 - ads * 0.8);
    if (isSniperScoped) this.game.hud?.setScoped(true);
    else this.game.hud?.setScoped(false);
  }

  switchWeapon(slot) {
    if (slot === this.slot || this.switchT > 0.15) return;
    this.slot = slot;
    this.reloading = false;
    this.reloadT = 0;
    this.adsT = 0;
    this.switchT = 0.38;
    this.setViewmodelForSlot();
    audio.ui('click');
    this.game.hud?.refreshWeapon(this);
  }

  startReload() {
    const def = this.weaponDef;
    const state = this.ammoState;
    if (this.reloading || state.mag >= def.mag || state.reserve <= 0) return;
    this.reloading = true;
    const rushBonus = this.rushT > 0 ? 1.25 : 1;
    this.reloadTotal = def.reload / (this.character.stats.reload * rushBonus);
    this.reloadT = this.reloadTotal;
    this.adsT = 0;
    audio.reload(this.reloadTotal);
    this.game.hud?.refreshWeapon(this);
  }

  finishReload() {
    const def = this.weaponDef;
    const state = this.ammoState;
    const need = def.mag - state.mag;
    const take = Math.min(need, state.reserve);
    state.mag += take;
    state.reserve -= take;
    this.reloading = false;
    this.game.hud?.refreshWeapon(this);
  }

  shoot() {
    const def = this.weaponDef;
    const ammo = this.ammoState;
    if (ammo.mag <= 0) return;
    ammo.mag -= 1;
    this.cooldown = 60 / def.rpm;
    const moving = Math.hypot(this.vel.x, this.vel.z);
    const spreadDeg = (def.hipSpread + (def.adsSpread - def.hipSpread) * this.adsT)
      + (Math.min(1.8, moving / 5.4) * def.moveSpread * (this.adsT > 0.5 ? 0.35 : 1))
      + (this.onGround ? 0 : 1.6)
      + (this.crouching ? -0.18 : 0);
    const spreadRad = Math.max(0.001, spreadDeg) * DEG;
    const recoilScale = (this.adsT > 0.5 ? 0.55 : 1) * (this.crouching ? 0.8 : 1);
    this.recoilPitch += def.recoil * DEG * (0.8 + Math.random() * 0.35) * recoilScale;
    this.recoilYaw += (Math.random() - 0.5) * def.recoilYaw * DEG * recoilScale;
    this.kick = Math.min(1.2, this.kick + 0.55);
    this.streak = 0;
    audio.shoot(def.id, 0, 0);
    this.game.fx.flash(this.weaponId === 'sniper' ? 0xffe0b0 : 0xffc070);
    this.game.hud?.crosshairKick(spreadDeg + 0.5);

    const camPos = new THREE.Vector3();
    this.camera.getWorldPosition(camPos);
    const muzzle = new THREE.Vector3();
    const active = this.activeView;
    active?.userData.model.userData.muzzle.getWorldPosition(muzzle);

    for (let p = 0; p < def.pellets; p++) {
      let dir = this.getAimDirection();
      if (this.aimAssistEnabled) dir = this.game.aimAssist(camPos, dir);
      const angle = Math.random() * Math.PI * 2;
      const radius = Math.sqrt(Math.random()) * spreadRad;
      const up = new THREE.Vector3(0, 1, 0);
      const right = new THREE.Vector3().crossVectors(dir, up).normalize();
      const trueUp = new THREE.Vector3().crossVectors(right, dir).normalize();
      dir.addScaledVector(right, Math.cos(angle) * radius).addScaledVector(trueUp, Math.sin(angle) * radius).normalize();
      const res = this.game.combat.hitscan(this, camPos, dir, def, { muzzle, tracer: true });
      this.shots = (this.shots || 0) + 1;
      if (res.hit) this.hits = (this.hits || 0) + 1;
    }
    this.game.hud?.refreshWeapon(this);
  }

  getAimDirection() {
    const euler = new THREE.Euler(this.pitch + this.recoilPitch, this.yaw + this.recoilYaw, 0, 'YXZ');
    return new THREE.Vector3(0, 0, -1).applyEuler(euler).normalize();
  }

  useAbility() {
    if (this.abilityCd > 0 || !this.alive) return;
    const ab = this.character.ability;
    this.abilityCd = ab.cooldown;
    this.abilityActive = ab.duration;
    audio.ability();
    if (ab.type === 'rush') { this.rushT = ab.duration; this.game.ui.abilityFlash('HÜCUM AKTİF', '#37e0c8'); }
    if (ab.type === 'scan') { this.game.revealT = ab.duration; this.game.ui.abilityFlash('NABIZ TARAMASI', '#b06bff'); }
    if (ab.type === 'shield') { this.overshield = 55; this.shieldT = ab.duration; this.game.ui.abilityFlash('SİPER AKTİF', '#ffc857'); }
    if (ab.type === 'smoke') { this.evadeT = ab.duration; this.game.ui.abilityFlash('SİS PERDESİ', '#ff4f8b'); }
    this.game.hud?.refreshAbility(this);
  }

  takeDamage(amount, attacker, headshot = false, weaponId = 'ar') {
    if (!this.alive || amount <= 0) return false;
    let dmg = amount;
    if (this.evadeT > 0) dmg *= 0.65;
    this.lastDamage = 0;
    if (this.overshield > 0) {
      const absorb = Math.min(this.overshield, dmg);
      this.overshield -= absorb;
      dmg -= absorb;
    }
    this.health -= dmg;
    audio.damage();
    this.game.onPlayerDamaged(attacker, dmg, headshot);
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
    this.deaths += 1;
    this.streak = 0;
    this.deadT = 4.2;
    this.viewGroup.visible = false;
    this.reloading = false;
    this.sprinting = false;
    this.adsT = 0;
    this.game.onPlayerDeath(attacker, weaponId, headshot);
  }

  respawn(pos, yaw) {
    this.spawn(pos, yaw);
    this.game.hud?.refreshAll(this);
  }

  getHitCapsule() {
    return {
      a: new THREE.Vector3(this.pos.x, this.pos.y + 0.55, this.pos.z),
      b: new THREE.Vector3(this.pos.x, this.pos.y + 1.42, this.pos.z),
      head: new THREE.Vector3(this.pos.x, this.pos.y + this.eye - 0.06, this.pos.z),
      radius: 0.36,
      headRadius: 0.25,
    };
  }
}
