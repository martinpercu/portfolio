import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { RouterOutlet } from '@angular/router';

import { provideHttpClient, withFetch } from '@angular/common/http';

import { firebaseConfig } from '@env/environment';

import { initializeApp, provideFirebaseApp } from '@angular/fire/app';


import { provideStorage, getStorage } from '@angular/fire/storage';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';



import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withFetch()),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideStorage(() => getStorage()),
    { provide: FIREBASE_OPTIONS, useValue: firebaseConfig },
  ]
};
