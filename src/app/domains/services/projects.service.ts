import { Injectable, inject } from '@angular/core';

import { Tech } from '@models/tech.model';
import { Project } from '@models/project.model';
import { Techarea } from '@models/techarea.model';

import { TechsService } from '@services/techs.service'

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  private techsService = inject(TechsService);


  techs: Tech[] = [];
  techAreas: Techarea[] = [];
  projects: Project[] = [];

  constructor() {

    this.techs = this.techsService.returnTechs();
    console.log(this.techs);

    this.projects = [
      {
        title: 'Todo list Angular Signals',
        description: 'Just the well know "to do list" but using new signals() for the Angular framework.',
        year: 2023,
        image: 'todoapp',
        techs: [this.techs[0], this.techs[35], this.techs[24]],
        techs2nd: [this.techs[2], this.techs[3], this.techs[5]],
        frontend: true,
        backend: false,
        githubOk: true,
        githubUrl: 'https://github.com/martinpercu/todo-angular-signals',
        webOk: true,
        webUrl: 'https://todo-app-angular-17-signal.web.app/',
      },
      {
        title: 'Money controller in VUE',
        description: 'An expense controller with a svg graph.',
        year: 2023,
        image: 'cashexpenses',
        techs: [this.techs[1], this.techs[6], this.techs[26]],
        techs2nd: [this.techs[2], this.techs[3], this.techs[4]],
        frontend: true,
        backend: false,
        githubOk: true,
        githubUrl: 'https://github.com/martinpercu/store-angular-17',
        webOk: true,
        webUrl: 'https://cashexpenses.netlify.app/',
      },
      {
        title: 'Trello Family',
        description: 'A Trello Clon for use  with my family.',
        year: 2021,
        image: 'trello',
        techs: [this.techs[0], this.techs[34], this.techs[6], this.techs[10], this.techs[32], this.techs[31]  ],
        techs2nd: [this.techs[2], this.techs[3], this.techs[5]],
        frontend: true,
        backend: false,
        githubOk: true,
        githubUrl: 'https://github.com/martinpercu/trello-family',
        webOk: false,
        webUrl: '',
      },
      {
        title: 'Angular 17 E-Commerce',
        description: 'This is an upgrade from the other Angular ecommerce project using signal() for the checkout.',
        year: 2024,
        image: 'store-17',
        techs: [this.techs[0], this.techs[6]],
        frontend: true,
        backend: false,
        githubOk: true,
        githubUrl: 'https://github.com/martinpercu/store-angular-17',
        webOk: true,
        webUrl: 'https://store-angular-17-six.vercel.app/'
      },
      {
        title: 'Start using VUE',
        description: 'The simple introduction to vue framework.',
        year: 2022,
        image: '',
        techs: [this.techs[0], this.techs[1]],
        frontend: false,
        backend: false,
        githubOk: true,
        githubUrl: 'https://github.com/martinpercu/vue-for-start',
        webOk: false,
        webUrl: '',
      },
      {
        title: 'E-commerce AngularAuth',
        description: 'An e-commerce with user creation and roles admin + client. Using Auth.',
        year: 2021,
        image: 'angular-store',
        techs: [this.techs[0], this.techs[1]],
        frontend: true,
        backend: false,
        githubOk: true,
        githubUrl: 'https://github.com/martinpercu/an-angular-store',
        webOk: true,
        webUrl: 'https://an-angular-store.web.app/home',
      },
      {
        title: 'Node Store',
        description: 'The back-end for an ecommerce using NodeJs.',
        year: 2024,
        image: '/assets/img/projects/an-angular-store.jpg',
        techs: [this.techs[0], this.techs[1]],
        frontend: false,
        backend: true,
        githubOk: true,
        githubUrl: 'https://github.com/martinpercu/a-node-store',
        webOk: false,
        webUrl: '',
      },
      {
        title: 'Node for start',
        description: 'A simple introduction to understand Node.',
        year: 2024,
        image: 'an-angular-store',
        techs: [this.techs[0], this.techs[1]],
        frontend: false,
        backend: true,
        githubOk: true,
        githubUrl: 'https://github.com/martinpercu/node-for-start',
        webOk: false,
        webUrl: '',
      },
    ]
  }

  returnProjects() {
    return this.projects
  }
}
