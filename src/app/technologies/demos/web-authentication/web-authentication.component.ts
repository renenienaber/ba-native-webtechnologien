import { Component } from '@angular/core';
import {TechnologyDemoComponent} from '../../technology-demo.component';

@Component({
  selector: 'app-web-authentication',
  templateUrl: './web-authentication.component.html',
  styleUrls: ['./web-authentication.component.css']
})
export class WebAuthenticationComponent extends TechnologyDemoComponent {
  publicKey: PublicKeyCredentialCreationOptions = {
    // random, cryptographically secure, at least 16 bytes, sent from server
    challenge: new Uint8Array(16),
    // relying party
    rp: {
      name: 'Awesome Corp', // sample relying party
    },
    user: {
      id: new Uint8Array(16),
      name: 'username@beispiel.de',
      displayName: 'Max Mustermann',
    },
    authenticatorSelection: { userVerification: 'preferred' },
    attestation: 'direct',
    pubKeyCredParams: [
      {
        type: 'public-key',
        alg: -7, // "ES256" IANA COSE Algorithms registry
      },
    ],
  };

  cred: PublicKeyCredential;

  createCredential(): void {
    navigator.credentials.create({ publicKey: this.publicKey })
      .then(res => {
        // Send data to relying party's servers
        this.cred = res as PublicKeyCredential;
        this.showError('Public Key wurde erstellt. Es würde auf einem Server hinterlegt werden. Zur Demonstration wird er hier temporär gespeichert');
      })
      .catch(err => this.showError(err));
  }
}
