import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-caniuse-embed',
  templateUrl: './caniuse-embed.component.html',
  styleUrls: ['./caniuse-embed.component.css']
})
export class CaniuseEmbedComponent implements OnInit {
  @Input()
  feature!: string;
  periods = 'future_1,current,past_1,past_2';
  accessibleColours = false;

  constructor() {}

  loaded = false;

  ngOnInit(): void {}
}
