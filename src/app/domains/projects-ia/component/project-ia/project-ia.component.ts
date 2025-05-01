import { Component, Input } from '@angular/core';

import { Project_IA } from '@models/project_ia.model';


import { IconsModule } from '@icons/icon.module';

@Component({
  selector: 'app-project-ia',
  standalone: true,
  imports: [IconsModule],
  templateUrl: './project-ia.component.html',
  styleUrl: './project-ia.component.css'
})
export class ProjectIaComponent {
  @Input({required: true}) project_ia!: Project_IA;




  choiceNav: string = 'description';

  showExtraInfo: boolean = false;


  // constructor() {
  //   this.choiceNav = 'description'
  // }

  setTheChoice(choice: string) {
    console.log(choice);
    this.choiceNav = choice
  };

  openExtraInfo() {
    console.log(this.showExtraInfo);

    this.showExtraInfo = true;
    console.log(this.showExtraInfo);
  };


  closeExtraInfo() {
    console.log("CLOSEEE   ==>" + this.showExtraInfo);

    this.showExtraInfo = false;
    console.log(this.showExtraInfo);
  };

  outsideBoxClick() {
    console.log("OUT OUT   ==>" + this.showExtraInfo);

    this.showExtraInfo = false;
    console.log(this.showExtraInfo);
  }

  doNothing() {
    console.log('sdfsdfsdf');
    setTimeout(() => {
      console.log('1 second passed');
      this.showExtraInfo = true;
    }, 1);
  }

}
