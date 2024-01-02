import Enemy from '@/scene/enemy';
import { IEnemy, IPlayer, INode, IGift, IStyle } from '.';
import Gift from '@/scene/gift';

export type IDataBus = {
  frame: number;
  level: number;
  enemys: Array<Enemy>;
  gifts: Array<Gift>;
  gameOver: 0 | 1 | 2; // 0: 游戏中; 1: 游戏成功; 2: 游戏失败;
  skills: Array<Array<INode>>;

  next: () => void;
  replay: () => void;
  removeEnemey: (enemy: Enemy) => void;
  removeGift: (gift: Gift) => void;
};

export type ILevel = {
  id: number; // 关卡编号
  name: string; // 关卡名
  enemys: Array<IEnemy>; // 关卡的敌人
  gifts: Array<IGift>; // 玩家/敌人可以吃的物品， 可以是增益， 也可以是减益； 一般来说， 敌人只可以吃形容词； 主角却可以吃任何词，但是必须组成完整的句子
};

export type IConfig = {
  screenWidth: number;
  screenHeight: number;
  background: string;
  player: IPlayer;
  level: ILevel;
  playerStyle: IStyle;
  giftStyle: IStyle;
  enemyStyle: IStyle;
};
