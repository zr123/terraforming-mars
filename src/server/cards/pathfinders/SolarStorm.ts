import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {Tag} from '../../../common/cards/Tag';

export class SolarStorm extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT,
      name: CardName.SOLAR_STORM,
      cost: 15,
      tags: [Tag.SPACE],

      behavior: {
        production: {heat: 1},
        global: {temperature: 1},
        stock: {energy: 3, heat: 3},
      },

      metadata: {
        cardNumber: 'Pf32',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => pb.heat(1)).nbsp.temperature(1).br.energy(3).br.heat(3);
        }),
        description: 'Gain 3 energy and gain 3 Heat. ' +
          'Raise your heat production 1 step. Raise the temperature 1 step.',
      },
    });
  }
}
