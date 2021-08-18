import { Component } from '@angular/core';
import {Technology} from '../../models/technology';
import {TechnologyComponent} from '../technology.component';
import {PICTURE_IN_PICTURE} from '../technologies';

@Component({
  selector: 'app-picture-in-picture',
  templateUrl: './picture-in-picture.component.html'
})
export class PictureInPictureComponent extends TechnologyComponent {
  technology: Technology = PICTURE_IN_PICTURE;
}
