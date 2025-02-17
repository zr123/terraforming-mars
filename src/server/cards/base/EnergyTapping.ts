import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';

export class EnergyTapping extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.ENERGY_TAPPING,
      tags: [Tag.POWER],
      cost: 3,
      victoryPoints: -1,

      behavior: {
        production: {energy: 1},
      },

      metadata: {
        cardNumber: '201',
        description: 'Increase your energy production 1 step.',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => {
            pb.energy(1);
          });
        }),
      },
    });
  }
}
