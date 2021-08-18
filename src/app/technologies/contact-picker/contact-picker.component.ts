import { Component } from '@angular/core';
import {TechnologyComponent} from '../technology.component';
import {Technology} from '../../models/technology';
import {CONTACT_PICKER} from '../technologies';

@Component({
  selector: 'app-contact-picker',
  templateUrl: './contact-picker.component.html'
})
export class ContactPickerComponent extends TechnologyComponent {
  technology: Technology = CONTACT_PICKER;
}


