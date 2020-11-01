import { RouterModule, Routes } from '@angular/router';

import { AUTH_ROUTES_CONSTANTS } from './constants/routes.constants';
import { NgModule } from '@angular/core';
const routes: Routes = [
  {
    path: '',
    redirectTo: AUTH_ROUTES_CONSTANTS.LOGIN_ROUTE.path,
    pathMatch: 'full'
  },
  {
    path: AUTH_ROUTES_CONSTANTS.LOGIN_ROUTE.path,
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)
  },
  {
    path: AUTH_ROUTES_CONSTANTS.REGISTER_ROUTE.path,
    loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterModule)
  },
  {
    path: AUTH_ROUTES_CONSTANTS.FORGOT_PASSWORD_ROUTE.path,
    loadChildren: () => import('./pages/forgot-password/forgot-password.module').then(m => m.ForgotPasswordModule)
  },
  {
    path: AUTH_ROUTES_CONSTANTS.RESET_PASSWORD_ROUTE.path,
    loadChildren: () => import('./pages/reset-password/reset-password.module').then(m => m.ResetPasswordModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
