import Race from './Race';

export default class Dwarf extends Race {
  private dwarfLifePoints: number;
  
  constructor(
    private dwarfName: string,
    private dwarfDexterity: number,
  ) {
    super(dwarfName, dwarfDexterity);
    this.dwarfLifePoints = this.lifePoints;
  }

  private set lifePoints(value: number) { this.dwarfLifePoints = value; }

  get maxLifePoints(): number { return this.dwarfLifePoints; }
}