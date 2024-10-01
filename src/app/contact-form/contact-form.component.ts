import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Message } from '../models/message.model';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [FormsModule, RouterLink, ButtonModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent {

  newMessage: Message = {
    firstname: "",
    lastname: "",
    email: "",
    content: ""
  };

  onSubmit() {
    console.log('Formulaire envoyé oh yeahhh');
}

}
