import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { FilterInterface } from '../models/filter.interface';

@Injectable()
export class SharedService {

  constructor() { }

  private chosenEquipEvent = new Subject<any>();
  chosenEquipEvent$ = this.chosenEquipEvent.asObservable();
  publishChosenEquipEvent(data: any) {
    this.chosenEquipEvent.next(data);
  }

  private filterEvent = new Subject<any>();
  filterEvent$ = this.filterEvent.asObservable();
  publishFilterEvent(data: FilterInterface) {
    this.filterEvent.next(data);
  }
}
