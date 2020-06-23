import { Injectable } from '@angular/core';
import {
    CanActivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    UrlTree,
    NavigationExtras,
} from '@angular/router';
import { Observable } from 'rxjs';

// @Ngrx
import { Store } from '@ngrx/store';
import { AppState } from '../@ngrx';
import * as RouterActions from './../@ngrx/router/router.actions';

import { AuthService } from '../services';

@Injectable({
    providedIn: 'root',
})
export class AuthGuard implements CanActivate {
    constructor(
        private authService: AuthService,
        private store: Store<AppState>
    ) {}

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ):
        | Observable<boolean | UrlTree>
        | Promise<boolean | UrlTree>
        | boolean
        | UrlTree {
        const { url } = state;
        return this.checkLogin(url);
    }

    private checkLogin(url: string): boolean | UrlTree {
        const sessionId = 123456789;
        const navigationExtras: NavigationExtras = {
            queryParams: { sessionId },
            fragment: 'anchor'
        };
        if (this.authService.isLoggedIn) {
            return true;
        }
        this.authService.redirectUrl = url;
        this.store.dispatch(RouterActions.go({
            path: ['/login'],
            extras: navigationExtras
        }));
    }
}
