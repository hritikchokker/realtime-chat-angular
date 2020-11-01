import { AppMaterialModule } from 'src/app/app-material.module';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{path:'',component:LoginComponent}]),
    AppMaterialModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class LoginModule { }
