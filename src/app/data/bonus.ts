import { Equip } from './equip';

export class Bonus {
  private armor = Equip.equip;
  private bonuses: Array<string> = new Array();

  constructor() {
    this.bonuses.push(this.armor[0].equip[0].bonus[0].name);
    for (const set of this.armor) {
      for (const piece of set.equip) {
        for (const bonus of piece.bonus) {
          const name = bonus.name;
          const found = this.bonuses.filter(
            object => object === name
          );
          if (found.length === 0) {
            this.bonuses.push(name);
          }
        }
      }
    }
  }

  getBonuses() {
    return this.bonuses.sort();
  }
}
