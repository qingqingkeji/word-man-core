import { IEnemy, INode } from '@/interface';
import { IDataBus } from '@/interface/base';

let instance: DataBus;
class DataBus implements IDataBus {
  public frame: number = 0; // 当前帧
  public level: number = 1; // 当前关卡
  public enemys: Array<IEnemy> = []; // 当前关卡所有enemy 对象
  public skills: Array<Array<INode>> = []; // 当前关卡 主角已拥有的 能力
  public gameOver: boolean = false; // 是否游戏结束

  constructor() {
    if (instance) return instance;

    instance = this;

    this.reset();
  }

  reset() {
    this.frame = 0;
    this.level = 1;
    this.enemys = [];
    this.skills = [];
    this.gameOver = false;
  }

  next() {
    const level = this.level + 1;
    this.reset();
    this.level = level;
  }
}

export default new DataBus();
