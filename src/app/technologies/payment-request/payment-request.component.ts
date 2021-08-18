import { Component } from '@angular/core';
import {Technology} from '../../models/technology';
import {TechnologyComponent} from '../technology.component';
import {PAYMENT_REQUEST} from '../technologies';

@Component({
  selector: 'app-payment-request',
  templateUrl: './payment-request.component.html'
})
export class PaymentRequestComponent extends TechnologyComponent {
  technology: Technology = PAYMENT_REQUEST;
}
