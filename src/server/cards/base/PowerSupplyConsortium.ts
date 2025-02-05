import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';

export class PowerSupplyConsortium extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.POWER_SUPPLY_CONSORTIUM,
      tags: [Tag.POWER],
      cost: 5,

      behavior: {
        production: {energy: 1},
      },

      requirements: {tag: Tag.POWER, count: 2},
      metadata: {
        cardNumber: '160',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => {
            pb.plus().energy(1);
          });
        }),
        description: 'Requires 2 power tags. Increase your energy production 1 step.',
      },
    });
  }
}
