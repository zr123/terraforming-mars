import {PreludeCard} from '../prelude/PreludeCard';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {Tag} from '../../../common/cards/Tag';
import {digit} from '../Options';

export class GeologicalExpertise extends PreludeCard {
  constructor() {
    super({
      name: CardName.GEOLOGICAL_EXPERTISE,
      tags: [Tag.SCIENCE],

      behavior: {
        drawCard: {tag: Tag.SCIENCE, count: 3},
        underworld: {identify: 4},
      },

      metadata: {
        cardNumber: 'UP06',
        renderData: CardRenderer.builder((b) => {
          b.identify(4, {digit}).cards(3, {secondaryTag: Tag.SCIENCE});
        }),
        description: 'Identify 4 underground resources. Draw 3 cards with science tags.',
      },
    });
  }
}

