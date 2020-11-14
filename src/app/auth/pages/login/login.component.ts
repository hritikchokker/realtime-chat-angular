import {
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup
  constructor(private _fb:FormBuilder) {
    this.createForm();
  }

  createForm():void{
    this.loginForm = this._fb.group({
      email:[null,Validators.required],
      password:[null,Validators.required]
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {

  }

}
