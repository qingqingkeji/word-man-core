import { IEnemy } from '@/interface';
import Sprite from '@/scene';

function Enemy(sp: IEnemy) {
  Sprite.call(this, sp);
}

Enemy.prototype = new Sprite();

Enemy.prototype._init = function (player: IEnemy) {
  this.speed = player.speed || 1;
  this.power = player.power || 1;
  this.skill = player.skill || null;
};
