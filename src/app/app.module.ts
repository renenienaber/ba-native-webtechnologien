import {RouterModule, Routes} from '@angular/router';
import {CategoriesComponent} from './dashboard/categories/categories.component';
import {TECHNOLOGYPAGE_ROUTES, TechnologiesModule} from './technologies/technologies.module';
import {NgModule} from '@angular/core';
import {CaniuseEmbedComponent} from './technologies/technology-page/caniuse-embed/caniuse-embed.component';
import {SharedModule} from './shared/shared.module';
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
    children: TECHNOLOGYPAGE_ROUTES
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
    TechnologiesModule,
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
