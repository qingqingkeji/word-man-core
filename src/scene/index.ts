import { ISpirit } from '@/interface/scene';

function Sprite(sp?: ISpirit) {
  if (!sp) return;
  this.x = sp.x;
  this.y = sp.y;
  this.width = sp.x;
  this.height = sp.height;
  this.img = new Image();
  this.img.src = sp.img;
}
/**
 * 将精灵图绘制在canvas上
 */
Sprite.prototype.drawToCanvas = function (ctx: CanvasRenderingContext2D) {
  if (!this.visible) return;

  ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
};

/**
 * 简单的碰撞检测定义：
 * 另一个精灵的中心点处于本精灵所在的矩形内即可
 * @param{Sprite} sp: Sptite的实例
 */
Sprite.prototype.isCollideWith = function (sp: ISpirit) {
  let spX = sp.x + sp.width / 2;
  let spY = sp.y + sp.height / 2;

  if (!this.visible || !sp.visible) return false;

  return !!(spX >= this.x && spX <= this.x + this.width && spY >= this.y && spY <= this.y + this.height);
};

export default Sprite;
