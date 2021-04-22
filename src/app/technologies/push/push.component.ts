import { Component } from '@angular/core';
import {Technology} from '../technology';

@Component({
  selector: 'app-push',
  templateUrl: './push.component.html',
  styleUrls: ['./push.component.css']
})
export class PushComponent {}

export const PUSH_API: Technology = {
  name: 'Push API',
  description: 'Gibt Webanwendungen die Möglichkeit, von einem Server eingehende Nachrichten zu empfangen, auch wenn die Anwendung nicht im Vordergrund geöffnet ist.',
  references: [
    { name: 'Spezifikation', link: 'https://www.w3.org/TR/push-api/' },
    { name: 'CanIUse', link: 'https://caniuse.com/push-api' },
    { name: 'Mozilla Developer Network', link: 'https://developer.mozilla.org/en-US/docs/Web/API/Push_API' },
  ],
  icon: 'tap_and_play',
  routerLink: 'push-api'
};
