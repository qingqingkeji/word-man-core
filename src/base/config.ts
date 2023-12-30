import { IPlayer } from '@/interface';
import { IConfig, ILevel } from '@/interface/base';

let instance: Config;
class Config implements IConfig {
  screenWidth = 896;
  screenHeight = 414;
  background = '';
  player!: IPlayer;
  levels!: ILevel[];

  constructor() {
    if (instance) return instance;

    instance = this;
  }

  reset(config: IConfig) {
    Object.assign(this, config);
  }
}

export default new Config();
