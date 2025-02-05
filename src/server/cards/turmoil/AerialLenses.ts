import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardName} from '../../../common/cards/CardName';
import {CardType} from '../../../common/cards/CardType';
import {PartyName} from '../../../common/turmoil/PartyName';
import {CardRenderer} from '../render/CardRenderer';

export class AerialLenses extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.AERIAL_LENSES,
      cost: 2,
      victoryPoints: -1,

      behavior: {
        production: {heat: 2},
      },

      requirements: {party: PartyName.KELVINISTS},
      metadata: {
        description: 'Requires that Kelvinists are ruling or that you have 2 delegates there. Remove up to 2 plants from any player. Increase your heat production 2 steps.',
        cardNumber: 'T01',
        renderData: CardRenderer.builder((b) => b.production((pb) => pb.heat(2))),
      },
    });
  }
}
