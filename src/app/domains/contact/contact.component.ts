import { Component, Output, EventEmitter, inject } from '@angular/core';

import { IconsModule } from '@icons/icon.module';

import { FormControl, Validators, FormGroup, ReactiveFormsModule, FormBuilder } from '@angular/forms';

import { EmailjsService } from '@services/emailjs.service';
import { InfoContact } from '@models/infoContact.model'


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [IconsModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  @Output() contactHandler = new EventEmitter();


  private formBuilder = inject(FormBuilder);
  private emailSender = inject(EmailjsService);


  formContact!: FormGroup;
  infoContact!: InfoContact;

  showConfirmation: boolean = false


  constructor() {
    this.buildForm();
  };

  close() {
    this.contactHandler.emit(false);
    this.showConfirmation = false // not need but is safer to use it
  }

  private buildForm() {
    this.formContact = this.formBuilder.group({
      fullname: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.required, Validators.email]],
      text: ['', [Validators.required, Validators.minLength(12)]],
      // serviceInteresed: ['', [Validators.required]],
      budget: [''],
      serviceDesign: [''],
      serviceDevelopment: [''],
      serviceWebMigration: [''],
      serviceNotsure: [''],
    });
  }


  async onSubmit() {
    console.log(this.formContact.valid);

    this.infoContact = this.formContact.value;
    this.infoContact.firstname = this.infoContact.fullname?.split(' ')[0];

    console.log(this.infoContact);
    console.log(this.formContact.value);

    if (this.infoContact.email && this.infoContact.fullname) {
      // const response = await this.clientService.addClient(this.client);
      // console.log(response);
      // this.navToJoined();
      this.emailSender.sendEmailConctactInfo(this.infoContact);
      this.showConfirmation = true
    }
    else {
      alert('Please fill all fields')
    }


  };



}
