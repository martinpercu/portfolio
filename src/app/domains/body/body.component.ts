import { Component, HostBinding, signal, effect, OnChanges } from '@angular/core';

import { WorkContainerComponent } from '@works/pages/work-container/work-container.component';

import { HeaderComponent } from '@header/header.component';
import { TechsComponent } from '@techs/techs.component';
import { ProjectsComponent } from '@projects/pages/projects/projects.component';
import { MyselfComponent } from '@myself/pages/myself/myself.component';
import { AboutComponent } from '@about/about.component';
import { FooterComponent } from '@footer/footer.component';

import { IconsModule } from '@icons/icon.module';

// import { Navigation } from '@angular/router';

// import {navigate} from '@angular/core';


@Component({
  selector: 'app-body',
  standalone: true,
  imports: [WorkContainerComponent, HeaderComponent, TechsComponent, ProjectsComponent, MyselfComponent, IconsModule, AboutComponent, FooterComponent],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {

  darkMode = signal<boolean>(
    JSON.parse(window.localStorage.getItem('darkMode') ?? 'false')
  );


  @HostBinding('class.dark') get mode() {
    return this.darkMode();
  }

  constructor() {
    effect(() => {
      window.localStorage.setItem('darkMode', JSON.stringify(this.darkMode()));
    });
  }

  // ngOnChanges() {
  //   window.localStorage.setItem('darkMode', JSON.stringify(this.darkMode()));
  // }

  // clickNav(param: any) {
  //   this.navigate(param);
  // }




}
