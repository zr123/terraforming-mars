import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {Resource} from '../../../common/Resource';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {all} from '../Options';

export class HeatTrappers extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.HEAT_TRAPPERS,
      tags: [Tag.POWER, Tag.BUILDING],
      cost: 6,
      victoryPoints: -1,

      behavior: {
        production: {energy: 1},
      },

      metadata: {
        cardNumber: '178',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => {
            pb.plus().energy(1);
          });
        }),
        description: 'Increase your energy production 1 step.',
      },
    });
  }
}
