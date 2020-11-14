import {
  MAT_FORM_FIELD_DEFAULT_OPTIONS,
  MatFormFieldModule
} from '@angular/material/form-field';

import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LoginComponent } from './login.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SimpleSnackbarModule } from 'src/app/common/components/simple-snackbar/simple-snackbar.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    MatCardModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    FlexLayoutModule,
    SimpleSnackbarModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    RouterModule.forChild([{ path: '', component: LoginComponent }]),
    // AppMaterialModule,
  ], providers: [
    // { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { floatLabel: 'always' } }
  ]
})
export class LoginModule { }
