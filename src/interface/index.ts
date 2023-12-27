import { ISpirit } from './scene';

export interface IGameContext {
  ctx: CanvasRenderingContext2D;
  player: IPlayer;
  options: any;
}

type IWordType = '主' | '状' | '谓' | '补' | '定' | '宾';
type IWordProperty =
  | '名词'
  | '动词'
  | '形容词'
  | '数词'
  | '量词'
  | '代词'
  | '副词'
  | '介词'
  | '连词'
  | '助词'
  | '叹词'
  | '拟声词';

// 技能 有buff/debuff
export interface INode {
  id: string; // 技能id
  type: IWordType; // 句子属性 主谓宾定状补
  property: IWordProperty; // 词性
  name: string; // 词语
  description?: string; // 技能描述
  power: number; // 技能威力
  speed: number; // 技能速度
  nextType: Array<IWordType>; // 下一个技能
}

// 如果是玩家： skill 是一个长度为5的数组，其中第二个元素不能为空 [状语，谓语，补语，定语，宾语]
// 如果是敌人： skill 只能有一个定语
export interface IPlayer extends ISpirit {
  node: INode;
  skill: Array<INode> | INode;
  power: number; // 角色威力 = 初始威力 + 技能威力
  speed: number; // 角色速度 = 初始速度 + 技能速度
}

export interface IEnemy extends ISpirit {
  node: INode;
  skill: INode;
  power: number; // 角色威力 = 初始威力 + 技能威力
  speed: number; // 角色速度 = 初始速度 + 技能速度
}
