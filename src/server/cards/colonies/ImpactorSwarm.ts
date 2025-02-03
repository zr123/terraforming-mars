import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {Card} from '../Card';
import {CardRenderer} from '../render/CardRenderer';
import {all, digit} from '../Options';

export class ImpactorSwarm extends Card implements IProjectCard {
  constructor() {
    super({
      cost: 11,
      tags: [Tag.SPACE],
      name: CardName.IMPACTOR_SWARM,
      type: CardType.EVENT,

      behavior: {
        stock: {heat: 12},
      },

      requirements: {tag: Tag.JOVIAN, count: 2},
      metadata: {
        cardNumber: 'C16',
        renderData: CardRenderer.builder((b) => {
          b.heat(12, {digit}).br;
        }),
        description: 'Requires 2 Jovian tags. Gain 12 heat.',
      },
    });
  }
}
