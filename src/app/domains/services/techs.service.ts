import { Injectable } from '@angular/core';

import { Techarea } from '@models/techarea.model';
import { Tech } from '@models/tech.model';

@Injectable({
  providedIn: 'root'
})
export class TechsService {

  techs: Tech[] = [];
  techAreas: Techarea[] = [];

  constructor() {

    this.techAreas = [
      {
        name: 'frontEnd'
      },
      {
        name: 'backEnd'
      },
      {
        name: 'tools and softwares'
      },
      {
        name: 'learning'
      }
    ];

    this.techs = [
      {
        name: 'Angular',
        actual: true,
        icon: 'angular',
        techArea: this.techAreas[0]
      },
      {
        name: 'Vue',
        actual: true,
        icon: 'vue',
        techArea: this.techAreas[0]
      },
      {
        name: 'HTML5',
        actual: true,
        icon: 'html5',
        techArea: this.techAreas[0]
      },
      {
        name: 'CSS',
        actual: true,
        icon: 'css',
        techArea: this.techAreas[0]
      },
      {
        name: 'JavaScript',
        actual: true,
        icon: 'javascript',
        techArea: this.techAreas[0]
      },
      {
        name: 'TypeScript',
        actual: true,
        icon: 'typescript',
        techArea: this.techAreas[0]
      },
      {
        name: 'Tailwind CSS',
        actual: true,
        icon: 'tailwindcss',
        techArea: this.techAreas[0]
      },
      {
        name: 'Bootstrap',
        actual: true,
        icon: 'bootstrap',
        techArea: this.techAreas[0]
      },
      {
        name: 'Sass',
        actual: true,
        icon: 'sass',
        techArea: this.techAreas[0]
      },
      {
        name: 'Node JS',
        actual: true,
        icon: 'nodejs',
        techArea: this.techAreas[1]
      },
      {
        name: 'Node JS',
        actual: true,
        icon: 'nodejs2',
        techArea: this.techAreas[1]
      },
      {
        name: 'Firestore',
        actual: true,
        icon: 'firebase',
        techArea: this.techAreas[1]
      },
      {
        name: 'Mongo DB',
        actual: true,
        icon: 'mongodb',
        techArea: this.techAreas[1]
      },
      {
        name: 'PostgreSQL',
        actual: true,
        icon: 'postgresql',
        techArea: this.techAreas[1]
      },
      {
        name: 'Express.js',
        actual: true,
        icon: 'expressjs',
        techArea: this.techAreas[1]
      },
      {
        name: 'Django',
        actual: false,
        icon: 'django',
        techArea: this.techAreas[1]
      },
      {
        name: 'FastAPI',
        actual: false,
        icon: 'fastapi',
        techArea: this.techAreas[1]
      },
      {
        name: 'Git',
        actual: true,
        icon: 'git',
        techArea: this.techAreas[2]
      },
      {
        name: 'Github',
        actual: true,
        icon: 'github',
        techArea: this.techAreas[2]
      },
      {
        name: 'Postman',
        actual: false,
        icon: 'github',
        techArea: this.techAreas[2]
      },
      {
        name: 'bruno',
        actual: true,
        icon: 'bruno',
        techArea: this.techAreas[2]
      },
      {
        name: 'Insomnia',
        actual: true,
        icon: 'insomnia',
        techArea: this.techAreas[2]
      },
      {
        name: 'NPM',
        actual: true,
        icon: 'npm',
        techArea: this.techAreas[2]
      },
      {
        name: 'Visual Studio Code',
        actual: true,
        icon: 'vscode',
        techArea: this.techAreas[2]
      },
      {
        name: 'Firebase',
        actual: true,
        icon: 'firebase',
        techArea: this.techAreas[2]
      },
      {
        name: 'Netlify',
        actual: true,
        icon: 'netlify',
        techArea: this.techAreas[2]
      },
      {
        name: 'Vite.js',
        actual: true,
        icon: 'vitejs',
        techArea: this.techAreas[2]
      },
      {
        name: 'Figma',
        actual: true,
        icon: 'figma',
        techArea: this.techAreas[2]
      },
      {
        name: 'Gimp',
        actual: true,
        icon: 'gimp',
        techArea: this.techAreas[2]
      },
      {
        name: 'Auth0',
        actual: true,
        icon: 'auth0',
        techArea: this.techAreas[2]
      },
      {
        name: 'Chart.js',
        actual: true,
        icon: 'chartjs',
        techArea: this.techAreas[2]
      },
      {
        name: 'JWT',
        actual: true,
        icon: 'jwt',
        techArea: this.techAreas[2]
      },
      {
        name: 'RxJS',
        actual: true,
        icon: 'rxjs',
        techArea: this.techAreas[2]
      },
      {
        name: 'Docker',
        actual: true,
        icon: 'docker',
        techArea: this.techAreas[2]
      },
      {
        name: 'Material CDK',
        actual: true,
        icon: 'material',
        techArea: this.techAreas[2]
      },
      {
        name: 'Reactive Forms',
        actual: true,
        icon: 'forms',
        techArea: this.techAreas[2]
      },
      {
        name: 'Lazy Loading',
        actual: true,
        icon: 'lazy-loading',
        techArea: this.techAreas[2]
      },
      {
        name: 'Stripe',
        actual: true,
        icon: 'stripe',
        techArea: this.techAreas[2]
      },
      {
        name: 'EmailJS',
        actual: true,
        icon: 'emailjs',
        techArea: this.techAreas[2]
      },
      {
        name: 'Vercel',
        actual: true,
        icon: 'vercel',
        techArea: this.techAreas[2]
      },
    ]

   }

   returnTechs() {
    return this.techs
   }
}
