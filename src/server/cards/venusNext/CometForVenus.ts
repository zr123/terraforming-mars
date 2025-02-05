import {Tag} from '../../../common/cards/Tag';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {Card} from '../Card';
import {IProjectCard} from '../IProjectCard';

export class CometForVenus extends Card implements IProjectCard {
  constructor() {
    super({
      name: CardName.COMET_FOR_VENUS,
      type: CardType.EVENT,
      tags: [Tag.SPACE],
      cost: 11,

      behavior: {
        global: {venus: 1},
        underworld: {excavate: 1},
      },

      metadata: {
        description: 'Raise Venus 1 step. Excavate 1 underground resource.',
        cardNumber: '218',
        renderData: CardRenderer.builder((b) => {
          b.venus(1).excavate(1);
        }),
      },
    });
  }
}
