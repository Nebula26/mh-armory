import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-bonus-detail',
  templateUrl: './bonus-detail.component.html',
  styleUrls: ['./bonus-detail.component.scss']
})
export class BonusDetailComponent implements OnInit {

  static GEM_SMALL = 'GEM_SMALL';
  static GEM_MEDIUM = 'GEM_MEDIUM';
  static GEM_LARGE = 'GEM_LARGE';


  @Input() chosenEquip;
  bonusEquip = undefined;
  filterKeys: Array<string>;
  bonusKey: Array<string>;

  constructor(private sharedService:SharedService) {
  }

  ngOnInit() {
    this.sharedService.chosenEquipEvent$.subscribe(
      data => {
        if(data.size > 0) {
          this.chosenEquip = data;
          this.filterKeys = Array.from(this.chosenEquip.keys());
          this.calcBonus();
          this.bonusKey = Array.from(this.bonusEquip.keys());
        } else {
          this.chosenEquip = undefined;
          this.filterKeys = undefined;
          this.bonusEquip = undefined;
          this.bonusKey = undefined;
        }
      }
    )
  }

  calcBonus(){
    this.bonusEquip = new Map<string, number>();
    this.bonusEquip.set("GEM_SMALL", 0)
    this.bonusEquip.set("GEM_MEDIUM", 0)
    this.bonusEquip.set("GEM_LARGE", 0)

    this.chosenEquip.forEach((equip, name) =>
      {
        for (let bonus of equip.bonus) {
          if(bonus.name){
            if(!this.bonusEquip.has(bonus.name)){
              this.bonusEquip.set(bonus.name, bonus.value);
            }else{
              let value = this.bonusEquip.get(bonus.name);
              value += bonus.value;
              this.bonusEquip.set(bonus.name, value);
            }
          }
        }
        this.calcSocket(BonusDetailComponent.GEM_SMALL, equip.socket.small);
        this.calcSocket(BonusDetailComponent.GEM_MEDIUM, equip.socket.medium);
        this.calcSocket(BonusDetailComponent.GEM_LARGE, equip.socket.big);
      }
    );
  }

  calcSocket(socketType, socketValue){
    let value = this.bonusEquip.get(socketType);
    value += socketValue
    this.bonusEquip.set(socketType, value);
  }

  getImageFromSocket(socketType){
    let img = "";
    switch(socketType){
      case BonusDetailComponent.GEM_SMALL:
        img = "gem_small.png";
        break;
      case BonusDetailComponent.GEM_MEDIUM:
        img = "gem_medium.png";
        break;
      case BonusDetailComponent.GEM_LARGE:
        img = "gem_large.png";
        break;
    }
    return img;
  }
}
