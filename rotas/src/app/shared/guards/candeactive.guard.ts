import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

//Componets
import { AccountComponent } from '../account/account.component';

@Injectable({
  providedIn: 'root'
})
export class CandeactiveGuard implements CanDeactivate<AccountComponent> {
  canDeactivate(
    component: AccountComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
    ):
     |Observable<boolean | UrlTree>
     | Promise<boolean | UrlTree>
     | boolean
     |UrlTree {
     return component.exit();
  }
}
