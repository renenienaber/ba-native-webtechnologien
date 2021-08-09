import { Component } from '@angular/core';
import {Technology} from '../../technology';
import {TechnologyComponent} from '../../technology.component';
import {isObjectInHtmlElement} from '../../functions';

@Component({
  selector: 'app-picture-in-picture',
  templateUrl: './picture-in-picture.component.html'
})
export class PictureInPictureComponent extends TechnologyComponent {
  technology: Technology = PICTURE_IN_PICTURE;
}

export const PICTURE_IN_PICTURE: Technology = {
  name: 'Picture-in-Picture',
  description: 'Definiert APIs, um Medien im Bild-im-Bild-Format darzustellen, sodass sie vom Benutzer auch dann konsumiert werden können, während sie mit anderen Inhalten, Webseiten oder Anwendungen des Endgerätes interagieren.',
  featureDetections: [
    {
      apiObject: 'HTMLVideoElement.requestPictureInPicture()',
      detection: isObjectInHtmlElement('video', 'requestPictureInPicture'),
    },
    {
      apiObject: 'document.exitPictureInPicture()',
      detection: 'exitPictureInPicture' in document
    },
    {
      apiObject: 'document.pictureInPictureEnabled',
      detection: 'pictureInPictureEnabled' in document
    }
  ],
  references: [
    { name: 'Spezifikation', link: 'https://www.w3.org/TR/picture-in-picture/' },
  ],
  icon: 'picture_in_picture_alt',
  routerLink: 'picture-in-picture'
};
