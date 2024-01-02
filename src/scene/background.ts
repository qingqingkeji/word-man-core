import Sprite from './spirit';
import config from '@/base/config';
import { ISpirit, Vector } from '@/interface';

export default class BackGround extends Sprite {
  constructor() {
    const background: ISpirit = {
      width: config.screenWidth,
      height: config.screenHeight,
      position: new Vector(0, 0),
      image: config.background,
      visible: true,
    };
    super(background);
  }
}
