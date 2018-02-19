import { TableComponent } from './pages/table/table.component';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

// Route Configuration
export const routes: Routes = [
    { path: ':id', component: TableComponent },
    { path: '**', component: TableComponent },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes); // {useHash: true });
