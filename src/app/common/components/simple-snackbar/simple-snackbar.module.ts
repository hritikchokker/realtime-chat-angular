import { CommonModule } from '@angular/common';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NgModule } from '@angular/core';
import { SimpleSnackbarComponent } from './simple-snackbar.component';
import { SimpleSnackbarService } from './simple-snackbar.service';

@NgModule({
  declarations: [SimpleSnackbarComponent],
  imports: [
    CommonModule,
    MatSnackBarModule
  ], providers: [SimpleSnackbarService],
  entryComponents:[SimpleSnackbarComponent]
})
export class SimpleSnackbarModule { }
