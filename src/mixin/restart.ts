import databus from '@/base/databus';
// import Player from '@/player';
// import BackGround from '@/scene/background';

const restartMixin = WordManCore => {
  WordManCore.prototype.restart = function () {
    databus.reset();

    // this.player = new Player(ctx);
  };
};

export default restartMixin;
