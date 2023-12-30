const loopMixin = WordManCore => {
  WordManCore.prototype.loop = function () {
    this.update();
    this.render();

    this.aniId = window.requestAnimationFrame(this.bindLoop);
  };
};

export default loopMixin;
