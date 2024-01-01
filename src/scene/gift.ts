import { IGift, INode } from '@/interface';
import Sprite from '.';

export default class Gift extends Sprite {
  public node: INode;
  radius: number = 0;

  constructor(gift: IGift) {
    super(gift);

    this.node = gift.node;
  }

  reset(sp: IGift) {
    this.node = sp.node;
    this.position = sp.position;
    this.visible = true;
  }

  render(ctx: CanvasRenderingContext2D) {
    if (!this.visible) return;

    const fontSize = 18;
    this.radius = (this.node.name.length * fontSize + 10) / 2;
    const border = 5;

    //画圈
    ctx.beginPath();
    ctx.lineWidth = border;
    ctx.fillStyle = 'green';
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.24)';
    // 绘制完整圆
    ctx.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill(); //开始填充
    ctx.closePath();
    //写字
    ctx.fillStyle = '#fff';
    ctx.font = fontSize + 'px Microsoft Yahei';
    ctx.textAlign = 'center';
    ctx.fillText(this.node.name, this.position.x, this.position.y + fontSize / 2 - 3);
  }
}
