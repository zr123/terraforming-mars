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
      name: CardName.HIRED_RAIDERS,
      cost: 1,

      metadata: {
        cardNumber: '124',
        renderData: CardRenderer.builder((b) => {
          b.text('Copy', Size.MEDIUM, true).steel(2, {all}).br;
          b.or().br;
          b.text('Copy', Size.MEDIUM, true).megacredits(3, {all});
        }),
        description: 'Gain up to 2 steel, or 3 M€.',
      },
    });
  }

  public override bespokePlay(player: IPlayer) {
    return new OrOptions(
      new SelectOption('Gain 2 steel', 'Gain steel').andThen(() => {
        player.steel += 2;
        return undefined;
      }),
      new SelectOption('Gain 3 M€', 'Gain M€').andThen(() => {
        player.megaCredits += 3;
        return undefined;
      }),
    );
  }
}

