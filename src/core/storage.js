const KEY = 'iron-protocol-profile-v1';

const DEFAULT_PROFILE = {
  version: 1,
  callsign: 'OPERATÖR-07',
  credits: 2400,
  xp: 0,
  level: 1,
  character: 'vanguard',
  primary: 'ar',
  secondary: 'pistol',
  ownedSkins: ['ar_sand'],
  equipped: { ar: 'ar_sand' },
  stats: { kills: 0, deaths: 0, wins: 0, matches: 0, bestStreak: 0, damage: 0 },
  settings: { sensitivity: 1, sound: true, quality: 'high', fov: 78 },
};

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

export function loadProfile() {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return clone(DEFAULT_PROFILE);
    const parsed = JSON.parse(raw);
    const p = { ...clone(DEFAULT_PROFILE), ...parsed };
    p.settings = { ...DEFAULT_PROFILE.settings, ...(parsed.settings || {}) };
    p.stats = { ...DEFAULT_PROFILE.stats, ...(parsed.stats || {}) };
    p.equipped = { ...DEFAULT_PROFILE.equipped, ...(parsed.equipped || {}) };
    p.ownedSkins = Array.isArray(parsed.ownedSkins) ? parsed.ownedSkins : [];
    p.credits = Number.isFinite(p.credits) ? p.credits : 2400;
    return p;
  } catch {
    return clone(DEFAULT_PROFILE);
  }
}

export function saveProfile(profile) {
  try {
    localStorage.setItem(KEY, JSON.stringify(profile));
  } catch {
    /* private mode — keep playing in memory */
  }
}

export function resetProfile() {
  try { localStorage.removeItem(KEY); } catch { /* ignore */ }
  return clone(DEFAULT_PROFILE);
}

export function xpNeeded(level) {
  return 700 + (level - 1) * 320;
}

export function addXp(profile, amount) {
  profile.xp += Math.max(0, Math.round(amount));
  let leveled = 0;
  while (profile.xp >= xpNeeded(profile.level)) {
    profile.xp -= xpNeeded(profile.level);
    profile.level += 1;
    leveled += 1;
  }
  return leveled;
}

export function rankFor(level) {
  if (level >= 40) return 'EFSANE';
  if (level >= 30) return 'ELMAS';
  if (level >= 22) return 'PLATİN';
  if (level >= 15) return 'ALTIN';
  if (level >= 9) return 'GÜMÜŞ';
  if (level >= 4) return 'BRONZ';
  return 'ÇIRAK';
}

export function buySkin(profile, skin) {
  if (!skin) return { ok: false, reason: 'Skin bulunamadı.' };
  if (profile.ownedSkins.includes(skin.id)) return { ok: false, reason: 'Bu skin zaten envanterinde.' };
  if (profile.credits < skin.price) return { ok: false, reason: 'Yetersiz kredi. Maç kazanarak kredi kazan.' };
  profile.credits -= skin.price;
  profile.ownedSkins.push(skin.id);
  saveProfile(profile);
  return { ok: true };
}

export function equipSkin(profile, skin) {
  if (!skin) return { ok: false, reason: 'Skin bulunamadı.' };
  if (!profile.ownedSkins.includes(skin.id)) return { ok: false, reason: 'Önce bu skini satın al.' };
  profile.equipped[skin.weapon] = skin.id;
  saveProfile(profile);
  return { ok: true };
}

export function equippedSkinId(profile, weaponId) {
  const id = profile.equipped[weaponId];
  return id && profile.ownedSkins.includes(id) ? id : null;
}
