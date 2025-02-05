import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {all} from '../Options';
import {CardResource} from '../../../common/CardResource';

export class ForestMoon extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.FOREST_MOON,
      tags: [Tag.PLANT, Tag.ANIMAL],
      cost: 15,
      requirements: {greeneries: 4, all},
      victoryPoints: 1,

      behavior: {
        addResourcesToAnyCard: {count: 1, type: CardResource.ANIMAL},
      },

      metadata: {
        cardNumber: 'SW06',
        renderData: CardRenderer.builder((b) => {
          b.resource(CardResource.ANIMAL);
        }),
        description: 'Requires any 4 greeneries on Mars. Add an animal to any card.',
      },
    });
  }
}
