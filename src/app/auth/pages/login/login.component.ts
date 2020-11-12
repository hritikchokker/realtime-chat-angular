import {
  Component,
  OnInit
} from '@angular/core';
import { EmailValidation, PasswordValidation, Validations } from 'src/app/common/helpers/validations';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { BaseFormClass } from 'src/app/common/directives/base-form/base-form-class';
import { REGISTER_ROUTE } from '../../constants/routes.constants';

declare interface User {
  email: string,
  password: string,
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends BaseFormClass<User> implements OnInit {
  constructor(private $fb: FormBuilder) {
    super()
  }
  buildForm() {
    const form = this.$fb.group({
      email: ['',EmailValidation],
      password: ['',PasswordValidation]
    })
    return form;
  }

  ngOnInit(): void {
  }

}





