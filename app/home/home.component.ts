import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  login(): void {
    // Implement your login logic here.
    console.log('Login form submitted');
    this.router.navigate(['/movies'])
  }

  
}
