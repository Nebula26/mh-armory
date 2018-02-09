import { Equip } from './../../data/equip';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  armor = Equip.equip;
  chosenEquip = [];
  bonusEquip = new Map<string, number>();

  constructor() { }

  ngOnInit() {
  }

  add(eq){
    for(let i = 0; i < this.chosenEquip.length; i++){
      if(this.chosenEquip[i].name == eq.name){
        this.chosenEquip.splice(i,1);
      }
    }
    this.chosenEquip.push(eq);
    this.calcBonus();
  }

  calcBonus(){
    this.bonusEquip = new Map<string, number>();
    for (let equip of this.chosenEquip) {
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
    console.log(this.bonusEquip);
  }
}
