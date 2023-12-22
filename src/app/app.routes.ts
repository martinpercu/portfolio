import { Routes } from '@angular/router';

// import { WorkComponent } from './domains/works/components/work/work.component'
import { WorkContainerComponent } from '@works/pages/work-container/work-container.component'


export const routes: Routes = [
  {
    path: '',
    component: WorkContainerComponent
  },
  // {
  //   path: 'about',
  //   component: AboutComponent
  // }
];
