import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';

import { AppComponent } from './app.component';
import { FilterComponent } from './components/filter/filter.component';
import { BonusDetailComponent } from './components/bonus-detail/bonus-detail.component';



@NgModule({
  declarations: [
    AppComponent,
    FilterComponent,
    BonusDetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
