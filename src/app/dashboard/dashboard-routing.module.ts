import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path:'',
    component:DashboardComponent,
    children:[
      {
        path:'',
        redirectTo:'user',
        pathMatch:'full'
      },
      {
        path:'user',
        loadChildren:()=>import('./pages/user-list/user-list.module').then(m=>m.UserListModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
