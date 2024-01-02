import { INode } from '@/interface';
import { IDataBus } from '@/interface/base';

import Pool from './pool';
import Gift from '@/scene/gift';
import Enemy from '@/scene/enemy';

let instance: DataBus;
class DataBus implements IDataBus {
  public frame: number = 0; // 当前帧
  public level: number = 1; // 当前关卡
  public enemys: Array<Enemy> = []; // 当前关卡所有enemy 对象
  public gifts: Array<Gift> = [];
  public skills: Array<Array<INode>> = []; // 当前关卡 主角已拥有的 能力
  public gameOver: 0 | 1 | 2 = 0; // 是否游戏结束
  public pool: Pool = new Pool();

  constructor() {
    if (instance) return instance;

    instance = this;
  }

  replay() {
    this.gameOver = 0;
    this.frame = 0;
    this.enemys = [];
    this.gifts = [];
    this.skills = [];
  }

  next() {
    this.level += 1;
    this.replay();
  }

  /**
   * 回收敌人，进入对象池
   * 此后不进入帧循环
   */
  removeEnemey(enemy: Enemy) {
    enemy.visible = false;
    this.enemys = this.enemys.filter(item => item.visible);
    this.pool.recover('enemy', enemy);
  }

  /**
   * 回收子弹，进入对象池
   * 此后不进入帧循环
   */
  removeGift(gift: Gift) {
    gift.visible = false;
    this.gifts = this.gifts.filter(item => item.visible);
    this.pool.recover('gift', gift);
  }
}

export default new DataBus();
