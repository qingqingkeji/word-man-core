import config from '@/base/config';
import Player from '@/scene/player';

const restartMixin = WordManCore => {
  WordManCore.prototype.restart = function () {
    this.player = new Player(config.player); // 主角

    // this.player = new Player(ctx);
  };
};

export default restartMixin;
