import { Equip } from '../../data/equip';
import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../services/shared.service';
import { ActivatedRoute } from '@angular/router';
import { FilterInterface } from '../../models/filter.interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  armor: Array<any> = Equip.equip;
  chosenEquip = new Map<string, any>();
  filter: FilterInterface = {
    name : '',
    bonus : ''
  };
  filteredArmor: Array<object>;
  notFilteredArmor: Array<object>;

  constructor(private sharedService: SharedService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.sharedService.filterEvent$.subscribe(
      data => {
        this.filter = data;
        this.filteredArmor = [];
        this.notFilteredArmor = [];
        const that = this;

        if (this.filter.name === '' && this.filter.bonus === '') {
          this.armor = Equip.equip;
        } else {
          for (const set of this.armor) {
            if (this.filter.name !== '' && set.name.toLowerCase().indexOf(that.filter.name.toLowerCase()) !== -1) {
              that.filteredArmor.push(set);
            } else if (this.filter.bonus !== '') {
              let found = false;
              for (const piece of set.equip) {
                const l = piece.bonus.filter(
                  bonus => bonus.name.toLowerCase().indexOf(that.filter.bonus.toLowerCase()) !== -1
                ).length;
                if (l > 0) {
                  found = true;
                  break;
                }
              }
              if (found) {
                that.filteredArmor.push(set);
              } else {
                that.notFilteredArmor.push(set);
              }
            } else {
              that.notFilteredArmor.push(set);
            }
          }
          this.armor = this.filteredArmor.concat(this.notFilteredArmor);
        }
      }
    );

    this.route.params.subscribe(params => {
      if (params.id) {
        this.importEquipFromUrl(params.id);
      }
    });
  }

  toggle(eq) {
    if (eq.bonus.length > 0) {
      let add = true;
      if (this.chosenEquip.has(eq.name)) {
        if (this.chosenEquip.get(eq.name).id === eq.id) {
          add = false;
        }
        this.chosenEquip.delete(eq.name);
      }
      if (add) {
        this.chosenEquip.set(eq.name, eq);
      }
      this.sharedService.publishChosenEquipEvent(this.chosenEquip);
    }
  }

  importEquipFromUrl(url) {
    const equip = JSON.parse(atob(url));
    console.log(equip);
    for (const piece of this.armor) {
      const arr = piece.equip.filter(eq => eq.id === equip.helm || eq.id === equip.chest ||
                eq.id === equip.hands || eq.id === equip.legs || eq.id === equip.boots);
      if (arr.length > 0) {
        for (const a of arr) {
          this.chosenEquip.set(a.name, a);
        }
      }
      if (this.chosenEquip.size === 5) {
        break;
      }
    }
    this.sharedService.publishChosenEquipEvent(this.chosenEquip);

  }

  toFilterByName(name) {
    const filterExist = this.filter;
    const filterEmpty = this.filter.name === '';
    const isToFilter = name.toLowerCase().indexOf(this.filter.name.toLowerCase()) !== -1;

    return filterExist && !filterEmpty && isToFilter;
  }

  toFilterByBonus(bonuses) {
    const that = this;
    if (this.filter && this.filter.bonus !== '') {
      const found = bonuses.filter(
        bonus => bonus.name.toLowerCase().indexOf(that.filter.bonus.toLowerCase()) !== -1
      );
      return found.length > 0;
    }
  }
}
