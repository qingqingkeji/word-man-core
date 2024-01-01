import Player from '@/scene/player';
import config from '@/base/config';
import BackGround from '@/scene/background';
import JoyStick from '@/plugins/JoyStick';

const initMixin = WordManCore => {
  WordManCore.prototype.init = function (ctx: CanvasRenderingContext2D) {
    this.ctx = ctx;
    this.aniId = 0; // 维护当前requestAnimationFrame的id

    this.bg = new BackGround(); // 背景相关

    this.player = new Player(config.player); // 主角

    this.JoyStick = new JoyStick(ctx); // 虚拟摇杆

    this.bindLoop = this.loop.bind(this);
  };
};

export default initMixin;
