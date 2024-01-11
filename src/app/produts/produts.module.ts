import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutsRoutingModule } from './produts-routing.module';
import { ProdutsComponent } from './produts.component';


@NgModule({
  declarations: [
    ProdutsComponent
  ],
  imports: [
    CommonModule,
    ProdutsRoutingModule
  ]
})
export class ProdutsModule { }
