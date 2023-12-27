import { IGameContext } from '@/interface/index';
import Player from './player';

function WordManCore({ ctx, player, options }: IGameContext) {
  if (!(this instanceof WordManCore)) {
    return console.error('WordManCore is a constructor and should be called with the `new` keyword');
  }

  if (!ctx) throw new Error('canvas mast be provided!');

  this.aniId = 0; // 维护当前requestAnimationFrame的id
  this.config = options;

  this.player = new Player(player);
}

// 重新开始游戏
WordManCore.prototype.restart = function () {};

// 敌人生成 根据关卡
WordManCore.prototype.enemyGenerate = function () {};

// 全局碰撞检测
WordManCore.prototype.collisionDetection = function () {};

// 渲染函数
WordManCore.prototype.render = function () {};

// 游戏逻辑函数
WordManCore.prototype.updateGameInfo = function () {};

// 帧循环函数
WordManCore.prototype.update = function () {};

export default WordManCore;
