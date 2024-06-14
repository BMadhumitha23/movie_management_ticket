// auth.guard.ts

import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.isAuthenticatedUser() && this.authService.isUserSignedUp()) {
      return true; // Allow navigation to MoviesComponent
    } else if (this.authService.isAuthenticatedUser() && !this.authService.isUserSignedUp()) {
      this.router.navigate(['/signup']); // Redirect to signup page if not signed up
      return false;
    } else {
      this.router.navigate(['/home']); // Redirect to login page if not authenticated
      return false;
    }
  }
}
