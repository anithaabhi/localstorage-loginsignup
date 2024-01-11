import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  { path: 'signup', loadChildren: () => import('./signup/signup.module').then(m => m.SignupModule) },
  { path: 'produts', loadChildren: () => import('./produts/produts.module').then(m => m.ProdutsModule) },
  { path: 'productDetail', loadChildren: () => import('./produt-detail/produt-detail.module').then(m => m.ProdutDetailModule) },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
