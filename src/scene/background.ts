import { ISpirit } from '@/interface/scene';
import Sprite from '.';

function BackGround(sp: ISpirit) {
  Sprite.call(this, sp);

  this.drawToCanvas();
}

BackGround.prototype = new Sprite();

export default BackGround;
