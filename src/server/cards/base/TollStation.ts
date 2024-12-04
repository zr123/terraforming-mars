import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {all} from '../Options';

export class TollStation extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.ACTIVE,
      name: CardName.TOLL_STATION,
      tags: [Tag.SPACE],
      cost: 8,

      metadata: {
        cardNumber: '099',
        renderData: CardRenderer.builder((b) => {
	  b.effect('When anyone trades, you gain 1 M€.', (eb) => eb.trade({all}).startEffect.megacredits(1));
        }),
      },
    });
  }
}
