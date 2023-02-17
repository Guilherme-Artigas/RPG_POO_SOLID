import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  static numberOfInstances = 0;
  private _necroDamage: EnergyType;

  constructor(private _necroName: string) {
    super(_necroName);
    Necromancer.numberOfInstances += 1;
    this._necroDamage = 'mana';
  }

  static createdArchetypeInstances(): number { return this.numberOfInstances; }

  get energyType(): EnergyType { return this._necroDamage; }
}
