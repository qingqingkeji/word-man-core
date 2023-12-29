import { IConfig } from '@/interface/base';

let instance: Config;
class Config implements IConfig {
  screenWidth = 0;
  screenHeight = 0;
  background = '';

  constructor() {
    if (instance) return instance;

    instance = this;
  }

  reset(config: IConfig) {
    Object.assign(this, config);
  }
}

export default new Config();
