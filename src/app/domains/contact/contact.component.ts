import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  @Output() contactHandler = new EventEmitter();


  closes() {
    this.contactHandler.emit(false);
  }

}
