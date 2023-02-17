import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Warrior extends Archetype {
  static numberOfInstances = 0;
  private _warrDamage: EnergyType;

  constructor(private _warrName: string) {
    super(_warrName);
    Warrior.numberOfInstances += 1;
    this._warrDamage = 'stamina';
  }

  static createdArchetypeInstances(): number { return this.numberOfInstances; }

  get energyType(): EnergyType { return this._warrDamage; }
}
