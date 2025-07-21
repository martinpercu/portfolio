import { Component, Input, inject, HostBinding } from '@angular/core';

import { Work } from '@models/work.model';

import { IconsModule } from '@icons/icon.module';



@Component({
  selector: 'app-work',
  standalone: true,
  imports: [IconsModule],
  templateUrl: './work.component.html',
  styleUrl: './work.component.css'
})
export class WorkComponent {
  @Input({required: true}) work!: Work;


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
