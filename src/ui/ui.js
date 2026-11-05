import {
  WEAPONS, WEAPON_ORDER, PRIMARY_IDS, SKINS, SKIN_MAP, RARITIES,
  CHARACTERS, CHARACTER_MAP, MAPS, MAP_MAP, BOT_NAMES, ttk,
} from '../data.js';
import { buySkin, equipSkin, saveProfile, resetProfile, xpNeeded, rankFor } from '../core/storage.js';
import { audio } from '../core/audio.js';
import { PreviewRenderer } from './preview.js';

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

function mulberry(seed) {
  let a = seed;
  return () => {
    a |= 0; a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function mapArt(map, index) {
  const rand = mulberry(71 + index * 1301);
  const [bg, ac] = map.palette.css;
  const blocks = [];
  for (let i = 0; i < 9; i++) {
    const x = 30 + rand() * 110;
    const y = 30 + rand() * 80;
    const w = 18 + rand() * 46;
    const h = 12 + rand() * 30;
    const op = 0.05 + rand() * 0.08;
    blocks.push(`<rect x="${x.toFixed(1)}" y="${y.toFixed(1)}" width="${w.toFixed(1)}" height="${h.toFixed(1)}" fill="rgba(255,255,255,${op.toFixed(2)})" stroke="rgba(255,255,255,0.16)" stroke-width=".8"/>`);
    blocks.push(`<rect x="${(300 - x - w).toFixed(1)}" y="${(200 - y - h).toFixed(1)}" width="${w.toFixed(1)}" height="${h.toFixed(1)}" fill="rgba(255,255,255,${(op * 0.8).toFixed(2)})" stroke="rgba(255,255,255,0.12)" stroke-width=".8"/>`);
  }
  const lines = [];
  for (let i = 0; i < 4; i++) {
    const y = 30 + i * 45;
    lines.push(`<line x1="0" y1="${y}" x2="300" y2="${y}" stroke="${ac}" stroke-opacity="0.07" stroke-width="1"/>`);
    lines.push(`<line x1="${i * 75}" y1="0" x2="${i * 75}" y2="200" stroke="${ac}" stroke-opacity="0.07" stroke-width="1"/>`);
  }
  return `<svg viewBox="0 0 300 200" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="g${map.id}" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="${bg}"/><stop offset="0.7" stop-color="${bg}"/><stop offset="1" stop-color="${ac}" stop-opacity=".42"/>
      </linearGradient>
      <radialGradient id="r${map.id}" cx=".5" cy=".5" r=".6">
        <stop offset="0" stop-color="${ac}" stop-opacity=".24"/><stop offset="1" stop-color="${ac}" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <rect width="300" height="200" fill="url(#g${map.id})"/>
    <rect width="300" height="200" fill="url(#r${map.id})"/>
    ${lines.join('')}
    ${blocks.join('')}
    <circle cx="150" cy="100" r="26" fill="none" stroke="${ac}" stroke-opacity=".5" stroke-width="1.4" stroke-dasharray="4 4"/>
    <circle cx="150" cy="100" r="5" fill="${ac}" fill-opacity=".7"/>
    <path d="M150 88 L158 100 L150 112 L142 100 Z" fill="none" stroke="${ac}" stroke-opacity=".8"/>
    <text x="14" y="190" fill="${ac}" fill-opacity=".55" font-family="Teko, sans-serif" font-size="15" letter-spacing="3">${map.code}</text>
  </svg>`;
}

function weaponGlyph(id, colors, cls = '') {
  const c = colors || { accent: '#9aa7b8', base: '#333a42' };
  const fill = c.accent;
  const dark = c.base;
  const shapes = {
    ar: `<rect x="48" y="36" width="86" height="14" rx="1.5" fill="${fill}"/><rect x="128" y="39" width="38" height="5" fill="${fill}" opacity=".8"/><rect x="74" y="50" width="12" height="17" transform="rotate(12 80 58)" fill="${dark}"/><rect x="38" y="35" width="16" height="18" rx="2" fill="${dark}"/><rect x="58" y="28" width="24" height="8" rx="1" fill="${dark}"/><rect x="88" y="30" width="18" height="6" fill="${dark}"/><rect x="84" y="50" width="7" height="12" transform="rotate(-14 87 56)" fill="${dark}"/>`,
    smg: `<rect x="62" y="37" width="62" height="13" rx="1.5" fill="${fill}"/><rect x="120" y="40" width="26" height="4" fill="${fill}" opacity=".8"/><rect x="82" y="50" width="10" height="17" transform="rotate(10 87 58)" fill="${dark}"/><rect x="52" y="36" width="14" height="16" rx="2" fill="${dark}"/><rect x="74" y="28" width="26" height="7" rx="1" fill="${dark}"/>`,
    shotgun: `<rect x="40" y="36" width="106" height="11" rx="1.5" fill="${fill}"/><rect x="142" y="38" width="30" height="6" fill="${fill}" opacity=".8"/><rect x="66" y="46" width="36" height="8" rx="3" fill="${dark}"/><rect x="38" y="34" width="22" height="16" rx="2" fill="${dark}"/><rect x="86" y="49" width="7" height="10" transform="rotate(-18 89 54)" fill="${dark}"/>`,
    sniper: `<rect x="34" y="38" width="118" height="9" rx="1" fill="${fill}"/><rect x="148" y="39" width="32" height="4" fill="${fill}" opacity=".8"/><rect x="74" y="27" width="40" height="8" rx="3" fill="${dark}"/><circle cx="94" cy="31" r="5.5" fill="${dark}" stroke="${fill}" stroke-width="1.4"/><rect x="26" y="34" width="18" height="18" rx="2" fill="${dark}"/><rect x="94" y="46" width="7" height="11" transform="rotate(-18 97 51)" fill="${dark}"/>`,
    lmg: `<rect x="46" y="34" width="98" height="17" rx="2" fill="${fill}"/><rect x="140" y="38" width="34" height="6" fill="${fill}" opacity=".8"/><rect x="72" y="51" width="28" height="22" rx="2" fill="${dark}"/><rect x="34" y="32" width="18" height="20" rx="2" fill="${dark}"/><rect x="62" y="52" width="7" height="12" transform="rotate(-14 65 58)" fill="${dark}"/><rect x="102" y="24" width="22" height="8" fill="${dark}"/>`,
    dmr: `<rect x="42" y="37" width="106" height="10" rx="1.5" fill="${fill}"/><rect x="144" y="39" width="28" height="4" fill="${fill}" opacity=".8"/><rect x="80" y="27" width="30" height="7" rx="2" fill="${dark}"/><rect x="92" y="21" width="8" height="9" fill="${fill}" opacity=".7"/><rect x="34" y="34" width="18" height="18" rx="2" fill="${dark}"/><rect x="84" y="47" width="8" height="14" transform="rotate(10 88 54)" fill="${dark}"/>`,
    pistol: `<rect x="76" y="34" width="54" height="13" rx="2" fill="${fill}"/><rect x="128" y="37" width="18" height="5" fill="${fill}" opacity=".8"/><rect x="80" y="45" width="15" height="24" rx="2" transform="rotate(8 87 57)" fill="${dark}"/><rect x="76" y="30" width="48" height="5" fill="${dark}"/>`,
  };
  return `<svg viewBox="0 0 200 82" class="${cls}" xmlns="http://www.w3.org/2000/svg">${shapes[id] || shapes.ar}</svg>`;
}

function charGlyph(ch) {
  return `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    <path d="M32 5 L55 17 L55 44 L32 59 L9 44 L9 17 Z" fill="none" stroke="${ch.colors.accent}" stroke-opacity=".6" stroke-width="1.5"/>
    <path d="M20 27 Q32 16 44 27 L42 39 Q32 45 22 39 Z" fill="${ch.colors.suit}" stroke="${ch.colors.accent}" stroke-width="1.2"/>
    <path d="M24 31 Q32 27 40 31 L39 36 Q32 39 25 36 Z" fill="${ch.colors.visor}"/>
    <path d="M18 48 L32 55 L46 48" fill="none" stroke="${ch.colors.accent}" stroke-opacity=".7" stroke-width="1.5"/>
  </svg>`;
}

const NAV = [
  ['menu', 'ANA MENÜ'],
  ['maps', 'MAÇ BUL'],
  ['operators', 'OPERATÖRLER'],
  ['market', 'MARKET'],
  ['weapons', 'CEPHANE'],
];

function topbar(active) {
  return `<header class="topbar">
    <div class="logo" data-nav="menu">
      <div class="logo-mark"></div>
      <div class="logo-text">IRON<small>PROTOCOL</small></div>
    </div>
    <nav class="nav">
      ${NAV.map(([id, label]) => `<button data-nav="${id}" class="${active === id ? 'active' : ''}">${id === 'maps' ? '<span class="dot"></span>' : ''}${label}</button>`).join('')}
    </nav>
    <div class="topbar-right">
      <div class="chip level-chip"><div class="level-badge" data-ref="level">1</div><div><span class="label">SEVİYE</span><span class="val" data-ref="rank">ÇIRAK</span></div></div>
      <div class="chip"><span class="icon">◈</span><div><span class="label">KREDİ</span><span class="val" data-ref="credits">2.400</span></div></div>
      <button class="settings-btn" data-action="settings" title="Ayarlar">⚙</button>
    </div>
  </header>`;
}

export class UI {
  constructor(app) {
    this.app = app;
    this.root = document.getElementById('ui');
    this.current = null;
    this.selectedMap = 'harbor';
    this.marketCat = 'ar';
    this.selectedSkinId = null;
    this.selectedCharId = app.profile.character;
    this.previewOps = null;
    this.previewMarket = null;
    this.mmTimer = null;
    this.build();
    this.bind();
    this.refreshChrome();
  }

  get profile() { return this.app.profile; }

  build() {
    const menuSideChar = CHARACTER_MAP[this.profile.character] || CHARACTERS[0];
    this.root.innerHTML = `
      <div class="screen" id="screen-menu">
        ${topbar('menu')}
        <div class="menu-wrap">
          <div class="menu-gradient"></div>
          <div class="menu-badge"><span class="pulse"></span> ÇEVRİMİÇİ · 8.428 OYUNCU</div>
          <div class="hero">
            <div class="eyebrow">SEZON 01 <span>//</span> <span class="live">● CANLI</span> <span>//</span> 5v5 TAKIM ÖLÜMÜ</div>
            <h1>IRON<span class="line2">PROTOCOL</span></h1>
            <p class="sub"><b>10 harita. 4 operatör. 7 dengeli silah.</b><br>Her maç kredi kazan, envanterini büyüt, savaş alanına kendi stilini taşı.</p>
            <div class="hero-actions">
              <button class="btn primary big" data-action="quick">HIZLI MAÇ <span>▶</span></button>
              <button class="btn ghost big" data-nav="maps">HARİTA SEÇ</button>
            </div>
            <div class="hero-meta">
              <div class="m">AKTİF HARİTA<b>10 <span>/ 10</span></b></div>
              <div class="m">SUNUCU GECİKMESİ<b>24 <span>MS</span></b></div>
              <div class="m">SEZON GÖREVİ<b>3 <span>/ 5</span></b></div>
              <div class="m">KAZANILAN KREDİ<b data-ref="totalcredits">2.400</b></div>
            </div>
          </div>
          <aside class="menu-side">
            <div class="panel op-card">
              <div class="op-head">
                <div>
                  <div class="op-role" data-ref="op-role">${menuSideChar.title}</div>
                  <div class="op-name" data-ref="op-name">${menuSideChar.name}</div>
                </div>
                <div class="tag-balanced">AKTİF</div>
              </div>
              <div class="op-ability"><b>YETENEK · ${menuSideChar.ability.name}</b>${menuSideChar.ability.desc}</div>
              <div class="op-stats">
                <div>CAN<b data-ref="op-hp">${menuSideChar.stats.health}</b></div>
                <div>HIZ<b data-ref="op-spd">${menuSideChar.stats.speed.toFixed(2)}x</b></div>
                <div>ADS<b data-ref="op-ads">${menuSideChar.stats.ads.toFixed(2)}x</b></div>
              </div>
              <button class="btn small" style="width:100%;margin-top:14px" data-nav="operators">OPERATÖRÜ DEĞİŞTİR</button>
            </div>
          </aside>
          <div class="menu-footer"><span>IRON PROTOCOL · SEZON 01</span><span class="bar"></span><span>5v5 TAKIM ÖLÜMÜ · 50 ÖLDÜRME</span></div>
        </div>
      </div>

      <div class="screen" id="screen-maps">
        ${topbar('maps')}
        <div class="screen-scroll" style="padding-bottom:0">
          <div class="page-head">
            <div class="page-title"><small>HARİTA HAVUZU · 10 SAHA</small>SAVAŞ ALANI</div>
            <div class="page-desc">Her harita farklı bir ritim. Yakın menzil sokaklarından uzun koridorlara kadar her oynanış stiline uygun bir saha var.</div>
            <div class="spacer"></div>
            <div class="chip" style="padding:10px 14px"><span class="icon">◎</span><div><span class="label">SEÇİLİ HARİTA</span><span class="val" data-ref="sel-map">SANCAK LİMANI</span></div></div>
          </div>
          <div class="maps-grid" id="maps-grid"></div>
        </div>
        <div class="maps-bar panel">
          <div class="sel-name" data-ref="sel-name">SANCAK LİMANI</div>
          <div class="sel-desc" data-ref="sel-desc"></div>
          <div class="spacer"></div>
          <button class="btn primary" data-action="start-map">MAÇA BAŞLA ▶</button>
        </div>
      </div>

      <div class="screen" id="screen-operators">
        ${topbar('operators')}
        <div class="screen-scroll" style="padding-bottom:0">
          <div class="page-head">
            <div class="page-title"><small>4 OPERATÖR · DENGELİ YETENEKLER</small>OPERATÖRLER</div>
            <div class="page-desc">Her operatörün net bir gücü ve dengeli bir zayıflığı var. Kazanan tarafı belirleyen yetenek değil, takım oyunu.</div>
            <div class="spacer"></div>
            <button class="btn small" data-nav="weapons">SİLAH DENGESİ →</button>
          </div>
          <div class="ops-layout">
            <div class="ops-preview panel">
              <canvas id="op-preview-canvas"></canvas>
              <div class="preview-label"><div class="kicker">OPERATÖR PROFİLİ</div></div>
              <div class="preview-name"><h3 data-ref="char-name">KARTAL</h3><p data-ref="char-title">HÜCUM PİYADESİ</p></div>
              <div class="ability-card panel">
                <div class="kicker" data-ref="char-abil-key">YETENEK · Q</div>
                <div class="ab-name" data-ref="char-abil">HÜCUM</div>
                <p data-ref="char-abil-desc"></p>
              </div>
            </div>
            <div style="display:flex;flex-direction:column;gap:10px;overflow:hidden">
              <div class="ops-list" id="ops-list"></div>
              <div class="panel op-detail" style="padding:14px" id="op-detail"></div>
            </div>
          </div>
        </div>
      </div>

      <div class="screen" id="screen-market">
        ${topbar('market')}
        <div class="screen-scroll" style="padding-bottom:0">
          <div class="page-head">
            <div class="page-title"><small>KOZMETİK ENVANTER · SADECE GÖRÜNÜM</small>MARKET</div>
            <div class="page-desc">Maçlardan kazandığın kredilerle silahlarına görünüm kazandır. Skinler oynanışı değiştirmez; denge her zaman aynı kalır.</div>
            <div class="spacer"></div>
            <div class="credits-big"><span>◈</span><span data-ref="market-credits">2.400</span><small>KREDİ</small></div>
          </div>
          <div class="market-layout">
            <div class="market-cats" id="market-cats"></div>
            <div class="skin-grid" id="skin-grid"></div>
            <div class="market-preview panel">
              <div class="pv-canvas-wrap"><canvas id="market-preview-canvas"></canvas>
                <div class="pv-head">
                  <div><div class="kicker" data-ref="pv-rarity">NADİR</div><div class="pv-name" data-ref="pv-name">SKIN</div><div class="pv-weapon" data-ref="pv-weapon">AR-9 VANGUARD</div></div>
                  <div class="tag-balanced" data-ref="pv-owned" style="display:none">SAHİPSİN</div>
                </div>
              </div>
              <div class="pv-foot">
                <div class="pv-price"><span class="lbl">FİYAT</span><span class="amt"><span data-ref="pv-price">650</span> <small>KREDİ</small></span></div>
                <button class="btn primary" style="width:100%" data-action="skin-action" id="skin-action">SATIN AL</button>
                <div style="font-size:8px;letter-spacing:1.3px;color:var(--dim);margin-top:10px;line-height:1.6">KOZMETİK İÇERİK · SİLAH İSTATİSTİKLERİNİ ETKİLEMEZ</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="screen" id="screen-weapons">
        ${topbar('weapons')}
        <div class="screen-scroll" style="padding-bottom:0">
          <div class="page-head">
            <div class="page-title"><small>SİLAH DENGESİ · 7 SINIF</small>CEPHANE</div>
            <div class="page-desc">Tüm silahlar amaçlanan menzilde benzer TTK'ya sahip. Her güçlü yön, açık bir zayıflıkla dengelenir. Birincil silahını seç.</div>
            <div class="spacer"></div>
            <div class="tag-balanced" style="padding:8px 12px">DENGELİ TTK · 0.42–0.55 SN</div>
          </div>
          <div class="weapon-table" id="weapon-table"></div>
        </div>
      </div>

      <div id="matchmaking">
        <div class="mm-radar"><div class="sweep"></div></div>
        <div class="mm-wrap">
          <div class="mm-left">
            <div class="kicker">ÇEVRİMİÇİ EŞLEŞTİRME · TAKIM ÖLÜMÜ</div>
            <div class="mm-title">SUNUCU<br>ARANIYOR</div>
            <div class="mm-map" data-ref="mm-map">SANCAK LİMANI</div>
            <div class="mm-sub" data-ref="mm-sub">EU-WEST-01 · 5v5 · 50 ÖLDÜRME</div>
            <div class="mm-status"><span class="loading"></span><span data-ref="mm-status">Uygun sunucu taranıyor…</span></div>
            <div class="mm-deploy" id="mm-deploy"><button class="btn primary big" data-action="deploy">SAVAŞA KATIL ▶</button></div>
            <div style="margin-top:16px;font-size:9px;letter-spacing:1.6px;color:var(--dim)">TAKIMINDA 4 OPERATÖR SENİ BEKLİYOR · TARAYICI TEST SUNUCUSU</div>
          </div>
          <div class="mm-players" id="mm-players"></div>
        </div>
        <div class="mm-foot"><span>IRON PROTOCOL · SEZON 01</span><span>TAHMINİ BEKLEME: <b style="color:var(--accent-2)">00:06</b></span></div>
      </div>

      <div class="screen" id="screen-postmatch">
        <div class="pm-wrap">
          <div class="pm-result">
            <div class="kicker">MAÇ SONUCU · <span data-ref="pm-map">SANCAK LİMANI</span></div>
            <h2 class="win" data-ref="pm-title">ZAFER</h2>
            <div class="score"><b data-ref="pm-blue">50</b> — <b data-ref="pm-red">37</b> <span style="font-size:10px;letter-spacing:2px;color:var(--dim)">TAKIM SKORU</span></div>
            <div class="mvp-tag" data-ref="pm-mvp">★ MAÇIN OYUNCUSU</div>
          </div>
          <div class="pm-panel">
            <div class="panel pm-block">
              <h4>PERFORMANS</h4>
              <div class="pm-stats">
                <div class="pm-stat"><div class="v" data-ref="pm-kills">0</div><div class="l">ÖLDÜRME</div></div>
                <div class="pm-stat"><div class="v" data-ref="pm-deaths">0</div><div class="l">ÖLÜM</div></div>
                <div class="pm-stat"><div class="v" data-ref="pm-assists">0</div><div class="l">ASİST</div></div>
                <div class="pm-stat"><div class="v" data-ref="pm-damage">0</div><div class="l">HASAR</div></div>
                <div class="pm-stat"><div class="v" data-ref="pm-hs">0</div><div class="l">KAFA VURUŞU</div></div>
                <div class="pm-stat"><div class="v" data-ref="pm-acc">0%</div><div class="l">İSABET</div></div>
              </div>
            </div>
            <div class="panel pm-block">
              <h4>MAÇ ÖDÜLÜ</h4>
              <div class="pm-rewards">
                <div class="pm-reward-row"><span>Performans ödülü</span><b data-ref="pm-reward-kill">+0</b></div>
                <div class="pm-reward-row"><span>Galibiyet bonusu</span><b data-ref="pm-reward-win">+0</b></div>
                <div class="pm-reward-row"><span>MVP bonusu</span><b data-ref="pm-reward-mvp">+0</b></div>
                <div class="pm-reward-row total"><span>KAZANILAN KREDİ</span><b data-ref="pm-credits">+0</b></div>
                <div class="pm-reward-row xp"><span>TECRÜBE</span><b data-ref="pm-xp">+0 XP</b></div>
              </div>
              <div class="xp-track"><i data-ref="pm-xpbar" style="width:0%"></i></div>
              <div class="pm-level"><span data-ref="pm-level">SEVİYE 1</span><span data-ref="pm-xptext">0 / 700 XP</span></div>
            </div>
          </div>
          <div class="pm-actions">
            <button class="btn primary" data-action="rematch">TEKRAR OYNA</button>
            <button class="btn" data-nav="market">MARKET'E GİT</button>
            <button class="btn ghost" data-action="menu">ANA MENÜ</button>
          </div>
        </div>
      </div>

      <div class="modal pause-menu" id="pause">
        <div class="panel modal-panel">
          <h3>DURAKLATILDI</h3>
          <div class="sub">MAÇ ASKIDA · RAKİPLER BEKLİYOR</div>
          <div class="modal-actions">
            <button class="btn primary" data-action="resume">DEVAM ET</button>
            <button class="btn" data-action="settings">AYARLAR</button>
            <button class="btn danger" data-action="quit-match">MAÇTAN AYRIL</button>
          </div>
        </div>
      </div>

      <div class="modal" id="settings">
        <div class="panel modal-panel">
          <h3>AYARLAR</h3>
          <div class="sub">KONTROL · SES · GÖRÜNTÜ</div>
          <div class="setting-row"><span>Fare hassasiyeti</span><input type="range" min="0.35" max="2.4" step="0.05" data-ref="sens" value="${this.profile.settings.sensitivity}"></div>
          <div class="setting-row"><span>Görüş açısı (FOV)</span><input type="range" min="65" max="100" step="1" data-ref="fov" value="${this.profile.settings.fov}"></div>
          <div class="setting-row"><span>Ses efektleri</span><div class="switch on" data-action="toggle-sound" id="sound-switch"></div></div>
          <div class="setting-row"><span>Görüntü kalitesi</span>
            <select data-ref="quality" style="background:#0c1217;border:1px solid var(--line);color:var(--text);padding:5px 8px;font-family:inherit;font-size:10px">
              <option value="low">DÜŞÜK</option><option value="medium">ORTA</option><option value="high">YÜKSEK</option>
            </select>
          </div>
          <div class="modal-actions">
            <button class="btn primary" data-action="close-settings">KAPAT</button>
            <button class="btn danger" data-action="reset" style="font-size:9px">İLERLEMEYİ SIFIRLA</button>
          </div>
        </div>
      </div>

      <div id="hud-root"></div>
      <div id="toasts"></div>
    `;
    this.renderMaps();
    this.renderOperators();
    this.marketCat = this.profile.primary === 'pistol' ? 'ar' : this.profile.primary;
    this.renderMarketCats();
    this.renderMarket();
    this.renderWeapons();
    this.updateSelectionBar();
  }

  bind() {
    this.root.addEventListener('click', (e) => {
      const nav = e.target.closest('[data-nav]');
      if (nav) { audio.ui('click'); this.go(nav.dataset.nav); return; }
      const action = e.target.closest('[data-action]');
      if (action) {
        e.preventDefault();
        this.handleAction(action.dataset.action, action);
        return;
      }
      const mapCard = e.target.closest('[data-map]');
      if (mapCard) {
        this.selectedMap = mapCard.dataset.map;
        audio.ui('click');
        this.updateSelectionBar();
        this.renderMaps();
        return;
      }
      const cat = e.target.closest('[data-cat]');
      if (cat) {
        this.marketCat = cat.dataset.cat;
        const owned = SKINS.filter((s) => s.weapon === this.marketCat);
        this.selectedSkinId = (owned.find((s) => this.profile.equipped[s.weapon] === s.id) || owned[0])?.id;
        audio.ui('click');
        this.renderMarketCats();
        this.renderMarket();
        return;
      }
      const skinCard = e.target.closest('[data-skin]');
      if (skinCard) {
        this.selectedSkinId = skinCard.dataset.skin;
        audio.ui('hover');
        this.renderMarket();
        return;
      }
      const opTile = e.target.closest('[data-char]');
      if (opTile) {
        this.selectedCharId = opTile.dataset.char;
        audio.ui('click');
        this.renderOperators();
        return;
      }
    });

    this.root.addEventListener('input', (e) => {
      if (e.target.matches('[data-ref=sens]')) {
        this.profile.settings.sensitivity = Number(e.target.value);
        this.app.input.sensitivity = Number(e.target.value);
        saveProfile(this.profile);
      }
      if (e.target.matches('[data-ref=fov]')) {
        this.profile.settings.fov = Number(e.target.value);
        saveProfile(this.profile);
        if (this.app.match?.player) {
          this.app.match.baseFov = Number(e.target.value);
          this.app.match.player.baseFov = Number(e.target.value);
        }
      }
      if (e.target.matches('[data-ref=quality]')) {
        this.profile.settings.quality = e.target.value;
        saveProfile(this.profile);
        this.app.applyQuality();
      }
    });
  }

  handleAction(action, el) {
    audio.ui('click');
    switch (action) {
      case 'quick': {
        const map = MAPS[(Math.random() * MAPS.length) | 0];
        this.app.startMatchmaking(map.id);
        break;
      }
      case 'start-map': this.app.startMatchmaking(this.selectedMap); break;
      case 'deploy': this.app.deployMatch(); break;
      case 'settings': this.openSettings(); break;
      case 'close-settings': this.closeSettings(); break;
      case 'toggle-sound': {
        const on = !this.profile.settings.sound;
        this.profile.settings.sound = on;
        audio.setEnabled(on);
        $('#sound-switch').classList.toggle('on', on);
        saveProfile(this.profile);
        break;
      }
      case 'reset': {
        if (window.confirm('Tüm ilerleme, krediler ve skinler sıfırlanacak. Emin misin?')) {
          this.app.resetProgress();
          this.closeSettings();
        }
        break;
      }
      case 'select-char': {
        this.profile.character = this.selectedCharId;
        saveProfile(this.profile);
        this.refreshChrome();
        this.renderOperators();
        this.renderMenuSide();
        this.toast(`${CHARACTER_MAP[this.selectedCharId].name} aktif operatör olarak seçildi.`, 'ok');
        break;
      }
      case 'skin-action': {
        const skin = SKIN_MAP[this.selectedSkinId];
        if (!skin) break;
        const owned = this.profile.ownedSkins.includes(skin.id);
        if (owned) {
          const equipped = this.profile.equipped[skin.weapon] === skin.id;
          if (!equipped) {
            equipSkin(this.profile, skin);
            this.toast(`${skin.name} kuşanıldı.`, 'ok');
          } else {
            this.toast('Bu skin zaten kuşanılı.');
          }
        } else {
          const res = buySkin(this.profile, skin);
          if (res.ok) {
            equipSkin(this.profile, skin);
            this.toast(`${skin.name} satın alındı ve kuşanıldı.`, 'ok');
            audio.ui('buy');
          } else {
            this.toast(res.reason, 'err');
          }
        }
        this.refreshChrome();
        this.renderMarket();
        break;
      }
      case 'equip-weapon': {
        const id = el.dataset.weapon;
        if (id === 'pistol') break;
        this.profile.primary = id;
        saveProfile(this.profile);
        this.toast(`${WEAPONS[id].name} birincil silah olarak kuşanıldı.`, 'ok');
        this.renderWeapons();
        this.renderMarketCats();
        this.renderMarket();
        break;
      }
      case 'resume': this.app.resumeMatch(); break;
      case 'quit-match': this.app.quitMatch(); break;
      case 'menu': this.app.backToMenu(); break;
      case 'rematch': this.app.rematch(); break;
      default: break;
    }
  }

  go(screen) {
    if (this.app.match && !this.app.match.ended && screen !== 'menu') return;
    this.current = screen;
    $$('.screen', this.root).forEach((s) => s.classList.remove('active'));
    const target = $(`#screen-${screen}`);
    if (target) target.classList.add('active');
    this.refreshChrome();
    if (screen === 'menu') { this.renderMenuSide(); this.showNav('menu'); }
    if (screen === 'maps') { this.updateSelectionBar(); this.showNav('maps'); }
    if (screen === 'operators') { this.showNav('operators'); this.ensureOpsPreview(); }
    if (screen === 'market') { this.showNav('market'); this.ensureMarketPreview(); }
    if (screen === 'weapons') { this.showNav('weapons'); this.renderWeapons(); }
    if (screen === 'postmatch') { this.showNav(''); }
    if (this.app.match?.paused && screen !== 'menu') { /* keep pause */ }
  }

  showNav(id) {
    $$('.nav button', this.root).forEach((b) => b.classList.toggle('active', b.dataset.nav === id));
  }

  refreshChrome() {
    const p = this.profile;
    const rank = rankFor(p.level);
    $$('[data-ref=level]', this.root).forEach((el) => { el.textContent = p.level; });
    $$('[data-ref=rank]', this.root).forEach((el) => { el.textContent = rank; });
    $$('[data-ref=credits]', this.root).forEach((el) => { el.textContent = p.credits.toLocaleString('tr-TR'); });
    $$('[data-ref=totalcredits]', this.root).forEach((el) => { el.textContent = p.credits.toLocaleString('tr-TR'); });
    const mc = $('[data-ref=market-credits]', this.root);
    if (mc) mc.textContent = p.credits.toLocaleString('tr-TR');
    this.renderMenuSide();
  }

  renderMenuSide() {
    const c = CHARACTER_MAP[this.profile.character] || CHARACTERS[0];
    const set = (ref, val) => { const el = $(`[data-ref=${ref}]`, this.root); if (el) el.textContent = val; };
    set('op-role', c.title);
    set('op-name', c.name);
    set('op-hp', c.stats.health);
    set('op-spd', `${c.stats.speed.toFixed(2)}x`);
    set('op-ads', `${c.stats.ads.toFixed(2)}x`);
    const ab = $('.op-ability', this.root);
    if (ab) ab.innerHTML = `<b>YETENEK · ${c.ability.name}</b>${c.ability.desc}`;
  }

  renderMaps() {
    const grid = $('#maps-grid', this.root);
    if (!grid) return;
    grid.innerHTML = MAPS.map((m, i) => `
      <div class="map-card ${m.id === this.selectedMap ? 'selected' : ''}" data-map="${m.id}">
        <div class="art">${mapArt(m, i)}</div>
        <div class="shade"></div>
        <div class="tags">${m.tags.map((t) => `<span>${t}</span>`).join('')}</div>
        <div class="check">✓</div>
        <div class="info">
          <div class="nm">${m.name}</div>
          <div class="meta"><span>${m.region}</span><span>${m.time}</span></div>
        </div>
      </div>`).join('');
  }

  updateSelectionBar() {
    const map = MAP_MAP[this.selectedMap] || MAPS[0];
    const set = (ref, val) => { const el = $(`[data-ref=${ref}]`, this.root); if (el) el.textContent = val; };
    set('sel-map', map.name);
    set('sel-name', map.name);
    set('sel-desc', map.desc);
  }

  renderOperators() {
    const list = $('#ops-list', this.root);
    if (!list) return;
    const sel = CHARACTER_MAP[this.selectedCharId] || CHARACTERS[0];
    list.innerHTML = CHARACTERS.map((c) => `
      <div class="op-tile ${c.id === this.selectedCharId ? 'active' : ''}" data-char="${c.id}">
        ${this.profile.character === c.id ? '<div class="equipped">AKTİF</div>' : ''}
        <div class="codename">${c.name}</div>
        <div class="role">${c.title}</div>
        <div class="tags">${c.tags.map((t) => `<span>${t}</span>`).join('')}${c.id === this.profile.character ? '<span style="color:var(--accent);border-color:rgba(255,107,44,.35)">SEÇİLİ</span>' : ''}</div>
      </div>`).join('');

    const set = (ref, val) => { const el = $(`[data-ref=${ref}]`, this.root); if (el) el.textContent = val; };
    set('char-name', sel.name);
    set('char-title', sel.title);
    set('char-abil-key', `YETENEK · ${sel.ability.key} · ${sel.ability.cooldown}SN BEKLEME`);
    set('char-abil', sel.ability.name);
    set('char-abil-desc', `${sel.ability.desc} ${sel.perk}`);
    const detail = $('#op-detail', this.root);
    if (detail) {
      const bar = (label, val, max, suffix = '') => `<div class="stat-row"><span>${label}</span><div class="track"><i style="width:${Math.min(100, (val / max) * 100)}%"></i></div><b>${val}${suffix}</b></div>`;
      detail.innerHTML = `
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px">
          <div><div class="kicker">${sel.callsign} DOSYASI</div><div style="font-family:Teko;font-size:23px;line-height:1">${sel.name}</div></div>
          <button class="btn small ${this.profile.character === sel.id ? '' : 'primary'}" data-action="select-char" ${this.profile.character === sel.id ? 'disabled' : ''}>${this.profile.character === sel.id ? 'AKTİF OPERATÖR' : 'OPERATÖRÜ SEÇ'}</button>
        </div>
        <p style="font-size:10.5px;line-height:1.55;color:var(--muted);margin-bottom:10px">${sel.bio}</p>
        ${bar('DAYANIKLILIK', sel.stats.health, 125)}
        ${bar('HAREKET', sel.stats.speed, 1.12, 'x')}
        ${bar('NİŞAN HIZI', sel.stats.ads, 1.2, 'x')}
        ${bar('ŞARJÖR', sel.stats.reload, 1.15, 'x')}
        <div style="margin-top:9px;padding-top:9px;border-top:1px solid var(--line);font-size:9px;letter-spacing:1px;color:var(--accent-2)">PASİF · ${sel.perk}</div>
      `;
    }
    this.ensureOpsPreview();
    if (this.previewOps) this.previewOps.setCharacter(sel.id);
  }

  ensureOpsPreview() {
    if (this.previewOps) return;
    const canvas = $('#op-preview-canvas', this.root);
    if (!canvas) return;
    this.previewOps = new PreviewRenderer(canvas);
    this.previewOps.setCharacter(this.selectedCharId);
  }

  renderMarketCats() {
    const cats = $('#market-cats', this.root);
    if (!cats) return;
    cats.innerHTML = [
      ...WEAPON_ORDER.map((id) => `<button class="cat-btn ${this.marketCat === id ? 'active' : ''}" data-cat="${id}">${WEAPONS[id].cls}<span>${SKINS.filter((s) => s.weapon === id).length}</span></button>`),
    ].join('');
  }

  renderMarket() {
    const grid = $('#skin-grid', this.root);
    if (!grid) return;
    const skins = SKINS.filter((s) => s.weapon === this.marketCat);
    if (!skins.find((s) => s.id === this.selectedSkinId)) {
      const equippedId = this.profile.equipped[this.marketCat];
      this.selectedSkinId = (skins.find((s) => s.id === equippedId) || skins[0])?.id;
    }
    grid.innerHTML = skins.map((s) => {
      const owned = this.profile.ownedSkins.includes(s.id);
      const equipped = this.profile.equipped[s.weapon] === s.id;
      const r = RARITIES[s.rarity];
      return `<div class="skin-card ${this.selectedSkinId === s.id ? 'active' : ''}" data-skin="${s.id}">
        ${equipped ? '<div class="badge-eq">KUŞANILDI</div>' : ''}
        <div class="swatch" style="background:radial-gradient(ellipse at 50% 40%, ${s.colors.base} 0%, #0b1116 85%)">
          ${weaponGlyph(s.weapon, s.colors)}
          <div style="position:absolute;left:0;right:0;bottom:0;height:2px;background:${r.color}"></div>
        </div>
        <div class="bottom">
          <div class="nm">${s.name}</div>
          <div class="rar" style="color:${r.color}">${r.label}</div>
          <div class="price">${owned ? '<span style="color:var(--accent-2)">ENVANTERDE</span>' : `<span>◈</span><b>${s.price.toLocaleString('tr-TR')}</b>`}</div>
        </div>
      </div>`;
    }).join('');

    const skin = SKIN_MAP[this.selectedSkinId];
    if (!skin) return;
    const r = RARITIES[skin.rarity];
    const weapon = WEAPONS[skin.weapon];
    const set = (ref, val, color) => { const el = $(`[data-ref=${ref}]`, this.root); if (!el) return; el.textContent = val; if (color) el.style.color = color; };
    set('pv-rarity', r.label, r.color);
    set('pv-name', skin.name);
    set('pv-weapon', weapon.name);
    set('pv-price', skin.price.toLocaleString('tr-TR'));
    const owned = this.profile.ownedSkins.includes(skin.id);
    const equipped = this.profile.equipped[skin.weapon] === skin.id;
    const ownedTag = $('[data-ref=pv-owned]', this.root);
    if (ownedTag) ownedTag.style.display = owned ? '' : 'none';
    const btn = $('#skin-action', this.root);
    if (btn) {
      if (equipped) { btn.textContent = 'KUŞANILDI'; btn.disabled = true; }
      else if (owned) { btn.textContent = 'KUŞAN'; btn.disabled = false; }
      else { btn.textContent = `SATIN AL · ${skin.price.toLocaleString('tr-TR')} KREDİ`; btn.disabled = this.profile.credits < skin.price; }
    }
    this.ensureMarketPreview();
    if (this.previewMarket) this.previewMarket.setWeapon(skin.weapon, skin);
    this.refreshChrome();
  }

  ensureMarketPreview() {
    if (this.previewMarket) return;
    const canvas = $('#market-preview-canvas', this.root);
    if (!canvas) return;
    this.previewMarket = new PreviewRenderer(canvas);
    const skin = SKIN_MAP[this.selectedSkinId];
    if (skin) this.previewMarket.setWeapon(skin.weapon, skin);
  }

  renderWeapons() {
    const table = $('#weapon-table', this.root);
    if (!table) return;
    const rows = WEAPON_ORDER.map((id) => {
      const w = WEAPONS[id];
      const isPrimary = w.slot === 'primary';
      const equipped = this.profile.primary === id;
      const stats = {
        Hasar: Math.min(100, (w.damage * (w.pellets || 1) / 92) * 100),
        'Atış Hızı': Math.min(100, (w.rpm / 900) * 100),
        Menzil: Math.min(100, (w.falloff[1] / 130) * 100),
        Kontrol: Math.max(12, 100 - (w.recoil / 6) * 100),
        Hareket: Math.min(100, (w.move / 1.1) * 100),
      };
      const statBars = Object.entries(stats).map(([label, val]) => `<div style="display:grid;grid-template-columns:64px 1fr;align-items:center;gap:8px"><span style="font-size:8px;letter-spacing:1px;color:var(--dim)">${label.toUpperCase()}</span><div class="bar"><i style="width:${val.toFixed(0)}%"></i></div></div>`).join('');
      return `<div class="weapon-row ${!isPrimary ? 'disabled' : ''}">
        <div>
          <div class="wname">${w.name}</div>
          <div class="wcls">${w.cls} · ${w.pellets > 1 ? `${w.pellets} SAÇMA` : `KAFA x${w.head}`}</div>
        </div>
        <div class="ttk">${ttk(w).toFixed(2)}<small> SN TTK</small></div>
        <div style="display:flex;flex-direction:column;gap:4px">${statBars}</div>
        <div><div class="bar"><i style="width:${Math.min(100, (w.mag / 75) * 100)}%"></i></div><div style="font-size:7px;letter-spacing:1px;color:var(--dim);margin-top:3px">ŞARJÖR ${w.mag}</div></div>
        <div><div class="bar"><i style="width:${Math.min(100, (w.reload / 4.6) * 100)}%"></i></div><div style="font-size:7px;letter-spacing:1px;color:var(--dim);margin-top:3px">RELOAD ${w.reload.toFixed(1)}SN</div></div>
        <div class="act">${equipped ? '<div class="equipped-tag">KUŞANILDI</div>' : isPrimary ? `<button class="btn small" data-action="equip-weapon" data-weapon="${id}">KUŞAN</button>` : '<div class="tag-balanced">YEDEK</div>'}</div>
      </div>`;
    }).join('');
    table.innerHTML = `
      <div class="weapon-row head"><div>SİLAH</div><div>TTK</div><div>DENGE PROFİLİ</div><div>ŞARJÖR</div><div>YENİLEME</div><div style="text-align:right">KUŞAN</div></div>
      ${rows}
      <div style="margin-top:12px;font-size:9px;line-height:1.7;letter-spacing:.8px;color:var(--dim)">
        DENGE NOTU · Her silahın gövde TTK'si amaçlanan menzilinde 0,42–0,55 sn aralığında tutulur. Yakın menzil araçları (SMG, pompalı) uzakta; uzun menzil araçları (keskin nişancı, DMR) yakında cezalandırılır. Tüm skinler kozmetiktir.
      </div>
    `;
  }

  showMatchmaking(mapId) {
    const map = MAP_MAP[mapId] || MAPS[0];
    this.app.pendingMap = map.id;
    const $mm = $('#matchmaking', this.root);
    $mm.classList.add('active');
    $('[data-ref=mm-map]', $mm).textContent = map.name;
    $('[data-ref=mm-sub]', $mm).textContent = `${['EU-WEST-01', 'TR-01', 'EU-EAST-02'][(Math.random() * 3) | 0]} · 5v5 TAKIM ÖLÜMÜ · ${map.region}`;
    $('[data-ref=mm-status]', $mm).textContent = 'Uygun sunucu taranıyor…';
    $('#mm-deploy').classList.remove('show');
    const names = [this.profile.callsign || 'SEN'];
    const shuffled = [...BOT_NAMES].sort(() => Math.random() - 0.5);
    for (let i = 0; i < 9; i++) names.push(shuffled[i]);
    const list = $('#mm-players', $mm);
    list.innerHTML = '';
    names.forEach((n, i) => {
      const team = i < 5 ? 'blue' : 'red';
      const el = document.createElement('div');
      el.className = `mm-player ${i === 0 ? 'me' : ''}`;
      el.style.animationDelay = `${0.06 * i}s`;
      el.innerHTML = `<span class="tm" style="color:${team === 'blue' ? 'var(--blue)' : 'var(--red)'}">${team === 'blue' ? 'ALFA' : 'BRAVO'}</span><span class="nn">${i === 0 ? n + ' (SEN)' : n}</span><span class="ping">${12 + ((Math.random() * 40) | 0)} ms</span>`;
      list.appendChild(el);
    });
    const statuses = ['Sunucuya bağlanılıyor…', '9 oyuncu bulundu · takımlar kuruluyor…', 'Sunucu hazır · harita yükleniyor…'];
    clearTimeout(this.mmTimer);
    let step = 0;
    const tick = () => {
      $('[data-ref=mm-status]', $mm).textContent = statuses[step] || statuses[2];
      step += 1;
      if (step === 2) $('#mm-deploy').classList.add('show');
      if (step < 3) this.mmTimer = setTimeout(tick, 900);
    };
    this.mmTimer = setTimeout(tick, 700);
  }

  hideMatchmaking() {
    clearTimeout(this.mmTimer);
    $('#matchmaking', this.root).classList.remove('active');
  }

  showPostMatch(result) {
    this.go('postmatch');
    const set = (ref, val) => { const el = $(`[data-ref=${ref}]`, this.root); if (el) el.textContent = val; };
    set('pm-map', (result.map?.name || '').toUpperCase());
    const title = $('[data-ref=pm-title]', this.root);
    title.textContent = result.draw ? 'BERABERE' : result.win ? 'ZAFER' : 'YENİLGİ';
    title.className = result.win ? 'win' : 'lose';
    set('pm-blue', result.score.blue);
    set('pm-red', result.score.red);
    set('pm-kills', result.player.kills);
    set('pm-deaths', result.player.deaths);
    set('pm-assists', result.player.assists);
    set('pm-damage', result.player.damage);
    set('pm-hs', result.player.headshots);
    set('pm-acc', `${result.player.accuracy}%`);
    set('pm-reward-kill', `+${120 + result.player.kills * 24 + result.player.assists * 12 + Math.floor(result.player.damage / 90)}`);
    set('pm-reward-win', `+${result.win ? 220 : result.draw ? 110 : 70}`);
    set('pm-reward-mvp', `+${result.mvp ? 120 : 0}`);
    set('pm-credits', `+${result.credits}`);
    set('pm-xp', `+${result.xp} XP`);
    set('pm-mvp', '★ MAÇIN OYUNCUSU');
    const mvp = $('[data-ref=pm-mvp]', this.root);
    if (mvp) mvp.style.display = result.mvp ? '' : 'none';
    const p = this.profile;
    set('pm-level', `SEVİYE ${p.level} · ${rankFor(p.level)}`);
    set('pm-xptext', `${p.xp} / ${xpNeeded(p.level)} XP`);
    const bar = $('[data-ref=pm-xpbar]', this.root);
    if (bar) bar.style.width = `${Math.min(100, (p.xp / xpNeeded(p.level)) * 100)}%`;
    this.refreshChrome();
  }

  openSettings() {
    const modal = $('#settings', this.root);
    modal.classList.add('active');
    const sw = $('#sound-switch', this.root);
    if (sw) sw.classList.toggle('on', this.profile.settings.sound);
    const q = $('[data-ref=quality]', this.root);
    if (q) q.value = this.profile.settings.quality;
    const sens = $('[data-ref=sens]', this.root);
    if (sens) sens.value = this.profile.settings.sensitivity;
    const fov = $('[data-ref=fov]', this.root);
    if (fov) fov.value = this.profile.settings.fov;
  }

  closeSettings() { $('#settings', this.root).classList.remove('active'); }

  showPause(on) {
    $('#pause', this.root).classList.toggle('active', on);
  }

  toast(message, type = '') {
    const wrap = $('#toasts', this.root);
    if (!wrap) return;
    const el = document.createElement('div');
    el.className = `toast ${type}`;
    el.textContent = message;
    wrap.appendChild(el);
    setTimeout(() => { el.style.opacity = '0'; el.style.transition = 'opacity .3s'; setTimeout(() => el.remove(), 320); }, 2600);
  }

  updatePreviews(dt) {
    if (this.current === 'operators') this.previewOps?.update(dt);
    if (this.current === 'market') this.previewMarket?.update(dt);
  }

  show() { /* reserved */ }
}
