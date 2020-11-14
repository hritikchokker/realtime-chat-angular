import {
  Component,
  Inject,
  OnInit
} from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBarConfig, MatSnackBarRef } from '@angular/material/snack-bar';


export interface SnackBarModel{
  message:string,
  action:string,
  config:MatSnackBarConfig
}
@Component({
  selector: 'app-simple-snackbar',
  templateUrl: './simple-snackbar.component.html',
  styleUrls: ['./simple-snackbar.component.scss']
})
export class SimpleSnackbarComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: SnackBarModel,
    public _snackBarRef: MatSnackBarRef<SimpleSnackbarComponent>) { }

  ngOnInit(): void {
  }


}
