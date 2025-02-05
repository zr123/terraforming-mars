import {Card} from '../Card';
import {IPlayer} from '../../IPlayer';
import {IProjectCard} from '../IProjectCard';
import {CardType} from '../../../common/cards/CardType';
import {OrOptions} from '../../inputs/OrOptions';
import {SelectOption} from '../../inputs/SelectOption';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {all} from '../Options';

export class HiredRaiders extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT,
      name: CardName.HIRED_RAIDERS,
      cost: 1,

      metadata: {
        cardNumber: '124',
        renderData: CardRenderer.builder((b) => {
          b.steel(2, {all}).br;
          b.or().br;
          b.megacredits(3, {all});
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
