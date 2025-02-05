import {CardType} from '../../../common/cards/CardType';
import {IProjectCard} from '../IProjectCard';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {Card} from '../Card';
import {IPlayer} from '../../IPlayer';

export class PriceWars extends Card implements IProjectCard {
  constructor() {
    super({
      name: CardName.PRICE_WARS,
      type: CardType.EVENT,
      cost: 1,

      requirements: {corruption: 2},
      victoryPoints: -1,

      behavior: {
        underworld: {markThisGeneration: {}},
      },

      metadata: {
        cardNumber: 'U63',
        hasExternalHelp: true,
        renderData: CardRenderer.builder((b) => {
          b.steel(1).titanium(1).colon().plus().megacredits(1).asterix().br;
        }),
        description: 'Requires 2 corruption. Until the end of this generation, ' +
          'your steel and titanium are worth 1 more M€ each.',
      },
    });
  }

  public generationUsed: number | undefined = undefined;

  private increase(player: IPlayer) {
    player.increaseSteelValue();
    player.increaseTitaniumValue();
  }

  private decrease(player: IPlayer) {
    player.decreaseSteelValue();
    player.decreaseTitaniumValue();
  }

  public override bespokePlay(player: IPlayer) {
    this.increase(player);
    player.game.log('${0} is in effect for the rest of this generation.', (b) => b.card(this));
    player.game.log('Steel and titanium are worth 1 M€ less, except for ${0}, whose steel and titanium are worth 1 M€ more.', (b) => b.player(player));
    return undefined;
  }

  public onProductionPhase(player: IPlayer) {
    if (this.generationUsed === player.game.generation) {
      this.decrease(player);
    }
    return undefined;
  }

  // Warning: this is not Playwrights/Odyssey compatible because once the card is discarded, it's not effective anymore.
  // TODO(kberg): When making this card work with P/O, remove the code in those cards that disallows them.
  public override onDiscard(player: IPlayer) {
    this.decrease(player);
    this.generationUsed = undefined;
    return undefined;
  }
}
