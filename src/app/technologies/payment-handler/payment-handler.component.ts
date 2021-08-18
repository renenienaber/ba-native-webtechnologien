import { Component } from '@angular/core';
import {Technology} from '../../models/technology';
import {TechnologyComponent} from '../technology.component';
import {isObjectInServiceWorkerRegistration} from '../functions';


@Component({
  selector: 'app-payment-handler',
  templateUrl: './payment-handler.component.html'
})
export class PaymentHandlerComponent extends TechnologyComponent {
  technology: Technology = PAYMENT_HANDLER;
}

export const PAYMENT_HANDLER: Technology = {
  name: 'Payment Handler API',
  description: 'Erlaubt es Webanwendungen, Zahlungsanfragen von Benutzern zu bearbeiten, sodass sie eigenständige Zahlungsanwendungen darstellen können.',
  featureDetections: [
    {
      apiObject: 'ServiceWorkerRegistration.paymentManager',
      detection: isObjectInServiceWorkerRegistration('paymentManager')
    },
  ],
  references: [
    { name: 'Spezifikation', link: 'https://www.w3.org/TR/payment-handler/' },
  ],
  icon: 'account_balance_wallet',
  routerLink: 'payment-handler'
};
