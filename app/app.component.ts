import { Component} from '@angular/core';
import { HomeComponent} from './home/home.component';
import { TheatersComponent} from './theaters/theaters.component';
import { TicketBookingComponent } from './ticket-booking/ticket-booking.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent  {
  title = 'home';
  movieTitle:string=''
  public getJsonvalue:any;
  public postJsonvslue:any;
  

  ngOnInit() {
   
  }
}
