import * as THREE from 'three';
import { MAP_MAP, BOT_NAMES, WEAPON_ORDER, SKIN_MAP, CHARACTER_MAP } from '../data.js';
import { World } from './world.js';
import { FX } from './fx.js';
import { Combat } from './combat.js';
import { Player } from './player.js';
import { Bot, makeRoster } from './bots.js';
import { audio } from '../core/audio.js';
import { addXp, saveProfile } from '../core/storage.js';

const MATCH_TARGET = 50;
const MATCH_TIME = 360;

function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = (Math.random() * (i + 1)) | 0;
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export class Match {
  constructor(app, mapId) {
    this.app = app;
    this.profile = app.profile;
    this.ui = app.ui;
    this.hud = app.hud;
    this.input = app.input;
    this.isTouch = app.input.touch;
    this.mapDef = MAP_MAP[mapId] || MAP_MAP.harbor;
    this.baseFov = this.profile.settings?.fov ?? 78;
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(this.baseFov, app.aspect, 0.05, 260);
    this.camera.rotation.order = 'YXZ';
    this.scene.add(this.camera);
    this.world = new World(this.scene, this.mapDef);
    this.fx = new FX(this.scene, this.camera);
    this.combat = new Combat(this);
    this.botNames = shuffle(BOT_NAMES) .map((n) => n);
    this.bots = [];
    this.score = { blue: 0, red: 0 };
    this.timeLeft = MATCH_TIME;
    this.target = MATCH_TARGET;
    this.phase = 'countdown';
    this.countdown = 3.4;
    this.countShown = 0;
    this.revealT = 0;
    this.elapsed = 0;
    this.hudTimer = 0;
    this.assistToast = 0;
    this.paused = false;
    this.ended = false;
    this.player = null;
    this.startMatch();
  }

  startMatch() {
    const app = this.app;
    const skins = {};
    for (const wid of WEAPON_ORDER) {
      const sid = this.profile.equipped?.[wid];
      if (sid && SKIN_MAP[sid] && this.profile.ownedSkins.includes(sid)) skins[wid] = sid;
    }
    const charId = CHARACTER_MAP[this.profile.character] ? this.profile.character : 'vanguard';
    const primary = this.profile.primary in WEAPON_ORDER && this.profile.primary !== 'pistol' ? this.profile.primary : 'ar';
    this.player = new Player(this, charId, primary, 'pistol', skins);
    const blueSpawn = this.world.spawns.blue[4] || new THREE.Vector3(0, 0, 36);
    const yaw = blueSpawn.z > 0 ? 0 : Math.PI;
    this.player.spawn(blueSpawn, yaw);

    const roster = makeRoster(this);
    const counters = { blue: 0, red: 0 };
    for (const cfg of roster) {
      const bot = new Bot(this, cfg);
      const idx = counters[cfg.team]++;
      const spawnList = this.world.spawns[cfg.team];
      const sp = spawnList[idx % spawnList.length];
      bot.spawn(sp, sp.z > 0 ? 0 : Math.PI);
      bot.id = `${cfg.team}-${cfg.name}-${idx}`;
      this.bots.push(bot);
    }
    // give player an id used for assist tracking
    this.player.id = 'player';
    this.hud.show(this);
    this.hud.refreshAll(this.player);
    this.hud.updateMatch(this);
    this.hud.showCountdown(3);
    app.setScene(this.scene, this.camera);
  }

  getCombatants() {
    const list = [];
    if (this.player?.alive) list.push(this.player);
    for (const b of this.bots) if (b.alive) list.push(b);
    return list;
  }

  getEnemiesOf(team) {
    return this.getCombatants().filter((c) => c.team !== team);
  }

  respawnPlayer() {
    const enemies = this.bots.filter((b) => b.team === 'red' && b.alive).map((b) => b.pos);
    const sp = this.world.spawnPoint('blue', enemies);
    const yaw = sp.z > 0 ? 0 : Math.PI;
    this.player.respawn(sp, yaw);
    this.hud.hideDeath();
    this.hud.refreshAll(this.player);
    audio.ability();
  }

  respawnBot(bot) {
    if (this.phase === 'ended') return;
    const enemies = this.getCombatants().filter((c) => c.team !== bot.team).map((c) => c.pos);
    const sp = this.world.spawnPoint(bot.team, enemies);
    bot.spawn(sp, sp.z > 0 ? 0 : Math.PI);
  }

  onPlayerDamaged(attacker, amount, headshot) {
    if (!attacker) return;
    this.hud.damageFrom(attacker.pos, amount, headshot);
  }

  onPlayerDeath(attacker, weaponId, headshot) {
    if (this.phase !== 'live') return;
    this.score.red += 1;
    this.hud.killfeed({
      killer: attacker?.name || 'BOT',
      victim: 'SEN',
      killerTeam: 'red',
      victimTeam: 'blue',
      weapon: weaponId,
      headshot,
      playerVictim: true,
    });
    this.hud.showDeath(attacker?.name || 'BİLİNMEYEN', weaponId, headshot, this.player.deadT);
    this.hud.updateMatch(this);
    this.checkEnd();
  }

  onBotKilled(victim, attacker, weaponId, headshot) {
    if (this.phase !== 'live') return;
    if (!attacker) return;
    this.score[attacker.team] += 1;
    // assists from recent damagers
    for (const d of victim.damagers || []) {
      if (d.attacker === attacker) continue;
      if (d.attacker?.isPlayer) {
        this.player.assists += 1;
        this.hud.assistToast();
      }
    }
    if (attacker.isPlayer) {
      this.player.kills += 1;
      this.player.streak += 1;
      if (headshot) this.player.headshots += 1;
      audio.hit(true);
      this.hud.killPopup(victim.name, headshot, this.player.streak);
      this.hud.scoreFlash('blue');
    } else {
      attacker.kills = (attacker.kills || 0) + 1;
      this.hud.scoreFlash('red');
    }
    if (victim.team === 'blue' && !victim.isPlayer) {
      // ally lost — no extra action
    }
    this.hud.killfeed({
      killer: attacker.name,
      victim: victim.name,
      killerTeam: attacker.team,
      victimTeam: victim.team,
      weapon: weaponId,
      headshot,
      playerKill: attacker.isPlayer,
    });
    this.hud.updateMatch(this);
    this.checkEnd();
  }

  checkEnd() {
    if (this.phase !== 'live') return;
    if (this.score.blue >= this.target || this.score.red >= this.target) this.endMatch('score');
  }

  endMatch(reason) {
    if (this.ended) return;
    this.ended = true;
    this.phase = 'ended';
    this.input.setEnabled(false);
    this.input.exitLock();
    audio.stopAmbient?.();
    const win = this.score.blue > this.score.red;
    const draw = this.score.blue === this.score.red;
    const maxBotKills = Math.max(0, ...this.bots.map((b) => b.kills || 0));
    const mvp = this.player.kills > 0 && this.player.kills >= maxBotKills;
    const kills = this.player.kills;
    const assists = this.player.assists;
    const credits = 120 + kills * 24 + assists * 12 + (win ? 220 : draw ? 110 : 70) + (mvp ? 120 : 0) + Math.floor(this.player.damageDealt / 90);
    const xp = 160 + kills * 45 + assists * 18 + (win ? 260 : 90) + (mvp ? 120 : 0);

    const p = this.profile;
    const beforeLevel = p.level;
    p.credits += credits;
    p.stats.kills += kills;
    p.stats.deaths += this.player.deaths;
    p.stats.matches += 1;
    p.stats.damage += Math.round(this.player.damageDealt);
    p.stats.bestStreak = Math.max(p.stats.bestStreak, this.player.streak);
    if (win) p.stats.wins += 1;
    const levelUps = addXp(p, xp);
    saveProfile(p);

    const result = {
      win, draw, mvp, reason,
      score: { ...this.score },
      target: this.target,
      player: {
        kills, deaths: this.player.deaths, assists,
        headshots: this.player.headshots,
        damage: Math.round(this.player.damageDealt),
        streak: this.player.streak,
        accuracy: this.player.shots ? Math.round((this.player.hits / this.player.shots) * 100) : 0,
      },
      credits, xp, levelUps, levelBefore: beforeLevel,
      map: this.mapDef,
      allies: this.bots.filter((b) => b.team === 'blue').map((b) => ({ name: b.name, kills: b.kills || 0, deaths: b.deaths })),
      enemies: this.bots.filter((b) => b.team === 'red').map((b) => ({ name: b.name, kills: b.kills || 0, deaths: b.deaths })),
      mvpName: mvp ? 'SEN' : (this.bots.slice().sort((a, b) => (b.kills || 0) - (a.kills || 0))[0]?.name || '—'),
    };
    audio.victory(win);
    this.app.onMatchEnd(result, this);
  }

  aimAssist(origin, dir) {
    if (!this.isTouch) return dir;
    let best = null;
    let bestDot = Math.cos(7 * Math.PI / 180);
    for (const bot of this.bots) {
      if (!bot.alive || bot.team === 'blue') continue;
      const target = new THREE.Vector3(bot.pos.x, bot.pos.y + 1.2, bot.pos.z);
      const to = target.sub(origin);
      const dist = to.length();
      if (dist > 60) continue;
      to.divideScalar(dist);
      const dot = to.dot(dir);
      if (dot > bestDot) { bestDot = dot; best = to; }
    }
    if (best) dir.lerp(best, 0.35).normalize();
    return dir;
  }

  update(dt) {
    if (this.paused || this.ended) {
      this.fx.update(dt);
      return;
    }
    this.elapsed += dt;
    if (this.phase === 'countdown') {
      this.countdown -= dt;
      this.player.updateCamera(0);
      this.world.update(dt, this.elapsed);
      this.fx.update(dt);
      const n = Math.ceil(this.countdown);
      if (n !== this.countShown && n > 0) {
        this.countShown = n;
        this.hud.showCountdown(n);
      }
      if (this.countdown <= 0) {
        this.phase = 'live';
        this.hud.hideCountdown();
        this.hud.matchLive(this.mapDef);
        audio.ui('buy');
      }
      return;
    }
    if (this.phase === 'live') {
      this.timeLeft -= dt;
      if (this.timeLeft <= 0) {
        this.timeLeft = 0;
        this.endMatch('time');
        return;
      }
      this.revealT = Math.max(0, this.revealT - dt);
      this.player.update(dt);
      if (!this.player.alive && this.player.deadT <= 0) this.respawnPlayer();
      for (const bot of this.bots) bot.update(dt, this.elapsed);
      this.world.update(dt, this.elapsed);
      this.fx.update(dt);
      this.hudTimer -= dt;
      this.hud.updateMinimap(this);
      if (this.hudTimer <= 0) {
        this.hudTimer = 0.1;
        this.hud.updateMatch(this);
      }
      if (!this.player.alive) this.hud.updateDeathTimer(this.player.deadT);
    }
  }

  pause() { this.paused = true; }
  resume() { this.paused = false; }

  dispose() {
    for (const bot of this.bots) bot.dispose();
    this.bots = [];
    this.hud.hide();
    audio.stopAmbient?.();
    this.scene.traverse((o) => {
      if (o.material) {
        const mats = Array.isArray(o.material) ? o.material : [o.material];
        mats.forEach((m) => { if (m.map?.dispose) m.map.dispose(); m.dispose?.(); });
      }
      if (o.geometry) o.geometry.dispose?.();
    });
    this.scene.clear();
  }
}
