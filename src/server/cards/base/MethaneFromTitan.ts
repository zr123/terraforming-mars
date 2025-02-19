import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';

export class MethaneFromTitan extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.METHANE_FROM_TITAN,
      tags: [Tag.JOVIAN, Tag.SPACE],
      cost: 28,
      victoryPoints: 2,

      behavior: {
        production: {heat: 3, plants: 3},
      },

      requirements: {oxygen: 1},
      metadata: {
        description: 'Requires 1% oxygen. Increase your heat production 3 steps and your plant production 3 steps.',
        cardNumber: '018',
        renderData: CardRenderer.builder((b) => b.production((pb) => {
          pb.heat(3).br;
          pb.plants(3);
        })),
      },
    });
  }
}
