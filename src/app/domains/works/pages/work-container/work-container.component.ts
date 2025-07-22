import { Component, signal, Input, WritableSignal } from '@angular/core';

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

  @Input({required: true}) callStrong!: string;

  // initialWorks = signal<Work[]>([]);

  works = signal<Work[]>([]);

  initialWorks: Work[] = [
    {
      title: 'Agro Extends',
      description: 'Nice work using all my love',
      year: 2023,
      image: 'https://picsum.photos/500/500?r=4',
      techs: ['html', 'java', 'css'],
      frontend: false,
      backend: true,
      githubUrl: 'https://github.com/martinpercu',
      size: 55
    },
    {
      title: 'Calendar APP',
      description: 'Nice work using all my love',
      year: 2020,
      image: 'https://picsum.photos/500/500?r=34',
      techs: ['html', 'python', 'pandas', ],
      frontend: true,
      backend: false,
      githubUrl: 'https://github.com/martinpercu',
      size: 40
    },
    {
      title: 'Full power N°1',
      description: 'Upgrading the localy univers work using all my love',
      year: 2022,
      image: 'https://picsum.photos/500/500?r=14',
      techs: ['html', 'java', 'css'],
      frontend: true,
      backend: false,
      githubUrl: 'https://github.com/martinpercu',
      size: 36
    },
    {
      title: 'Rainbow company',
      description: 'Nice profun works in html work using all my love',
      year: 2019,
      image: 'https://picsum.photos/500/500?r=26',
      techs: ['html', 'java', 'css'],
      frontend: false,
      backend: true,
      githubUrl: 'https://github.com/martinpercu',
      size: 42
    },
    {
      title: 'App Colored N°5',
      description: 'Random lsd qsdf klken  work using all my love',
      year: 2018,
      image: 'https://picsum.photos/500/500?r=25',
      techs: ['html', 'java', 'css'],
      frontend: true,
      backend: true,
      githubUrl: 'https://github.com/martinpercu',
      size: 21
    },
  ];

  constructor() {
  }

  ngOnInit() {
    this.works.set(this.initialWorks);
  }


  frontEnd() {
    this.resetAll();
    this.works.update((works) => works.filter(work => work.frontend));
  }
  backEnd() {
    // this.resetAll();
    this.works.update((works) => this.initialWorks.filter(work => work.backend));
  }

  resetAll() {
    this.works.set(this.initialWorks)
  }

  time() {
    this.works.set(this.works().sort((w2, w1) => {
      return w1.year - w2.year;
    }));
    console.log(this.works());
  }

  size() {
    this.works.set(this.works().sort((w2, w1) => {
      return w1.size - w2.size;
    }));
    console.log(this.works());
  }

  test() {
    console.log(this.initialWorks);

  }

}
