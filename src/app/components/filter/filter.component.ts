import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../services/shared.service';
import { FilterInterface } from '../../models/filter.interface';
import { Bonus } from '../../data/bonus';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  private filter: FilterInterface;
  bonuses: Array<string> = new Bonus().getBonuses();

  constructor(private sharedService: SharedService) {
    this.filter = {
      name : '',
      bonus : ''
    };
  }

  ngOnInit() {
  }

  changeText($event) {
    this.filter.name = $event.target.value;
    this.sharedService.publishFilterEvent(this.filter);
   }

  changeSelect($event) {
    this.filter.bonus = $event.target.value;
    this.sharedService.publishFilterEvent(this.filter);
  }

}
