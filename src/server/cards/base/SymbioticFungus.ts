import {Tag} from '../../../common/cards/Tag';
import {IProjectCard} from '../IProjectCard';
import {ActionCard} from '../ActionCard';
import {CardType} from '../../../common/cards/CardType';
import {CardResource} from '../../../common/CardResource';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';

export class SymbioticFungus extends ActionCard implements IProjectCard {
  constructor() {
    super({
      type: CardType.ACTIVE,
      name: CardName.SYMBIOTIC_FUNGUS,
      tags: [Tag.MICROBE],
      cost: 2,

      action: {
        addResourcesToAnyCard: {type: CardResource.MICROBE, count: 1, autoSelect: true},
        // return new SelectCard('Select card to add microbe', 'Add microbe', availableCards, ([card]) => {
      },

      requirements: {temperature: -18},
      metadata: {
        cardNumber: '133',
        renderData: CardRenderer.builder((b) => {
          b.action('Add a microbe to ANOTHER card.', (eb) => {
            eb.empty().startAction.resource(CardResource.MICROBE).asterix();
          });
        }),
        description: 'Requires -18 C° or warmer.',
      },
    });
  }
}

