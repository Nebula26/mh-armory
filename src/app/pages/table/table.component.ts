import { Equip } from './../../data/equip';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  equip = Equip.equip;

  constructor() { }

  ngOnInit() {
  }

}
