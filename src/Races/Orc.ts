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

  get maxLifePoints(): number { return this.orcLifePoints; }
}
