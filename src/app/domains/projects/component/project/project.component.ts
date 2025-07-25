import { Component, Input } from '@angular/core';

import { Project } from '@models/project.model';


import { IconsModule } from '@icons/icon.module';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [IconsModule],
  templateUrl: './project.component.html'
})
export class ProjectComponent {
  @Input({required: true}) project!: Project;

}
