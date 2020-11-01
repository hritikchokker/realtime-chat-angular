import {
  Component,
  OnInit
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { REGISTER_ROUTE } from '../../constants/routes.constants';
import { Validations } from 'src/app/common/helpers/validations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  matcher = new Validations()
  registerRoute = REGISTER_ROUTE.url;
  loginForm: FormGroup;
  constructor(private _fb: FormBuilder) {
    this.createForm();
  }

  get f(){
    return this.loginForm.controls;
  }

  createForm(): void {
    this.loginForm = this._fb.group({
      email: ['',[Validators.required,Validators.minLength(4),Validators.email]],
      password: ['',[Validators.required,Validators.minLength(4),Validators.maxLength(16)]]
    })

  }

  ngOnInit(): void {
  }
}
