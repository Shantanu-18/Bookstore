import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthGuardService } from './services/AuthGuardService/auth-guard.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate {

  constructor(private authguardService: AuthGuardService, private router: Router) {} 

  canActivate(): boolean {
    if(!this.authguardService.getToken()){
      this.router.navigateByUrl("/signup");
    }
    return this.authguardService.getToken();
  }
  
}
