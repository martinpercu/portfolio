import { Component, signal, Input, WritableSignal } from '@angular/core';

import { Work } from '@models/work.model';
import { WorkComponent } from "@works/components/work/work.component";

import { images } from "@works/images/images";
import { workslist } from "@works/workslist";



@Component({
    selector: 'app-work-container',
    standalone: true,
    templateUrl: './work-container.component.html',
    imports: [WorkComponent]
})
export class WorkContainerComponent {

  imageUrl = images.IMAGE_URL;

  initlist = images;

  // @Input({required: true}) callStrong!: string;

  // initialWorks = signal<Work[]>([]);

  works = signal<Work[]>([]);

  initialWorks: Work[] = workslist;

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
    this.resetAll();
    this.works.update((works) => works.filter(work => work.backend));
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
    console.log(this.works());
  }

  python() {
    this.resetAll();
    this.works.update((works) => works.filter(work => work.techs.includes('python')));
  }

}
