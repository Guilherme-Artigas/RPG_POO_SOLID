import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Ranger extends Archetype {
  static numberOfInstances = 0;
  private _rangerDamage: EnergyType;

  constructor(private _rangerName: string) {
    super(_rangerName);
    Ranger.numberOfInstances += 1;
    this._rangerDamage = 'stamina';
  }

  static createdArchetypeInstances(): number { return this.numberOfInstances; }

  get energyType(): EnergyType { return this._rangerDamage; }
}
