import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, Observer } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private apiUrl = 'http://localhost:3000/chat';

  constructor(private http: HttpClient) { }

  // Method to send a message to FastAPI and receive a streamed response


  getServerSentEvent(url: string): EventSource {
    return new EventSource(url);
  }


  sendMessage(message: string): Observable<HttpResponse<any>> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const body = { message };

    return this.http.post(this.apiUrl, body, { headers, observe: 'response' })
      .pipe(
        tap((response) => {
          if (response.body) {
            const eventSource = new EventSource(response.body.toString());
            eventSource.onmessage = (event) => {
              // Handle incoming messages
            };
            eventSource.onerror = (error) => {
              // Handle errors
            };
            eventSource.close = () => {
              // Handle connection close
            };
          }
        })
      );
  }
}
