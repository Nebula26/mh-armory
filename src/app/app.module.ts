import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { FilterComponent } from './components/filter/filter.component';
import { BonusDetailComponent } from './components/bonus-detail/bonus-detail.component';

import { MzButtonModule } from 'ng2-materialize'


@NgModule({
  declarations: [
    AppComponent,
    FilterComponent,
    BonusDetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MzButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
