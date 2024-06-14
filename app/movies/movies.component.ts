
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  title = 'ngValidation';
  movieticket!: FormGroup;
  movie:any;
  constructor(private router: Router, private formBuilder: FormBuilder,private cartService: CartService) {}

  ngOnInit(): void {
   
  }

  addToCart(movieTitle:string,screen:string,price:string,imageUrl:string) {
  
    this.cartService.addToCart({ title: movieTitle, screen: screen, price: price, imageUrl: imageUrl });
   
    this.router.navigate(['/cart']);
  }
  
  goToTicketPage(movieTitle: string, screen: string, price: string) {
    this.router.navigate(['/ticket'], { queryParams: { movieTitle, screen, price } });
  }
}
