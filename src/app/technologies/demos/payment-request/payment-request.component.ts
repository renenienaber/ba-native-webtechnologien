import { Component } from '@angular/core';
import {TechnologyDemoComponent} from '../../technology-demo.component';

@Component({
  selector: 'app-payment-request',
  templateUrl: './payment-request.component.html'
})
export class PaymentRequestComponent extends TechnologyDemoComponent {
  details: PaymentDetailsInit = {
    id: 'auftrag-123',
    displayItems: [
      {
        label: 'Schuhe',
        amount: { currency: 'EUR', value: '55.00' },
      },
      {
        label: 'Hose',
        amount: { currency: 'EUR', value: '5.00' },
      },
      {
        label: 'Versand',
        amount: { currency: 'EUR', value: '5.00' },
      },
    ],
    total: {
      label: 'Summe',
      amount: { currency: 'EUR', value: '10.01' },
    },
  };

  onShowRequest(): void {
    if ('PaymentRequest' in window) {
      const methodData: PaymentMethodData[] = [
        {
          supportedMethods: 'basic-card',
          data: {
            supportedNetworks: ['visa', 'mastercard'],
          },
        },
      ];

      const request = new PaymentRequest(methodData, this.details);
      request.canMakePayment().then(canMake => {
        if (canMake) {
          request.show().then(
            res => console.log(res),
            err => this.showError(err)
          );
        } else {
          this.showError('Eine Zahlung kann mit diesen Parametern in dieser Ausführungsumgebung nicht ausgeführt werden.');
        }
      }, err => this.showError(err));
    } else {
      this.showNoSupportError('window.PaymentRequest');
    }
  }

}
