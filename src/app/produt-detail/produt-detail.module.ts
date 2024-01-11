import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutDetailRoutingModule } from './produt-detail-routing.module';
import { ProdutDetailComponent } from './produt-detail.component';


@NgModule({
  declarations: [
    ProdutDetailComponent
  ],
  imports: [
    CommonModule,
    ProdutDetailRoutingModule
  ]
})
export class ProdutDetailModule { }
