import databus from '@/base/databus';

const updateMinxin = WordManCore => {
  WordManCore.prototype.update = function () {
    // 主角移动
    if (this.JoyStick.pressed) {
      const { x, y } = this.JoyStick.getDirection();
      this.player.move(x, y);
    }

    // 敌人移动

    // gift 随机生成
    // if (!databus.gifts.length) {
    //   this.genGift(giftTest);
    // }

    // 全局碰撞检测
    collisionDetection.apply(this);
  };
};

function collisionDetection() {
  // player -> enemy
  // player -> gift
  databus.gifts.forEach(item => {
    if (this.player.isCollideWith(item)) {
      this.player.compose(item.node);
      databus.removeGift(item);
    }
  });

  // enemy -> gift
}

export default updateMinxin;
