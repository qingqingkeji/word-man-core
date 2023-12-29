import { IEnemy } from '.';

export type IDataBus = {
  frame: number;
  score: number;
  enemys: Array<IEnemy>;
  gameOver: boolean;

  reset: () => void;
};

export type IConfig = {
  screenWidth: number;
  screenHeight: number;
  background: string;
};
