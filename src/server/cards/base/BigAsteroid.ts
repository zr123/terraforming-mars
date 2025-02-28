import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../../cards/render/CardRenderer';

export class BigAsteroid extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT,
      name: CardName.BIG_ASTEROID,
      tags: [Tag.SPACE],
      cost: 27,

      behavior: {
        stock: {titanium: 4},
        global: {temperature: 2},
      },

      metadata: {
        description: 'Raise temperature 2 steps and gain 4 titanium.',
        cardNumber: '011',
        renderData: CardRenderer.builder((b) => {
          b.temperature(2).br;
          b.titanium(4).br;
        }),
      },
    });
  }
}
