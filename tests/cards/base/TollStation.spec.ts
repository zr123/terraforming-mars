import {expect} from 'chai';
import {TollStation} from '../../../src/server/cards/base/TollStation';
import {testGame} from '../../TestingUtils';
import {Ceres} from '../../../src/server/colonies/Ceres';
import {TestPlayer} from '../../TestPlayer';
import {IGame} from '../../../src/server/IGame';

describe('TollStation', function() {
  let card: TollStation;
  let player: TestPlayer;
  let anotherPlayer: TestPlayer;
  let game: IGame;


  beforeEach(() => {
    card = new TollStation();
    [game, player, anotherPlayer] = testGame(2, {coloniesExtension: true});
    //cast(card.play(player), undefined);

  });

  it('Should give credits on trade', function() {
    player.playedCards.push(card);
    const ceres = new Ceres();
    game.colonies.push(ceres);

    ceres.trade(player);
    expect(player.megaCredits).to.eq(1);

    ceres.trade(anotherPlayer);
    expect(player.megaCredits).to.eq(2);
  });
});
