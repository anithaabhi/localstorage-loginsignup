import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutsRoutingModule } from './produts-routing.module';
import { ProdutsComponent } from './produts.component';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    ProdutsComponent
  ],
  imports: [
    CommonModule,
    ProdutsRoutingModule,NgxPaginationModule
  ]
})
export class ProdutsModule { }
