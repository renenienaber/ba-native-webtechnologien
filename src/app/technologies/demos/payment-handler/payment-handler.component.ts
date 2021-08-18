import { Component } from '@angular/core';
import {Technology} from '../../../models/technology';
import {TechnologyComponent} from '../../technology.component';
import {PAYMENT_HANDLER} from '../../technologies';


@Component({
  selector: 'app-payment-handler',
  templateUrl: './payment-handler.component.html'
})
export class PaymentHandlerComponent extends TechnologyComponent {
  technology: Technology = PAYMENT_HANDLER;
}
