import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, map } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class isLoggedGuardService implements CanActivate {

  constructor(private _userService: UserService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> {
    return this._userService.isUserLogged.pipe(
      map((isLogged) => {
        if (isLogged) {
          return true;
        } else {
          return false;
        }
      })
    )
  }
}

export const isLoggedGuardFn: CanActivateFn = (route, state) => {
  return inject(UserService).isUserLogged;
};
