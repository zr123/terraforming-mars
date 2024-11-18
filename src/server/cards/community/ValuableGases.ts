import {Tag} from '../../../common/cards/Tag';
import {IPlayer} from '../../IPlayer';
import {PreludeCard} from '../prelude/PreludeCard';
import {IProjectCard} from '../IProjectCard';
import {CardName} from '../../../common/cards/CardName';
import {CardResource} from '../../../common/CardResource';
import {SelectProjectCardToPlay} from '../../inputs/SelectProjectCardToPlay';
import {CardRenderer} from '../render/CardRenderer';
import {Size} from '../../../common/cards/render/Size';
import {digit} from '../Options';
import {AltSecondaryTag} from '../../../common/cards/render/AltSecondaryTag';
import {CardType} from '../../../common/cards/CardType';

export class ValuableGases extends PreludeCard implements IProjectCard {
  constructor() {
    super({
      name: CardName.VALUABLE_GASES,
      tags: [Tag.JOVIAN, Tag.VENUS],
      behavior: {
        stock: {megacredits: 6},
      },

      metadata: {
        cardNumber: 'Y06',
        renderData: CardRenderer.builder((b) => {
          b.megacredits(6).br.br;
	  b.text('play', Size.MEDIUM, true).cards(1, {secondaryTag: AltSecondaryTag.FLOATER}).asterix().br;
          b.resource(CardResource.FLOATER, {amount: 6, digit});
        }),
        description: 'Gain 6 M€. Play a Floater card from your hand and add 6 floaters to it.',
      },
    });
  }

  public override bespokePlay(player: IPlayer) {
    const playableCards = player.cardsInHand.filter((card) => {
      return card.resourceType === CardResource.FLOATER &&
        card.type === CardType.ACTIVE &&
        player.canAfford(player.affordOptionsForCard(card));
    }).map((card) => {
      return {
        card: card,
        details: true,
      };
    });
    if (playableCards.length !== 0) {
      player.defer(new SelectProjectCardToPlay(player, playableCards)
        .andThen((card) => {
          player.addResourceTo(card, 6);
          return undefined;
        }));
    }

    return undefined;
  }
}

