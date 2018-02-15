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
  filter:Object;

  constructor(private sharedService:SharedService) { }

  ngOnInit() {
    this.sharedService.filterEvent$.subscribe(
      data => {
        this.filter = data;
      }
    )
  }

  toggle(eq){
    if(eq.bonus.length > 0){
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
      this.sharedService.publishChosenEquipEvent(this.chosenEquip);
    }
  }

  remove(eq){
    this.chosenEquip.delete(eq.name);
  }

  toFilterByName(name) {
    return this.filter && this.filter.name != '' && name.toLowerCase().indexOf(this.filter.name.toLowerCase()) != -1;
  }

  toFilterByBonus(bonuses) {
    let that = this;
    if (this.filter && this.filter.bonus != '') {
      //però sta roba è lenta...ogni volta cicla tutte i cazzo di td e fa il filter....magari c'è qualcosa di più veloce
      bonuses.filter(
        bonus => bonus.name.toLowerCase().indexOf(that.filter.bonus.toLowerCase()) != -1
      }); //se questo.length > 0(quindi trova qualcosa con il filter) allora return true; però non va la .length ma sono di fretta...ciao divertiti
    }
  }
}
