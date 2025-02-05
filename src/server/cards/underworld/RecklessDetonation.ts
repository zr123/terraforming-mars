import {CardType} from '../../../common/cards/CardType';
import {IProjectCard} from '../IProjectCard';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {Card} from '../Card';

export class RecklessDetonation extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT,
      name: CardName.RECKLESS_DETONATION,
      cost: 1,

      requirements: {corruption: 2},

      behavior: {
        underworld: {excavate: 1},
      },

      metadata: {
        cardNumber: 'U09',
        renderData: CardRenderer.builder((b) => {
          b.excavate(1);
        }),
        description: 'Requires 2 corruption. Excavate an underground resource,',
      },
    });
  }
}
