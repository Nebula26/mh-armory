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
    console.log(this.chosenEquip)
  }
}
