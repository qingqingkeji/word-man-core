import databus from '@/base/databus';
import { IGift } from '@/interface';
import Gift from '@/scene/gift';

const giftMixin = WordManCore => {
  WordManCore.prototype.genGift = function (sp: IGift) {
    const gift = databus.pool.getItemByClass('gift', Gift, sp);

    gift.reset(sp);

    databus.gifts.push(gift);
  };
};

export default giftMixin;
