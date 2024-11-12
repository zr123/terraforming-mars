import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {ActionCard} from '../ActionCard';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {digit} from '../Options';

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
          b.action('Spend 3 energy to gain 5 steel.', (eb) => {
            eb.energy(3, {digit}).startAction.steel(5);
          });
        }),
      },
    });
  }
}
