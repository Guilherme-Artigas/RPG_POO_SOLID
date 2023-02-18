import Fighter, { SimpleFighter } from './Fighter';

export default class Moster implements SimpleFighter {
  private _lifePoints: number;
  private _strength: number;

  constructor() {
    this._lifePoints = 85;
    this._strength = 63;
  }

  get lifePoints(): number { return this._lifePoints; }
  get strength(): number { return this._strength; }

  receiveDamage(attackPoints: number): number {
    if (this._lifePoints - attackPoints > 0) {
      this._lifePoints -= this._lifePoints - attackPoints;
    }
    if (this._lifePoints <= 0) {
      this._lifePoints = -1;
    }

    return this._lifePoints;
    // Um Character pode atacar um Monster, e o Monster receberá de dano o valor do atributo strength do Character que o ataca
  }

  attack(enemy: Fighter): void {
    enemy.receiveDamage(this._strength);
  }
}