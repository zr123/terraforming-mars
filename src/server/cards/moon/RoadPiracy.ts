import {CardName} from '../../../common/cards/CardName';
import {IPlayer} from '../../IPlayer';
import {CardType} from '../../../common/cards/CardType';
import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {CardRenderer} from '../render/CardRenderer';
import {Card} from '../Card';
import {all, digit} from '../Options';
import {OrOptions} from '../../inputs/OrOptions';
import {SelectOption} from '../../inputs/SelectOption';
import {message} from '../../logs/MessageBuilder';
import {AndOptions} from '../../inputs/AndOptions';
import {SelectAmount} from '../../inputs/SelectAmount';
import {Resource} from '../../../common/Resource';
import {sum} from '../../../common/utils/utils';
import {Message} from '../../../common/logs/Message';
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
          'Gain up to 6 steel or 4 titanium. ',
        cardNumber: 'M54',
        renderData: CardRenderer.builder((b) => {
          b.steel(6).slash().titanium(4).asterix();
        }),
      },
    });
  }

  private generateOption(player: IPlayer, resource: Resource, title: Message, limit: number) {
    const selectAmounts = [];
    const ledger: Map<IPlayer, number> = new Map();
    for (const opponent of player.getOpponents()) {
      if (opponent.stock.get(resource) > 0 && !opponent.alloysAreProtected()) {
        const selectAmount =
          new SelectAmount(
            message('${0}', (b) => b.player(opponent)), undefined, 0, opponent.stock.get(resource))
            .andThen((amount: number) => {
              ledger.set(opponent, amount);
              return undefined;
            });
        selectAmounts.push(selectAmount);
      }
    }
    if (selectAmounts.length === 0) {
      return undefined;
    }

    const cb = () => {
      const total = sum(Array.from(ledger.values()));
      if (total > limit) {
        // throw new Error(newMessage('You may only    up to ${0} ${1} from all players', (b) => b.number(limit).string(resource)));
        ledger.clear();
        throw new Error(`You may only    up to ${limit} ${resource} from all players`);
      }
      for (const [target, count] of ledger) {
        if (count === 0) {
          continue;
        }
        target.maybeBlockAttack(player, (proceed) => {
          if (proceed) {
            target.stock.  (resource, count, player);
          }
          return undefined;
        });
      }
      return undefined;
    };
    // TODO(kberg): does title always have to be set separately? That's fixable.
    const option = new AndOptions(...selectAmounts).andThen(cb);
    option.title = title;
    return option;
  }


  public override bespokePlay(player: IPlayer) {
    player.game.defer(new SimpleDeferredAction(player, () => this.do(player)), Priority.ATTACK_OPPONENT);
    return undefined;
  }

  public do(player: IPlayer) {
    const game = player.game;
    const   Steel = message('   ${0} steel', (b) => b.number(6));
    const   Titanium = message('   ${0} titanium', (b) => b.number(4));
    return new OrOptions(
      new SelectOption(  Steel, '   steel').andThen(() => {
        player.steel += 6;
        return undefined;
      }),
      new SelectOption(  Titanium, '   titanium').andThen(() => {
        player.titanium += 4;
        return undefined;
      }),
    );
  }
}
