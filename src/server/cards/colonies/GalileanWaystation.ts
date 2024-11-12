import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {Card} from '../Card';
import {CardRenderer} from '../render/CardRenderer';

export class GalileanWaystation extends Card implements IProjectCard {
  constructor() {
    super({
      cost: 10,
      tags: [Tag.SPACE, Tag.JOVIAN],
      name: CardName.GALILEAN_WAYSTATION,
      type: CardType.AUTOMATED,
      victoryPoints: 1,

      behavior: {
        production: {megacredits: {tag: Tag.JOVIAN}},
      },

      metadata: {
        description: 'Increase your M€ production 1 step for every Jovian tag YOU have.',
        cardNumber: 'C13',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => pb.megacredits(1).slash().tag(Tag.JOVIAN));
        }),
      },
    });
  }
}
