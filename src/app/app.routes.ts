import { Routes } from '@angular/router';

// import { WorkComponent } from './domains/works/components/work/work.component'
import { WorkContainerComponent } from '@works/pages/work-container/work-container.component';
import { BodyComponent } from '@body/body.component';
import { ProjectsComponent } from '@projects/pages/projects/projects.component';
import { ChatComponent } from '@chat/chat.component'


export const routes: Routes = [
  {
    path: 'works',
    component: WorkContainerComponent
  },
  {
    path: '',
    component: BodyComponent
  },
  {
    path: 'project',
    component: ProjectsComponent
  },
  {
    path: 'chat',
    component: ChatComponent
  },
];
