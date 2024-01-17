import { Routes } from '@angular/router';

// import { WorkComponent } from './domains/works/components/work/work.component'
import { WorkContainerComponent } from '@works/pages/work-container/work-container.component'
import { BodyComponent } from '@body/body.component'


export const routes: Routes = [
  {
    path: 'works',
    component: WorkContainerComponent
  },
  {
    path: '',
    component: BodyComponent
  }
];
