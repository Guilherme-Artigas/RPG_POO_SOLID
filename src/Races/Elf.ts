import Race from './Race';

export default class Elf extends Race {
  private _elfLifePoints: number;
  static numberOfInstances = 0;
  
  constructor(
    private elfName: string,
    private elfDexterity: number,
  ) {
    super(elfName, elfDexterity);
    this._elfLifePoints = 99;
    Elf.numberOfInstances += 1;
  }

  static createdRacesInstances(): number { return this.numberOfInstances; }
  
  set updateLifePoints(value: number) {
    if (value > 99) {
      throw new Error('Valor máximo de 99 pontos, excedido!');
    }
    this._elfLifePoints = value;
  }

  get maxLifePoints(): number { return this._elfLifePoints; }
}
