import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutComponent} from './technologies/about/about.component';


const routes: Routes = [
  {
    path: 'about',
    component: AboutComponent
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
