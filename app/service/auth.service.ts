// auth.service.ts

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;
  private isSignedUp = false; // Assume initially not signed up

  constructor() { }

  login(email: string, password: string): boolean {
    // Replace with actual authentication logic (e.g., API call)
    if (email === 'test@example.com' && password === 'password') {
      this.isAuthenticated = true;
      // Example: Directly setting isSignedUp to true after login
      this.isSignedUp = true;
      return true;
    }
    return false;
  }

  logout(): void {
    this.isAuthenticated = false;
    // Additional cleanup logic if needed
  }

  isAuthenticatedUser(): boolean {
    return this.isAuthenticated;
  }

  isUserSignedUp(): boolean {
    return this.isSignedUp;
  }
}
