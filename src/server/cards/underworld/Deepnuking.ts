import {CardType} from '../../../common/cards/CardType';
import {IProjectCard} from '../IProjectCard';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {Card} from '../Card';

export class Deepnuking extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT,
      name: CardName.DEEPNUKING,
      cost: 8,
      victoryPoints: -1,

      behavior: {
        underworld: {excavate: 2},
      },

      metadata: {
        cardNumber: 'U06',
        renderData: CardRenderer.builder((b) => {
          b.excavate(2);
        }),
        description: 'Excavate 2 underground resources.',
      },
    });
  }
}
