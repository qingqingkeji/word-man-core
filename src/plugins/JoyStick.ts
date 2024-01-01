import { Vector } from '@/interface';

export default class JoyStick {
  private context: CanvasRenderingContext2D;
  public direction!: Vector<number>;
  public position!: Vector<number>;

  private pressed = false;
  private circumference = 2 * Math.PI;
  private internalRadius = 0;
  private maxMoveStick = 0;
  private externalRadius = 0;

  constructor(ctx: CanvasRenderingContext2D) {
    this.context = ctx;
    this.direction = new Vector(0, 0);
    this.position = new Vector(0, 0);
    this.internalRadius = 20;
    this.maxMoveStick = this.internalRadius + 20;
    this.externalRadius = this.internalRadius + 40;

    (window as any).canvas?.addEventListener('touchstart', this.onTouchStart.bind(this), false);
    (window as any).canvas?.addEventListener('touchmove', this.onTouchMove.bind(this), false);
    (window as any).canvas?.addEventListener('touchend', this.onTouchEnd.bind(this), false);
  }

  drawExternal() {
    if (!this.pressed) return;
    this.context.beginPath();
    this.context.arc(this.position.x, this.position.y, this.externalRadius, 0, this.circumference, false);
    this.context.lineWidth = 15;
    this.context.strokeStyle = 'rgba(255,255,255, 0.16)';
    this.context.stroke();
    this.context.fillStyle = 'rgba(255,255,255, 0.32)';
    this.context.fill();
  }
  drawInternal() {
    if (!this.pressed) return;
    this.context.beginPath();
    let moveX = this.direction.x - this.position.x;
    let moveY = this.direction.y - this.position.y;
    let distance = Math.sqrt(moveX * moveX + moveY * moveY);

    if (distance > this.maxMoveStick) {
      this.direction.x = this.position.x + this.maxMoveStick * (moveX / distance);
      this.direction.y = this.position.y + this.maxMoveStick * (moveY / distance);
    }

    this.context.arc(this.direction.x, this.direction.y, this.internalRadius, 0, this.internalRadius, false);

    this.context.fillStyle = 'rgba(255,255,255, 0.86)';
    this.context.fill();
    this.context.lineWidth = 2;
    this.context.strokeStyle = 'rgba(255,255,255, 0.86)';
    this.context.stroke();
  }

  private onTouchStart(e: TouchEvent) {
    let x = e.touches[0].clientX;
    let y = e.touches[0].clientY;

    this.position.x = x;
    this.position.y = y;

    this.direction.x = x;
    this.direction.y = y;

    this.pressed = true;
  }

  private onTouchMove(e: TouchEvent) {
    if (this.pressed) {
      this.direction.x = e.touches[0].clientX;
      this.direction.y = e.touches[0].clientY;
    }
  }

  private onTouchEnd() {
    this.pressed = false;
    this.direction.x = this.position.x = 0;
    this.direction.y = this.position.y = 0;
  }

  public render() {
    this.drawExternal();
    this.drawInternal();
  }

  public getDirection(): Vector<number> {
    return {
      x: this.direction.x - this.position.x,
      y: this.direction.y - this.position.y,
    };
  }
}
