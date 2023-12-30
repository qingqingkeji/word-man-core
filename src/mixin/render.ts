import config from '@/base/config';

const renderMixin = WordManCore => {
  WordManCore.prototype.render = function () {
    this.ctx.clearRect(0, 0, config.screenWidth, config.screenHeight);

    this.bg.drawImage(this.ctx);

    this.player.render(this.ctx);

    this.JoyStick.render();
  };
};

export default renderMixin;
