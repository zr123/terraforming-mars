import {IPlayer} from '../../IPlayer';
import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {Tag} from '../../../common/cards/Tag';
import {Resource} from '../../../common/Resource';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';

export class LawSuit extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT,
      name: CardName.LAW_SUIT,
      tags: [Tag.EARTH],
      cost: 2,

      metadata: {
        cardNumber: 'X06',
        renderData: CardRenderer.builder((b) => {
          b.megacredits(10).asterix();
        }),
        description: 'Actually you don\'t really need a reason to sue someone. Gain 10 M€ next production phase.',
      },
    });
  }

  public generationUsed: number = -1;

  public onProductionPhase(player: IPlayer) {
    if (this.generationUsed === player.game.generation) {
      player.stock.add(Resource.MEGACREDITS, 10);
    }
    return undefined;
  }
}

