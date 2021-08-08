import { Component } from '@angular/core';
import {Technology} from '../../technology';
import {TechnologyComponent} from '../../technology.component';

@Component({
  selector: 'app-payment-request',
  templateUrl: './payment-request.component.html'
})
export class PaymentRequestComponent extends TechnologyComponent {
  technology: Technology = PAYMENT_REQUEST;
}

export const PAYMENT_REQUEST: Technology = {
  name: 'Payment Request API',
  description: 'Ermöglicht es Webseiten, die physische oder digitale Waren verkuafen, Zahlungsarten zu verwenden, während der Zahlungsfluss zwischen Händler und Benutzer durch den Browser erleichtert wird.',
  featureDetections: [
    {
      apiObject: 'window.PaymentRequest',
      detection: 'PaymentRequest' in window,
    },
  ],
  references: [
    { name: 'Spezifikation', link: 'https://www.w3.org/TR/payment-request/' },
  ],
  icon: 'payment',
  routerLink: 'payment-request'
};
