import { ISpirit, Vector } from '@/interface';

export default class Sprite implements ISpirit {
  public position: Vector<number>; // 坐标
  public width: number; // 宽度
  public height: number; // 高度
  public image: string; // 图片
  public visible: boolean; // 是否可见

  constructor(sp: ISpirit) {
    this.position = sp.position;
    this.width = sp.width;
    this.height = sp.height;
    this.image = sp.image;
    this.visible = sp.visible;
  }

  drawImage(ctx: CanvasRenderingContext2D) {
    if (!this.visible) return;

    const image = new Image();
    image.src = this.image;

    ctx.drawImage(image, this.position.x, this.position.y, this.width, this.height);
  }

  isCollideWith(sp: ISpirit) {
    let spX = sp.position.x + sp.width / 2;
    let spY = sp.position.y + sp.height / 2;

    if (!this.visible || !sp.visible) return false;

    return !!(
      spX >= this.position.x &&
      spX <= this.position.x + this.width &&
      spY >= this.position.y &&
      spY <= this.position.y + this.height
    );
  }
}
