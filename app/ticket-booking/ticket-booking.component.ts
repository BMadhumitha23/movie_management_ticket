// ticket-booking.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TicketService } from './ticket.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-ticket-booking',
  templateUrl: './ticket-booking.component.html',
  styleUrls: ['./ticket-booking.component.css']
})
export class TicketBookingComponent implements OnInit {
  name: string = '';
  idNumber: string = '';
  movieTitle: string = '';
  screen: string = '';
  price: string = '';
  date: string = '';
  time: string = '';
  seats: number = 1;
  seatType: string = 'ac';
  amount: number = 0;
  successMessage: string = '';

  constructor(
    private route: ActivatedRoute,
    private ticketService: TicketService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.movieTitle = params['movieTitle'];
      this.screen = params['screen'];
      this.price = params['price'];
      this.successMessage = params['message'] || '';
    });
  }

  calculateAmount() {
    const numericPrice = parseFloat(this.price.replace(/[^0-9.-]+/g, ''));
    const adjustedPrice = this.seatType === 'ac' ? numericPrice + 10 : numericPrice + 8;
    this.amount = this.seats * adjustedPrice;
  }

  updateAmount() {
    this.calculateAmount();
  }

  onSubmit() {
    const ticketDetails = {
      name: this.name,
      idNumber: this.idNumber,
      movieTitle: this.movieTitle,
      screen: this.screen,
      price: parseFloat(this.price.replace(/[^0-9.-]+/g, '')),
      date: this.date,
      time: this.time,
      seats: this.seats,
      seatType: this.seatType,
      amount: this.amount
    };

    this.ticketService.bookTicket(ticketDetails).subscribe(
      response => {
        alert('You have successfully booked!');
        this.router.navigate(['/success'], { state: { ticket: ticketDetails } });
      },
      error => {
        console.error('Error: ', error);
      }
    );
  }
}
