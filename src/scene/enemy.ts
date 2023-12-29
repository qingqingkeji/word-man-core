import { IEnemy, INode } from '@/interface';
import Sprite from '@/scene';

export default class Enemy extends Sprite {
  speed: number;
  power: number;
  skill: INode;

  constructor(sp: IEnemy) {
    super(sp);

    this.speed = sp.node.speed || 1;
    this.power = sp.node.power || 1;
    this.skill = sp.skill || null;
  }

  drawToCanvas() {}
}
