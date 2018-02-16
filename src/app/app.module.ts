import { routing } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { FilterComponent } from './components/filter/filter.component';
import { BonusDetailComponent } from './components/bonus-detail/bonus-detail.component';

import { MzButtonModule, MzModalModule, MzIconModule, MzIconMdiModule } from 'ng2-materialize';
import { TableComponent } from './pages/table/table.component'
import { MzNavbarModule } from 'ng2-materialize'
import { SharedService } from './services/shared.service';
import { MzInputModule } from 'ng2-materialize';
import { MzSelectModule } from 'ng2-materialize';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { FormsModule } from '@angular/forms';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

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
    MzNavbarModule,
    MzInputModule,
    MzSelectModule,
    PerfectScrollbarModule,
    MzModalModule,
    FormsModule,
    MzIconModule, 
    MzIconMdiModule,
    routing
  ],
  providers: [
    SharedService,
    {
        provide: PERFECT_SCROLLBAR_CONFIG,
        useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
      }
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
