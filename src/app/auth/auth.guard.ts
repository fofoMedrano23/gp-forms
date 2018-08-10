import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import { Injectable } from '@angular/core';
import { FormioAuth, FormioAuthService, FormioAuthRoutes } from 'angular-formio/auth';

import { Router } from '@angular/router';
import { Observable } from 'rxjs';
@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private authService: FormioAuthService, private router: Router) {

    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        if (this.authService.is.authenticated) {
            return true;
        } else {
            this.router.navigate(['auth/login']);
        }
       }
    }
