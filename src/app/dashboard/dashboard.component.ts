import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  template: `<div>
    <router-outlet></router-outlet>
  </div>`,
  styles: [


  ]
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
