import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { TheatersComponent } from './theaters/theaters.component';
import { HomeComponent } from './home/home.component';
import { TicketBookingComponent } from './ticket-booking/ticket-booking.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CartComponent } from './cart/cart.component';
import { SuccessComponent } from './success/success.component';
import { SignupComponent } from './signup/signup.component';
import { AuthGuard } from './guards/auth.guard';
import { ContactUsComponent } from './contact-us/contact-us.component';

const routes: Routes = [
 {path:'',component:SignupComponent},
{ path: 'login', component: HomeComponent }, 
  { path: 'movies', component: MoviesComponent },
  { path: 'theaters', component: TheatersComponent },
  {path :'ticket', component:TicketBookingComponent},
  {path :'cart' , component:CartComponent},
  { path: 'success', component: SuccessComponent },
  { path: 'signup', component: SignupComponent },
  {path :'contact',component:ContactUsComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    TheatersComponent,
    HomeComponent,
    TicketBookingComponent ,
    CartComponent,
    SuccessComponent,
    SignupComponent,
    AuthGuard,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
