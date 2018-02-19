import { Component, OnInit, Input } from '@angular/core';
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
  bonuses: Array<string>;
  @Input() name: string;
  @Input() bonus: string;

  constructor(private sharedService: SharedService) {
    this.filter = {
      name : '',
      bonus : ''
    };

    this.bonuses = new Bonus().getBonuses();
  }

  ngOnInit() {
  }

  changeText() {
    this.filter.name = this.name;
    this.sharedService.publishFilterEvent(this.filter);
   }

  changeSelect() {
    this.filter.bonus = this.bonus;
    this.sharedService.publishFilterEvent(this.filter);
  }

  resetFilter() {
    this.name = '';
    this.bonus = '';

    this.filter = {
      name : '',
      bonus : ''
    };
    this.sharedService.publishFilterEvent(this.filter);
  }
}
