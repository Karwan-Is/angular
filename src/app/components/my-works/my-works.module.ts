import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyWorksRoutingModule } from './my-works-routing.module';
import { MyWorksComponent } from './my-works.component';
import { DetailsComponent } from './details/details.component';
import { MaterialModule } from '../../modules/material.module';


@NgModule({
  declarations: [
    MyWorksComponent,
    DetailsComponent],
  imports: [
    CommonModule,
    MyWorksRoutingModule,
    MaterialModule
  ]
})
export class MyWorksModule { }
