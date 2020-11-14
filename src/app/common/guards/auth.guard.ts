import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanLoad,
  Route,
  Router,
  RouterStateSnapshot,
  UrlSegment,
  UrlTree
} from '@angular/router';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {
  constructor(private _router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.handleAuth()
  }

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    return this.handleAuth();
  }

  private handleAuth():boolean{
    console.log('hyell')
    if(!localStorage.getItem('token')){
      this._router.navigate(['/auth/login'])
      return false;
    }
    return true;
  }

}
