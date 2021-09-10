import {AfterViewInit, Component, ElementRef, Inject, ViewChild} from '@angular/core';
import {TechnologyDemoComponent} from '../../technology-demo.component';
import {DOCUMENT} from '@angular/common';

@Component({
  selector: 'app-webotp',
  templateUrl: './webotp.component.html'
})
export class WebotpComponent extends TechnologyDemoComponent implements AfterViewInit {
  @ViewChild('formElement', { static: false })
  set formRef(ref: ElementRef<HTMLFormElement>) {
    this.formElement = ref.nativeElement;
  }
  @ViewChild('inputElement', { static: false })
  set inputRef(ref: ElementRef<HTMLInputElement>) {
    this.inputElement = ref.nativeElement;
  }

  private formElement: HTMLFormElement;
  private inputElement: HTMLInputElement;

  hosturl: string;
  CODE = '123456';

  private abortController: AbortController;

  constructor(@Inject(DOCUMENT) private document: Document) {
    super();
    this.hosturl = document.location.hostname;
  }

  ngAfterViewInit(): void {
    if ('OTPCredential' in window) {
      this.init();
    }
  }

  private init(): void {
    this.abortController = new AbortController();

    this.formElement.addEventListener('submit', () => this.onFormSubmit);

    const requestOptions: CredentialRequestOptions = {
      // @ts-ignore
      otp: { transport: ['sms'] },
      signal: this.abortController.signal
    };
    navigator.credentials.get(requestOptions)
      .then(otp => {
        // @ts-ignore
        const code = otp.code;

        this.showError(`SMS-OTP wurde empfangen: ${code}`);
        this.inputElement.value = code;
        this.formElement.submit();
      })
      .catch(err => this.showError(err));
  }

  private onFormSubmit(): void {
    if (this.abortController) {
      this.abortController.abort();
    }
  }
}
