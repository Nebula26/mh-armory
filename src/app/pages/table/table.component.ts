import { Equip } from './../../data/equip';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  armor = Equip.equip;
  chosenEquip = new Map<string, any>();
  bonusEquip = new Map<string, number>();

  constructor() { }

  ngOnInit() {
  }

  add(eq){
    if(!this.bonusEquip.has(eq.name)){
      this.chosenEquip.delete(eq.name);
    }
    this.chosenEquip.set(eq.name, eq);
    this.calcBonus();
  }

  calcBonus(){
    this.bonusEquip = new Map<string, number>();
    this.chosenEquip.forEach((equip, name) =>
      {
        for (let bonus of equip.bonus) {
          if(!this.bonusEquip.has(bonus.name)){
            this.bonusEquip.set(bonus.name, bonus.value);
          }else{
            let value = this.bonusEquip.get(bonus.name);
            value += bonus.value;
            this.bonusEquip.set(bonus.name, value);
          }
        }
      }
    );
  
    console.log(this.bonusEquip);
  }
}
