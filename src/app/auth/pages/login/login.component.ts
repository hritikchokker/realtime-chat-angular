import { Component, OnInit } from '@angular/core';
import { REGISTER_ROUTE } from '../../constants/routes.constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  registerRoute=REGISTER_ROUTE.url;
  constructor() { }

  ngOnInit(): void {
  }

}
