import { Injectable } from '@angular/core';
import emailjs from '@emailjs/browser';

@Injectable({
  providedIn: 'root'
})
export class EmailjsService {

  form: any;
  client: any;

  constructor() {
  }

  async sendEmailConctactInfo(form: any) {
    emailjs.init('WBAY4V6yXv5MXO115');
    console.log(form);
    let response = await emailjs.send('service_4wbv4ud', 'template_n5608jq', {
      firstname: form.firstname,
      client_email: form.email,
      text: form.text,
      budget: form.budget,
      serviceDevelopment: form.serviceDevelopment,
      serviceDesign: form.serviceDesign,
      serviceWebMigration: form.serviceWebMigration,
      serviceNotsure: form.serviceNotsure,
    });
    console.log(response);
    if(response) {
      this.sendSecondEmail(form)
    }
  };

  async sendSecondEmail(form: any) {
    console.log(form);;
    let response2 = await emailjs.send('service_4wbv4ud', 'template_tauntsp', {
      firstname: form.firstname,
      client_email: form.email
    });
    console.log(response2);
  }



}
