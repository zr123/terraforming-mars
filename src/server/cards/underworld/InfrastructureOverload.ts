import {CardType} from '../../../common/cards/CardType';
import {IProjectCard} from '../IProjectCard';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {Card} from '../Card';
import {Tag} from '../../../common/cards/Tag';

export class InfrastructureOverload extends Card implements IProjectCard {
  constructor() {
    super({
      name: CardName.INFRASTRUCTURE_OVERLOAD,
      type: CardType.EVENT,
      cost: 0,
      tags: [Tag.POWER],

      behavior: {
        production: {energy: -1},
        underworld: {corruption: 2},
      },

      metadata: {
        cardNumber: 'U68',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => pb.text('-').energy(1)).corruption(2);
        }),
        description: 'Reduce energy production 1 step. Gain 2 corruption.',
      },
    });
  }
}
