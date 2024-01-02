import { IPlayer, IStyle } from '@/interface';
import { IConfig, ILevel } from '@/interface/base';

let instance: Config;
class Config implements IConfig {
  screenWidth = 896;
  screenHeight = 414;
  background = '';
  player!: IPlayer;
  level!: ILevel;
  playerStyle!: IStyle;
  giftStyle!: IStyle;
  enemyStyle!: IStyle;

  constructor() {
    if (instance) return instance;

    instance = this;
  }

  initBase(w: number, h: number, background: string, playerStyle: IStyle, giftStyle: IStyle, enemyStyle: IStyle) {
    this.screenWidth = w;
    this.screenHeight = h;
    this.background = background;
    this.playerStyle = playerStyle;
    this.giftStyle = giftStyle;
    this.enemyStyle = enemyStyle;
  }

  setPlayer(player: IPlayer) {
    this.player = player;
  }

  setLevel(level: ILevel) {
    this.level = level;
  }

  setBackground(bg: string) {
    this.background = bg;
  }
}

export default new Config();
