import {IProjectCard} from '../IProjectCard';
import {IPlayer} from '../../IPlayer';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {ALL_TAGS, Tag} from '../../../common/cards/Tag';
import {PartyName} from '../../../common/turmoil/PartyName';
import {OrOptions} from '../../inputs/OrOptions';
import {SelectOption} from '../../inputs/SelectOption';
import {inplaceRemove} from '../../../common/utils/utils';

export class PublicSponsoredGrant extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT,
      name: CardName.PUBLIC_SPONSORED_GRANT,
      cost: 6,
      requirements: {party: PartyName.SCIENTISTS},

      metadata: {
        cardNumber: 'PfTVD',
        renderData: CardRenderer.builder((b) => {
          b.cards(1, {secondaryTag: Tag.WILD}).cards(1, {secondaryTag: Tag.WILD}).asterix();
        }),
        description: 'Requires Scientists are ruling or that you have 2 delegates there. Choose a tag (NOT CITY, ? OR PLANETARY TRACK) and draw 2 cards with that tag.',
      },
    });
  }

  private draw2Cards(player: IPlayer, tag: Tag) {
    player.drawCard(2, {tag: tag});
  }

  public override bespokePlay(player: IPlayer) {
    const tags = [...ALL_TAGS];
    inplaceRemove(tags, Tag.CITY);
    inplaceRemove(tags, Tag.WILD);
    inplaceRemove(tags, Tag.CLONE);

    inplaceRemove(tags, Tag.EARTH);
    inplaceRemove(tags, Tag.JOVIAN);
    inplaceRemove(tags, Tag.VENUS);
    inplaceRemove(tags, Tag.MOON);
    inplaceRemove(tags, Tag.MARS);

    const options = tags.map((tag) => {
      return new SelectOption(tag).andThen(() => {
        this.draw2Cards(player, tag);
        return undefined;
      });
    });

    return new OrOptions(...options);
  }
}
