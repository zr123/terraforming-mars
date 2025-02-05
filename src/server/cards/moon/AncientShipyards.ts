import {CardName} from '../../../common/cards/CardName';
import {IPlayer} from '../../IPlayer';
import {CardType} from '../../../common/cards/CardType';
import {Tag} from '../../../common/cards/Tag';
import {CardResource} from '../../../common/CardResource';
import {Resource} from '../../../common/Resource';
import {CardRenderer} from '../render/CardRenderer';
import {Card} from '../Card';

export class AncientShipyards extends Card {
  constructor() {
    super({
      name: CardName.ANCIENT_SHIPYARDS,
      type: CardType.ACTIVE,
      tags: [Tag.MOON, Tag.SPACE],
      cost: 6,

      resourceType: CardResource.RESOURCE_CUBE,
      victoryPoints: {resourcesHere: {}, each: -1},
      reserveUnits: {titanium: 3},

      metadata: {
        description: 'Spend 3 titanium. -1 VP for every resource here.',
        cardNumber: 'M19',
        renderData: CardRenderer.builder((b) => {
          b.action('Gain 2 M€ for each player and add a resource cube here.', (eb) => {
            eb.empty().startAction.megacredits(2).asterix().colon().resource(CardResource.RESOURCE_CUBE);
          }).br.br;
          b.minus().titanium(3);
        }),
      },
    });
  }

  public canAct(): boolean {
    return true;
  }

  public action(player: IPlayer) {
    player.stock.add(Resource.MEGACREDITS, 2 * player.getOpponents().length);
    player.addResourceTo(this, 1);
    return undefined;
  }
}
