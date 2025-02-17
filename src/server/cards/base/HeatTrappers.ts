import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';

export class HeatTrappers extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.HEAT_TRAPPERS,
      tags: [Tag.POWER, Tag.BUILDING],
      cost: 2,
      victoryPoints: 0,

      reserveUnits: {heat: 1},
      behavior: {
        production: {energy: 1},
      },

      metadata: {
        cardNumber: '178',
        renderData: CardRenderer.builder((b) => {
          b.minus().heat(1).production((pb) => {
            pb.energy(1);
          });
        }),
        description: 'Spend 1 heat. Increase your energy production 1 step.',
      },
    });
  }
}
