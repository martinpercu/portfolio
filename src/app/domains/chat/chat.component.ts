import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; // <-- Import HttpClientModule

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent {
  userMessage: string = '';
  botReply: string = '';
  messages: { sender: string, text: string }[] = [];

  constructor(private http: HttpClient) {}

  sendMessage() {
    if (this.userMessage.trim() === '') return;

    this.messages.push({ sender: 'User', text: this.userMessage });

    // Send message to the backend
    this.http.post<{ reply: string }>('https://fastapi-chat-5ewd.onrender.com/chat', { message: this.userMessage })
      .subscribe({
        next: (response) => {
          console.log(response.reply);

          this.botReply = response.reply;
          this.messages.push({ sender: 'Bot', text: this.botReply });
          this.userMessage = '';  // Clear input
        },
        error: (error) => {
          console.error('Error:', error);
          this.botReply = 'Sorry, something went wrong!';
          this.messages.push({ sender: 'Bot', text: this.botReply });
        }
      });
  }
}
