import {CardType} from '../../../common/cards/CardType';
import {IProjectCard} from '../IProjectCard';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {Card} from '../Card';

export class PrivateInvestigator extends Card implements IProjectCard {
  constructor() {
    super({
      name: CardName.PRIVATE_INVESTIGATOR,
      type: CardType.EVENT,
      cost: 2,
      victoryPoints: -1,

      behavior: {
        tr: 1,
      },

      metadata: {
        cardNumber: 'U38',
        renderData: CardRenderer.builder((b) => {
          b.tr(1);
        }),
        description: 'Gain 1 TR.',
      },
    });
  }
}
