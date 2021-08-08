import { Component } from '@angular/core';
import {TechnologyComponent} from '../../technology.component';
import {Technology} from '../../technology';

@Component({
  selector: 'app-contact-picker',
  templateUrl: './contact-picker.component.html'
})
export class ContactPickerComponent extends TechnologyComponent {
  technology: Technology = CONTACT_PICKER;
}

export const CONTACT_PICKER: Technology = {
  name: 'Contact Picker API',
  description: 'Ermöglicht den Zugriff auf Informationen zu den eingespeicherten Kontakten des Benutzers.',
  featureDetections: [
    {
      apiObject: 'navigator.contacts',
      detection: 'contacts' in navigator,
    },
  ],
  references: [
    { name: 'Spezifikation', link: 'https://wicg.github.io/contact-api/spec/' },
  ],
  icon: 'contact_page',
  routerLink: 'contact-picker'
};
