import initMixin from './mixin/init';
import enemyMixin from './mixin/enemy';
import loopMixin from './mixin/loop';
import renderMixin from './mixin/render';
import restartMixin from './mixin/restart';
import updateMixin from './mixin/update';
import giftMixin from './mixin/gift';

import config from './base/config';
import { IConfig } from './interface/base';

function WordMan(ctx: CanvasRenderingContext2D, options: IConfig) {
  if (!(this instanceof WordMan)) {
    return console.error('WordManCore is a constructor and should be called with the `new` keyword');
  }
  if (!ctx) return console.error('canvas mast be provided!');

  config.reset(options);

  this.init(ctx);

  this.loop();
}

initMixin(WordMan); // 初始化参数
restartMixin(WordMan); // 重新开始游戏, 游戏初始化
enemyMixin(WordMan); // 敌人生成 根据关卡
giftMixin(WordMan); // 礼物生成 根据关卡
renderMixin(WordMan); // 渲染函数
updateMixin(WordMan); // 游戏逻辑函数
loopMixin(WordMan); // 帧循环函数

export default WordMan;
