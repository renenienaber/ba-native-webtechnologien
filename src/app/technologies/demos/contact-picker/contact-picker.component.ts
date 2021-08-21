import {Component, OnInit} from '@angular/core';
import {TechnologyDemoComponent} from '../../technology-demo.component';

@Component({
  selector: 'app-contact-picker',
  templateUrl: './contact-picker.component.html',
  styleUrls: ['./contact-picker.component.css']
})
export class ContactPickerComponent extends TechnologyDemoComponent implements OnInit {
  isSupported = ('contacts' in navigator);

  possibleContactProperties = [
    'address',
    'email',
    'icon',
    'name',
    'tel',
  ].map(e => ({ property: e, enabled: false, checked: false }));
  multiple = false;
  result;

  ngOnInit(): void {
    if (this.isSupported) {
      this.validateAvailableProperties();
    }
  }

  private validateAvailableProperties(): void {
    // @ts-ignore
    navigator.contacts.getProperties()
      .then(availableProperties => {
        (availableProperties as string[]).forEach(availableProperty => {
          this.possibleContactProperties.filter(e => e.property === availableProperty).forEach(assertedProperty => {
            assertedProperty.enabled = true;
          });
        });
      });
  }

  selectContacts(): void {
    if (this.isSupported) {
      const properties = this.possibleContactProperties.filter(p => p.checked === true).map(p => p.property);
      if (properties.length > 0) {
        // @ts-ignore
        navigator.contacts.select(properties, { multiple: this.multiple })
          .then(res => this.result = res)
          .catch(err => this.showError(err));
      } else {
        this.showError('Bitte mindestens eine Kontakt-Eigenschaft auswählen!');
      }
    } else {
      this.showNoSupportError('navigator.contacts');
    }
  }

}
