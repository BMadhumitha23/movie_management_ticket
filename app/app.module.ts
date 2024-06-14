import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { TheatersComponent } from './theaters/theaters.component';
import { HomeComponent } from './home/home.component';
import { TicketBookingComponent } from './ticket-booking/ticket-booking.component';
import { CartComponent } from './cart/cart.component';
import { CartService } from './service/cart.service';
import { ReactiveFormsModule } from '@angular/forms';
import { TicketService} from './ticket-booking/ticket.service';
import { SuccessComponent } from './success/success.component';
import { SignupComponent } from './signup/signup.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

const routes: Routes = [
  { path: 'signup', component: SignupComponent },
  {path:'login',component:HomeComponent},
  { path: 'movies', component: MoviesComponent },
  { path: 'theaters', component: TheatersComponent },
  { path: 'ticket', component: TicketBookingComponent },
  { path:'cart',component:CartComponent},
  { path: 'success', component: SuccessComponent },
  {path:'contact',component:ContactUsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    TheatersComponent,
    HomeComponent,
    TicketBookingComponent,
    CartComponent,
    SuccessComponent,
    SignupComponent,
    ContactUsComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
   
  ],
  providers: [CartService,TicketService],

  bootstrap: [AppComponent]
})
export class AppModule { }
