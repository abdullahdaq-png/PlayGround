import * as THREE from 'three';
import { damageAt } from '../data.js';
import { rayCapsule, raySphere } from './world.js';

export class Combat {
  constructor(game) {
    this.game = game;
  }

  hitscan(shooter, origin, dir, weapon, opts = {}) {
    const world = this.game.world;
    const maxDist = opts.maxDist ?? 170;
    const worldHit = world.raycast(origin, dir, maxDist);
    let bestT = worldHit ? worldHit.dist : maxDist;
    let bestTarget = null;
    let headshot = false;

    for (const target of this.game.getCombatants()) {
      if (!target || target === shooter || !target.alive || target.team === shooter.team) continue;
      const cap = target.getHitCapsule();
      const body = rayCapsule(origin, dir, cap.a, cap.b, cap.radius);
      const head = raySphere(origin, dir, cap.head, cap.headRadius);
      let t = null;
      let isHead = false;
      if (body && body.t < bestT) { t = body.t; }
      if (head !== null && head < bestT && (t === null || head < t)) { t = head; isHead = true; }
      if (t !== null && t < bestT) { bestT = t; bestTarget = target; headshot = isHead; }
    }

    const point = new THREE.Vector3(origin.x + dir.x * bestT, origin.y + dir.y * bestT, origin.z + dir.z * bestT);
    let killed = false;
    if (bestTarget) {
      let dmg = damageAt(weapon, bestT) * (opts.damageScale ?? 1);
      if (headshot) dmg *= weapon.head;
      dmg = Math.round(dmg);
      if (shooter.isPlayer) this.game.player.damageDealt += dmg;
      killed = bestTarget.takeDamage(dmg, shooter, headshot, weapon.id);
      this.game.fx.impact(point, null, headshot ? 0xff4040 : 0xffa060, headshot);
      if (shooter.isPlayer) this.game.ui.hitmarker(killed, headshot);
    } else if (worldHit) {
      this.game.fx.impact(point, worldHit.normal, 0xffc070, false);
    }

    if (opts.tracer !== false) {
      const start = opts.muzzle ? opts.muzzle.clone() : origin.clone();
      this.game.fx.tracer(start, point, shooter.team === 'blue' ? 0xffe0a8 : 0xff8a6a);
    }
    return { hit: !!bestTarget, headshot, killed, target: bestTarget, point, dist: bestT };
  }
}
