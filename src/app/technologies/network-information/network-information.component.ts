import { Component } from '@angular/core';
import {TechnologyComponent} from '../technology.component';
import {Technology} from '../../models/technology';
import {NETWORK_INFORMATION} from '../technologies';

@Component({
  selector: 'app-network-information',
  templateUrl: './network-information.component.html',
})
export class NetworkInformationComponent extends TechnologyComponent {
  technology: Technology = NETWORK_INFORMATION;
}
