import Sprite from '@/scene';
import { IPlayer, INode } from '@/interface/index';
import config from '@/base/config';

export default class Player extends Sprite {
  public speed: number;
  public power: number;
  public skill: Array<INode>;
  public node: INode;
  radius: number = 0;

  constructor(player: IPlayer) {
    super(player);

    this.node = player.node;
    this.speed = player.node.speed || 0;
    this.power = player.node.power || 0;
    this.skill = player.skill || [];
  }

  render(ctx: CanvasRenderingContext2D) {
    if (!this.visible) return;

    const fontSize = 18;
    this.radius = (this.node.name.length * fontSize + 10) / 2;
    const border = 5;

    //画圈
    ctx.beginPath();
    ctx.lineWidth = border;
    ctx.fillStyle = '#1d89d5';
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

  // 两个碰撞上的时候，判断组合逻辑
  compose(skill: INode) {
    const type = skill.type;
    const len = this.skill.length || 0;
    const top = this.skill[len - 1];
    if (!top) {
      if (['状', '谓'].includes(type)) {
        this.skill.push(skill);
      }
    } else {
      if (top?.nextType.includes(type)) {
        this.skill.push(skill);
      }
    }

    if (!skill.nextType.length) {
      this.evolution();
      this.skill = [];
    }
  }

  // 如果组合成功，增益/减益
  evolution() {
    const { speed, power } = this.skill.reduce(
      (pre: { speed: number; power: number }, cur: INode) => {
        pre.speed += cur.speed;
        pre.power += cur.power;
        return pre;
      },
      {
        speed: this.speed || 0,
        power: this.power || 0,
      }
    );

    this.speed = speed;
    this.power = power;

    // TODO 将当前句子 写入 databus， 以便后期入库
  }

  // 圆盘控制移动
  move(dx: number, dy: number) {
    if (!dx && !dy) return;
    const distance = Math.sqrt(dx * dx + dy * dy);
    const speedX = this.speed * (dx / distance);
    const speedY = this.speed * (dy / distance);
    if (this.position.x > this.radius && this.position.x < config.screenWidth - this.radius) {
      this.position.x += speedX;
    } else {
      if (this.position.x <= this.radius && speedX > 0) this.position.x += speedX;
      if (this.position.x >= config.screenWidth - this.radius && speedX < 0) this.position.x += speedX;
    }

    if (this.position.y > this.radius && this.position.y < config.screenHeight - this.radius) {
      this.position.y += speedY;
    } else {
      if (this.position.y <= this.radius && speedY > 0) this.position.y += speedY;
      if (this.position.y >= config.screenHeight - this.radius && speedY < 0) this.position.y += speedY;
    }
  }
}
