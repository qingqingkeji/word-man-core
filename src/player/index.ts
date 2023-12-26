import { IEnemy, IPlayer, ISkill } from '@/interface/canvas';

export default function Player() {
  if (!(this instanceof Player)) {
    return console.error('Player is a constructor and should be called with the `new` keyword');
  }
}

Player.prototype._init = function (player: IPlayer) {
  this.x = player.x;
  this.y = player.y;
  this.width = player.width;
  this.height = player.height;
  this.visible = player.visible;
  this.node = player.node;
  this.speed = player.speed || 0;
  this.power = player.power || 0;
  this.skill = player.skill || [];
};

Player.prototype.evolution = function (skill: ISkill) {
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
    (pre: { speed: number; power: number }, cur: ISkill) => {
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

/**
 * 碰撞时，触发逻辑
 * 判断power战力大小,
 */
Player.prototype.attack = function (ememy: IEnemy) {
  let spX = ememy.x + ememy.width / 2;
  let spY = ememy.y + ememy.height / 2;

  if (!this.visible || !ememy.visible) return;

  // 如果二者碰撞，根据战力判断胜负
  if (!!(spX >= this.x && spX <= this.x + this.width && spY >= this.y && spY <= this.y + this.height)) {
    this.visible = this.power > ememy.power;
    ememy.visible = this.power <= ememy.power;
  }
};
