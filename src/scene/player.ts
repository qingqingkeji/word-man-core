import Sprite from '@/scene';
import { IPlayer, INode } from '@/interface/index';

export default class Player extends Sprite {
  public speed: number;
  public power: number;
  public skill: Array<INode>;

  constructor(player: IPlayer) {
    super(player);

    this.speed = player.node.speed || 0;
    this.power = player.node.power || 0;
    this.skill = (player.skill || []) as Array<INode>;
  }

  drawToCanvas() {}

  evolution(skill: INode) {
    const type = skill.type;
    const len = this.skill.length || 0;
    const top = this.skill[len - 1];
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
      this.updateSkill();
    }
  }

  updateSkill() {
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
  }

  move(dx: number, dy: number) {
    const distance = Math.sqrt(dx * dx + dy * dy);
    const speedX = this.speed * (dx / distance);
    const speedY = this.speed * (dy / distance);
    this.position.x += speedX;
    this.position.y += speedY;
  }
}
