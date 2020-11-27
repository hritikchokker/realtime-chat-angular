import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './common/guards/auth.guard';
import { LayoutGuard } from './common/guards/layout.guard';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
    canActivate:[LayoutGuard],
    canLoad:[LayoutGuard]
  },
  // {
  //   path: 'users',
  //   loadChildren: () => import('./user/user.module').then(m => m.UserModule),
  //   canActivate: [AuthGuard],
  //   canLoad: [AuthGuard]
  // },
  {
    path:'dashboard',
    loadChildren:()=>import('./dashboard/dashboard.module').then(m=>m.DashboardModule),
    canActivate:[AuthGuard],
    canLoad:[AuthGuard]
  },
  {
    path:'**',
    loadChildren:()=>import('./page-not-found/page-not-found.module').then(m=>m.PageNotFoundModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
