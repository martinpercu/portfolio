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

  initialProjects: Project[] = projectslist;

  constructor() {
    this.projects.set(this.initialProjects);
  }

  ngOnInit() {
    // this.projects.set(this.initialProjects);
  }


  frontEnd() {
    this.resetAll();
    this.projects.update((projects) => projects.filter(project => project.frontend));
  }
  backEnd() {
    this.resetAll();
    this.projects.update((projects) => projects.filter(project => project.backend));
  }

  stepByStep() {
    this.resetAll();
    this.projects.update((projects) => projects.filter(project => project.githubOk));
  }

  resetAll() {
    this.projects.set(this.initialProjects)
  }

  time() {
    this.projects.set(this.projects().sort((w2, w1) => {
      return w1.year - w2.year;
    }));
    console.log(this.projects());
  }


  test() {
    console.log(this.projects());
  }


}
