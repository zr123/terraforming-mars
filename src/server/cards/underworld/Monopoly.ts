import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {IPlayer} from '../../IPlayer';
import {CardName} from '../../../common/cards/CardName';
import {SelectResource} from '../../inputs/SelectResource';
import {CardRenderer} from '../render/CardRenderer';
import {Units} from '../../../common/Units';

export class Monopoly extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT,
      name: CardName.MONOPOLY,
      cost: 12,
      requirements: {corruption: 3},
      victoryPoints: -2,

      metadata: {
        cardNumber: 'U65',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => pb.wild(1)).br;
        }),
        description: 'Requires 3 corruption. Choose a standard production type. ' +
          'Gain up to 1 unit of that production for EACH OTHER player.',
      },
    });
  }

  private availableProductions(player: IPlayer): Array<keyof Units> {
    const targets = player.getOpponents();
    return Units.keys.filter((unit) => {
      const resource = Units.ResourceMap[unit];
      return targets.some((target) => target.canHaveProductionReduced(resource, 1, player));
    });
  }

  public override bespokeCanPlay(player: IPlayer) {
    return this.availableProductions(player).length > 0;
  }

  public override bespokePlay(player: IPlayer) {
    return new SelectResource(
      'Select which resource type to gain for each other players.',
      this.availableProductions(player))
      .andThen((unitKey) => {
        const resource = Units.ResourceMap[unitKey];
        player.production.add(resource, player.getOpponents().length, {log: true});
        player.resolveInsuranceInSoloGame();
        return undefined;
      });
  }
}

