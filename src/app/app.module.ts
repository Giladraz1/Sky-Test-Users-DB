import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AddTehulaComponent } from './components/add-tehula/add-tehula.component';
import { TehulaDetailComponent } from './components/tehula-detail/tehula-detail.component';
import { TehulotListComponent } from './components/tehulot-list/tehulot-list.component';
import {MatSortModule} from '@angular/material/sort';

 import { BrowserAnimationsModule }  from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    AddTehulaComponent,
    TehulaDetailComponent,
    TehulotListComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    MatSortModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
