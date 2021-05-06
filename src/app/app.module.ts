import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { AboutComponent } from './about/about.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { VibrationComponent } from './technologies/vibration/vibration.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import { DemoFrameComponent } from './demo-frame/demo-frame.component';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { GeolocationComponent } from './technologies/geolocation/geolocation.component';
import { NotificationComponent } from './technologies/notification/notification.component';
import { WebAppManifestComponent } from './technologies/web-app-manifest/web-app-manifest.component';
import { ServiceWorkerComponent } from './technologies/service-worker/service-worker.component';
import { DeviceOrientationComponent } from './technologies/device-orientation/device-orientation.component';
import { OrientationSensorComponent } from './technologies/orientation-sensor/orientation-sensor.component';
import {MatTabsModule} from '@angular/material/tabs';
import { OrientationSensorPolyfillComponent } from './technologies/orientation-sensor-polyfill/orientation-sensor-polyfill.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AboutComponent,
    VibrationComponent,
    DemoFrameComponent,
    GeolocationComponent,
    NotificationComponent,
    WebAppManifestComponent,
    ServiceWorkerComponent,
    DeviceOrientationComponent,
    OrientationSensorComponent,
    OrientationSensorPolyfillComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production}),
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatCardModule,
    MatSnackBarModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
