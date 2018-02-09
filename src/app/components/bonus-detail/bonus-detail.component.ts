import { Component, OnInit, Input, SharedService } from '@angular/core';

@Component({
  selector: 'app-bonus-detail',
  templateUrl: './bonus-detail.component.html',
  styleUrls: ['./bonus-detail.component.scss']
})
export class BonusDetailComponent implements OnInit {

  @Input() chosenEquip;
  bonusEquip = new Map<string, number>();

  constructor(private sharedService:SharedService) {
    this.sharedService.calcBonusEvent$.subscribe(
      data => {
        //chiama func
      }
    )
  }

  ngOnInit() {
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

}
