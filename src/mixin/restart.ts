import databus from '@/base/databus';
// import Player from '@/player';
import BackGround from '@/scene/background';

const restartMixin = WordManCore => {
  WordManCore.prototype.restart = function (ctx: CanvasRenderingContext2D) {
    databus.reset();

    this.bg = new BackGround();
    // this.player = new Player(ctx);
  };
};

export default restartMixin;
