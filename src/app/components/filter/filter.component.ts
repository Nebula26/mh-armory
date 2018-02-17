import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from '../../services/shared.service';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  private filter:Object = {
    name : '',
    bonus : ''
  };

  constructor(private sharedService:SharedService) { }

  ngOnInit() {
  }

   changeText($event) {
     this.filter.name = $event.target.value;
     this.sharedService.publishFilterEvent(this.filter);
   }

  // changeSelect($event) {
  //   this.filter.bonus = $event.target.value;
  //   this.sharedService.publishFilterEvent(this.filter);
  // }

}
