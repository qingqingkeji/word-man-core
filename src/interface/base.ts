import { IEnemy, IPlayer, INode } from '.';

export type IDataBus = {
  frame: number;
  level: number;
  enemys: Array<IEnemy>;
  gameOver: boolean;
  skills: Array<Array<INode>>;

  reset: () => void;
};

export type ILevel = {
  id: number; // 关卡编号
  name: string; // 关卡名
  enemys: Array<IEnemy>; // 关卡的敌人
  gifts: Array<INode>; // 玩家/敌人可以吃的物品， 可以是增益， 也可以是减益； 一般来说， 敌人只可以吃形容词； 主角却可以吃任何词，但是必须组成完整的句子
};

export type IConfig = {
  screenWidth: number;
  screenHeight: number;
  background: string;
  player: IPlayer;
  levels: Array<ILevel>;
};
