const updateMinxin = WordManCore => {
  WordManCore.prototype.update = function () {
    if (this.JoyStick.pressed) {
      const { x, y } = this.JoyStick.getDirection();
      this.player.move(x, y);
    }

    this.collisionDetection();
  };

  WordManCore.property.collisionDetection = function () {
    // player -> enemy
    // player -> gift
    // enemy -> gift
  };
};

export default updateMinxin;
