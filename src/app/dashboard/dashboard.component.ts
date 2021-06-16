import { Component, OnInit } from '@angular/core';
import {Technology} from '../technologies/technology';
import {WEB_APP_MANIFEST} from '../technologies/web-app-manifest/web-app-manifest.component';
import {SERVICE_WORKER} from '../technologies/service-worker/service-worker.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  basicPWA: Technology[] = [WEB_APP_MANIFEST, SERVICE_WORKER];
  constructor() { }

  ngOnInit(): void {
  }

}
