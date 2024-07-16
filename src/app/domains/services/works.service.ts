import { Injectable, inject } from '@angular/core';

import { Tech } from '@models/tech.model';
import { Work } from '@models/work.model';
import { Techarea } from '@models/techarea.model';

import { TechsService } from '@services/techs.service'

@Injectable({
  providedIn: 'root'
})
export class WorksService {

  private techsService = inject(TechsService);


  techs: Tech[] = [];
  techAreas: Techarea[] = [];
  works: Work[] = [];

  constructor() {
    this.techs = this.techsService.returnTechs();
    console.log(this.techs);

    this.works = [
      {
        id: 'kohue',
        title: 'Tupungato Wines (Kohue)',
        description: 'Kohue is an invitation and follow-up system for potential clients of the brand. A single product is sold at a specific time of the year. For that specific moment, previously selected clients are invited through emails with a link to the purchase page. The email service is managed via emailJS. The payment platform is STRIPE which has a server built in NodeJS. The whole project uses Firebase for Authentication, Hosting and Database.',
        problem: 'At the beginning of the year, Tupungato Wines Co was created in Napa Valley. Unfortunately they did not have any visual content for the brand, only the label on the Kohue wine bottle. They urgently needed a platform to prospect and engage future customers before the launch of their Kohue wine. And by October 2024, be ready to make sales and shipping.',
        solution: 'I decide to split the work into 2 phases. In the first phase I create a "temporary" brand image from the bottle label to use as soon as possible on the platform. I created the email, authentication and database services for client prospecting. I have prepared admin users to manage this database. In the second phase I deploy the server with NodeJS to connect to the Stripe API and be ready to receive payments in October. When I receive the definitive brand image I apply it to the platform.',
        year: 2023,
        image: '/assets/img/works/maximo-1.jpg',
        techs: [this.techs[0], this.techs[10], this.techs[6], this.techs[35], this.techs[24], this.techs[37]],
        techs2nd: [this.techs[2], this.techs[3], this.techs[5], this.techs[14]],
        frontend: true,
        backend: true,
        githubUrl: 'https://github.com/martinpercu',
        youtubeLink: 'https://youtube.com'
      },
      {
        id: 'agro',
        title: 'AgroFull',
        description: 'Agrofull allows users to preview expenses and costs before defining their agricultural actions',
        problem: 'My client had problems with his development team. They were not able to understand each other regarding the development of the project. Another weakness was that the developers did not have anyone in-house for design and UX/UI areas.',
        // solution: 'SOLUTION  d AGROFULL  \n \n SOLUTION work qsfqkljh qsdljksdfqklsd dsqs qsdhqs qdklsjjh qds  all my love work qsfqkljh qsdljksdfqklsd dsqs qsdhqs qdklsjjh qds  all my lovejkldshfjk',
        // solution: 'First was understanding in depth what the client wanted to convey. Then I contacted the work team to analyze their capabilities and shortcomings. With the information obtained: I created a doc with all the requirements for the project and so that it could be understood I made a presentation in figma showing an almost final version of the app. For the design I coordinated the work with an external designer. It gives us a simple logo and a color palette. I transformed the app into one focused on mobile (mobile-first approach) mostly using just CSS. I built the website (agrofull.net) with direct link to the app. Then I give the app final details to minimize friction between the site and the app. (the business model forces the user to first get to the website and then go to the app).',
        solution: 'I created a doc with all the requirements for the project and so that it could be understood I made a presentation in Figma showing an almost final version of the app. For the design I coordinated the work with an external designer. It gives us a simple logo and a color palette. I transformed the app into one focused on mobile (mobile-first approach) mostly using just CSS. I built the website (agrofull.net) with direct link to the app. Then I give the app final details to minimize friction between the site and the app. (the business model forces the user to first get to the website and then go to the app).',
        year: 2024,
        image: 'assets/img/works/agrofull-02.jpg',
        techs: [this.techs[1], this.techs[27], this.techs[3]],
        techs2nd: [this.techs[12], this.techs[2], this.techs[3], this.techs[5]],
        frontend: true,
        backend: false,
        githubUrl: 'https://github.com/Software-On-The-Road/agrofull-frontend/branches',
        youtubeLink: 'https://youtube.com'
      },
      {
        id: 'iermito',
        title: 'QR system Victor Iermito Luthier',
        description: 'This QR system allows Victor Iermito (the client) to run a CRUD with the information about each of the guitars on display. Each QR is a direct link with the corresponding guitar parameter. The system is designed to operate with a low internet connection because the guitars are usually displayed in very isolated rooms.',
        problem: 'PROBLEM VICTOR IERMITO PROBLEMqskldfhqklsdh work qsfqkljh qsdljksdfqklsd dsqs qsdhqs qdklsjjh qds  all my love work qsfqkljh qsdljksdfqklsd dsqs qsdhqs qdklsjjh qds  all my love work qsfqkljh qsdljksdfqklsd dsqs qsdhqs qdklsjjh qds  all my love f',
        solution: 'SOLUTION  \n VICTOR <br /> IERMITO  work qsfqkljh qsdljksdfqklsd dsqs qsdhqs qdklsjjh qds  all my love work qsfqkljh qsdljksdfqklsd dsqs qsdhqs qdklsjjh qds  all my lovejkldshfjk',
        year: 2022,
        image: '/assets/img/works/iermito.jpg',
        techs: [this.techs[0], this.techs[35], this.techs[24]],
        techs2nd: [this.techs[2], this.techs[3], this.techs[5]],
        frontend: true,
        backend: true,
        githubUrl: 'https://github.com/martinpercu',
        youtubeLink: 'https://youtube.com'
      },
    ]
  }

  returnWorks() {
    return this.works
  }
}


// Kohue is an invitation and follow-up system for potential clients of the brand. A single product is sold at a specific time of the year.
// For that specific moment, previously selected clients are invited through emails with a link to the purchase page.
// The email service is managed via emailJS. The payment platform is STRIPE which has a server built in NodeJS.
// The whole project uses Firebase for Authentication Hosting and Database.
