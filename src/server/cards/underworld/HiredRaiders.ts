import {Card} from '../Card';
import {IPlayer} from '../../IPlayer';
import {IProjectCard} from '../IProjectCard';
import {CardType} from '../../../common/cards/CardType';
import {OrOptions} from '../../inputs/OrOptions';
import {SelectOption} from '../../inputs/SelectOption';
import {Resource} from '../../../common/Resource';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {Size} from '../../../common/cards/render/Size';
import {all} from '../Options';
import {message} from '../../logs/MessageBuilder';

export class HiredRaiders extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT,
      name: CardName.HIRED_RAIDERS_UNDERWORLD,
      cost: 1,

      metadata: {
        cardNumber: 'UX02',
        renderData: CardRenderer.builder((b) => {
          b.text('  ', Size.MEDIUM, true).megacredits(3)
            .plus().megacredits(2).slash().corruption();
        }),
        description: 'Gain 3 M€, plus 2 extra M€ for each corruption resource you have.',
      },
    });
  }

  public override bespokePlay(player: IPlayer) {
    const amount = 3 + (2 * player.underworldData.corruption);

    player.megaCredits += amount;
    player.game.log('${0} stole ${1} M€ from the neutral player', (b) =>
      b.player(player).number(amount),
    );
    
    return undefined;
  }
}
