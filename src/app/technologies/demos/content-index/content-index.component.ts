import {Component, OnInit} from '@angular/core';
import {TechnologyDemoComponent} from '../../technology-demo.component';
import {TECHNOLOGIES} from '../../../shared/functions';

@Component({
  selector: 'app-content-index',
  templateUrl: './content-index.component.html',
})
export class ContentIndexComponent extends TechnologyDemoComponent implements OnInit {
  registration: ServiceWorkerRegistration;
  isSupported = false;

  allContents: any[] = [];
  predefinedContentDtos: ContentIndexElementDto[] = [
    {
      id: 'dashboard',
      url: './dashboard',
      title: 'Dashboard',
      description: 'Eine Übersicht über alle nativen Webtechnologien',
    },
    {
      id: 'about',
      url: './about',
      title: 'Informationen',
      description: 'Informationen zu dieser Anwendung',
    },
    ...TECHNOLOGIES.map(t => ({
      id: t.routerLink,
      url: `./technology/${t.routerLink}`,
      title: t.name,
      description: t.description
    }))
  ];

  newContentDto: ContentIndexElementDto;

  ngOnInit(): void {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.ready.then(res => {
        this.registration = res;
        if ('index' in this.registration) {
          this.isSupported = true;
          this.updateContents();
        }
      });
    }
  }

  private updateContents(): void {
    // @ts-ignore
    this.registration.index.getAll()
      .then(indexContent => this.allContents = indexContent)
      .catch(err => this.showError(err));
  }

  onSelectionChanged(contentIndexElementDto: ContentIndexElementDto): void {
    this.newContentDto = { ...contentIndexElementDto };
  }

  addToIndex(): void {
    if (this.registration) {
      if (this.isSupported) {
        // @ts-ignore
        this.registration.index.add({
          id: this.newContentDto.id,
          url: this.newContentDto.url,
          title: this.newContentDto.title,
          description: this.newContentDto.description,
          icons: [{
            src: './assets/icons/icon-96x96.png',
            sizes: '96x96',
            type: 'image/png'
          }],
        }).then(() => this.updateContents())
          .catch(err => this.showError(err));
      } else {
        this.showNoSupportError('ServiceWorkerRegistration.index');
      }
    } else {
      this.showError('Es wurde kein Service Worker registriert. Bitte die App installieren und noch einmal versuchen.');
    }
  }

  onRemoveContent(content: any): void {
    // @ts-ignore
    this.registration.index.delete(content.id)
      .then(() => this.updateContents())
      .catch(err => this.showError(err));
  }
}

interface ContentIndexElementDto {
  id: string;
  url: string;
  title: string;
  description: string;
}
