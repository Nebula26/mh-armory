import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class SharedService {

  constructor() { }

  private calcBonusEvent = new Subject<any>();
  calcBonusEvent$ = this.calcBonusEvent.asObservable();
  publishCalcBonusEvent() {
    console.log("publishCalcBonusEvent");
    this.calcBonusEvent.next();
  }
}
