import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {Resource} from '../../../common/Resource';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';

export class AsteroidMiningConsortium extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.ASTEROID_MINING_CONSORTIUM,
      tags: [Tag.JOVIAN],
      cost: 13,
      victoryPoints: 1,

      behavior: {
        production: {titanium: 1},
      },

      requirements: {production: Resource.TITANIUM, count: 1},
      metadata: {
        description: 'Requires that you have titanium production. Increase titanium production 1 step.',
        cardNumber: '002',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => {
            pb.plus().titanium(1);
          });
        }),
      },
    });
  }

}
