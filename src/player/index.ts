import { IPlayer, INode } from '@/interface/index';
import Sprite from '@/scene';

export default function Player(player: IPlayer) {
  if (!(this instanceof Player)) {
    return console.error('Player is a constructor and should be called with the `new` keyword');
  }

  Sprite.call(this, player);

  this._init(player);

  this.count = 1; // 技能容量，当前关卡
}

Player.prototype = new Sprite();

Player.prototype._init = function (player: IPlayer) {
  this.speed = player.speed || 0;
  this.power = player.power || 0;
  this.skill = player.skill || [];
};

Player.prototype.evolution = function (skill: INode) {
  const type = skill.type;
  const len = this.skill.length || 0;
  const top = this.skill[len - 1];
  if (!top) {
    if (['状', '谓'].includes(type)) {
      this.skill.push(skill);
    } else {
      // TODO show Error
    }
  } else {
    if (top?.nextType.includes(type)) {
      this.skill.push(skill);
    } else {
      // TODO show Error
    }
  }

  if (!skill.nextType.length) {
    this.updateSkill();
    // TODO show animation
  }
};

Player.prototype.updateSkill = function () {
  const { speed, power } = this.skill.reduce(
    (pre: { speed: number; power: number }, cur: INode) => {
      pre.speed += cur.speed;
      pre.power += cur.power;
      return pre;
    },
    {
      speed: this.speed || 0,
      power: this.power || 0,
    }
  );

  this.speed = speed;
  this.power = power;

  this.skill = [];
};

/**
 * dx，dy: 手指触摸位置 和 轮盘中心点位置的差值
 */
Player.prototype.move = function (dx: number, dy: number) {
  const distance = Math.sqrt(dx * dx + dy * dy);
  const speedX = this.speed * (dx / distance);
  const speedY = this.speed * (dy / distance);
  this.x += speedX;
  this.y += speedY;
};
