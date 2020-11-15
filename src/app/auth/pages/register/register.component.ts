import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { createFatalAPIFormat } from '@ionic/cli/lib/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm:FormGroup
  constructor(private _fb:FormBuilder) {
    this.createForm();
  }

  private createForm():void{
    this.registerForm  = this._fb.group({
      email:[''],
      password:[''],
      confirmPassword:['']
    })
  }

  ngOnInit(): void {
  }

  onSubmit(){

  }

}
