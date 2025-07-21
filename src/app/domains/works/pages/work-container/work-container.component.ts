import { Component, inject } from '@angular/core';

import { Work } from '@models/work.model';
import { WorkComponent } from "@works/components/work/work.component";

import { images } from "@works/images/images";
// import { workslist } from "@works/workslist";

import { WorksService } from '@services/works.service';

import { IconsModule } from '@icons/icon.module';


@Component({
    selector: 'app-work-container',
    standalone: true,
    imports: [WorkComponent, IconsModule],
    templateUrl: './work-container.component.html',
    styleUrl: './work-container.component.css'
})
export class WorkContainerComponent {

  imageUrl = images.IMAGE_URL;

  initlist = images;

  // @Input({required: true}) callStrong!: string;

  // initialWorks = signal<Work[]>([]);

  // works = signal<Work[]>([]);

  works: Work[] = [];


  // initialWorks: Work[] = workslist;



  private worksService = inject(WorksService);

  constructor() {
    this.works = this.worksService.returnWorks();
    console.log(this.works);
  }

  // ngOnInit() {
  //   // this.works.set(this.initialWorks);
  //   this.works = this.initialWorks
  // }


}
