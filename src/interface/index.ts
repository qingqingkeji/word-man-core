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

export class Vector<T> {
  public x: T;
  public y: T;
  constructor(x: T, y: T) {
    this.x = x;
    this.y = y;
  }
}

export interface IStyle {
  fontSize: number;
  color: string;
  backgroundColor: string;
  borderColor: string;
  borderWidth: number;
}

export interface IRole {
  visible: boolean;
  position: Vector<number>;
  radius: number;
  node: INode;
}

// 精灵
export interface ISpirit {
  image: string;
  visible: boolean;
  position: Vector<number>;
  width: number;
  height: number;
}

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
export interface IPlayer extends IRole {
  skill: Array<INode>;
}

export interface IEnemy extends IRole {
  skill: INode;
}

export type IGift = IRole;
