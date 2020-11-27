import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserListComponent } from './user-list.component';
import { UserListService } from '../../services/user-list.service';

@NgModule({
  declarations: [UserListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{path:'',component:UserListComponent}])
  ],providers:[{provide:UserListService,useClass:UserListService}]
})
export class UserListModule { }
