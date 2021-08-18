import { Component } from '@angular/core';
import {Technology} from '../../models/technology';
import {TechnologyComponent} from '../technology.component';

@Component({
  selector: 'app-webotp',
  templateUrl: './webotp.component.html'
})
export class WebotpComponent extends TechnologyComponent {
  technology: Technology = WEBOTP;
}

export const WEBOTP: Technology = {
  name: 'WebOTP API',
  description: 'Ermöglicht die Abfrage von Einmalpasswörtern (zunächst via SMS) zur Überprüfung von Anmeldedaten wie Telefonnummern oder E-Mails.',
  featureDetections: [
    {
      apiObject: 'window.OTPCredential',
      detection: 'OTPCredential' in window,
    },
  ],
  references: [
    { name: 'Spezifikation', link: 'https://wicg.github.io/web-otp/' },
  ],
  icon: 'vpn_key',
  routerLink: 'webotp'
};
