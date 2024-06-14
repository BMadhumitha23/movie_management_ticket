import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  private apiUrl = 'http://localhost:3000/api/tickets';

  constructor(private http: HttpClient) {}

  bookTicket(ticketDetails: any): Observable<any> {
    console.log('Sending data to backend:', ticketDetails);  // Log sent data
    return this.http.post<any>(this.apiUrl, ticketDetails);
  }
}
