import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {Tag} from '../../../common/cards/Tag';
import {IProjectCard} from '../IProjectCard';
import {CardType} from '../../../common/cards/CardType';
import {Card} from '../Card';
import {IActionCard} from '../ICard';
import {CardResource} from '../../../common/CardResource';
import {IPlayer} from '../../IPlayer';
import {UnderworldExpansion} from '../../underworld/UnderworldExpansion';

export class InvestigativeJournalism extends Card implements IProjectCard, IActionCard {
  constructor() {
    super({
      type: CardType.ACTIVE,
      name: CardName.INVESTIGATIVE_JOURNALISM,
      cost: 7,
      tags: [Tag.EARTH],
      resourceType: CardResource.JOURNALISM,
      victoryPoints: {resourcesHere: {}, per: 1},

      metadata: {
        cardNumber: 'U87',
        renderData: CardRenderer.builder((b) => {
          b.action('Remove 1 corruption and add 1 journalism resource on this card.',
            (ab) => ab.corruption(1).startAction.resource(CardResource.JOURNALISM));
        }),
        description: '1 VP per 1 journalism resources on this card.',
      },
    });
  }

  public canAct(player: IPlayer) {
    return player.underworldData.corruption > 0;
  }

  public action(player: IPlayer) {
    UnderworldExpansion.loseCorruption(player, 1, {log: true});
    player.addResourceTo(this, 1);
    return undefined;
  }
}
