import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {ActionCard} from '../ActionCard';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';

export class Steelworks extends ActionCard implements IProjectCard {
  constructor() {
    super({
      type: CardType.ACTIVE,
      name: CardName.STEELWORKS,
      tags: [Tag.BUILDING],
      cost: 2,

      action: {
        spend: {energy: 3},
        stock: {steel: 5},
      },

      metadata: {
        cardNumber: '103',
        renderData: CardRenderer.builder((b) => {
          b.action('Spend 3 energy', (eb) => {
            eb.energy(3).startAction.empty();
          });
          b.br;
          b.steel(5);
        }),
        description: 'to gain 5 steel.',
      },
    });
  }
}
