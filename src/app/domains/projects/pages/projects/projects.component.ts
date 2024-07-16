import { Component, inject, signal } from '@angular/core';

import { Project } from '@models/project.model';

import { images } from "@works/images/images";
import { projectslist } from "@projects/projectslist";

import { ProjectComponent } from '@projects/component/project/project.component';

import { ProjectsService } from '@services/projects.service'


@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectComponent],
  templateUrl: './projects.component.html'
})
export class ProjectsComponent {


  private projectsService = inject(ProjectsService);

  imageUrl = images.IMAGE_URL;

  initlist = images;

  projects : Project[] = [];


  constructor() {
    this.projects = this.projectsService.returnProjects();
    console.log(this.projects);

  };


  resetAll() {
    this.projects = this.projectsService.returnProjects();
  };

  backEndOnly() {
    this.projects = this.projectsService.returnProjects();
    this.projects = this.projects.filter(i => (i.backend))
  };


  frontEndOnly() {
    this.projects = this.projectsService.returnProjects();
    this.projects = this.projects.filter(i => (i.frontend))
  }




}
