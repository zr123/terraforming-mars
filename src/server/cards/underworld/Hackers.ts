import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';

export class Hackers extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.HACKERS_UNDERWORLD,
      cost: 3,
      victoryPoints: -1,

      requirements: {corruption: 2},

      behavior: {
        production: {megacredits: {underworld: {corruption: {}}}},
      },

      metadata: {
        cardNumber: 'UX01',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => {
            pb.plus().megacredits(1).slash().corruption();
          });
        }),
        description: 'Requires 2 corruption. Increase your M€ production 1 step for every unit of corruption you have.',
      },
    });
  }
}
