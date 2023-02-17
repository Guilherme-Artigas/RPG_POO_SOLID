import Race from './Race';

export default class Halfling extends Race {
  private halflingLifePoints: number;
  static numberOfInstances = 0;
  
  constructor(
    private halflingName: string,
    private halflingDexterity: number,
  ) {
    super(halflingName, halflingDexterity);
    this.halflingLifePoints = 60;
    Halfling.numberOfInstances += 1;
  }

  static createdRacesInstances(): number { return this.numberOfInstances; }
  
  set updateLifePoints(value: number) {
    if (value > 60) {
      throw new Error('Valor máximo de 60 pontos, excedido!');
    }
    this.halflingLifePoints = value;
  }

  get maxLifePoints(): number { return this.halflingLifePoints; }
}
