import { Injectable, inject } from '@angular/core';

import { Tech } from '@models/tech.model';
import { Project } from '@models/project.model';
import { Project_IA } from '@models/project_ia.model';
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
  projects_ai: Project_IA[] = [];

  constructor() {

    this.techs = this.techsService.returnTechs();
    console.log(this.techs);

    this.projects_ai = [
      {
        title: 'Trainer Teacher',
        description: 'This is an upgrade from the other Angular ecommerce project using signal() for the checkout.',
        problem: 'Doctors often need quick access to specific information from medical papers in highly specialized areas. While indexed platforms allow them to search for keywords, these systems typically return large blocks of text that may not be relevant or contextually precise. The search results are often too general, forcing doctors to sift through irrelevant information, which slows down decision-making and can affect patient care. A more reliable, intelligent solution is needed—one that can understand the context of a query and deliver precise, actionable insights from medical documents.',
        // solution: 'To ensure accurate responses, the assistant was trained through a process of predefined questions and the model\'s generated answers. The training methodology is based on proprietary "know-how". The training iterations were carried out in collaboration with researchers and doctors who wrote the documentation, as well as with doctors who used the information. These doctors also guided the assistant on how they expected the answers to be presented.',
        year: 2025,
        image: 'trainer-teacher-a',
        techs: [this.techs[44], this.techs[45], this.techs[6], this.techs[39], this.techs[32]],
        techs2nd: [this.techs[5], this.techs[2], this.techs[3]],
        frontend: true,
        backend: true,
        githubOk: true,
        githubUrl: 'https://github.com/martinpercu/store-angular-17',
        webOk: true,
        webUrl: 'https://store-angular-17-six.vercel.app/',
        github_text: 'Front code here.',
        github: 'https://github.com/martinpercu/kohue',
        github2nd_text: 'Back code here.',
        github2nd: 'https://github.com/martinpercu/assistant-chat-backend',
        webdev_text: 'The developer 1st phase website. This link is usefull to play around. If you want to test it go!!!',
        webdev: 'https://vineyardsinandes.web.app',
        web_text: 'The production 2nd phase site. Please be carefull (is the prod)',
        web: 'https://kohuewines.com',
        // youtube_text: 'TEXT YOUTUBE',
        // youtube: 'https://youtube.com',
        // extra_link: 'the extra link',
        // extra_link_text: 'this text for EXTRA LINK'
      },
      {
        title: 'Chat System with Specialized Agents',
        description: 'This project is an interactive AI chat platform designed to explore knowledge through distinct voices. Users can engage with one of three specialized agents—each with a unique personality and area of expertise (Napoleon, U.S. presidents, or Lisa)—to receive focused, character-driven responses.',
        problem: 'Initially, the chat relied on OpenAI\'s hosted agents, but their response times were too slow for a smooth user experience. To improve performance and control, we switched to a lightweight, independent RAG setup for each agent. All agents are forced to respond in Spanish. While they can be prompted in other languages, their replies remain anchored to Spanish. The system is built using LangChain and Pinecone for retrieval.',
        // solution: 'To ensure accurate responses, the assistant was trained through a process of predefined questions and the model\'s generated answers. The training methodology is based on proprietary "know-how". The training iterations were carried out in collaboration with researchers and doctors who wrote the documentation, as well as with doctors who used the information. These doctors also guided the assistant on how they expected the answers to be presented.',
        year: 2025,
        image: 'super-agent-a',
        techs: [this.techs[43], this.techs[41], this.techs[44], this.techs[45], this.techs[16]],
        techs2nd: [this.techs[2], this.techs[3], this.techs[4]],
        frontend: true,
        backend: true,
        githubOk: true,
        githubUrl: 'https://github.com/martinpercu/assistant-chat-frontend',
        webOk: true,
        webUrl: 'https://super-assistants.web.app',
        github_text: 'Front code here.',
        github: 'https://github.com/martinpercu/assistant-chat-frontend',
        github2nd_text: 'Back is the "master" branch.',
        github2nd: 'https://github.com/martinpercu/assistant-chat-backend',
        // webdev_text: 'The developer 1st phase website. This link is usefull to play around. If you want to test it go!!!',
        // webdev: 'https://super-assistants.web.app',
        web_text: 'The production 2nd phase site. Please be carefull (is the prod)',
        web: 'https://super-assistants.web.app',
        // youtube_text: 'TEXT YOUTUBE',
        // youtube: 'https://youtube.com',
        // extra_link: 'the extra link',
        // extra_link_text: 'this text for EXTRA LINK'
      }
    ]


    this.projects = [
      {
        title: 'Angular 17 E-Commerce',
        description: 'This is an upgrade from the other Angular ecommerce project using signal() for the checkout.',
        year: 2024,
        image: 'store-17',
        techs: [this.techs[0], this.techs[6], this.techs[39]],
        techs2nd: [this.techs[5], this.techs[2], this.techs[3]],
        frontend: true,
        backend: false,
        githubOk: true,
        githubUrl: 'https://github.com/martinpercu/store-angular-17',
        webOk: true,
        webUrl: 'https://store-angular-17-six.vercel.app/'
      },
      {
        title: 'React basic E-Commerce',
        description: 'Just a basic e-commerce to practice how react works.',
        year: 2024,
        image: 'react-store',
        techs: [this.techs[42], this.techs[6], this.techs[25], this.techs[26]],
        techs2nd: [this.techs[2], this.techs[3], this.techs[4]],
        frontend: true,
        backend: false,
        githubOk: true,
        githubUrl: 'https://github.com/martinpercu/store-in-react',
        webOk: true,
        webUrl: 'https://a-a-store-in-react.netlify.app'
      },
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
        techs: [this.techs[1], this.techs[6], this.techs[25], this.techs[26]],
        techs2nd: [this.techs[2], this.techs[3], this.techs[4]],
        frontend: true,
        backend: false,
        githubOk: true,
        githubUrl: 'https://github.com/martinpercu/store-angular-17',
        webOk: true,
        webUrl: 'https://cashexpenses.netlify.app/',
      },
      // {
      //   title: 'Trello Family',
      //   description: 'A Trello Clon for use  with my family.',
      //   year: 2021,
      //   image: 'trello',
      //   techs: [this.techs[0], this.techs[34], this.techs[6], this.techs[10], this.techs[32], this.techs[31]  ],
      //   techs2nd: [this.techs[2], this.techs[3], this.techs[5]],
      //   frontend: true,
      //   backend: false,
      //   githubOk: true,
      //   githubUrl: 'https://github.com/martinpercu/trello-family',
      //   webOk: false,
      //   webUrl: '',
      // },
      // {
      //   title: 'Start using VUE',
      //   description: 'The simple introduction to vue framework.',
      //   year: 2022,
      //   image: '',
      //   techs: [this.techs[0], this.techs[1]],
      //   frontend: false,
      //   backend: false,
      //   githubOk: true,
      //   githubUrl: 'https://github.com/martinpercu/vue-for-start',
      //   webOk: false,
      //   webUrl: '',
      // },
      {
        title: 'E-commerce AngularAuth',
        description: 'An e-commerce with user creation and roles admin + client. Using Auth.',
        year: 2021,
        image: 'angular-store',
        techs: [this.techs[0], this.techs[5], this.techs[2], this.techs[3]],
        frontend: true,
        backend: false,
        githubOk: true,
        githubUrl: 'https://github.com/martinpercu/an-angular-store',
        webOk: true,
        webUrl: 'https://an-angular-store.web.app/home',
      },
      // {
      //   title: 'Node Store',
      //   description: 'The back-end for an ecommerce using NodeJs.',
      //   year: 2024,
      //   image: '/assets/img/projects/an-angular-store.jpg',
      //   techs: [this.techs[0], this.techs[1]],
      //   frontend: false,
      //   backend: true,
      //   githubOk: true,
      //   githubUrl: 'https://github.com/martinpercu/a-node-store',
      //   webOk: false,
      //   webUrl: '',
      // },
      // {
      //   title: 'Node for start',
      //   description: 'A simple introduction to understand Node.',
      //   year: 2024,
      //   image: 'an-angular-store',
      //   techs: [this.techs[0], this.techs[1]],
      //   frontend: false,
      //   backend: true,
      //   githubOk: true,
      //   githubUrl: 'https://github.com/martinpercu/node-for-start',
      //   webOk: false,
      //   webUrl: '',
      // },
    ]
  }

  returnProjects() {
    return this.projects
  }

  returnProjectsIa() {
    return this.projects_ai
  }
}
