import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';

export class DeimosDown extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT,
      name: CardName.DEIMOS_DOWN,
      tags: [Tag.SPACE],
      cost: 31,

      behavior: {
        stock: {steel: 4},
        global: {temperature: 3},
      },

      metadata: {
        cardNumber: '039',
        description: 'Raise temperature 3 steps and gain 4 steel.',
        renderData: CardRenderer.builder((b) => {
          b.temperature(3).br;
          b.steel(4).br;
        }),
      },
    });
  }
}
