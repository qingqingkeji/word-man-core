const initMixin = WordManCore => {
  WordManCore.prototype.loop = function () {
    this.aniId = 0; // 维护当前requestAnimationFrame的id
  };
};

export default initMixin;
