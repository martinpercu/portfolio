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


}
