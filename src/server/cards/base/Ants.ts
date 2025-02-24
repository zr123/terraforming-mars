import {IActionCard} from '../ICard';
import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {IPlayer} from '../../IPlayer';
import {CardResource} from '../../../common/CardResource';
import {CardName} from '../../../common/cards/CardName';
import {AddResourcesToCard} from '../../deferredActions/AddResourcesToCard';
import {RemoveResourcesFromCard} from '../../deferredActions/RemoveResourcesFromCard';
import {CardRenderer} from '../render/CardRenderer';
import {all} from '../Options';

export class Ants extends Card implements IActionCard, IProjectCard {
  constructor() {
    super({
      type: CardType.ACTIVE,
      name: CardName.ANTS,
      tags: [Tag.MICROBE],
      cost: 9,

      resourceType: CardResource.MICROBE,
      victoryPoints: {resourcesHere: {}, per: 2},
      requirements: {oxygen: 4},

      metadata: {
        cardNumber: '035',
        description: 'Requires 4% oxygen.',
        renderData: CardRenderer.builder((b) => {
          b.action('Remove 1 microbe from any of your cards to add 2 to this card.', (eb) => {
            eb.resource(CardResource.MICROBE, {all}).startAction.resource(CardResource.MICROBE).resource(CardResource.MICROBE);
          }).br;
          b.vpText('1 VP per 2 microbes on this card.');
        }),
      },
    });
  }

  public canAct(player: IPlayer): boolean {
    return RemoveResourcesFromCard.getAvailableTargetCards(player, CardResource.MICROBE, 'self').length > 0;
  }

  public action(player: IPlayer) {
    player.game.defer(new RemoveResourcesFromCard(player, CardResource.MICROBE, 1, {source: 'self', blockable: false}).andThen((response) => {
      if (response.proceed) {
        player.game.defer(new AddResourcesToCard(player, CardResource.MICROBE, {count: 2, filter: (c) => c.name === this.name}));
      }
    }));
    return undefined;
  }
}
