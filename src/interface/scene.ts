export interface ISize {
  width: number;
  height: number;
}

export interface IPos {
  x: number;
  y: number;
}

export interface ISpirit extends ISize, IPos {
  img: string;
  visible: boolean;
}
