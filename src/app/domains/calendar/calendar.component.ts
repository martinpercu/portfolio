import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
// import { IconsModule } from './../../icon.module';
import { IconsModule } from './../../../icon.module';


@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [RouterLink, IconsModule],
  templateUrl: './calendar.component.html'
})
export class CalendarComponent {}
