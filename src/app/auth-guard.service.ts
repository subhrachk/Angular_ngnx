import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from "rxjs"
import { AuthService } from "./AuthService.service"
import { Injectable } from '@angular/core';

@Injectable({ providedIn: "root" })

export class AuthGuard implements CanActivate { 

    constructor(private authServive : AuthService, private router :Router) {}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): 
    Observable<boolean> | 
    Promise<boolean> | 
    boolean { 
    return this.authServive.isAuthenticated().then( 
    (authenticated) => { 
    if(authenticated) { return true} 
    else {this.router.navigate(['/']); return false;} } 
    ) 
    } 

    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): 
        Observable<boolean> | Promise<boolean> | boolean { 
        //return false; 
        return this.canActivate(route,state); 
        } 
}
