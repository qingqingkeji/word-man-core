import { IEnemy, INode } from '@/interface';
import Role from '@/scene/role';

export default class Enemy extends Role {
  speed: number;
  power: number;
  skill: INode | undefined;

  constructor(sp: IEnemy) {
    super(sp, 'enemy');

    this.speed = sp.node.speed || 1;
    this.power = sp.node.power || 1;
  }
}
