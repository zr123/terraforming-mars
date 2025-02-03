import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {Tag} from '../../../common/cards/Tag';
import {IProjectCard} from '../IProjectCard';
import {CardResource} from '../../../common/CardResource';
import {CardType} from '../../../common/cards/CardType';
import {Card} from '../Card';
import {all} from '../Options';
import {IActionCard} from '../ICard';
import {IPlayer} from '../../IPlayer';
import {PlayerInput} from '../../PlayerInput';
import {Resource} from '../../../common/Resource';

export class SpacePrivateers extends Card implements IProjectCard, IActionCard {
  constructor() {
    super({
      type: CardType.ACTIVE,
      name: CardName.SPACE_PRIVATEERS,
      cost: 10,
      tags: [Tag.SPACE],
      resourceType: CardResource.FIGHTER,
      victoryPoints: -2,
      requirements: {corruption: 3},

      behavior: {
        addResources: 3,
      },

      metadata: {
        cardNumber: 'U50',
        renderData: CardRenderer.builder((b) => {;
          b.action(
            'Gain 10 M€ and remove 1 fighter from this card.',
            (eb) => eb.megacredits(8).startEffect.minus().resource(CardResource.FIGHTER)).br;
          b.resource(CardResource.FIGHTER, 3);
        }),
        description: 'Requires 3 corruption. Put 3 fighter resources on this card.',
      },
    });
  }
  public data = {
    action: 0,
    rejected: false,
  };

  canAct(): boolean {
    return this.resourceCount > 0;
  }
  action(player: IPlayer): PlayerInput | undefined {
    player.stock.add(Resource.MEGACREDITS, 10, {log: true});
    this.resourceCount--;
    player.resolveInsuranceInSoloGame();
    return undefined;
  }
}
