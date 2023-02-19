import Battle from './Battle';
import Fighter, { SimpleFighter } from '../Fighter';

export default class PVP extends Battle {
  constructor(
    private _playerOne: SimpleFighter | Fighter,
    private _playerTwo: SimpleFighter | Fighter,
  ) { 
    super(_playerOne);
  }

  checkLife() {
    if (
      this._playerOne.lifePoints === -1
      && this._playerTwo.lifePoints === -1
    ) { return 'Empate'; }
    if (this._playerOne.lifePoints === -1) { return 'Player 2 wins!'; }
    if (this._playerTwo.lifePoints === -1) { return 'Player 1 wins!'; }
    return false;
  }

  fight(): number {
    let winner;
    do {
      this._playerOne.attack(this._playerTwo);
      this._playerTwo.attack(this._playerOne);
      const verifyWinner = this.checkLife();
      winner = verifyWinner ? -1 : 1;
    } while (winner > 1);
    return super.fight();
  }
}