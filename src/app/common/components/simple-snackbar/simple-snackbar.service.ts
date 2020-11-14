import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackBarModel } from './simple-snackbar.component';

@Injectable()
export class SimpleSnackbarService {

  constructor(private _snackBar:MatSnackBar) { }

  showToast(payload: SnackBarModel){
    this._snackBar.open(payload.message,payload.action,payload.config)
  }
}
