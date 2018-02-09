import { Equip } from './../../data/equip';
import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  armor = Equip.equip;
  chosenEquip = new Map<string, any>();
  bonusEquip = new Map<string, number>();

  constructor(private sharedService:SharedService) { }

  ngOnInit() {
  }



  toggle(eq){
    let add = true;
    if(this.chosenEquip.has(eq.name)){
      if(this.chosenEquip.get(eq.name).id == eq.id){
        add = false;
      }
      this.chosenEquip.delete(eq.name);
    }
    if(add){
      this.chosenEquip.set(eq.name, eq);
    }
    this.calcBonus();
  }

  remove(eq){
    this.chosenEquip.delete(eq.name);
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
