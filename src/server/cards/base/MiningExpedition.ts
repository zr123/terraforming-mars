import {IProjectCard} from '../IProjectCard';
import {CardType} from '../../../common/cards/CardType';
import {Card} from '../Card';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';

export class MiningExpedition extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT,
      name: CardName.MINING_EXPEDITION,
      cost: 12,

      behavior: {
        stock: {steel: 2},
        global: {oxygen: 1},
      },

      metadata: {
        cardNumber: '063',
        renderData: CardRenderer.builder((b) => {
          b.oxygen(1).br;
          b.steel(2);
        }),
        description: 'Raise oxygen 1 step. Gain 2 steel.',
      },
    });
  }
}
