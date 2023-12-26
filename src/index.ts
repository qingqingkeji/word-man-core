import { ICanvasContext } from '@/interface/canvas';
import Player from './player';

function WordManCore({ ctx, player }: ICanvasContext) {
  if (!ctx) throw new Error('canvas mast be provided!');

  // 维护当前requestAnimationFrame的id
  this.player = new Player();

  this.restart(player);
}

WordManCore.prototype.restart = function ({ player }: ICanvasContext) {
  this.player.init(player);
  this.aniId = 0;
};

export default WordManCore;
