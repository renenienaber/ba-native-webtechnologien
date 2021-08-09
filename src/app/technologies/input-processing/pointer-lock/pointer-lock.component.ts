import { Component } from '@angular/core';
import {Technology} from '../../technology';
import {TechnologyComponent} from '../../technology.component';
import {isObjectInHtmlElement} from '../../functions';

@Component({
  selector: 'app-pointer-lock',
  templateUrl: './pointer-lock.component.html',
  styles: [
  ]
})
export class PointerLockComponent extends TechnologyComponent {
  technology: Technology = POINTER_LOCK;
}

export const POINTER_LOCK: Technology = {
  name: 'Pointer Lock',
  description: 'Eine API, um die Darstellung des Maus-Cursors zu entfernen und diesen an ein bestimmtes Element zu binden.',
  featureDetections: [
    {
      apiObject: 'Element.requestPointerLock()',
      detection: isObjectInHtmlElement('div', 'requestPointerLock'),
    },
    {
      apiObject: 'document.exitPointerLock()',
      detection: 'exitPointerLock' in document
    },
  ],
  references: [
    { name: 'Spezifikation', link: 'https://www.w3.org/TR/pointerlock/' },
  ],
  icon: 'center_focus_weak',
  routerLink: 'pointer-lock'
};
