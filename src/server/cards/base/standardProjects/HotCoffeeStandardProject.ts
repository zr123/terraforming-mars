import {IPlayer} from '../../../IPlayer';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';
import {StandardProjectCard} from '../../StandardProjectCard';
import {Resource} from '../../../../common/Resource';
import { digit } from '../../Options';

export class HotCoffeeStandardProject extends StandardProjectCard {
  constructor() {
    super({
      name: CardName.HOT_COFFEE_STANDARD_PROJECT,
      cost: 0,
      reserveUnits: {heat: 5},
      metadata: {
        renderData: CardRenderer.builder((b) =>
          b.standardProject('Spend 5 heat to draw a card.', (eb) => {
            eb.heat(5, {digit}).startAction.cards(1);
          })),
      },
    });
  }

  actionEssence(player: IPlayer): void {
    player.stock.deduct(Resource.HEAT, 5);
    player.drawCard(1);
  }
}
