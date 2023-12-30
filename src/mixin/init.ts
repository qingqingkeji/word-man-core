import Player from '@/scene/player';
import config from '@/base/config';
import BackGround from '@/scene/background';
import JoyStick from '@/plugins/JoyStick';

const initMixin = WordManCore => {
  WordManCore.prototype.init = function (ctx: CanvasRenderingContext2D) {
    this.ctx = ctx;
    this.aniId = 0; // 维护当前requestAnimationFrame的id
    this.bg = new BackGround();
    this.player = new Player(config.player);

    this.JoyStick = new JoyStick(ctx);

    this.bindLoop = this.loop.bind(this);
  };
};

export default initMixin;
