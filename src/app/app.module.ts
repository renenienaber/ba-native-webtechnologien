import {RouterModule, Routes} from '@angular/router';
import {CategoriesComponent} from './dashboard/categories/categories.component';
import {DEMO_ROUTES, DemoModule} from './demo.module';
import {NgModule} from '@angular/core';
import {CaniuseEmbedComponent} from './caniuse-embed/caniuse-embed.component';
import {SharedModule} from './shared.module';
import {AppComponent} from './app.component';
import {ServiceWorkerModule} from '@angular/service-worker';
import {NavComponent} from './nav/nav.component';
import {AboutComponent} from './about/about.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {environment} from '../environments/environment';


const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'technology',
    children: DEMO_ROUTES
  },
  // fallback component - needs to be last one
  {
    path: '**',
    redirectTo: '/dashboard',
  },
];

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    NavComponent,
    DashboardComponent,
    CategoriesComponent,
    CaniuseEmbedComponent,
  ],
  imports: [
    RouterModule.forRoot(routes),
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production}),
    SharedModule,
    DemoModule,
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
