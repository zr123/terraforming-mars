import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';

export class Flooding extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT,
      name: CardName.FLOODING,
      cost: 7,
      victoryPoints: -1,

      behavior: {
        ocean: {},
      },

      metadata: {
        cardNumber: '188',
        renderData: CardRenderer.builder((b) => {
          b.oceans(1);
        }),
        description: 'Place an ocean tile.',
      },
    });
  }
}
