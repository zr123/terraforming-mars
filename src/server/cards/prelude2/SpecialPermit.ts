import {IProjectCard} from '../IProjectCard';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {Card} from '../Card';
import {Size} from '../../../common/cards/render/Size';
import {CardRenderer} from '../render/CardRenderer';
import {all, digit} from '../Options';
import {PartyName} from '../../../common/turmoil/PartyName';
import {Tag} from '../../../common/cards/Tag';

export class SpecialPermit extends Card implements IProjectCard {
  constructor() {
    super({
      cost: 5,
      name: CardName.SPECIAL_PERMIT,
      type: CardType.EVENT,
      tags: [Tag.PLANT],
      requirements: {party: PartyName.GREENS},

      behavior: {
        stock: {plants: 5},
      },

      metadata: {
        cardNumber: 'P82',
        description: 'Requires that Greens are ruling or that you have 2 delegates there. Gain 4 plants.',
        renderData: CardRenderer.builder((b) => {
          b.text('  ', Size.MEDIUM, true).plants(4, {all, digit});
        }),
      },
    });
  }

}
