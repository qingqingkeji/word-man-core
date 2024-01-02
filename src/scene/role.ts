import { INode, IRole, IStyle, Vector } from '@/interface';
import config from '@/base/config';

const MapStyle = new Map<string, string>([
  ['player', 'playerStyle'],
  ['gift', 'giftStyle'],
  ['emeny', 'enemyStyle'],
]);

export default class Role implements IRole {
  public position: Vector<number>; // 坐标
  public visible: boolean; // 是否可见
  public radius: number;
  public node: INode;

  private style!: IStyle;

  constructor(sp: IRole, role: string) {
    this.node = sp.node;
    this.visible = sp.visible;
    this.position = sp.position;
    this.style = config[MapStyle.get(role) as string];
    this.radius = (this.node.name.length * this.style.fontSize + 10) / 2;
  }

  render(ctx: CanvasRenderingContext2D) {
    if (!this.visible) return;
    // 画圈
    ctx.beginPath();
    ctx.lineWidth = this.style.borderWidth;
    ctx.fillStyle = this.style.backgroundColor;
    ctx.strokeStyle = this.style.borderColor;
    // 绘制完整圆
    ctx.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill(); // 开始填充
    ctx.closePath();
    // 写字
    ctx.fillStyle = this.style.color;
    ctx.font = this.style.fontSize + 'px Microsoft Yahei';
    ctx.textAlign = 'center';
    ctx.fillText(this.node.name, this.position.x, this.position.y + this.style.fontSize / 2 - 3);
  }

  isCollideWith(sp: IRole) {
    if (!this.visible || !sp.visible) return false;
    const dx = this.position.x - sp.position.x;
    const dy = this.position.y - sp.position.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    return !!(distance <= sp.radius + this.radius);
  }
}
