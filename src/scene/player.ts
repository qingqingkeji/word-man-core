import { IPlayer, INode } from '@/interface/index';
import config from '@/base/config';
import databus from '@/base/databus';
import Role from '@/scene/role';

export default class Player extends Role {
  public speed: number;
  public power: number;
  public skill: Array<INode> = [];

  constructor(player: IPlayer) {
    super(player, 'player');

    this.speed = player.node.speed || 1;
    this.power = player.node.power || 1;
    this.skill = player.skill || [];
  }

  // 两个碰撞上的时候，判断组合逻辑
  compose(skill: INode) {
    const type = skill.type;
    const len = this.skill.length || 0;
    const top = len ? this.skill[len - 1] : null;
    if (!top) {
      if (['状', '谓'].includes(type)) {
        this.skill.push(skill);
      }
    } else {
      if (top?.nextType.includes(type)) {
        this.skill.push(skill);
      }
    }

    if (!skill.nextType.length) {
      this.evolution();
    }
  }

  // 如果组合成功，增益/减益
  evolution() {
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

    databus.skills.push(this.skill);
    this.skill = [];
  }

  // 圆盘控制移动
  move(dx: number, dy: number) {
    if (!dx && !dy) return;
    const distance = Math.sqrt(dx * dx + dy * dy);
    const speedX = this.speed * (dx / distance);
    const speedY = this.speed * (dy / distance);
    if (this.position.x > this.radius && this.position.x < config.screenWidth - this.radius) {
      this.position.x += speedX;
    } else {
      if (this.position.x <= this.radius && speedX > 0) this.position.x += speedX;
      if (this.position.x >= config.screenWidth - this.radius && speedX < 0) this.position.x += speedX;
    }

    if (this.position.y > this.radius && this.position.y < config.screenHeight - this.radius) {
      this.position.y += speedY;
    } else {
      if (this.position.y <= this.radius && speedY > 0) this.position.y += speedY;
      if (this.position.y >= config.screenHeight - this.radius && speedY < 0) this.position.y += speedY;
    }
  }
}
