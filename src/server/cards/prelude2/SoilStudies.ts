import {Tag} from '../../../common/cards/Tag';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';

export class SoilStudies extends Card {
  constructor() {
    super({
      name: CardName.SOIL_STUDIES,
      type: CardType.EVENT,
      tags: [Tag.MICROBE, Tag.PLANT],
      cost: 13,

      requirements: {oxygen: 8},

      behavior: {
        stock: {
          plants: {
            tag: [Tag.VENUS, Tag.PLANT],
            colonies: {colonies: {}},
          },
        },
      },

      metadata: {
        cardNumber: 'P81',
        renderData: CardRenderer.builder((b) => {
          b.plants(1).slash().tag(Tag.VENUS).tag(Tag.PLANT).colonies(1).br;
        }),
        description: 'Requires that oxygen is 8% or higher. Gain 1 plant per Venus tag, plant tag, and colony you have.',
      },
    });
  }
}
