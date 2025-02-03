import {CardType} from '../../../common/cards/CardType';
import {IProjectCard} from '../IProjectCard';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {Card} from '../Card';
import {IPlayer} from '../../IPlayer';
import {Resource} from '../../../common/Resource';


export class CorporateBlackmail extends Card implements IProjectCard {
  constructor() {
    super({
      name: CardName.CORPORATE_BLACKMAIL,
      type: CardType.EVENT,
      cost: 2,
      victoryPoints: -2,

      requirements: {corruption: 1},

      metadata: {
        cardNumber: 'U39',
        renderData: CardRenderer.builder((b) => {
          b.megacredits(10);
        }),
        description: 'Requires 1 corruption. Gain 10 M€.',
      },
    });
  }


  private targets(player: IPlayer) {
    return player.getOpponents().filter((p) => p.underworldData.corruption >= 2);
  }

  public override bespokeCanPlay(player: IPlayer) {
    return player.game.isSoloMode() || this.targets(player).length > 0;
  }

  public override bespokePlay(player: IPlayer) {
    player.stock.add(Resource.MEGACREDITS, 10);
    player.game.log('${0} blackmailed the neutral player and was paid 10 M€.', (b) => b.player(player));
    return undefined;
  }
}
