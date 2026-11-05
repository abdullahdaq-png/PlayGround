import { WEAPONS, SKIN_MAP, RARITIES, CHARACTER_MAP } from '../data.js';

const $ = (s, r = document) => r.querySelector(s);

export class HUD {
  constructor(app) {
    this.app = app;
    this.root = document.getElementById('hud-root');
    this.match = null;
    this.cache = {};
    this.killTimers = [];
    this.crossGap = 5;
    this.hitTimer = null;
    this.killPopupTimer = null;
    this.vignetteTimer = null;
    this.gamepadHints = '';
    this.build();
    this.bind();
  }

  build() {
    this.root.innerHTML = `
      <div id="hud">
        <div class="hud-top">
          <div class="score-bar">
            <div class="score-team"><div class="tname">ALFA</div><div class="tval" data-hud="blue">0</div></div>
            <div class="score-mid"><div class="timer" data-hud="timer">06:00</div><div class="mode">TAKIM ÖLÜMÜ · 50</div></div>
            <div class="score-team red"><div class="tname">BRAVO</div><div class="tval" data-hud="red">0</div></div>
          </div>
          <div class="hud-map" data-hud="map">SANCAK LİMANI · <b>EU-WEST-01</b></div>
        </div>

        <div class="minimap">
          <div class="frame"><canvas id="minimap-canvas" width="332" height="332"></canvas><div class="reveal-tag" id="reveal-tag">NABIZ · DÜŞMANLAR İŞARETLİ</div></div>
          <div class="mm-meta"><span>ALFA <b data-hud="mm-blue">0</b></span><span>HARİTA</span><span>BRAVO <b data-hud="mm-red">0</b></span></div>
        </div>

        <div class="killfeed" id="killfeed"></div>
        <div class="net-indicator"><i></i><span data-hud="net">TR-01 · 24ms</span></div>

        <div class="crosshair" id="crosshair"><i class="c-top"></i><i class="c-bottom"></i><i class="c-left"></i><i class="c-right"></i><i class="c-dot"></i></div>
        <div class="hitmarker" id="hitmarker"><i></i><i></i><i></i><i></i></div>
        <div class="damage-vignette" id="damage-vignette"></div>
        <div class="damage-arcs" id="damage-arcs"></div>

        <div class="health-panel">
          <div class="health-head">
            <div class="char-badge" id="char-badge"></div>
            <div><div class="health-name" data-hud="char">KARTAL</div><div class="health-sub" data-hud="charrole">HÜCUM PİYADESİ</div></div>
            <div class="health-numbers"><div class="hp" data-hud="hp">100</div><div class="lbl">CAN</div></div>
          </div>
          <div class="health-bar"><div class="fill" data-hud="hpfill" style="width:100%"></div><div class="shield" data-hud="shieldfill" style="width:0%"></div><div class="ticks"></div></div>
          <div class="ability-row">
            <div class="ability-icon" id="ability-icon"><span>✦</span><div class="cd" id="ability-cd" style="transform:scaleY(0)"></div></div>
            <div class="ability-text"><b data-hud="abil">HÜCUM <span class="key">Q</span></b><span data-hud="abilcd">HAZIR</span></div>
          </div>
          <div class="streak-tag" id="streak-tag">SERİ · 3</div>
        </div>

        <div class="weapon-panel">
          <div class="weapon-name" data-hud="wname">AR-9 VANGUARD</div>
          <div class="weapon-skin" data-hud="wskin">STANDART</div>
          <div class="ammo" id="ammo"><span class="mag" data-hud="mag">30</span><span class="reserve" data-hud="reserve"> / 150</span></div>
          <div class="reload-bar"><div class="fill" data-hud="reload" style="width:0%"></div></div>
          <div class="weapon-slots" id="weapon-slots"></div>
        </div>

        <div class="kill-popup" id="kill-popup">
          <div class="kp-top">HEDEF İMHA EDİLDİ</div>
          <div class="kp-name" data-hud="kpname">ALPHA</div>
          <div class="kp-reward">+1 <span data-hud="kphs" class="kp-hs"></span></div>
        </div>

        <div class="ability-flash" id="ability-flash"></div>
        <div class="assist-toast" id="assist-toast">ASİST · +1</div>

        <div class="countdown" id="countdown"><div class="cd-num" data-hud="count">3</div><div class="cd-label">HAZIR OL</div><div class="cd-map" data-hud="cdmap">SANCAK LİMANI</div></div>

        <div class="scope-overlay" id="scope">
          <div class="scope-ring"></div><div class="sc-h"></div><div class="sc-v"></div><div class="sc-dot"></div><div class="sc-ticks"></div><div class="sc-label">AX-50 · 6.5x</div>
        </div>

        <div class="death-screen" id="death">
          <div class="death-title">ELENDİN</div>
          <div class="death-by"><b data-hud="killer">ALPHA</b> TARAFINDAN <span data-hud="killweapon">AR-9</span> İLE</div>
          <div class="death-timer"><b data-hud="respawnt">4</b>YENİDEN DOĞUŞ</div>
          <div class="death-hint">TAKIMIN SAVAŞMAYA DEVAM EDİYOR</div>
        </div>

        <div class="scoreboard" id="scoreboard"><div class="sb-panel">
          <div class="sb-head"><div class="sb-title">TAKIM ÖLÜMÜ</div><div class="sb-score"><span class="b" data-hud="sbb">0</span> — <span class="r" data-hud="sbr">0</span></div></div>
          <div class="sb-cols" id="sb-cols"></div>
        </div></div>
      </div>
    `;
    this.hudEl = $('#hud', this.root);
    this.minimap = $('#minimap-canvas', this.root);
    this.mmCtx = this.minimap.getContext('2d');
  }

  bind() {
    window.addEventListener('keydown', (e) => {
      if (e.code === 'Tab' && this.match && !this.match.ended) {
        e.preventDefault();
        if (!this.scoreboardOpen) { this.scoreboardOpen = true; this.renderScoreboard(); }
        $('#scoreboard', this.root)?.classList.add('active');
      }
    });
    window.addEventListener('keyup', (e) => {
      if (e.code === 'Tab') {
        this.scoreboardOpen = false;
        $('#scoreboard', this.root)?.classList.remove('active');
      }
    });
  }

  show(match) {
    this.match = match;
    this.hudEl.classList.add('active');
    document.body.classList.add('in-match');
    const p = match.player;
    const map = match.mapDef;
    this.setHTML('map', `${map.name} · <b>${match.app.region || 'EU-WEST-01'}</b>`);
    this.setText('cdmap', map.name.toUpperCase());
    this.setText('net', `${['TR-01', 'EU-WEST-01', 'EU-EAST-02'][(Math.random() * 3) | 0]} · ${18 + ((Math.random() * 22) | 0)}ms`);
    this.setText('blue', 0);
    this.setText('red', 0);
    this.setText('mm-blue', 0);
    this.setText('mm-red', 0);
    $('#killfeed', this.root).innerHTML = '';
    $('#death', this.root).classList.remove('active');
    $('#scope', this.root).classList.remove('active');
    $('#countdown', this.root).classList.remove('active');
    $('#kill-popup', this.root).classList.remove('show');
    $('#damage-vignette', this.root).style.opacity = '0';
    this.scoreboardOpen = false;
    $('#scoreboard', this.root).classList.remove('active');
    this.buildMinimapBg();
    this.refreshAll(p);
    this.setScoped(false);
    this.updateMatch(match);
    this.updateMinimap(match);
  }

  hide() {
    this.hudEl.classList.remove('active');
    document.body.classList.remove('in-match');
    $('#scoreboard', this.root)?.classList.remove('active');
    this.scoreboardOpen = false;
  }

  setText(key, val) {
    const el = $(`[data-hud=${key}]`, this.root);
    if (!el) return;
    if (this.cache[key] === val) return;
    this.cache[key] = val;
    el.textContent = val;
  }
  setHTML(key, val) {
    const el = $(`[data-hud=${key}]`, this.root);
    if (!el) return;
    if (this.cache[key] === val) return;
    this.cache[key] = val;
    el.innerHTML = val;
  }

  refreshAll(player) {
    if (!player) return;
    const c = player.character;
    const badge = $('#char-badge', this.root);
    if (badge) {
      badge.innerHTML = `<svg viewBox="0 0 64 64"><path d="M32 5 L55 17 L55 44 L32 59 L9 44 L9 17 Z" fill="none" stroke="${c.colors.accent}" stroke-opacity=".6" stroke-width="1.5"/><path d="M20 27 Q32 16 44 27 L42 39 Q32 45 22 39 Z" fill="${c.colors.suit}" stroke="${c.colors.accent}" stroke-width="1.2"/><path d="M24 31 Q32 27 40 31 L39 36 Q32 39 25 36 Z" fill="${c.colors.visor}"/></svg><div class="lvl">${player.game?.profile?.level || 1}</div>`;
    }
    this.setText('char', c.name);
    this.setText('charrole', c.title);
    this.refreshWeapon(player);
    this.refreshAbility(player);
    this.updatePlayer(player);
  }

  refreshWeapon(player) {
    if (!player) return;
    const def = player.weaponDef;
    const id = player.weaponId;
    this.setText('wname', def.name);
    const skinId = this.app.profile.equipped[id];
    const skin = skinId ? SKIN_MAP[skinId] : null;
    const skinEl = $('[data-hud=wskin]', this.root);
    if (skinEl) {
      skinEl.textContent = skin ? `${skin.name} · ${RARITIES[skin.rarity].label}` : 'STANDART KAPLAMA';
      skinEl.style.color = skin ? RARITIES[skin.rarity].color : 'var(--dim)';
    }
    this.setText('mag', player.ammoState.mag);
    this.setText('reserve', ` / ${player.ammoState.reserve}`);
    $('#ammo', this.root).classList.toggle('low', player.ammoState.mag <= Math.ceil(def.mag * 0.2));
    const slots = $('#weapon-slots', this.root);
    if (slots) {
      const p = WEAPONS[player.primaryId];
      const s = WEAPONS[player.secondaryId];
      slots.innerHTML = `<div class="wslot ${player.slot === 0 ? 'active' : ''}"><span class="num">1</span>${p.name.split(' ')[0]}</div><div class="wslot ${player.slot === 1 ? 'active' : ''}"><span class="num">2</span>${s.name.split(' ')[0]}</div>`;
    }
    this.cache.weapon = id;
  }

  refreshAbility(player) {
    if (!player) return;
    const ab = player.character.ability;
    this.setText('abil', `${ab.name} · Q`);
    const el = $('[data-hud=abilcd]', this.root);
    if (el) {
      if (player.abilityCd <= 0) { el.textContent = 'HAZIR'; el.style.color = 'var(--accent-2)'; }
      else { el.textContent = `${Math.ceil(player.abilityCd)} SN`; el.style.color = 'var(--dim)'; }
    }
    const icon = $('#ability-icon', this.root);
    if (icon) icon.classList.toggle('ready', player.abilityCd <= 0);
    const cd = $('#ability-cd', this.root);
    if (cd) cd.style.transform = `scaleY(${Math.min(1, player.abilityCd / ab.cooldown)})`;
  }

  updatePlayer(player) {
    if (!player) return;
    const hp = Math.max(0, Math.ceil(player.health));
    this.setText('hp', hp);
    const fill = $('[data-hud=hpfill]', this.root);
    if (fill) fill.style.width = `${(hp / player.maxHealth) * 100}%`;
    const shield = $('[data-hud=shieldfill]', this.root);
    if (shield) shield.style.width = `${Math.min(100, (player.overshield / player.maxHealth) * 100)}%`;
    const hpEl = $('[data-hud=hp]', this.root);
    if (hpEl) hpEl.classList.toggle('low', hp <= 30);

    const mag = player.ammoState.mag;
    this.setText('mag', mag);
    this.setText('reserve', ` / ${player.ammoState.reserve}`);
    $('#ammo', this.root).classList.toggle('low', mag <= Math.ceil(player.weaponDef.mag * 0.2));

    const reload = $('[data-hud=reload]', this.root);
    if (reload) reload.style.width = player.reloading ? `${Math.max(0, Math.min(100, (1 - player.reloadT / player.reloadTotal) * 100))}%` : '0%';

    this.crossGap += (5 + Math.min(10, Math.hypot(player.vel.x, player.vel.z) * 1.6) - this.crossGap) * 0.15;
    const cross = $('#crosshair', this.root);
    if (cross) cross.style.setProperty('--gap', `${this.crossGap.toFixed(1)}px`);

    const streak = $('#streak-tag', this.root);
    if (streak) {
      const on = player.streak >= 2;
      streak.classList.toggle('on', on);
      if (on) streak.textContent = `SERİ · ${player.streak}  ${player.streak >= 5 ? '· DURDURULAMAZ' : ''}`;
    }
    if (player.abilityCd > 0) this.refreshAbility(player);
    else if (this.cache.abilState !== 'ready') { this.cache.abilState = 'ready'; this.refreshAbility(player); }
    if (player.abilityCd <= 0) this.cache.abilState = 'ready';
  }

  updateMatch(match) {
    this.match = match;
    this.setText('blue', match.score.blue);
    this.setText('red', match.score.red);
    this.setText('mm-blue', match.score.blue);
    this.setText('mm-red', match.score.red);
    this.setText('sbb', match.score.blue);
    this.setText('sbr', match.score.red);
    const t = Math.max(0, Math.ceil(match.timeLeft));
    const mm = Math.floor(t / 60).toString().padStart(2, '0');
    const ss = Math.floor(t % 60).toString().padStart(2, '0');
    this.setText('timer', `${mm}:${ss}`);
    const tag = $('#reveal-tag', this.root);
    if (tag) tag.classList.toggle('on', match.revealT > 0);
    if (this.scoreboardOpen) this.renderScoreboard();
  }

  buildMinimapBg() {
    const w = this.minimap.width;
    const bg = document.createElement('canvas');
    bg.width = bg.height = w;
    const g = bg.getContext('2d');
    const map = this.match.mapDef;
    g.fillStyle = 'rgba(9,14,18,0.94)';
    g.fillRect(0, 0, w, w);
    const sc = w / 100;
    // grid
    g.strokeStyle = 'rgba(120,160,180,0.08)';
    g.lineWidth = 1;
    for (let i = 0; i <= 100; i += 10) {
      g.beginPath(); g.moveTo(i * sc, 0); g.lineTo(i * sc, w); g.stroke();
      g.beginPath(); g.moveTo(0, i * sc); g.lineTo(w, i * sc); g.stroke();
    }
    // spawn zones
    g.fillStyle = 'rgba(77,197,255,0.10)';
    g.fillRect(23 * sc, 33 * sc, 54 * sc, 10 * sc);
    g.fillStyle = 'rgba(255,90,77,0.10)';
    g.fillRect(23 * sc, 57 * sc, 54 * sc, 10 * sc);
    // colliders
    for (const c of this.match.world.colliders) {
      if (c.maxY < 0.4) continue;
      const x = (c.minX + 50) * sc;
      const y = (c.minZ + 50) * sc;
      const cw = (c.maxX - c.minX) * sc;
      const ch = (c.maxZ - c.minZ) * sc;
      g.fillStyle = c.maxY > 3 ? 'rgba(140,175,195,0.34)' : 'rgba(110,140,160,0.24)';
      g.fillRect(x, y, Math.max(1, cw), Math.max(1, ch));
    }
    // perimeter
    g.strokeStyle = 'rgba(255,255,255,0.22)';
    g.lineWidth = 2;
    g.strokeRect(2, 2, w - 4, w - 4);
    this.mapBg = bg;
  }

  updateMinimap(match) {
    if (!this.match) return;
    const g = this.mmCtx;
    const w = this.minimap.width;
    if (this.mapBg) g.drawImage(this.mapBg, 0, 0);
    const sc = w / 100;
    const player = match.player;
    const px = (player.pos.x + 50) * sc;
    const py = (player.pos.z + 50) * sc;
    // view cone
    const fx = -Math.sin(player.yaw);
    const fz = -Math.cos(player.yaw);
    const ang = Math.atan2(fz, fx);
    g.save();
    g.translate(px, py);
    g.rotate(ang);
    const grad = g.createRadialGradient(0, 0, 4, 0, 0, 40 * sc);
    grad.addColorStop(0, 'rgba(77,197,255,0.22)');
    grad.addColorStop(1, 'rgba(77,197,255,0)');
    g.fillStyle = grad;
    g.beginPath(); g.moveTo(0, 0); g.arc(0, 0, 40 * sc, -0.52, 0.52); g.closePath(); g.fill();
    g.restore();
    // objectives / allies / enemies
    for (const bot of match.bots) {
      if (!bot.alive) continue;
      const x = (bot.pos.x + 50) * sc;
      const y = (bot.pos.z + 50) * sc;
      const dist = player.pos.distanceTo(bot.pos);
      const reveal = match.revealT > 0;
      if (bot.team === 'blue') {
        g.fillStyle = 'rgba(77,197,255,0.95)';
        g.beginPath(); g.arc(x, y, 4, 0, 7); g.fill();
      } else if (reveal || dist < 15 || (bot.flash > 0 && dist < 34)) {
        g.fillStyle = reveal ? 'rgba(176,107,255,1)' : 'rgba(255,90,77,0.95)';
        g.beginPath(); g.arc(x, y, 4.4, 0, 7); g.fill();
        if (reveal) {
          g.strokeStyle = 'rgba(176,107,255,0.5)';
          g.lineWidth = 2;
          g.beginPath(); g.arc(x, y, 8, 0, 7); g.stroke();
        }
      }
    }
    // player arrow
    g.save();
    g.translate(px, py);
    g.rotate(ang);
    g.fillStyle = '#ffffff';
    g.beginPath(); g.moveTo(8, 0); g.lineTo(-5, 5); g.lineTo(-2, 0); g.lineTo(-5, -5); g.closePath(); g.fill();
    g.strokeStyle = 'rgba(0,0,0,0.6)'; g.lineWidth = 1; g.stroke();
    g.restore();
    // pulse ring
    g.strokeStyle = `rgba(72,230,210,${0.1 + (Math.sin(performance.now() / 500) + 1) * 0.06})`;
    g.lineWidth = 2;
    g.beginPath(); g.arc(px, py, 14, 0, 7); g.stroke();
  }

  killfeed(data) {
    const feed = $('#killfeed', this.root);
    if (!feed) return;
    const el = document.createElement('div');
    el.className = `kf-item ${data.killerTeam === 'blue' ? 'blue' : 'red'}`;
    const wp = (WEAPONS[data.weapon]?.name || 'SİLAH').split(' ')[0];
    el.innerHTML = `<span class="k">${data.killer}</span><span class="wpn">[${wp}]</span>${data.headshot ? '<span class="hs">✦</span>' : ''}<span class="v ${data.playerVictim ? 'me' : ''}">${data.victim}</span>`;
    feed.appendChild(el);
    if (feed.children.length > 6) feed.firstElementChild.remove();
    const timer = setTimeout(() => {
      el.style.opacity = '0';
      el.style.transition = 'opacity .4s';
      setTimeout(() => el.remove(), 450);
    }, 4600);
    this.killTimers.push(timer);
  }

  hitmarker(killed, headshot) {
    const el = $('#hitmarker', this.root);
    if (!el) return;
    el.classList.remove('show', 'kill', 'head');
    void el.offsetWidth;
    el.classList.add('show');
    if (killed) el.classList.add('kill');
    if (headshot) el.classList.add('head');
    clearTimeout(this.hitTimer);
    this.hitTimer = setTimeout(() => el.classList.remove('show', 'kill', 'head'), killed ? 260 : 120);
  }

  damageFrom(pos, amount) {
    const vig = $('#damage-vignette', this.root);
    if (vig) {
      vig.style.opacity = String(Math.min(0.9, 0.25 + amount / 90));
      clearTimeout(this.vignetteTimer);
      this.vignetteTimer = setTimeout(() => { vig.style.opacity = '0'; }, 520);
    }
    const player = this.match?.player;
    if (!player || !pos) return;
    const dx = pos.x - player.pos.x;
    const dz = pos.z - player.pos.z;
    const fx = -Math.sin(player.yaw), fz = -Math.cos(player.yaw);
    const rx = Math.cos(player.yaw), rz = -Math.sin(player.yaw);
    const forward = dx * fx + dz * fz;
    const right = dx * rx + dz * rz;
    let angle = Math.atan2(right, forward) * 180 / Math.PI;
    if (angle < -180) angle += 360;
    const arc = document.createElement('div');
    arc.className = 'dmg-arc show';
    arc.style.transform = `translate(-50%,-50%) rotate(${angle}deg) translateY(-120px)`;
    $('#damage-arcs', this.root).appendChild(arc);
    setTimeout(() => arc.remove(), 950);
  }

  showDeath(killer, weaponId, headshot, time) {
    const el = $('#death', this.root);
    if (!el) return;
    this.setText('killer', killer || 'BİLİNMEYEN');
    this.setText('killweapon', (WEAPONS[weaponId]?.name || 'SİLAH'));
    this.setText('respawnt', Math.max(1, Math.ceil(time)));
    el.classList.add('active');
  }

  updateDeathTimer(t) {
    this.setText('respawnt', Math.max(0, Math.ceil(t)));
  }

  hideDeath() {
    $('#death', this.root)?.classList.remove('active');
  }

  showCountdown(n) {
    const el = $('#countdown', this.root);
    if (!el) return;
    el.classList.add('active');
    this.setText('count', n > 0 ? n : '');
    const num = $('[data-hud=count]', this.root);
    if (num) {
      num.style.animation = 'none';
      void num.offsetWidth;
      num.style.animation = 'pulse .7s ease-out';
    }
  }

  hideCountdown() {
    $('#countdown', this.root)?.classList.remove('active');
  }

  matchLive(map) {
    this.hideCountdown();
    this.abilityFlash('SAVAŞ BAŞLADI', '#5dff9d');
  }

  setScoped(on) {
    const scope = $('#scope', this.root);
    if (scope) scope.classList.toggle('active', on);
    $('#crosshair', this.root)?.classList.toggle('scoped', on);
  }

  crosshairKick(deg) {
    this.crossGap = Math.min(22, this.crossGap + deg * 1.15);
  }

  abilityFlash(text, color) {
    const el = $('#ability-flash', this.root);
    if (!el) return;
    el.textContent = text;
    el.style.color = color || 'var(--accent)';
    el.classList.remove('show');
    void el.offsetWidth;
    el.classList.add('show');
    setTimeout(() => el.classList.remove('show'), 1700);
  }

  killPopup(victim, headshot, streak) {
    const el = $('#kill-popup', this.root);
    if (!el) return;
    this.setText('kpname', victim);
    this.setText('kphs', headshot ? 'KAFA VURUŞU' : '');
    el.classList.add('show');
    clearTimeout(this.killPopupTimer);
    this.killPopupTimer = setTimeout(() => el.classList.remove('show'), 1300);
  }

  assistToast() {
    const el = $('#assist-toast', this.root);
    if (!el) return;
    el.classList.remove('show');
    void el.offsetWidth;
    el.classList.add('show');
    setTimeout(() => el.classList.remove('show'), 1400);
  }

  scoreFlash(team) {
    const el = $('[data-hud=' + (team === 'blue' ? 'blue' : 'red') + ']', this.root);
    if (!el) return;
    el.style.color = team === 'blue' ? 'var(--blue)' : 'var(--red)';
    el.style.textShadow = `0 0 22px ${team === 'blue' ? 'var(--blue)' : 'var(--red)'}`;
    setTimeout(() => { el.style.textShadow = 'none'; el.style.color = ''; }, 450);
  }

  renderScoreboard() {
    if (!this.match) return;
    const cols = $('#sb-cols', this.root);
    if (!cols) return;
    const rows = (team, title) => {
      const list = this.match.bots.filter((b) => b.team === team).map((b) => ({
        name: b.name, kills: b.kills || 0, deaths: b.deaths, me: false,
      }));
      if (team === 'blue') list.unshift({ name: this.match.player.name, kills: this.match.player.kills, deaths: this.match.player.deaths, me: true });
      list.sort((a, b) => b.kills - a.kills);
      return `<div class="sb-team ${team}"><h4>${title}</h4>
        <div class="sb-row head"><span>OPERATÖR</span><span>K</span><span>Ö</span></div>
        ${list.map((r) => `<div class="sb-row ${r.me ? 'me' : ''}"><span>${r.name}${r.me ? ' (SEN)' : ''}</span><span>${r.kills}</span><span>${r.deaths}</span></div>`).join('')}
      </div>`;
    };
    cols.innerHTML = rows('blue', 'ALFA TAKIMI') + rows('red', 'BRAVO TAKIMI');
  }
}
