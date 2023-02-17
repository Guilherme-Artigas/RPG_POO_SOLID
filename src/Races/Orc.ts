import Race from './Race';

export default class Orc extends Race {
  private orcLifePoints: number;
  static numberOfInstances = 0;
  
  constructor(
    private orcName: string,
    private orcDexterity: number,
  ) {
    super(orcName, orcDexterity);
    this.orcLifePoints = 74;
    Orc.numberOfInstances += 1;
  }

  static createdRacesInstances(): number { return this.numberOfInstances; }
  
  set updateLifePoints(value: number) {
    if (value > 74) {
      throw new Error('Valor máximo de 74 pontos, excedido!');
    }
    this.orcLifePoints = value;
  }

  get maxLifePoints(): number { return this.orcLifePoints; }
}
