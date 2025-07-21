import { Routes } from '@angular/router';

// import { WorkComponent } from './domains/works/components/work/work.component'
import { WorkContainerComponent } from '@works/pages/work-container/work-container.component';
import { BodyComponent } from '@body/body.component';
import { ProjectsComponent } from '@projects/pages/projects/projects.component';
import { ChatComponent } from '@chat/chat.component';
import { Chat2Component } from '@chat2/chat2.component';
import { Chat3Component } from '@chat3/chat3.component';
import { ResumePdfComponent } from './domains/resume-pdf/resume-pdf.component';
import { ProjectsIaComponent } from '@projects-ia/pages/projects-ia/projects-ia.component';
import { AcutePdfComponent } from './domains/acute-pdf/acute-pdf.component';


export const routes: Routes = [
  {
    path: 'ia',
    component: ProjectsIaComponent
  },
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
  {
    path: 'chat2',
    component: Chat2Component
  },
  {
    path: 'chat3',
    component: Chat3Component
  },
  {
    path: 'resume',
    component: ResumePdfComponent
  },
  {
    path: 'acute',
    component: AcutePdfComponent
  },
];
