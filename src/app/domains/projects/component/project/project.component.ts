import { Component, Input } from '@angular/core';

import { Project } from '@models/project.model';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [],
  templateUrl: './project.component.html'
})
export class ProjectComponent {
  @Input({required: true}) project!: Project;

}
