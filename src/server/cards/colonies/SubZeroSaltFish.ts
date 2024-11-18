import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardResource} from '../../../common/CardResource';
import {CardRenderer} from '../render/CardRenderer';
import {ActionCard} from '../ActionCard';

export class SubZeroSaltFish extends ActionCard implements IProjectCard {
  constructor() {
    super({
      cost: 5,
      tags: [Tag.ANIMAL],
      name: CardName.SUBZERO_SALT_FISH,
      type: CardType.ACTIVE,

      resourceType: CardResource.ANIMAL,
      victoryPoints: {resourcesHere: {}, per: 2},
      requirements: {temperature: -6},

      action: {
        addResources: 1,
      },

      metadata: {
        cardNumber: 'C42',
        renderData: CardRenderer.builder((b) => {
          b.action('Add 1 animal to this card.', (eb) => {
            eb.empty().startAction.resource(CardResource.ANIMAL);
          }).br;
          b.vpText('1 VP per 2 animals on this card.');
        }),
        description: {
          text: 'Requires -6 C.',
          align: 'left',
        },
      },
    });
  }
}
