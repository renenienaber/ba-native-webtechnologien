import { Component } from '@angular/core';
import {Technology} from '../../models/technology';
import {TechnologyComponent} from '../technology.component';
import {POINTER_LOCK} from '../technologies';

@Component({
  selector: 'app-pointer-lock',
  templateUrl: './pointer-lock.component.html'
})
export class PointerLockComponent extends TechnologyComponent {
  technology: Technology = POINTER_LOCK;
}
