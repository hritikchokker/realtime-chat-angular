import {
  Component,
  OnInit
} from '@angular/core';
import { EmailValidation, PasswordValidation, Validations } from 'src/app/common/helpers/validations';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { BaseFormClass } from 'src/app/common/directives/base-form/base-form-class';
import { REGISTER_ROUTE } from '../../constants/routes.constants';

const ALIGN_OPTIONS = ['auto', 'start', 'center', 'baseline', 'end', 'stretch'];

export interface User {
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
  alignTo = 'center';

  toggleAlignment() {
    let j = ALIGN_OPTIONS.indexOf(this.alignTo);
    this.alignTo = ALIGN_OPTIONS[(j + 1) % ALIGN_OPTIONS.length];
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





