import { IGift } from '@/interface';
import Sprite from '.';

export default class Gift extends Sprite {
  constructor(gift: IGift) {
    super(gift);
  }
}
