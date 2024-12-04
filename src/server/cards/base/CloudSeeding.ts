import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {Resource} from '../../../common/Resource';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {all} from '../Options';

export class CloudSeeding extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.CLOUD_SEEDING,
      cost: 5,

      behavior: {
        production: {megacredits: -1, plants: 2},
      },

      requirements: {oceans: 3},
      metadata: {
        cardNumber: '004',
        description: 'Requires 3 ocean tiles. Decrease your M€ production 1 step. Increase your plant production 2 steps.',
        renderData: CardRenderer.builder((b) => b.production((pb) => {
          pb.minus().megacredits(1).br;
          pb.plus().plants(2);
        })),
      },
    });
  }
}
