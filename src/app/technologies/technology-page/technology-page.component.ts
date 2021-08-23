import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Technology} from '../../models/technology';
import {MatSnackBar} from '@angular/material/snack-bar';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-technology-page',
  templateUrl: './technology-page.component.html',
  styleUrls: ['./technology-page.component.css']
})
export class TechnologyPageComponent implements OnInit {
  @ViewChild('content', { read: ElementRef, static: true })
  content: ElementRef;

  technology!: Technology;

  hasContent = false;

  constructor(private readonly activatedRoute: ActivatedRoute, private matSnackBar: MatSnackBar) {}

  ngOnInit() {
    this.hasContent = !!this.content.nativeElement.innerHTML;
    this.activatedRoute.data.subscribe(data => {
      if (data && !this.technology) {
        this.technology = data.technology;
      }
    });
  }

  openErrorSnackBar(message: string) {
    this.matSnackBar.open(message, 'OK');
  }
}
