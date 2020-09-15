import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AUTH_ROUTES_CONSTANTS } from './auth/constants/routes.constants';
import { AUTH_ROUTE } from './common/constants/routes.constants';

const routes: Routes = [
  {
    path:'',
    redirectTo: AUTH_ROUTE.path,
    pathMatch:'full'
  },
  {
    path: AUTH_ROUTE.path,
    loadChildren:()=>import('./auth/auth.module').then(m=>m.AuthModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
