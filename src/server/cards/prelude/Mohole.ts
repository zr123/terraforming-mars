import {Tag} from '../../../common/cards/Tag';
import {PreludeCard} from './PreludeCard';
import {IProjectCard} from '../IProjectCard';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';

export class Mohole extends PreludeCard implements IProjectCard {
  constructor() {
    super({
      name: CardName.MOHOLE,
      tags: [Tag.BUILDING],

      behavior: {
        production: {heat: 4},
        stock: {heat: 3},
      },

      metadata: {
        cardNumber: 'P22',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => pb.heat(4)).br;
          b.heat(3);
        }),
        description: 'Increase your heat production 4 steps. Gain 3 heat.',
      },
    });
  }
}
