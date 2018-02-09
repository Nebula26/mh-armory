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
    console.log(this.chosenEquip);
  }

  remove(eq){
    this.chosenEquip.delete(eq.name);
  }
}
