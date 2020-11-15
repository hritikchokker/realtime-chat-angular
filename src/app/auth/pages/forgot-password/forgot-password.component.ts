import {
  Component,
  OnDestroy,
  OnInit
} from '@angular/core';
import {
  FormBuilder,
  FormGroup
} from '@angular/forms';
import {
  debounceTime,
  distinctUntilChanged,
  filter
} from 'rxjs/operators';

import { Subscription } from 'rxjs';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit, OnDestroy {

  subscription: Subscription = new Subscription();
  emailTemp: string = '******@****.***';
  readonly emailValue = '*****@****.***'
  forgotForm: FormGroup
  constructor(private _fb: FormBuilder) {
    this.createForm();
  }

  private createForm(): void {
    this.forgotForm = this._fb.group({
      email: [null]
    })
  }

  ngOnInit(): void {
    this.subscription.add(
      this.forgotForm.controls['email']
        .valueChanges
        .pipe(
          distinctUntilChanged(),
          debounceTime(400),
          filter(data => data && data.trim())
        )
        .subscribe((res: string) => {
          if (res && res.trim()) {
            if (res.includes('@')) {
              this.emailTemp = res;
            } else {
              this.emailTemp = this.emailValue;
            }
          } else {
            this.emailTemp = this.emailValue;
          }
        })
    )
  }

  onSubmit() {

  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
