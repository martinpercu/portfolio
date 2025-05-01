import { Component, inject } from '@angular/core';

import { Work } from '@models/work.model';
import { WorkComponent } from "@works/components/work/work.component";

import { images } from "@works/images/images";

import { WorksService } from '@services/works.service';

import { IconsModule } from '@icons/icon.module';

import { Project_IA } from '@models/project_ia.model';

import { projectslist } from "@projects/projectslist";

import { ProjectIaComponent } from '@projects-ia/component/project-ia/project-ia.component';

import { ProjectsService } from '@services/projects.service';

@Component({
  selector: 'app-projects-ia',
  standalone: true,
  imports: [ProjectIaComponent, IconsModule],
  templateUrl: './projects-ia.component.html',
  styleUrl: './projects-ia.component.css'
})
export class ProjectsIaComponent {

  private projectsService = inject(ProjectsService);

  imageUrl = images.IMAGE_URL;

  initlist = images;

  projects_ia : Project_IA[] = [];


  constructor() {
    this.projects_ia = this.projectsService.returnProjectsIa();
    console.log(this.projects_ia);

  };


  resetAll() {
    this.projects_ia = this.projectsService.returnProjectsIa();
  };

  backEndOnly() {
    this.projects_ia = this.projectsService.returnProjectsIa();
    this.projects_ia = this.projects_ia.filter(i => (i.backend))
  };


  frontEndOnly() {
    this.projects_ia = this.projectsService.returnProjectsIa();
    this.projects_ia = this.projects_ia.filter(i => (i.frontend))
  }




}
