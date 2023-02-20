import Race from './Race';

export default class Dwarf extends Race {
  private _dwarfLifePoints: number;
  static numberOfIntances = 0;
  
  constructor(
    private dwarfName: string,
    private dwarfDexterity: number,
  ) {
    super(dwarfName, dwarfDexterity);
    this._dwarfLifePoints = 80;
    Dwarf.numberOfIntances += 1;
  }

  static createdRacesInstances(): number { return this.numberOfIntances; }

  get maxLifePoints(): number { return this._dwarfLifePoints; }
}
