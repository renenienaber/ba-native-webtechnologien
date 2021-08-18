import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {Technology} from '../models/technology';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-demo-frame',
  templateUrl: './demo-frame.component.html',
  styleUrls: ['./demo-frame.component.css']
})
export class DemoFrameComponent implements OnInit {
  @ViewChild('content', { read: ElementRef, static: true })
  content: ElementRef;

  @Input()
  technology!: Technology;

  hasContent = false;

  constructor(private matSnackBar: MatSnackBar) {}

  ngOnInit() {
    this.hasContent = !!this.content.nativeElement.innerHTML;
  }

  openErrorSnackBar(message: string) {
    this.matSnackBar.open(message, 'Verstanden');
  }
}
