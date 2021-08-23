import { Component } from '@angular/core';
import {TechnologyDemoComponent} from '../../technology-demo.component';

@Component({
  selector: 'app-network-information',
  templateUrl: './network-information.component.html',
  styleUrls: ['./network-information.component.css']
})
export class NetworkInformationComponent extends TechnologyDemoComponent {
  networkInformation;

  getNetworkInformation(): void {
    if ('connection' in navigator) {
      // @ts-ignore
      this.networkInformation = navigator.connection;
    } else {
      this.showNoSupportError('navigator.connection');
    }
  }
}
