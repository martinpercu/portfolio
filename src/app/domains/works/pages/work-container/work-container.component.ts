import { Component, signal } from '@angular/core';

import { Work } from '@models/work.model';
import { WorkComponent } from "../../components/work/work.component";

@Component({
    selector: 'app-work-container',
    standalone: true,
    templateUrl: './work-container.component.html',
    styleUrl: './work-container.component.css',
    imports: [WorkComponent]
})
export class WorkContainerComponent {

  works = signal<Work[]>([]);


  constructor() {
    const initialWorks: Work[] = [
      {
        title: 'Product N°1',
        description: 'Nice work using all my love',
        year: 2021,
        image: 'https://picsum.photos/500/500?r=4',
        tech: ['html', 'java', 'css'],
        frontend: true,
        backend: false,
        githubUrl: 'https://github.com/martinpercu'
      },
      {
        title: 'Calendar APP',
        description: 'Nice work using all my love',
        year: 2021,
        image: 'https://picsum.photos/500/500?r=34',
        tech: ['html', 'java', 'css'],
        frontend: true,
        backend: false,
        githubUrl: 'https://github.com/martinpercu'
      },
      {
        title: 'Product N°1',
        description: 'Nice work using all my love',
        year: 2021,
        image: 'https://picsum.photos/500/500?r=14',
        tech: ['html', 'java', 'css'],
        frontend: true,
        backend: false,
        githubUrl: 'https://github.com/martinpercu'
      },
    ];
    this.works.set(initialWorks);

  }

}
