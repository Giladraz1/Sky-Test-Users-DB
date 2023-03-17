import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TehulotListComponent } from './components/tehulot-list/tehulot-list.component';
import { AddTehulaComponent } from './components/add-tehula/add-tehula.component';
import { TehulaDetailComponent } from './components/tehula-detail/tehula-detail.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'add-tehula' },
  { path: 'tehulot-list', component: TehulotListComponent },
  { path: 'add-tehula', component: AddTehulaComponent },
  { path: 'edit-tehula/:id', component: TehulaDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
