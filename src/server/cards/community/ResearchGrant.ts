import {Tag} from '../../../common/cards/Tag';
import {PreludeCard} from '../prelude/PreludeCard';
import {IProjectCard} from '../IProjectCard';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';

export class ResearchGrant extends PreludeCard implements IProjectCard {
  constructor() {
    super({
      name: CardName.RESEARCH_GRANT,
      tags: [Tag.SCIENCE, Tag.SCIENCE],
      behavior: {
        stock: {megacredits: 18},
      },

      metadata: {
        cardNumber: 'Y04',
        renderData: CardRenderer.builder((b) => {
          b.megacredits(18);
        }),
        description: 'Gain 18 M€.',
      },
    });
  }
}

