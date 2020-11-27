import { NumberSymbol } from '@angular/common';
import { Component, Inject, InjectionToken, OnInit, Optional } from '@angular/core';


export interface ResModel{
  name:string,
  value:Number,
  result:string
}
export const RES:ResModel ={
  name:'fake',
  value:1,
  result:'no rres'
}

const res_token = new InjectionToken<ResModel>('RES');
const Auth = new InjectionToken('Auth');
const Status = new InjectionToken('Status');


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  providers:[
    {provide:res_token,useValue:RES},
    {provide:'hellworld',useValue:'HELLO WORLD'},
  ]
})
export class UserListComponent implements OnInit {

  constructor(@Inject(res_token) public data:ResModel,
   @Optional() @Inject('hellworld') public hw:string /** optional decorator to handle if dependency is not provided */
  ) { }

  ngOnInit(): void {
  }

}
