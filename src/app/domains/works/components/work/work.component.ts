import { Component, Input } from '@angular/core';

import { Work } from '@models/work.model'

@Component({
  selector: 'app-work',
  standalone: true,
  imports: [],
  templateUrl: './work.component.html',
  styleUrl: './work.component.css'
})
export class WorkComponent {
  @Input({required: true}) work!: Work;


}
