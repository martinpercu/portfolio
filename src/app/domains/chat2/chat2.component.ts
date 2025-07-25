import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chat2',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './chat2.component.html',
  styleUrl: './chat2.component.css'
})

export class Chat2Component implements OnInit, OnDestroy {
  messages: string[] = [];
  inputMessage: string = '';
  subscription!: Subscription;

  constructor(private http: HttpClient) { }


  ngOnInit(): void {
    // No subscription needed here
  }

  ngOnDestroy(): void {
    // No subscription to unsubscribe
  }

  sendMessage(): void {
    const url = 'http://localhost:3000/chat';
    const body = JSON.stringify({ message: this.inputMessage });
    const headers = { 'Content-Type': 'application/json' };

    fetch(url, {
      method: 'POST',
      headers: headers,
      body: body,
    })
      .then((response) => {
        if (!response.body) {
          throw new Error('ReadableStream not supported');
        }

        const reader = response.body.getReader();
        const decoder = new TextDecoder();
        this.messages.push(''); // Add a placeholder for the new message
        const messageIndex = this.messages.length - 1; // Index of the message being updated

        const processStream = ({ done, value }: ReadableStreamReadResult<Uint8Array>): Promise<void> => {
          if (done) return Promise.resolve(); // Stream has ended

          const chunk = decoder.decode(value, { stream: true });

          // Process each JSON object in the chunk
          const parts = chunk.split('\n').filter(Boolean); // Split and remove empty lines
          for (const part of parts) {
            try {
              const parsed = JSON.parse(part); // Parse the JSON
              if (parsed.response) {
                this.messages[messageIndex] = parsed.response; // Update the last message
              }
            } catch (e) {
              console.error('Error parsing chunk:', part, e);
            }
          }

          // Continue reading the stream
          return reader.read().then(processStream);
        };

        return reader.read().then(processStream);
      })
      .catch((error) => {
        console.error('Error streaming response:', error);
      })
      .finally(() => {
        this.inputMessage = ''; // Clear the input field
      });
  }


  // sendMessage(): void {
  //   const url = 'http://localhost:3000/chat';
  //   const body = JSON.stringify({ message: this.inputMessage });
  //   const headers = { 'Content-Type': 'application/json' };

  //   fetch(url, {
  //     method: 'POST',
  //     headers: headers,
  //     body: body,
  //   })
  //     .then((response) => {
  //       if (!response.body) {
  //         throw new Error('ReadableStream not supported');
  //       }
  //       const reader = response.body.getReader();
  //       const decoder = new TextDecoder();
  //       this.messages.push(''); // Add a placeholder for this message
  //       const messageIndex = this.messages.length - 1; // Index of the message being updated

  //       // Read chunks and append them to the placeholder message
  //       const processStream = ({ done, value }: ReadableStreamReadResult<Uint8Array>): Promise<void> => {
  //         if (done) return Promise.resolve(); // Stream has ended

  //         // Decode the chunk and append it to the last message
  //         const chunk = decoder.decode(value, { stream: true });
  //         this.messages[messageIndex] += chunk;

  //         // Continue reading the stream
  //         return reader.read().then(processStream);
  //       };

  //       // Start reading the stream
  //       return reader.read().then(processStream);
  //     })
  //     .catch((error) => {
  //       console.error('Error streaming response:', error);
  //     })
  //     .finally(() => {
  //       this.inputMessage = ''; // Clear the input field
  //     });
  // }


  // sendMessage(): void {
  //   const url = 'http://localhost:3000/chat';
  //   const body = JSON.stringify({ message: this.inputMessage });
  //   const headers = { 'Content-Type': 'application/json' };

  //   fetch(url, {
  //     method: 'POST',
  //     headers: headers,
  //     body: body,
  //   })
  //     .then((response) => {
  //       if (!response.body) {
  //         throw new Error('ReadableStream not supported');
  //       }
  //       const reader = response.body.getReader();
  //       const decoder = new TextDecoder();
  //       this.messages.push(''); // Add a placeholder for this message
  //       const messageIndex = this.messages.length - 1; // Index of the message being updated

  //       // Read chunks and append them to the placeholder message
  //       const processStream = ({ done, value }: ReadableStreamReadResult<Uint8Array>) => {
  //         if (done) return; // Stream has ended

  //         // Decode the chunk and append it to the last message
  //         const chunk = decoder.decode(value, { stream: true });
  //         this.messages[messageIndex] += chunk;

  //         // Continue reading the stream
  //         return reader.read().then(processStream);
  //       };

  //       // Start reading the stream
  //       return reader.read().then(processStream);
  //     })
  //     .catch((error) => {
  //       console.error('Error streaming response:', error);
  //     })
  //     .finally(() => {
  //       this.inputMessage = ''; // Clear the input field
  //     });
  // }


  // sendMessage(): void {
  //   const url = 'http://localhost:3000/chat';
  //   const body = JSON.stringify({ message: this.inputMessage });
  //   const headers = { 'Content-Type': 'application/json' };

  //   fetch(url, {
  //     method: 'POST',
  //     headers: headers,
  //     body: body,
  //   })
  //     .then((response) => {
  //       if (!response.body) {
  //         throw new Error('ReadableStream not supported');
  //       }
  //       const reader = response.body.getReader();
  //       const decoder = new TextDecoder();
  //       this.messages.push(''); // Add a placeholder for this message
  //       let messageIndex = this.messages.length - 1; // Index of the message being updated

  //       // Read chunks and append them to the placeholder message
  //       reader.read().then(function process({ done, value }): any {
  //         if (done) return;

  //         const chunk = decoder.decode(value, { stream: true });
  //         // Update the last message in real time
  //         this.messages[messageIndex] += chunk;
  //         return reader.read().then(process.bind(this));
  //       }.bind(this));
  //     })
  //     .catch((error) => {
  //       console.error('Error streaming response:', error);
  //     })
  //     .finally(() => {
  //       this.inputMessage = ''; // Clear input field
  //     });
  // }

  // sendMessage(): void {
  //   this.http.post('http://localhost:3000/chat', { message: this.inputMessage }, { responseType: 'text' })
  //     .subscribe((response) => {
  //       this.messages.push(response); // Adjust for stream parsing
  //       this.inputMessage = '';
  //     });
  // }


}
