import { Injectable } from '@angular/core';
import { CanActivate, CanActivateFn, Router } from '@angular/router';
import { AuthguardService } from './authguard.service';

@Injectable({
  providedIn: 'root'
})

// export const authGuard: CanActivateFn = (route, state) => {
//   // return true;

// };

export class authguard implements CanActivate {
  constructor(private authService: AuthguardService, private router: Router) { }
  canActivate(): boolean {
    if (!localStorage.getItem('token')) {
      this.router.navigateByUrl('/login');
    }
    return this.authService.getToken();
  }
}
