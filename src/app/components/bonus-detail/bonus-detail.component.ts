import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-bonus-detail',
  templateUrl: './bonus-detail.component.html',
  styleUrls: ['./bonus-detail.component.scss']
})
export class BonusDetailComponent implements OnInit {

  @Input() chosenEquip;
  bonusEquip = undefined;
  filterKeys: Array;
  bonusKey: Array;

  constructor(private sharedService:SharedService) {
  }

  ngOnInit() {
    this.sharedService.chosenEquipEvent$.subscribe(
      data => {
        this.chosenEquip = data;
        this.filterKeys = Array.from(this.chosenEquip.keys());
        this.calcBonus();
        this.bonusKey = Array.from(this.bonusEquip.keys());
      }
    )
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
