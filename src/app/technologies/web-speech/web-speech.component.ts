import { Component } from '@angular/core';
import {TechnologyComponent} from '../technology.component';
import {Technology} from '../technology';

@Component({
  selector: 'app-web-speech',
  templateUrl: './web-speech.component.html'
})
export class WebSpeechComponent extends TechnologyComponent {
  technology: Technology = WEB_SPEECH;
}

export const WEB_SPEECH: Technology = {
  name: 'Web Speech API',
  description: 'Ermöglicht Spracheingabe- und Text-to-Speech-Funktionen, welche von der Spracherkennungs- und -syntheseimplementation der Ausführungsumgebung unabhängig sind.',
  featureDetections: [
    {
      apiObject: 'window.SpeechRecognition',
      detection: 'SpeechRecognition' in window,
    },
    {
      apiObject: 'window.speechSynthesis',
      detection: 'speechSynthesis' in window,
    },
  ],
  references: [
    { name: 'Spezifikation', link: 'https://wicg.github.io/speech-api/' },
  ],
  icon: 'record_voice_over',
  routerLink: 'web-speech'
};
