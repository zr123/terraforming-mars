import {Card} from '../Card';
import {CardName} from '../../../common/cards/CardName';
import {SpaceBonus} from '../../../common/boards/SpaceBonus';
import {TileType} from '../../../common/TileType';
import {CardType} from '../../../common/cards/CardType';
import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {CardRenderer} from '../render/CardRenderer';

export class MetallicAsteroid extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT,
      name: CardName.METALLIC_ASTEROID,
      tags: [Tag.SPACE],
      cost: 13,

      behavior: {
        stock: {titanium: 1},
        global: {temperature: 1},
        tile: {
          type: TileType.METALLIC_ASTEROID,
          on: 'land',
          adjacencyBonus: {bonus: [SpaceBonus.TITANIUM]},
        },
      },

      metadata: {
        cardNumber: 'A13',
        renderData: CardRenderer.builder((b) => {
          b.temperature(1).titanium(1).br;
          b.tile(TileType.METALLIC_ASTEROID, false, true);
        }),
        description: 'Raise temperature 1 step and gain 1 titanium. Place this tile which grants an ADJACENCY BONUS of 1 titanium.',
      },
    });
  }
}
