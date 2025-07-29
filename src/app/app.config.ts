import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { RouterOutlet } from '@angular/router';

import { provideHttpClient, withFetch } from '@angular/common/http';
import { routes } from './app.routes';


import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideStorage, getStorage } from '@angular/fire/storage';
import { firebaseConfig } from '../environments/environment';



export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withFetch()),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideStorage(() => getStorage()),
  ]
};
