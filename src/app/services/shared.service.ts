import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class SharedService {

  constructor() { }

  private chosenEquipEvent = new Subject<any>();
  chosenEquipEvent$ = this.chosenEquipEvent.asObservable();
  publishChosenEquipEvent(data: any) {
    this.chosenEquipEvent.next(data);
  }
}
