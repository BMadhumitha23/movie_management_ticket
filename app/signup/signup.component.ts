import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private router: Router) {}

  onSubmit(): void {
    // Simulate a successful signup process.
    console.log('Form submitted');
    
    // Navigate to the login page after a successful signup.
    this.router.navigate(['/login']);
  }
}
