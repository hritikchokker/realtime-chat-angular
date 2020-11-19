import {
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import { state, style, transition } from '@angular/animations';

import { SimpleSnackbarService } from 'src/app/common/components/simple-snackbar/simple-snackbar.service';
import { SocketioService } from 'src/app/common/services/socketio/socketio.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {

  message:string;
  loginForm: FormGroup
  constructor(private _fb: FormBuilder,
    private _socket:SocketioService,
    private _snackBar: SimpleSnackbarService) {
    this.createForm();
    this.listenForMessage()
  }


  listenForMessage() {
    let count = 0
    this._socket.receieveMessage().subscribe(data => {
      count++
      this.message = data;
    })
  }


  createForm(): void {
    this.loginForm = this._fb.group({
      email: [null, Validators.required],
      password: [null, Validators.required]
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this._snackBar.showToast({ message: 'Please fill the form', action: 'HIDE', config: { duration: 50000 } })

  }

}
