import {CorporationCard} from '../corporation/CorporationCard';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {Tag} from '../../../common/cards/Tag';

export class NirgalEnterprises extends CorporationCard {
  constructor() {
    super({
      name: CardName.NIRGAL_ENTERPRISES,
      tags: [Tag.POWER, Tag.PLANT, Tag.BUILDING],
      startingMegaCredits: 38,

      behavior: {
        production: {energy: 1, plants: 1, steel: 1},
      },

      metadata: {
        cardNumber: 'PC01', // Renumber
        renderData: CardRenderer.builder((b) => {
          b.br.br.br.br;
          b.megacredits(38).production((pb) => pb.energy(1).plants(1).steel(1)).br;
          b.effect('MILESTONES ALWAYS COST 0 M€ FOR YOU.', (eb) => {
            // TODO(kberg): replace with award().slash.milestone() when award and milestone can be stacked.
            eb.plate('Milestones').startEffect.megacredits(1, {text: '0'});
          });
        }),
        description: 'You start with 38 M€. Increase your energy, plant, and steel production 1 step each.',
      },
    });
  }
}
