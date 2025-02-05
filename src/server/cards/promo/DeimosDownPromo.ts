import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {TileType} from '../../../common/TileType';
import {CardRenderer} from '../render/CardRenderer';
import {digit} from '../Options';
import {AdjacencyBonus} from '../../ares/AdjacencyBonus';

export class DeimosDownPromo extends Card implements IProjectCard {
  constructor(
    name = CardName.DEIMOS_DOWN_PROMO,
    adjacencyBonus: AdjacencyBonus | undefined = undefined,
    metadata = {
      cardNumber: 'X31',
      renderData: CardRenderer.builder((b) => {
        b.temperature(3).br;
        b.tile(TileType.DEIMOS_DOWN, true).asterix().br;
        b.steel(4, {digit});
      }),
      description: 'Raise temperature 3 steps and gain 4 steel. Place this tile ADJACENT TO no other city tile.',
    },
  ) {
    super({
      type: CardType.EVENT,
      name,
      tags: [Tag.SPACE],
      cost: 31,
      metadata,
      behavior: {
        stock: {steel: 4},
        global: {temperature: 3},
        tile: {
          type: TileType.DEIMOS_DOWN,
          on: 'away-from-cities',
          adjacencyBonus: adjacencyBonus,
        },
      },
    });
  }
}
