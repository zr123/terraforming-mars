import {CardType} from '../../../common/cards/CardType';
import {IProjectCard} from '../IProjectCard';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {Card} from '../Card';
import {IPlayer} from '../../IPlayer';
import {UnderworldExpansion} from '../../underworld/UnderworldExpansion';
import {Tag} from '../../../common/cards/Tag';

export class PlantTax extends Card implements IProjectCard {
  public generationUsed: number = -1;

  constructor() {
    super({
      name: CardName.PLANT_TAX,
      type: CardType.EVENT,
      cost: 7,
      tags: [Tag.MARS],
      reserveUnits: {plants: 2},

      behavior: {
        underworld: {markThisGeneration: {}},
      },

      metadata: {
        cardNumber: 'U67',
        renderData: CardRenderer.builder((b) => {
          b.minus().plants(2).asterix().corruption().asterix();
        }),
        description: 'Spend 2 plants. Gain 1 corruption DURING THE PRODUCTION PHASE OF THIS GENERATION.',
      },
    });
  }

  public onProductionPhase(player: IPlayer) {
    if (this.generationUsed === player.game.generation) {
      UnderworldExpansion.gainCorruption(player, 1, {log: true});
    }
    return undefined;
  }
}
