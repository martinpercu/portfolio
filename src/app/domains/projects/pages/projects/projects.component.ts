import { Component, signal } from '@angular/core';

import { Project } from '@models/project.model';

import { images } from "@works/images/images";
import { projectslist } from "@projects/projectslist";


import { ProjectComponent } from '@projects/component/project/project.component'

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectComponent],
  templateUrl: './projects.component.html'
})
export class ProjectsComponent {

  imageUrl = images.IMAGE_URL;

  initlist = images;

  projects = signal<Project[]>([]);

  initialWorks: Project[] = projectslist;

  constructor() {
  }

  ngOnInit() {
    this.projects.set(this.initialWorks);
  }


  frontEnd() {
    this.resetAll();
    this.projects.update((projects) => projects.filter(project => project.frontend));
  }
  backEnd() {
    this.resetAll();
    this.projects.update((projects) => projects.filter(project => project.backend));
  }

  resetAll() {
    this.projects.set(this.initialWorks)
  }

  time() {
    this.projects.set(this.projects().sort((w2, w1) => {
      return w1.year - w2.year;
    }));
    console.log(this.projects());
  }

  size() {
    this.projects.set(this.projects().sort((w2, w1) => {
      return w1.size - w2.size;
    }));
    console.log(this.projects());
  }

  test() {
    console.log(this.projects());
  }

  python() {
    this.resetAll();
    this.projects.update((projects) => projects.filter(project => project.techs.includes('python')));
  }

}
