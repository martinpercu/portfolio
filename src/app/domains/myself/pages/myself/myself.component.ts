import { Component, Output, EventEmitter } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IconsModule } from './../../../../../icon.module';
import { environment } from '../../../../../environments/environment';


@Component({
  selector: 'app-myself',
  standalone: true,
  imports: [IconsModule, RouterLink],
  templateUrl: './myself.component.html'
})
export class MyselfComponent {

  @Output() contactHandler = new EventEmitter();

  calendarUrl = environment.BASEURL + '/calendar';

  openContactForm() {
    this.contactHandler.emit(true);
  }

}
