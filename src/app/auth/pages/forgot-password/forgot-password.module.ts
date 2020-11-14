import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ForgotPasswordComponent } from './forgot-password.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ForgotPasswordComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{path:'',component:ForgotPasswordComponent}]),
    FlexLayoutModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule
  ]
})
export class ForgotPasswordModule { }
