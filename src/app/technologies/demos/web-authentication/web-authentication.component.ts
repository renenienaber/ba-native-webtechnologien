import { Component } from '@angular/core';
import {TechnologyDemoComponent} from '../../technology-demo.component';

@Component({
  selector: 'app-web-authentication',
  templateUrl: './web-authentication.component.html',
  styleUrls: ['./web-authentication.component.css']
})
export class WebAuthenticationComponent extends TechnologyDemoComponent {
  createPublicKey: PublicKeyCredentialCreationOptions = {
    // random, cryptographically secure, at least 16 bytes, sent from server
    challenge: new Uint8Array(16),
    // relying party
    rp: {
      name: 'Demo Corp', // sample relying party
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

  tempCredential: PublicKeyCredential;

  private isSupported(): boolean {
    if ('PublicKeyCredential' in window) {
      return true;
    } else {
      this.showNoSupportError('window.PublicKeyCredential');
      return false;
    }
  }

  createCredential(): void {
    if (this.isSupported()) {
      navigator.credentials.create({ publicKey: this.createPublicKey })
        .then(res => {
          // Send data to relying party's servers
          this.tempCredential = res as PublicKeyCredential;
          this.showError('Public Key wurde erstellt. Es würde auf einem Server hinterlegt werden. Zur Demonstration wird er hier temporär gespeichert');
        })
        .catch(err => this.showError(err));
    }
  }

  getCredential(): void {
    if (this.isSupported()) {
      const requestPublicKey: PublicKeyCredentialRequestOptions = {
        // random, cryptographically secure, at least 16 bytes
        challenge: new Uint8Array(16),
        allowCredentials: [
          {
            type: 'public-key',
            id: this.tempCredential.rawId,
          },
        ],
      };
      navigator.credentials.get({ publicKey: requestPublicKey })
        .then(() => this.showError('Daten wurden erfolgreich validiert. Authentifizierung erfolgreich.'))
        .catch(err => this.showError(err));
    }
  }
}
