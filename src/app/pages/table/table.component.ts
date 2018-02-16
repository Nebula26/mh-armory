import { Equip } from './../../data/equip';
import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../services/shared.service';
import { ActivatedRoute } from "@angular/router";

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

  constructor(private sharedService:SharedService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.sharedService.filterEvent$.subscribe(
      data => {
        this.filter = data;
      }
    );
       
    this.route.params.subscribe(params => {
      this.importEquipFromUrl(params.id);
    });
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

  exportUrl(){
    let eq = {};
    this.chosenEquip.forEach((value, key) =>{
      eq[key] = value.id;
    });
    console.log(btoa((JSON.stringify(eq))));
  }

  importEquipFromUrl(url){
    let equip = JSON.parse(atob(url));
    console.log(equip);
    for(let piece of this.armor){
      let arr = piece.equip.filter(eq => eq.id === equip.helm || eq.id === equip.chest || 
                eq.id === equip.hands || eq.id === equip.legs || eq.id === equip.boots);
      if(arr.length > 0){
        for(let a of arr){
          this.chosenEquip.set(a.name, a);
        }
      }
      if(this.chosenEquip.size == 5){
        break;
      }
    }
    console.log(this.chosenEquip);
  }

  remove(eq){
    this.chosenEquip.delete(eq.name);
  }

  toFilterByName(name) {
    //return this.filter && this.filter.name != '' && name.toLowerCase().indexOf(this.filter.name.toLowerCase()) != -1;
  }

  toFilterByBonus(bonuses) {
    // let that = this;
    // if (this.filter && this.filter.bonus != '') {
    //   //però sta roba è lenta...ogni volta cicla tutte i cazzo di td e fa il filter....magari c'è qualcosa di più veloce
    //   bonuses.filter(
    //     bonus => bonus.name.toLowerCase().indexOf(that.filter.bonus.toLowerCase()) != -1
    //   }); //se questo.length > 0(quindi trova qualcosa con il filter) allora return true; però non va la .length ma sono di fretta...ciao divertiti
    // }
  }
}
