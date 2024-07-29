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
        year: 2024,
        image: '/assets/img/works/kohue-phase-1.jpg',
        techs: [this.techs[0], this.techs[10], this.techs[6], this.techs[35], this.techs[24], this.techs[37]],
        techs2nd: [this.techs[2], this.techs[3], this.techs[38], this.techs[5], this.techs[14]],
        frontend: true,
        backend: true,
        github_text: 'Front code here.',
        github: 'https://github.com/martinpercu/kohue',
        github2nd_text: 'Back code here.',
        github2nd: 'https://github.com/martinpercu/kohue',
        webdev_text: 'The developer 1st phase website. This link is usefull to play around. If you want to test it go!!!',
        webdev: 'https://vineyardsinandes.web.app',
        web_text: 'The production 2nd phase site. Please be carefull (is the prod)',
        web: 'https://tupungatowineco.com',
        youtube_text: 'TEXT YOUTUBE',
        youtube: 'https://youtube.com',
        extra_link: 'the extra link',
        extra_link_text: 'this text for EXTRA LINK'
      },
      {
        id: 'agro',
        title: 'AgroFull',
        description: 'Agrofull is a system that allows its users to visualize expenses, costs and benefits before defining their agricultural actions. The user builds his/her sowing plan by adding and selecting the fertilizers, additives and phytosanitary seeds that exist with their respective values.',
        problem: 'My client had problems with his development team. They were not able to understand each other regarding the development of the project. Another weakness was that the developers did not have anyone in-house for design and UX/UI areas.',
        solution: 'I created a doc with all the requirements for the project and so that it could be understood I made a presentation in Figma showing an almost final version of the app. For the design I coordinated the work with an external designer. It gives us a simple logo and a color palette. I transformed the app into one focused on mobile (mobile-first approach) mostly using just CSS. I built the website (agrofull.net) with direct link to the app. Then I give the app final details to minimize friction between the site and the app. (the business model forces the user to first get to the website and then go to the app).',
        year: 2024,
        image: 'assets/img/works/agrofull-02.jpg',
        techs: [this.techs[1], this.techs[27], this.techs[3]],
        techs2nd: [this.techs[12], this.techs[2], this.techs[4], this.techs[7]],
        frontend: true,
        backend: false,
        github_text: 'this is the text for github',
        github: 'https://github.com/Software-On-The-Road/agrofull-frontend/branches',
        webdev_text: 'Link to the Agrofull website',
        webdev: 'https://agrofull.net',
        web_text: 'Link to the web app. You can play with it',
        web: 'https://agrofull.onrender.com/',
        youtube_text: 'This is myself ',
        youtube: 'https://youtube.com',
        youtube2nd_text: 'This is myself ',
        youtube2nd: 'https://youtube.com',
        extra_link: 'the extra link',
        extra_link_text: 'this text for EXTRA LINK'
      },
      {
        id: 'iermito',
        title: 'QR system Victor Iermito Luthier',
        description: 'This QR system allows Victor Iermito (the client) to run a CRUD with the information about each of the guitars on display. Each QR is a direct link with the corresponding guitar parameter. The system is designed to operate with a low internet connection because the guitars are usually displayed in very isolated rooms.',
        problem: 'The client already had a QR system which were all different static html pages for each of the guitars. This forced him to have to call the developer every time he built a new guitar, with the cost that this entailed, to create a new HTML file and upload it to the site.',
        solution: 'I built a simple CRUD so that the client can upload each guitar to the DB and use their ID as the parameter passed with the link. This way, he can generate the QRs himself without third party intervention. As we have low connectivity in the showrooms, to improve the UX, I added a spinner with the same logo that the buyer is seeing until the guitar data is loaded.',
        year: 2022,
        image: '/assets/img/works/iermito.jpg',
        techs: [this.techs[0], this.techs[35], this.techs[24]],
        techs2nd: [this.techs[2], this.techs[3], this.techs[5]],
        frontend: true,
        backend: true,
        github: 'https://github.com/martinpercu/guitar-iermito',
        youtube: 'https://youtube.com'
      },
    ]
  }

  returnWorks() {
    return this.works
  }
}

