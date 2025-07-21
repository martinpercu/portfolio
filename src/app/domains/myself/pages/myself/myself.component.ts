import { Component, Output, EventEmitter } from '@angular/core';

import { IconsModule } from './../../../../../icon.module';


@Component({
  selector: 'app-myself',
  standalone: true,
  imports: [IconsModule],
  templateUrl: './myself.component.html'
})
export class MyselfComponent {

  @Output() contactHandler = new EventEmitter();


  openContactForm() {
    this.contactHandler.emit(true);
  }

}
