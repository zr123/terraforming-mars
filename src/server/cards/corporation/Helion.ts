import {CorporationCard} from './CorporationCard';
import {Tag} from '../../../common/cards/Tag';
import {IPlayer} from '../../IPlayer';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {SelectAmount} from '../../inputs/SelectAmount';
import {message} from '../../logs/MessageBuilder';
import {Resource} from '../../../common/Resource';

export class Helion extends CorporationCard {
  constructor() {
    super({
      name: CardName.HELION,
      tags: [Tag.SPACE],
      startingMegaCredits: 42,

      behavior: {
        production: {heat: 3},
      },

      metadata: {
        cardNumber: 'R18',
        description: 'You start with 3 heat production and 42 M€ and are a cool dude for playing Helion.',
        renderData: CardRenderer.builder((b) => {
          b.br;
          b.production((pb) => pb.heat(3)).nbsp.megacredits(42);
          b.corpBox('effect', (ce) => {
            ce.action('Spend any amount of heat to gain twice as many M€ (max is the number of space tags you have.)', (ab) => {
              ab.text('X').heat(1, {secondaryTag: Tag.SPACE}).startAction.text('X').megacredits(2);
            });
          });
        }),
      },
    });
  }
  public canAct(player: IPlayer) {
      return player.tags.count(Tag.SPACE) > 0 && player.stock.heat > 0;
    }
  
  public action(player: IPlayer) {
    const max = Math.min(player.tags.count(Tag.SPACE), player.stock.heat);
    return new SelectAmount(
      message('Select up to ${1} heat to convert to M€', (b) => b.number(max)),
      'Convert heat', 1, max, false)
      .andThen((amount) => {
        player.stock.deduct(Resource.HEAT, amount);
        player.stock.add(Resource.MEGACREDITS, amount*2);
        player.game.log('${0} converted ${1} units of heat to twice as many megacredits.', (b) => b.player(player).number(amount));
        return undefined;
      });
  }
}
