// ─── IRON PROTOCOL · game data ───────────────────────────────────────────────
// All weapons are normalized around a ~0.42–0.55s body TTK at their intended
// range. Trade-offs are deliberately linear: no weapon dominates every column.
// Damage is per bullet; spread/recoil are in degrees.

export const RARITIES = {
  common: { label: 'STANDART', color: '#9aa7b8' },
  rare: { label: 'NADİR', color: '#3ea6ff' },
  epic: { label: 'EPİK', color: '#b06bff' },
  legendary: { label: 'EFSANE', color: '#ffb02e' },
};

export const WEAPONS = {
  ar: {
    id: 'ar', name: 'AR-9 VANGUARD', cls: 'SALDIRI TÜFEĞİ', slot: 'primary',
    damage: 23, rpm: 620, mag: 30, reserve: 150, reload: 2.05,
    falloff: [24, 48, 0.62], head: 1.65,
    hipSpread: 1.35, adsSpread: 0.16, moveSpread: 0.9,
    recoil: 0.95, recoilYaw: 0.32, adsTime: 0.20,
    pellets: 1, auto: true, move: 1.0, adsMove: 0.62,
    color: 0x3c4450, accent: 0x59e0c6,
    desc: 'Her mesafede güvenilir. Orta menzilin standart referansı; öğrenmesi kolay, tavana yakın.',
    role: 'DENGE',
  },
  smg: {
    id: 'smg', name: 'VX-4 SPECTER', cls: 'HAFİF MAKİNELİ', slot: 'primary',
    damage: 16, rpm: 880, mag: 35, reserve: 175, reload: 1.62,
    falloff: [12, 28, 0.50], head: 1.5,
    hipSpread: 1.05, adsSpread: 0.34, moveSpread: 0.55,
    recoil: 0.62, recoilYaw: 0.28, adsTime: 0.16,
    pellets: 1, auto: true, move: 1.07, adsMove: 0.72,
    color: 0x2f3540, accent: 0xff8b3d,
    desc: 'Yakın mesafede keskin, uzakta cezalandırır. Hareket hızı yüksek; kontrol senin elinde.',
    role: 'YAKIN',
  },
  shotgun: {
    id: 'shotgun', name: 'BR-12 BREAKER', cls: 'POMPALI', slot: 'primary',
    damage: 10, rpm: 68, mag: 6, reserve: 48, reload: 2.65,
    falloff: [7, 22, 0.15], head: 1.3,
    hipSpread: 4.6, adsSpread: 3.3, moveSpread: 1.4,
    recoil: 3.2, recoilYaw: 1.2, adsTime: 0.26,
    pellets: 10, auto: false, move: 0.98, adsMove: 0.6,
    color: 0x3a2e28, accent: 0xe9b45c,
    desc: 'Tek isabetle 100 hasar. 7 metreden sonra hızla düşer; köşe tutan oyuncunun silahı.',
    role: 'YAKIN',
  },
  sniper: {
    id: 'sniper', name: 'AX-50 LONGSHOT', cls: 'KESKİN NİŞANCI', slot: 'primary',
    damage: 92, rpm: 44, mag: 5, reserve: 35, reload: 3.05,
    falloff: [65, 130, 0.9], head: 2.0,
    hipSpread: 5.6, adsSpread: 0.025, moveSpread: 2.4,
    recoil: 5.8, recoilYaw: 0.9, adsTime: 0.34,
    pellets: 1, auto: false, move: 0.9, adsMove: 0.42,
    color: 0x30383a, accent: 0x72e4ff,
    desc: 'Kafada tek atış. Gövdede iki atış. Yavaş hareket ve uzun reload ile dengelenir.',
    role: 'UZAK',
  },
  lmg: {
    id: 'lmg', name: 'MK-7 BULWARK', cls: 'MAKİNELİ TÜFEK', slot: 'primary',
    damage: 25, rpm: 520, mag: 75, reserve: 225, reload: 4.6,
    falloff: [26, 58, 0.65], head: 1.55,
    hipSpread: 2.25, adsSpread: 0.30, moveSpread: 1.6,
    recoil: 1.55, recoilYaw: 0.45, adsTime: 0.32,
    pellets: 1, auto: true, move: 0.86, adsMove: 0.45,
    color: 0x3d423a, accent: 0xffc857,
    desc: '75 mermi, sürekli baskı. Ağır hareket ve uzun reload ile dengelenmiş alan kontrolü.',
    role: 'BASKI',
  },
  dmr: {
    id: 'dmr', name: 'DMR-14 WARDEN', cls: 'YARI OTOMATİK', slot: 'primary',
    damage: 44, rpm: 230, mag: 12, reserve: 84, reload: 2.35,
    falloff: [42, 88, 0.8], head: 1.8,
    hipSpread: 2.4, adsSpread: 0.07, moveSpread: 1.5,
    recoil: 2.35, recoilYaw: 0.55, adsTime: 0.26,
    pellets: 1, auto: false, move: 0.96, adsMove: 0.55,
    color: 0x36424a, accent: 0x9fffc8,
    desc: 'Üç isabet, iki kafa. Hassas oyuncular için ödüllendirici; yakın dövüşte affetmez.',
    role: 'HASSAS',
  },
  pistol: {
    id: 'pistol', name: 'P-19 SIDEWINDER', cls: 'TABANCA', slot: 'secondary',
    damage: 26, rpm: 420, mag: 12, reserve: 72, reload: 1.5,
    falloff: [15, 34, 0.55], head: 1.7,
    hipSpread: 1.5, adsSpread: 0.30, moveSpread: 0.7,
    recoil: 1.1, recoilYaw: 0.3, adsTime: 0.14,
    pellets: 1, auto: false, move: 1.06, adsMove: 0.75,
    color: 0x2e3239, accent: 0xd9e2ea,
    desc: 'Yedek plan. Hızlı çekilir, dört isabetle öldürür; birincil silahın yanında dürüst bir seçenek.',
    role: 'YEDEK',
  },
};

export const WEAPON_ORDER = ['ar', 'smg', 'shotgun', 'sniper', 'lmg', 'dmr', 'pistol'];
export const PRIMARY_IDS = WEAPON_ORDER.filter((id) => WEAPONS[id].slot === 'primary');

export const SKINS = [
  // AR
  { id: 'ar_sand', weapon: 'ar', name: 'KUM KAMUFLAJI', rarity: 'common', price: 300, pattern: 'camo', colors: { base: '#8a7a58', accent: '#c7b48c', metal: '#3a3832', emissive: '#000000' }, finish: { rough: 0.72, metal: 0.15 } },
  { id: 'ar_neon', weapon: 'ar', name: 'NEON BASKIN', rarity: 'epic', price: 1250, pattern: 'circuit', colors: { base: '#1b2230', accent: '#27f2d0', metal: '#4b5a6d', emissive: '#27f2d0' }, finish: { rough: 0.34, metal: 0.65 } },
  { id: 'ar_gold', weapon: 'ar', name: 'ALTIN STANDART', rarity: 'legendary', price: 2400, pattern: 'solid', colors: { base: '#c89b3c', accent: '#ffe9a3', metal: '#f5d27a', emissive: '#000000' }, finish: { rough: 0.2, metal: 0.95 } },
  // SMG
  { id: 'smg_arctic', weapon: 'smg', name: 'ARKTİK NABIZ', rarity: 'rare', price: 650, pattern: 'solid', colors: { base: '#d7e8ef', accent: '#5bc8ff', metal: '#8ba3b0', emissive: '#5bc8ff' }, finish: { rough: 0.38, metal: 0.55 } },
  { id: 'smg_hex', weapon: 'smg', name: 'MOR DALGA', rarity: 'epic', price: 1250, pattern: 'hex', colors: { base: '#2c1d42', accent: '#b06bff', metal: '#5c4a78', emissive: '#b06bff' }, finish: { rough: 0.4, metal: 0.6 } },
  { id: 'smg_ember', weapon: 'smg', name: 'KIVILCIM', rarity: 'legendary', price: 2400, pattern: 'ember', colors: { base: '#241713', accent: '#ff6a2a', metal: '#6d4a3a', emissive: '#ff8a3d' }, finish: { rough: 0.42, metal: 0.72 } },
  // Shotgun
  { id: 'sg_rust', weapon: 'shotgun', name: 'PASLI ÇELİK', rarity: 'common', price: 300, pattern: 'carbon', colors: { base: '#6b4b38', accent: '#b98756', metal: '#4b4038', emissive: '#000000' }, finish: { rough: 0.78, metal: 0.4 } },
  { id: 'sg_emerald', weapon: 'shotgun', name: 'ZÜMRÜT KIRILMA', rarity: 'rare', price: 650, pattern: 'hex', colors: { base: '#12302a', accent: '#3ddc97', metal: '#315a4b', emissive: '#3ddc97' }, finish: { rough: 0.32, metal: 0.7 } },
  { id: 'sg_inferno', weapon: 'shotgun', name: 'CEHENNEM', rarity: 'epic', price: 1250, pattern: 'ember', colors: { base: '#2b1210', accent: '#ff4a2a', metal: '#5c2b22', emissive: '#ff5c2a' }, finish: { rough: 0.46, metal: 0.65 } },
  // Sniper
  { id: 'sn_now', weapon: 'sniper', name: 'KAR PERDESİ', rarity: 'rare', price: 650, pattern: 'camo', colors: { base: '#dfe9ed', accent: '#9fb6c2', metal: '#6d7c84', emissive: '#000000' }, finish: { rough: 0.6, metal: 0.3 } },
  { id: 'sn_cobalt', weapon: 'sniper', name: 'KOBALT', rarity: 'epic', price: 1250, pattern: 'circuit', colors: { base: '#101b33', accent: '#3e7dff', metal: '#45536d', emissive: '#3e7dff' }, finish: { rough: 0.3, metal: 0.8 } },
  { id: 'sn_mamba', weapon: 'sniper', name: 'KARA MAMBA', rarity: 'legendary', price: 2400, pattern: 'camo', colors: { base: '#11150f', accent: '#80ff5c', metal: '#303a2c', emissive: '#80ff5c' }, finish: { rough: 0.28, metal: 0.85 } },
  // LMG
  { id: 'lmg_industrial', weapon: 'lmg', name: 'SANAYİ', rarity: 'common', price: 300, pattern: 'carbon', colors: { base: '#3c4148', accent: '#ffb84d', metal: '#696f78', emissive: '#000000' }, finish: { rough: 0.66, metal: 0.55 } },
  { id: 'lmg_volcano', weapon: 'lmg', name: 'VOLKAN', rarity: 'epic', price: 1250, pattern: 'ember', colors: { base: '#22191a', accent: '#ff5d2e', metal: '#4f3b38', emissive: '#ff5d2e' }, finish: { rough: 0.48, metal: 0.7 } },
  // DMR
  { id: 'dmr_wolf', weapon: 'dmr', name: 'ÇÖL KURDU', rarity: 'rare', price: 650, pattern: 'camo', colors: { base: '#9d8456', accent: '#e0c18a', metal: '#4d483c', emissive: '#000000' }, finish: { rough: 0.7, metal: 0.25 } },
  { id: 'dmr_wave', weapon: 'dmr', name: 'SİBER DALGA', rarity: 'epic', price: 1250, pattern: 'circuit', colors: { base: '#12262b', accent: '#26e6c2', metal: '#3e5b5e', emissive: '#26e6c2' }, finish: { rough: 0.33, metal: 0.72 } },
  // Pistol
  { id: 'p_chrome', weapon: 'pistol', name: 'KROM', rarity: 'rare', price: 650, pattern: 'solid', colors: { base: '#c9d3d8', accent: '#ffffff', metal: '#e8eef2', emissive: '#000000' }, finish: { rough: 0.16, metal: 0.98 } },
  { id: 'p_midnight', weapon: 'pistol', name: 'GECE YARISI', rarity: 'epic', price: 1250, pattern: 'hex', colors: { base: '#131827', accent: '#6a8cff', metal: '#363f59', emissive: '#6a8cff' }, finish: { rough: 0.35, metal: 0.7 } },
];

export const SKIN_MAP = Object.fromEntries(SKINS.map((s) => [s.id, s]));

export function skinFor(weaponId, skinId) {
  const s = SKIN_MAP[skinId];
  return s && s.weapon === weaponId ? s : null;
}

// ─── Operators ──────────────────────────────────────────────────────────────
// Every operator has one meaningful strength and one honest weakness.
export const CHARACTERS = [
  {
    id: 'vanguard', name: 'KARTAL', title: 'HÜCUM PİYADESİ', callsign: 'VANGUARD',
    bio: 'Ön safta açılan koridorun sahibi. Hücum yeteneğiyle kısa süreli hız ve hızlı şarjör değişimi kazanır.',
    ability: { name: 'HÜCUM', key: 'Q', desc: '+30% hareket hızı ve +25% reload hızı · 4 sn', cooldown: 24, duration: 4, type: 'rush' },
    stats: { health: 105, speed: 1.02, ads: 1.0, reload: 1.0 },
    perk: 'Sağlam Duruş: +5 can',
    colors: { suit: '#243d48', accent: '#37e0c8', visor: '#7dfff0', skin: '#8d654e' },
    tags: ['HIZ', 'SALDIRI'],
  },
  {
    id: 'specter', name: 'HAYALET', title: 'KEŞİF UZMANI', callsign: 'SPECTER',
    bio: 'Sessiz ayaklar, keskin gözler. Nabız taraması düşmanları kısa süreliğine duvar arkasında bile işaretler.',
    ability: { name: 'NABIZ', key: 'Q', desc: 'Düşmanları 4 sn duvar arkasından işaretle · 28 sn', cooldown: 28, duration: 4, type: 'scan' },
    stats: { health: 100, speed: 1.04, ads: 1.15, reload: 1.0 },
    perk: 'Nişan Ustalığı: +15% ADS hızı',
    colors: { suit: '#2a2440', accent: '#b06bff', visor: '#63f5ff', skin: '#a26f53' },
    tags: ['KEŞİF', 'ÇEVİKLİK'],
  },
  {
    id: 'bastion', name: 'KALE', title: 'DESTEK ZIRHLISI', callsign: 'BASTION',
    bio: 'Takımın kalkanı. Ağır zırhı ve siper yeteneğiyle ön safta alan açar, ama yavaş hareket eder.',
    ability: { name: 'SİPER', key: 'Q', desc: '5 sn boyunca 55 geçici kalkan · 32 sn', cooldown: 32, duration: 5, type: 'shield' },
    stats: { health: 125, speed: 0.92, ads: 0.92, reload: 0.95 },
    perk: 'Ağır Zırh: +25 can',
    colors: { suit: '#3a3528', accent: '#ffc857', visor: '#ffd98a', skin: '#7a5842' },
    tags: ['DAYANIKLILIK', 'DESTEK'],
  },
  {
    id: 'wraith', name: 'KIVILCIM', title: 'GÖLGE AVCI', callsign: 'WRAITH',
    bio: 'Hız ve sürpriz. Sis perdesi düşman nişanını bozar; ince zırhı ise hata affetmez.',
    ability: { name: 'SİS PERDESİ', key: 'Q', desc: '4 sn boyunca düşman isabeti -35% · 26 sn', cooldown: 26, duration: 4, type: 'smoke' },
    stats: { health: 95, speed: 1.08, ads: 1.0, reload: 1.1 },
    perk: 'Hafif Ekipman: +8% hız, +10% reload',
    colors: { suit: '#2b1d2a', accent: '#ff4f8b', visor: '#ff8fb8', skin: '#b17a5e' },
    tags: ['HIZ', 'SESSİZLİK'],
  },
];

export const CHARACTER_MAP = Object.fromEntries(CHARACTERS.map((c) => [c.id, c]));

// ─── Maps ───────────────────────────────────────────────────────────────────
export const MAPS = [
  {
    id: 'harbor', name: 'SANCAK LİMANI', code: 'LIMAN', region: 'İSTANBUL', time: 'ALACAKARANLIK',
    kind: 'harbor', desc: 'Paslı konteynerler ve vinç gölgeleri. Orta mesafe çatışmaları için simetrik liman.',
    tags: ['ORTA MENZİL', 'KONTEYNER'], size: 'ORTA',
    palette: { sky: '#1b3346', fog: '#284455', ground: '#373c3c', accent: '#ff9a4d', sun: '#ffc38a', ambient: '#5d7f96', css: ['#132733', '#ef7f3c'] },
    botCap: 10,
  },
  {
    id: 'bazaar', name: 'NEON ÇARŞI', code: 'ÇARŞI', region: 'İZMİR', time: 'GECE',
    kind: 'bazaar', desc: 'Dar sokaklar, neon tabelalar ve tenteli tezgâhlar. Yakın menzilde refleks savaşı.',
    tags: ['YAKIN MENZİL', 'NEON'], size: 'KÜÇÜK',
    palette: { sky: '#120d24', fog: '#1d1434', ground: '#25202e', accent: '#ff3d9a', sun: '#8a70ff', ambient: '#44326b', css: ['#160f2b', '#ff3d9a'] },
    botCap: 10,
  },
  {
    id: 'dunes', name: 'KUM FIRTINASI', code: 'ÇÖL', region: 'KONYA', time: 'ÖĞLE',
    kind: 'dunes', desc: 'Kavurucu güneş altında kum taşı siperleri. Uzun koridorlar keskin nişancıya yarar.',
    tags: ['UZUN MENZİL', 'AÇIK ALAN'], size: 'BÜYÜK',
    palette: { sky: '#d7b27a', fog: '#c9a56e', ground: '#b5905a', accent: '#7cc7ff', sun: '#fff0c8', ambient: '#e8cba0', css: ['#b68e58', '#7cc7ff'] },
    botCap: 10,
  },
  {
    id: 'frost', name: 'BUZ KALESİ', code: 'KALE', region: 'KARS', time: 'ŞAFAK',
    kind: 'frost', desc: 'Kar altında kalmış taş avlu. Kalın duvarlar ve dar geçitler taktik disiplin ister.',
    tags: ['KAPALI', 'ORTA MENZİL'], size: 'ORTA',
    palette: { sky: '#9fb6c8', fog: '#b9cbd8', ground: '#dbe4e6', accent: '#64d8ff', sun: '#eaf6ff', ambient: '#b7c9d4', css: ['#8ea7b8', '#64d8ff'] },
    botCap: 10,
  },
  {
    id: 'foundry', name: 'DEMİR FABRİKA', code: 'FABRİKA', region: 'GEBZE', time: 'GECE VARDİYASI',
    kind: 'foundry', desc: 'Boru hatları, erimiş metal parıltısı ve dar platformlar. Sürekli hareket gerekir.',
    tags: ['ENDÜSTRİYEL', 'KAPALI'], size: 'ORTA',
    palette: { sky: '#1a1714', fog: '#2a211b', ground: '#33302b', accent: '#ff7a2a', sun: '#ffad66', ambient: '#6a5846', css: ['#17140f', '#ff7a2a'] },
    botCap: 10,
  },
  {
    id: 'jungle', name: 'ORMAN KARAKOLU', code: 'ORMAN', region: 'RİZE', time: 'SABAH',
    kind: 'jungle', desc: 'Nemli ormanın içinde terk edilmiş karakol. Görüş hattı kısa, pusu fırsatı bol.',
    tags: ['YAKIN MENZİL', 'PUSU'], size: 'ORTA',
    palette: { sky: '#6f8b6a', fog: '#7e9a76', ground: '#4d5c3a', accent: '#ffd166', sun: '#d8e8a8', ambient: '#91a97c', css: ['#3f5230', '#ffd166'] },
    botCap: 10,
  },
  {
    id: 'orbital', name: 'YÖRÜNGE İSTASYONU', code: 'YÖRÜNGE', region: 'LEO-7', time: 'YÖRÜNGE GECESİ',
    kind: 'orbital', desc: 'Beyaz kompozit paneller ve cam koridorlar. Temiz çizgiler, soğuk ve ölümcül.',
    tags: ['BİLİMKURGU', 'DENGE'], size: 'ORTA',
    palette: { sky: '#050b18', fog: '#0b1830', ground: '#b8c4ce', accent: '#4dc5ff', sun: '#dbeeff', ambient: '#7a9cbd', css: ['#050b18', '#4dc5ff'] },
    botCap: 10,
  },
  {
    id: 'metro', name: 'TERK EDİLMİŞ METRO', code: 'METRO', region: 'ANKARA', time: 'GECE',
    kind: 'metro', desc: 'Karanlık tüneller, sütunlar ve durmuş bir tren. Sesler yankılanır, sırtını kolla.',
    tags: ['KAPALI', 'KARANLIK'], size: 'KÜÇÜK',
    palette: { sky: '#0a0908', fog: '#15110d', ground: '#2b2824', accent: '#ffb44d', sun: '#ffca7a', ambient: '#4a4038', css: ['#0a0908', '#ffb44d'] },
    botCap: 10,
  },
  {
    id: 'rooftop', name: 'GÜN BATIMI ÇATILARI', code: 'ÇATI', region: 'İSTANBUL', time: 'GÜN BATIMI',
    kind: 'rooftop', desc: 'Kızıl gökyüzü altında havalandırma üniteleri ve alçak duvarlar. Dikey dövüş.',
    tags: ['ÇATI', 'HIZLI'], size: 'ORTA',
    palette: { sky: '#4a1e3d', fog: '#7a3b4a', ground: '#4a4148', accent: '#ff6a5c', sun: '#ffb08a', ambient: '#a26a72', css: ['#4a1e3d', '#ff6a5c'] },
    botCap: 10,
  },
  {
    id: 'volcano', name: 'VOLKAN ÜSSÜ', code: 'VOLKAN', region: 'AĞRI', time: 'GECE',
    kind: 'volcano', desc: 'Lav ışığıyla yarılan bazalt platformlar. Dar köprüler ve yüksek riskli açılar.',
    tags: ['TEHLİKELİ', 'KAPALI'], size: 'ORTA',
    palette: { sky: '#1a0d0c', fog: '#2a1210', ground: '#2e2724', accent: '#ff4a1f', sun: '#ff6a3a', ambient: '#6d3a2e', css: ['#1a0d0c', '#ff4a1f'] },
    botCap: 10,
  },
];

export const MAP_MAP = Object.fromEntries(MAPS.map((m) => [m.id, m]));

export const BOT_NAMES = [
  'ALPHA', 'BORAN', 'CENGİZ', 'DENİZ', 'EFE', 'FİRUZE', 'GÖKÇE', 'HAKAN',
  'IRMAK', 'JANDARMA', 'KORAY', 'LEYLA', 'MERT', 'NAZ', 'ONUR', 'PUSU',
  'RUZGAR', 'SERKAN', 'TAYFUN', 'UMAY', 'VOLKAN', 'YILDIZ', 'ZEYNEP', 'ATLAS',
  'BARIŞ', 'CEYLAN', 'DOĞA', 'EMRE', 'FERİT', 'GÜNEŞ',
];

export const REGIONS = ['EU-WEST', 'EU-EAST', 'TR-01', 'TR-02', 'ME-CENTRAL'];

export function ttk(weapon) {
  const shots = Math.ceil(100 / weapon.damage);
  return (shots - 1) * (60 / weapon.rpm);
}

export function damageAt(weapon, dist) {
  const [a, b, min] = weapon.falloff;
  if (dist <= a) return weapon.damage;
  const t = Math.min(1, (dist - a) / Math.max(1, b - a));
  return weapon.damage * (1 + (min - 1) * t);
}
