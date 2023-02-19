import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  constructor(
    private _hero: Fighter,
    private _monsters: Fighter[] | SimpleFighter[],
  ) { super(_hero); }

  checkLife() {
    if (
      this._hero.lifePoints === -1
      && this._monsters.every((m) => m.lifePoints === -1) 
    ) { return 'Empate'; }
    if (this._hero.lifePoints === -1) { return 'Monsters wins!'; }
    if (this._monsters.every((m) => m.lifePoints === -1)) {
      return 'Player wins!';
    }
    return false;
  }

  fight(): number {
    let winner;
    do {
      this._monsters.forEach((m) => this._hero.attack(m));
      this._monsters.forEach((m) => m.attack(this._hero));
      const verifyWinner = this.checkLife();
      winner = verifyWinner ? -1 : 1;
    } while (winner > 1);
    return super.fight();
  }
}