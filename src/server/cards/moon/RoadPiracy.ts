import {CardName} from '../../../common/cards/CardName';
import {IPlayer} from '../../IPlayer';
import {CardType} from '../../../common/cards/CardType';
import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {CardRenderer} from '../render/CardRenderer';
import {Card} from '../Card';
import {OrOptions} from '../../inputs/OrOptions';
import {SelectOption} from '../../inputs/SelectOption';
import {message} from '../../logs/MessageBuilder';
import {SimpleDeferredAction} from '../../deferredActions/DeferredAction';
import {Priority} from '../../deferredActions/Priority';

export class RoadPiracy extends Card implements IProjectCard {
  constructor() {
    super({
      name: CardName.ROAD_PIRACY,
      type: CardType.EVENT,
      tags: [Tag.MOON],
      cost: 10,
      requirements: {logisticRate: 3},

      metadata: {
        description: 'Requires 3 logistic rate. ' +
          'Gain up to 6 steel or 4 titanium.',
        cardNumber: 'M54',
        renderData: CardRenderer.builder((b) => {
          b.steel(6).slash().titanium(4).asterix();
        }),
      },
    });
  }

  public override bespokePlay(player: IPlayer) {
    player.game.defer(new SimpleDeferredAction(player, () => this.do(player)), Priority.ATTACK_OPPONENT);
    return undefined;
  }

  public do(player: IPlayer) {
    const Steel = message('Gain ${0} steel', (b) => b.number(6));
    const Titanium = message('Gain ${0} titanium', (b) => b.number(4));
    return new OrOptions(
      new SelectOption(Steel, 'Gain steel').andThen(() => {
        player.steel += 6;
        return undefined;
      }),
      new SelectOption(Titanium, 'Gain titanium').andThen(() => {
        player.titanium += 4;
        return undefined;
      }),
    );
  }
}
