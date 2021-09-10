import {AfterViewInit, Component, OnInit} from '@angular/core';
import {TechnologyDemoComponent} from '../../technology-demo.component';

@Component({
  selector: 'app-web-speech',
  templateUrl: './web-speech.component.html'
})
export class WebSpeechComponent extends TechnologyDemoComponent implements OnInit {
  private recognition: any;
  recognitionLang = 'de-DE';
  recognitionResult = '';
  interimResult = '';
  recognitionActive = false;

  outputText = '';
  voices: SpeechSynthesisVoice[] = [];
  selectedVoice: SpeechSynthesisVoice;

  ngOnInit() {
    if ('speechSynthesis' in window) {
      this.loadVoices();
    }
  }

  initAndStartRecognition(): void {
    if ('SpeechRecognition' in window) {
      this.initRecognition();

      this.recognitionResult = '';
      this.recognition.start();
    } else {
      this.showNoSupportError('window.SpeechRecognition');
    }
  }

  private initRecognition(): void {
    // @ts-ignore
    this.recognition = new webkitSpeechRecognition();
    this.recognition.continuous = true;
    this.recognition.interimResults = true;
    this.recognition.lang = this.recognitionLang;

    this.recognition.addEventListener('start', () => this.recognitionActive = true);
    this.recognition.addEventListener('end', () => this.recognitionActive = false);

    this.recognition.addEventListener('result', e => {
      this.interimResult = '';
      for (let i = e.resultIndex; i < e.results.length; ++i) {
        if (e.results[i].isFinal) {
          this.recognitionResult += e.results[i][0].transcript;
        } else {
          this.interimResult += e.results[i][0].transcript;
        }
      }
    });
  }

  stopRecognition(): void {
    this.recognition.stop();
  }

  loadVoices(): void {
    if ('speechSynthesis' in window) {
      this.voices = window.speechSynthesis.getVoices();
      this.voices.forEach(e => {
        if (e.default) {
          this.selectedVoice = e;
        }
      });
    } else {
      this.showNoSupportError('window.speechSynthesis');
    }
  }

  synthSpeak(): void {
    if ('speechSynthesis' in window) {
      const synth = window.speechSynthesis;
      const utterance = new SpeechSynthesisUtterance(this.outputText);
      utterance.voice = this.selectedVoice;
      synth.speak(utterance);
    } else {
      this.showNoSupportError('window.speechSynthesis');
    }
  }
}
