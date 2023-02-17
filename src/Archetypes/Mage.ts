import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  static numberOfInstances = 0;
  private _mageDamage: EnergyType;

  constructor(private _mageName: string) {
    super(_mageName);
    Mage.numberOfInstances += 1;
    this._mageDamage = 'mana';
  }

  static createdArchetypeInstances(): number { return this.numberOfInstances; }

  get energyType(): EnergyType { return this._mageDamage; }
}
