import { INode, IPlayer, Vector } from '@/interface';
import { IConfig } from '@/interface/base';

export const PLAYER_SPEED = 0.5; // 玩家初始速度
export const PLAYER_POWER = 1; // 玩家初始战力
export const ENEMY_SPEED = 0.25; // 敌人初始速度
export const ENEMY_POWER = 2; // 敌人初始战力

export const playerNode: INode = {
  id: '', // 技能id
  type: '主', // 句子属性 主谓宾定状补
  property: '代词', // 词性
  name: '我', // 词语
  description: '这是主角的描述', // 技能描述
  speed: PLAYER_SPEED,
  power: PLAYER_POWER,
  nextType: ['状', '谓'], // 下一个技能
};

export const player: IPlayer = {
  node: playerNode,
  skill: [],
  visible: true,
  image: '',
  position: new Vector(448, 360),
  width: 200,
  height: 200,
  radius: 0,
};

export const configTest: IConfig = {
  screenWidth: 896,
  screenHeight: 414,
  background: 'https://img.qingqingkeji.cn/bg.jpeg',
  player,
  levels: [],
};
