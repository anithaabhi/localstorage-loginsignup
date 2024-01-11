import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutDetailComponent } from './produt-detail.component';

const routes: Routes = [{ path: '', component: ProdutDetailComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutDetailRoutingModule { }
