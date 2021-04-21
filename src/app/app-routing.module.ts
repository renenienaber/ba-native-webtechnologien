import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutComponent} from './about/about.component';
import {VibrationComponent} from './technologies/vibration/vibration.component';
import {FeatureDetectorComponent} from './feature-detector/feature-detector.component';


const routes: Routes = [
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'vibration-api',
    component: VibrationComponent
  },
  {
    path: 'feature-detector',
    component: FeatureDetectorComponent
  },
  // fallback component - needs to be last one
  {
    path: '**',
    redirectTo: '/about',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
