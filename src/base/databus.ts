import { IEnemy } from '@/interface';
import { IDataBus } from '@/interface/base';

let instance: DataBus;
class DataBus implements IDataBus {
  public frame: number = 0;
  public score: number = 0;
  public enemys: Array<IEnemy> = [];
  public gameOver: boolean = false;

  constructor() {
    if (instance) return instance;

    instance = this;

    this.reset();
  }

  reset() {
    this.frame = 0;
    this.score = 0;
    this.enemys = [];
    this.gameOver = false;
  }
}

export default new DataBus();
