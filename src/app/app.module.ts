import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { FilterComponent } from './components/filter/filter.component';
import { BonusDetailComponent } from './components/bonus-detail/bonus-detail.component';

import { MzButtonModule } from 'ng2-materialize';
import { TableComponent } from './pages/table/table.component'
import { MzNavbarModule } from 'ng2-materialize'
import { SharedService } from './services/shared.service';


@NgModule({
  declarations: [
    AppComponent,
    FilterComponent,
    BonusDetailComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MzButtonModule,
    MzNavbarModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
