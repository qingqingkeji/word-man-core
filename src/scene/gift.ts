import { IGift } from '@/interface';
import Role from '@/scene/role';

export default class Gift extends Role {
  constructor(gift: IGift) {
    super(gift, 'gift');
  }

  reset(sp: IGift) {
    this.node = sp.node;
    this.position = sp.position;
    this.visible = sp.visible;
  }
}
