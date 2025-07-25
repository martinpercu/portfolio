import { Component, OnInit, inject } from '@angular/core';
import { HttpClientModule, HttpDownloadProgressEvent, HttpEvent, HttpEventType } from '@angular/common/http';
import { ChatService } from '@services/chat.service';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { ChatMessage } from '@models/chatMessage.model'


@Component({
  selector: 'app-chat3',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './chat3.component.html',
  styleUrl: './chat3.component.css'
})

export class Chat3Component  {
  userMessage: string = '';
  botResponse: string = '';
  isLoading: boolean = false;


  messages: string[] = [];


  currentUserMessage!: string;
  chatMessages: ChatMessage[] = [];
  loadingResponse: boolean = false;

  constructor(
    private chatService: ChatService,
    private http: HttpClient
  ) {}

  // ngOnInit(): void {
  //   const eventSource = this.chatService.getServerSentEvent('http://localhost:3000/chat');
  //   eventSource.onmessage = (event) => {
  //     this.messages.push(event.data);
  //   };
  // }

  sendMessage2() {
    if (this.userMessage.trim()) {
      this.isLoading = true;
      this.botResponse = '';  // Clear the previous response

      this.chatService.sendMessage(this.userMessage).subscribe(
        (response) => {
          this.botResponse += response + '\n';
        },
        (error) => {
          console.error('Error:', error);
          this.isLoading = false;
        },
        () => {
          this.isLoading = false;
        }
      );
    }
  }


  sendMessage() {
    if (this.userMessage.trim() === "") return;

    this.loadingResponse = true;
    this.chatMessages.push({ message: this.userMessage });
    // this.userMessage= "";
    const responseMessage = {
      role: "assistant",
      message: "", // Add this property
      content: "…",
    };
    this.chatMessages.push(responseMessage);

    alert(this.userMessage)

    this.http
      .post("http://localhost:3000/chatwip", { message: this.userMessage }, {
        observe: "events",
        responseType: "text",
        reportProgress: true,
      })
      .subscribe({
        next: (event: HttpEvent<string>) => {
          if (event.type === HttpEventType.DownloadProgress) {
            responseMessage.content = (
              event as HttpDownloadProgressEvent
            ).partialText + "…";
          } else if (event.type === HttpEventType.Response) {
            responseMessage.content = event.body ?? '';
            this.loadingResponse = false;
          }
        },
        error: () => {
          this.loadingResponse = false;
        },
      });
    this.userMessage= "";
  }

}
