import {IProjectCard} from '../IProjectCard';
import {CardType} from '../../../common/cards/CardType';
import {IPlayer} from '../../IPlayer';
import {CardName} from '../../../common/cards/CardName';
import {CardResource} from '../../../common/CardResource';
import {RemoveResourcesFromCard} from '../../deferredActions/RemoveResourcesFromCard';
import {Card} from '../Card';
import {CardRenderer} from '../render/CardRenderer';

export class AirRaid extends Card implements IProjectCard {
  constructor() {
    super({
      cost: 0,
      name: CardName.AIR_RAID,
      type: CardType.EVENT,

      behavior: {
        stock: {megacredits: 5},
      },

      metadata: {
        cardNumber: 'C02',
        description: 'Requires that you lose 1 floater. Gain 5 M€.',
        renderData: CardRenderer.builder((b) => {
          b.minus().resource(CardResource.FLOATER);
          b.megacredits(5);
        }),
      },
    });
  }

  public override bespokeCanPlay(player: IPlayer): boolean {
    return player.getResourceCount(CardResource.FLOATER) > 0;
  }

  public override bespokePlay(player: IPlayer) {
    player.game.defer(new RemoveResourcesFromCard(player, CardResource.FLOATER, 1, {source: 'self', blockable: false}));
    return undefined;
  }
}
