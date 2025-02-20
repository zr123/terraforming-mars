import {CardType} from '../../../common/cards/CardType';
import {IProjectCard} from '../IProjectCard';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {Card} from '../Card';
import {Tag} from '../../../common/cards/Tag';
import {IPlayer} from '../../IPlayer';
import {UnderworldExpansion} from '../../underworld/UnderworldExpansion';

export class AntiTrustCrackdown extends Card implements IProjectCard {
  constructor() {
    super({
      name: CardName.ANTI_TRUST_CRACKDOWN,
      type: CardType.EVENT,
      cost: 2,
      tags: [Tag.EARTH],
      victoryPoints: 2,

      requirements: {corruption: 2},

      metadata: {
        cardNumber: 'U64',
        renderData: CardRenderer.builder((b) => {
          b.minus().corruption(2).br;
          b.plainText('Requires that you have 2 or more corruption. Lose 2 corruption.');
        }),
      },
    });
  }

  public override bespokePlay(player: IPlayer) {
    UnderworldExpansion.loseCorruption(player, 2, {log: true});
    return undefined;
  }
}
